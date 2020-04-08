define(function(require) {
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var dialog = require('frm/dialog');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el : '#announce',
		data : {
			list1 : {
				"rows" : [ {
					"rn" : 1,
					"uName":"linquan",
					"name" : "林泉",
					'policeNum':"123123",
					"dept" : "省局指挥中心",
					"createNo" : "admin",
					"createTime" : "2017-12-16",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					
				},{
					"rn" : 1,
					"uName":"xjsfowe",
					"name" : "费祺涛",
					'policeNum':"324324",
					"dept" : "第一监狱",
					"createNo" : "admin",
					"createTime" : "2017-12-16",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					
				},{
					"rn" : 1,
					"uName":"kwewoijs",
					"name" : "郑小华",
					'policeNum':"423423",
					"dept" : "第二监狱",
					"createNo" : "admin",
					"createTime" : "2017-12-16",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					
				},{
					"rn" : 1,
					"uName":"dfgafsfwe",
					"name" : "江海军",
					'policeNum':"123213",
					"dept" : "第三监狱",
					"createNo" : "admin",
					"createTime" : "2017-12-16",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					
				},{
					"rn" : 1,
					"uName":"weweqwe",
					"name" : "褚宏",
					'policeNum':"435345",
					"dept" : "第四监狱",
					"createNo" : "admin",
					"createTime" : "2017-12-16",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					
				},{
					"rn" : 1,
					"uName":"srtertgd",
					"name" : "张志文",
					'policeNum':"234234",
					"dept" : "第五监狱",
					"createNo" : "admin",
					"createTime" : "2017-12-16",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					
				}],
				"total" : 10
			}
		},
		methods : {

		}
	});

	/**
	 * 加载表格
	 */
	function initTable() {
		table.init("table", {
			request : '',
			rows : 10,
			showColumns : false,
			pageList : [ 10, 20, 30, 40, 50 ],
			pageSize : 10,
			columns : [ [ {
				title : '用户名',
				field : 'uName',
				align : 'center',
				valign : 'middle',
				width : '9%'
			}, {
				title : '姓名',
				field : 'name',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}, {
				title : '警号',
				field : 'policeNum',
				align : 'center',
				valign : 'middle',
				width : '8%'
			}, {
				title : '所属单位',
				field : 'dept',
				align : 'center',
				valign : 'middle',
				width : '10%'
			},{
				title : '创建人',
				field : 'createNo',
				align : 'center',
				valign : 'middle',
				width : '8%'
			}, {
				title : '创建日期',
				field : 'createTime',
				align : 'center',
				valign : 'middle',
				width : '10%'
			},{
				title : '最近登录时间',
				field : 'loginTime',
				align : 'center',
				valign : 'middle',
				width : '12%'
			}, {
				title : '最近登录IP',
				field : 'loginIp',
				align : 'center',
				valign : 'middle',
				width : '10%'
			} ] ]
		});
		table.method('load', model.list1);
	}

	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});