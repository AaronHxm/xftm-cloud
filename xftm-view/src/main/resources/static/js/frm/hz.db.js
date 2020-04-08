/*
 * 数据库通用操作对象
 */
define(function (require) {
	/*
	 * 依赖模块引入
	 */
	var utils = require('frm/hz.utils'); // 加载辅助模块

	/*
	 * 私有属性
	 */
	var _emptyFn = function () {};	// 空函数
	var _basePath = '';				// 后端请求的URL根路径

	/*
	 * Ajax请求
	 * @param url		请求地址
	 * @param args		请求参数
	 * @param success	请求响应成功处理
	 * @param error		请求响应失败处理
	 * @param async		是否异步（默认true）
	 */
	function _ajax (url, args, success, error, async) {

		if (url.indexOf('http://') != 0 && url.indexOf('https://') != 0) {
			url = _basePath + url;
		}

		if (typeof async !== 'boolean') {
			async = true;
		}

		// 请求处理
		utils.ajax(url, args, success, error, async);
	}


	/*
	 * DB请求控制器
	 * @param options 参数对象：options = {
	 * 		"request": "请求参数对象",
	 * 		"success": "处理成功回调函数（可选），函数接受两个参数：data, result",
	 * 		"error": "处理失败回调函数（可选），函数接受两个参数：errorCode, errorMsg",
	 * 		"async": "是否异步（可选，默认异步），参数true|false"
	 * }
	 */
	function _request (method, options) {
		/*
		 * 处理缺省参数
		 */
		var success = options.success || _emptyFn;
		var error = options.error || _emptyFn;
		var async = options.async;

		// 请求地址及参数
		var url = 'dbCtrl/' + method;
		var args = {'args': JSON.stringify(options.request)};

		_ajax(url, args, 
			function (result) {
				closeShadow();
				if (result) {
					if (result.success) {
						success(result.data, result);
					} else {
						error(result.respCode, result.respMsg);
					}
				} else {
					error('', '请求失败，服务器处理错误~!');
				}
			},
			function () {
				closeShadow();
				error('', '请求失败，服务器响应超时~!');
			},
			async
		);
	}


	var shadowPanel = null;
	var timerId = null;

	/*
	 * 显示遮罩层（请求等待提示）
	 */
	function openShadow (tip) {
		timerId && clearTimeout(timerId);
		timerId = null;

		if (shadowPanel) return;

		shadowPanel = document.createElement('div');
		shadowPanel.id = 'requestShadow';
		shadowPanel.style.cssText = 'position:absolute; top:15px; left:0; width:100%; z-index:999999999;';
		shadowPanel.innerHTML = 
		'<div style="display:table; width:100%; height:100%; text-align:center;">'+
			'<div style="display:table-cell; vertical-align:middle;">'+
				'<span style="padding:10px 15px; color:#333; font-size:14px; background-color:#F2F2F2; border-radius:2px; box-shadow:0 0 5px #333;">' + tip + '</span>'+
			'</div>'+
		'</div>';
		document.body.appendChild(shadowPanel);
	}

	/*
	 * 关闭遮罩层
	 */
	function closeShadow () {
		timerId && clearTimeout(timerId);
		timerId = null;

		if (shadowPanel) {
			timerId = setTimeout(function () {
				shadowPanel && document.body.removeChild(shadowPanel);
				shadowPanel = null;
			}, 500);
		}
	}


	/*
	 * =========================================查询的控制器========================================
	 * 使用说明：
	 * 1. params参数：params数据是Array类型按"?"参数处理，是Map类型按"键值对"参数处理
	 * 2. 使用分页时返回数据格式：{"count":"", "data": [{}]}，其中count是查询的总数量，data是返回的数据
	 * 3. 未使用分页时返回数据格式：[{}]
	 * 
	 * @param options 参数对象：options = {
	 * 		"request":{
	 * 			"sql": "SQL语句（和sqlId属性必选其一，优先选择此属性，暂未开放）",
	 * 			"sqlId": "SQL语句编号（和sql属性必选）", 
	 * 			"whereId": "SQL条件编号（可选）", 
	 * 			"orderId": "SQL排序编号（可选）", 
	 * 			"params": "SQL参数集合（可选，params数据是Array类型按"?"参数处理，是Map类型按"键值对"参数处理）",
	 * 			"pageIndex": "当前第几页（可选，pageIndex和pageSize必须同时存在）",
	 * 			"pageSize": "每页显示多少行（可选，pageIndex和pageSize必须同时存在）",
	 * 			"minRow": "分页查询的最小行（可选，如果不传会根据pageIndex和pageSize自动计算）",
	 * 			"maxRow": "分页查询的最大行（可选，如果不传会根据pageIndex和pageSize自动计算）"
	 * 		},
	 * 		"success": "处理成功回调函数（可选），函数接受两个参数：data, result",
	 * 		"error": "处理失败回调函数（可选），函数接受两个参数：errorCode, errorMsg",
	 * 		"async": "是否异步（可选，默认异步），参数true|false",
	 * 		"shade": "是否显示查询的遮罩提示面板，默认fale不显示，参数:true|false"
	 * }
	 * 
	 * request对象支持单个查询对象{}也支持多个查询对象[{}]的格式
	 * 
	 * 
	 * @return 返回的data数据格式：
	 * data = [{}, ...]
	 * data = {
	 * 		"count": "查询的总数量",
	 * 		"data": "查询的数据，格式：[{}]"
	 * }
	 */
	function _query (options) {
		// 默认走"?"参数形式的处理
		var request = options.request;
		var params = null;
		var method = 'query';

		// 批量查询去第一个条件来判断，并且批量查询不支持分页
		if (utils.notArray(request)) {
			setPagingParams(request);
			params = request.params;
		} else {
			params = request[0].params;
		}

		// 根据参数对象类型判断是走"?"参数形式的处理还是"键值对"参数形式的处理
		if (params && utils.notArray(params)) {
			method = 'queryByParamKey';
		}

		options.shade && openShadow('正在查询数据...');
		_request(method, options);
	}


	/*
	 * 分页查询的控制器
	 */
	function _page (options) {
		_query(options);
	}


	/*
	 * 更新（删除）控制器（request可以为单个对象，也可以为对象数组）
	 * @param options 参数对象：options = {
	 * 		"request":[{
	 * 			"seqParams": "生成序列号参数集合,格式：[在params集合中的索引, 表名, 表字段]"
	 * 			"sqlId": "SQL语句编号（和sql属性必选）", 
	 * 			"whereId": "SQL条件编号（可选）", 
	 * 			"orderId": "SQL排序编号（可选）", 
	 * 			"params": "SQL参数或集合，格式：[] 或  [[]]",
	 * 			"paramsType": "SQL参数类型，格式{"index":"type"}（和params一起使用，可选）",
	 * 		}],
	 * 		"success": "处理成功回调函数（可选），函数接受两个参数：data, result",
	 * 		"error": "处理失败回调函数（可选），函数接受两个参数：errorCode, errorMsg",
	 * 		"async": "是否异步（可选，默认异步），参数true|false"
	 * }
	 * 
	 * paramsType类型的格式说明：{"index":"type"}
	 * 		index：params中参数在集合中的索引值，
	 * 		type: params中参数的数据类型，当类型是CLOB、BLOB数据类型的需要指定，其它类型暂时不需要
	 * 
	 * @param result = {
	 * 		"respCode": "响应码",
	 * 		"respMsg": "响应描述",
	 * 		"data": [{
	 * 				"seqList":"序列号集合，格式：[]",
	 * 				"result": "操作结果，格式：[]"
	 * 		}],
	 * 		"success": "数据库操作结果，true/false"
	 * }
	 */
	function _update (options) {
		var request = options.request;
		var params = null;
		var method = 'update';

		// 统一转换成数组
		if (utils.notArray(request)) {
			options.request = [request];
		}

		// updateByParamKey 更新
		// 1. {'key':''}
		// 2. [{'key':''},...]

		// update 更新
		// 3. ['val']
		// 4. [['val'],...]
		options.request.forEach(function (request) {
			params = request.params;

			if (params) {
				if (utils.isArray(params)) {
					if (utils.isObject(params[0])) {
						if (utils.notArray(params[0])) {
							method = 'updateByParamKey';
						}
					} else {
						request.params = [params];	// 统一格式转成4
					}
				} else {
					method = 'updateByParamKey';
					request.params = [params];	// 格式统一转成2
				}
			}
		});
		_request(method, options);

//		_request('update', _fmtUpdateOptions(options, function (params) {
//			return params[0];
//		}));
	}

	/**
	 * @param options 参数对象：options = {
	 * 		"request":{
	 * 			"serviceName": "缓存处理类的名称"
	 * 			"action": "为add、update、delete", 
	 * 			"params": "SQL参数或集合，格式：{}
	 * 		},
	 * 		"success": "处理成功回调函数（可选），函数接受两个参数：data, result",
	 * 		"error": "处理失败回调函数（可选），函数接受两个参数：errorCode, errorMsg",
	 * 		"async": "是否异步（可选，默认异步），参数true|false"
	 * }
	 */
	function _refreshCache (options) {
		_request('refreshCache',options);
	}


	/*
	 * 更新（删除）控制器（request可以为单个对象，也可以为对象数组）
	 * @param options 参数对象：options = {
	 * 		"request":[{
	 * 			"sqlId": "SQL语句编号（和sql属性必选）", 
	 * 			"whereId": "SQL条件编号（可选）", 
	 * 			"orderId": "SQL排序编号（可选）", 
	 * 			"params": "SQL参数或集合，格式：{} 或  [{}]",
	 * 		}],
	 * 		"success": "处理成功回调函数（可选），函数接受两个参数：data, result",
	 * 		"error": "处理失败回调函数（可选），函数接受两个参数：errorCode, errorMsg",
	 * 		"async": "是否异步（可选，默认异步），参数true|false"
	 * }
	 * 
	 * @param result = {
	 * 		"respCode": "响应码",
	 * 		"respMsg": "响应描述",
	 * 		"data": [{
	 * 				"seqList":"序列号集合，格式：[]",
	 * 				"result": "操作结果，格式：[]"
	 * 		}],
	 * 		"success": "数据库操作结果，true/false"
	 * }
	 */
	function _updateByParamKey (options) {
		_request('updateByParamKey', _fmtUpdateOptions(options, function (params) {
			return params;
		}));
	}


	/*
	 * 格式化查询请求的参数
	 */
	function setPagingParams (request) {
		var index = request.pageIndex;
		var size = request.pageSize;
		var minRow = null;
		var maxRow = null;

		// pageIndex和pageSize同时存在时，计算最小行和最大行
		// minRow或maxRow不存在时，将计算的值赋给minRow或maxRow
		if (utils.notNull(index) && utils.notNull(size)) {
			minRow = (index - 1) * size;
			maxRow = index * size;
			utils.isNull(request.minRow) && (request.minRow = minRow);
			utils.isNull(request.maxRow) && (request.maxRow = maxRow);
		}

		return request;
	}


	/*
	 * 格式化新增、更新、删除请求参数
	 */
	function _fmtUpdateOptions (options, getVal) {
		var request = options.request;
		var params = null;

		// 统一转换成数组
		if (utils.notArray(request)) {
			request = options.request = [request];
		}

		for(var i = 0; i < request.length; i++) {
			params = request[i].params;

			if (params && utils.notArray(getVal(params))) {
				request[i].params = [params];
			}
		}
		return options;
	}



	/*
	 * 获取序列号
	 * @param tableName		表名
	 * @param columnName 	字段名
	 * @param number		获取数量 | 回调函数
	 * 		1. 传数字则是获取序列号数量，异步还是同步取决于后面的callback函数
	 * 		2. 传方法则是表示异步获取单个序列号 
	 * @param callback 		回调函数（如果传入回调则异步请求，不传则同步）
	 * 
	 * @return 序列号 | 序列号集合
	 * 		1. 单个的返回序列号，例如：1001
	 * 		2. 多个的返回序列号集合，例如：[1001,1002,...]
	 * 
	 * 
	 * ========== 几种应用场景========== 
	 * seq = getSeq('table','column')
	 * seq = getSeq('table','column', 1);
	 * seqs = getSeq('table','column', 2);
	 * 
	 * getSeq('table','column', 1, function(seq){})
	 * getSeq('table','column', 2, function(seqs){})
	 * getSeq('table','column', function(seq){});
	 */
	function getSeq (tableName, columnName, number, callback) {
		var params = {'tableName': tableName, 'columnName': columnName};
		var reqUrl = 'seqCtrl/getSeq';
		var async = false;
		var data = null;

		// 如果number是函数则表示：异步获取单个序列号
		if (typeof number == 'function') {
			callback = number;
			number = 1;
		}

		// 如果number数值大于1则表示：获取序列号集合
		if (typeof number == 'number' && number > 1) {
			params.number = number;
			reqUrl = 'seqCtrl/getSeqList';
		}

		// 如果callback是函数则表示：异步获取序列号
		if (typeof callback == 'function') {
			async = true;
		}

		_ajax(reqUrl, params, 
			function (result) {
				data = result.seq || result.seqList;
				async && callback(data, result.msg);
			},
			function (s, e) {
				async && callback(null, e);
			},
		async);

		return data;
	}



	/*
	 * 注入模块方法
	 */
	try {

		function setBasePath (url) {
			_basePath = url;
		}

		// 针对类似frame框架的模型化处理
		var hz = window.top.hz;
		var db = {};
		try {
			if (hz) {
				if (hz.db) {
					return hz.db;
				}
			} else {
				hz = window.top.hz = {};
			}
		} catch (e) {
			console.error('hz.db：引用顶层父级db对象失败...');
		}

		// 获取/创建模块并注入方法
		db.setBasePath = setBasePath;	// 设置后台数据访问的根路径
		db.ajax = _ajax;		// Ajax请求
		db.page = _page;		// 分页查询
		db.query = _query;		// 通用查询
		db.update = _update;	// 通用增、删、改
		db.updateByParamKey = _updateByParamKey;
		db.refreshCache = _refreshCache;//刷新后台redis缓存
		db.getSeq = getSeq;

		return hz.db = db;
	} catch (e) {
		console.error('初始化 --> 数据库通用操作模块失败，' + e);
	}
});