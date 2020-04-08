define(function (require) {
	var comTree = {};
	var $ = require('jquery');
	var db = require('frm/hz.db');
	var tree = require('frm/treeSelect');
	var treeUtil = require('frm/treeUtil');
	var loginUser = require('frm/loginUser');
	
	
	/*
	 * 人员*/
	function Person(){};
	Person.prototype={
		treeInit:function (params,fn,request,set){
			var inputId = params.inputId;
			db.query({
				request: request,
				success:function(data){
					var setting = {
						offSearch: true,
						key: 'name',
						diyClass: 'conditionslid',
						zindex: 100,
						expand: true,
						path: set && set.path ? set.path : '../../../libs/ztree/css/zTreeStyle/img/',
						data: {simpleData: {enable: true,pIdKey: "pid"}},
						check:{enable:false},
						callback: fn.callback
					};
					if($("#id" + inputId).length > 0){
						$("#id" + inputId).remove();
					}
					tree.init(inputId,setting,data);
					//搜索
					var timeSearch;
					$("#" + inputId).off().keyup(function(){
						var val = this.value;
						fn.callback2 && fn.callback2(val,data);
						clearTimeout(timeSearch);
						timeSearch = setTimeout(function(){
							treeUtil.searchTree(setting.key,val,"re" + inputId,data,setting);
						},500)
					});
				}
			});
		}
	}
	/*
	 * 民警树
	 * @param params 参数对象 属性: inputId -- 标签ID, deptId -- 部门编号
	 * @param callback 回调对象
	 * @param callback2 回调方法
	 */
	function _police(params,callback,callback2){
		var deptId = params.deptId;
		var cusPolice = loginUser.cusNumber == '223' ? '0' : loginUser.cusNumber;
		new Person().treeInit(params,{callback:callback,callback2:callback2 || ''},{
			sqlId:'select_comTree_police_tree',
			params:[cusPolice, deptId || '', deptId || '']
		});
	};
	/*
	 * 罪犯树
	 * @param params 参数对象 属性: inputId -- 标签ID, deptId -- 部门编号
	 * @param callback 回调对象
	 * @param callback2 回调方法
	 * */
	function _prisoner(params,callback,callback2){
		var deptId = params.deptId;
		new Person().treeInit(params,{callback:callback,callback2:callback2 || ''},{
			sqlId:'select_comTree_prisoner_tree',
			params:[loginUser.cusNumber, deptId || '', deptId || '']
		});
	};
	/*
	 * 监区部门树
	 * @param params 参数对象 属性: inputId -- 标签ID
	 * @param callback 回调对象
	 * @param callback2 回调方法
	 * */
	function _parent(params,callback,callback2){
		new Person().treeInit(params,{callback:callback,callback2:callback2 || ''},{
			sqlId:'select_comTree_parent_tree'
		});
	};
	/*
	 * 部门树
	 * @param params 参数对象 属性: inputId -- 标签ID
	 * @param callback 回调对象
	 * @param callback2 回调方法
	 * */
	function _dept(params,callback,callback2){
		new Person().treeInit(params,{callback:callback,callback2:callback2 || ''},{
			sqlId:'select_comTree_org_dept',
			params:[loginUser.cusNumber]
		});
	};
	/*
	 * 监狱 / 戒毒所
	 * @param params 参数对象 属性: inputId -- 标签ID
	 * @param callback 回调对象
	 * @param callback2 回调方法
	 * */
	function _prison(params,callback,callback2){
		new Person().treeInit(params,{callback:callback,callback2:callback2 || ''},{
			sqlId:'select_comTree_sys_org_dept_dtls'
		});
	};
	/*
	 * 其他数
	 * @param params 参数对象 属性: inputId -- 标签ID
	 * @param fn.callback 回调对象
	 * @param fn.callback2 回调方法
	 * @param request 查询配置(sqlId,whereId,params) */
	function _other(params,fn,request,setting){
		new Person().treeInit(params,fn,request,setting);
	}
	/*
	 * 发布方法
	 */
	try {
		comTree.police = _police;
		comTree.prisoner = _prisoner;
		comTree.parent = _parent;
		comTree.dept = _dept;
		comTree.other = _other;
		comTree.prison = _prison;
		return comTree;
	} catch (e) {
		console.error('初始化 --> 通用树模块失败：' + e);
	}
})