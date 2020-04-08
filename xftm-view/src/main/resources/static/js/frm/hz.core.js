/*
 * 系统框架主函数，用于自动加载子模块功能的主函数和部分依赖函数
 */
define(function(require){
	var hzUtils = require('frm/hz.utils');
	var hzEvent = require('frm/hz.event');
	var defPath = 'js/src/module/main';		// 各个子模块的主函数路径


	/*
	 * 引入各项目模块的主函数
	 * @param basePath 项目的HTTP根地址
	 * @param path 子模块JS主函数的相对地址（可选，默认是绝对路径）
	 */
	function importModules (basePath, path) {
		console.info('开始初始化子模块主函数...');

		// 根地址自动补上斜杠
		if (basePath.substring(basePath.length-1) != '/') {
			basePath += '/';
		}

		// 处理参数
		var reqURL = (basePath || '../../') + 'moduleCtrl/loadModules';
		var jsPath = path || (basePath + defPath);

		// 地址后面自动补上斜杠
		if (jsPath.substring(jsPath.length-1) != '/') {
			jsPath += '/';
		}

		// 请求后台获取模块主函数文件列表
		hzUtils.ajax(reqURL, {'path': defPath},
			function (result) {
				if (result) {
					try {
						// 容错处理，解析JSON字符串
						if (typeof result == 'string') {
							result = JSON.parse(result);
						}
					} catch (e) {
						console.error('数据解析错误，原始数据=' + result); return;
					}

					// 开始加载模块JS
					for(var name in result) {
						try {
							// 如果是相对路径则不带后缀
							require([jsPath + (path ? name : result[name])]);
						} catch (e) {
							console.error('加载子模块主函数报错，参数=' + jsPath + name);
						}
					}
				}
			},
			function (status, error) {
				console.error('获取子模块主函数列表异常：', error);
			}
		);
	}


	/*
	 * -------------------------------------- 初始化页面载入程序 -----------------------------------------
	 */
	(function () {
		var pageIndex = 1;
		/*
		 * 加载页面
		 * @param url 		页面地址
		 * @param options 	参数选项、也可以直接传ID
		 * 
		 * options = {
		 * 		id: HTML节点ID,
		 * 		style: CSS样式内容，格式：{'top':0, 'padding-left':'', 'z-index': 1, ...},
		 * 		className: 样式名,
		 * 		callback: 页面加载完成之后的回调
		 * }
		 */
		function loadPage (url, options) {
			var jqDom = $('<section style="position:static;"></section>');
			var domId = null;
			var callback = null;

			// 解析是否为ID
			if (typeof options == 'string') {
				options = {'id': options};
			}

			if (typeof options == 'function') {
				options = {'callback': options};
			}

			// 处理选项参数
			if (typeof options == 'object') {
				if (domId = (options.id || ('import_page_' + pageIndex++))) {
					if ($('#' + domId).length == 0) {
						jqDom.attr('id', domId);
					} else {
						console.error('import.page error: 页面' + url + '的容器ID重复!'); 
						return;
					}
				}

				// 回调函数
				callback = options.callback;

				// 设置样式
				jqDom.attr('class', options.className).css(options.style || {});				
			}

			// 开始加载页面
			jqDom.appendTo(document.body).load(url, function (responseText, textStatus, XMLHttpRequest) {
				jqDom.html(XMLHttpRequest.responseText);

				if (typeof callback == 'function') {
					callback(responseText, textStatus, XMLHttpRequest);
				}
			});
		}

		/*
		 * 主页加载页面插件
		 */
		hzEvent.on('import.page', function (url, options) {
			loadPage(url, options);
		});
	})();



	try {
		console.info('初始化 --> 系统框架主函数模块');
		return {
			init: importModules
		};
	} catch (e) {
		console.error('初始化 --> 系统框架主函数模块异常：', e);
	}
});
