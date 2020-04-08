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
		el : '#planMng',
		data : {
			list1 : {
				"rows" : [ {
					"rn" : 1,
					"planName":"监区火灾预案",
					"planType" : "火灾",
					"planDetail" : "监区火灾预案",
					"createNo" : "qwewrwer",
					"createTime" : "2017-12-16 10:00:00",
					"pushType" : "未发布",
					"auditingName" : "李文",
					"auditingType" : "未审核",
					"auditingTime" : ""
				}, {
					"rn" : 1,
					"planName":"罪犯失踪预案",
					"planType" : "罪犯",
					"planDetail" : "罪犯失踪预案",
					"createNo" : "qwewrwer",
					"createTime" : "2017-12-16 10:00:00",
					"pushType" : "已发布",
					"auditingName" : "李文",
					"auditingType" : "通过",
					"auditingTime" : "2017-12-16 11:00:00"
				},{
					"rn" : 1,
					"planName":"罪犯失踪预案",
					"planType" : "罪犯",
					"planDetail" : "罪犯失踪预案",
					"createNo" : "qwewrwer",
					"createTime" : "2017-12-16 10:00:00",
					"pushType" : "已发布",
					"auditingName" : "李文",
					"auditingType" : "未通过",
					"auditingTime" : "2017-12-16 11:00:00"
				}],
				"total" : 3
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
				title : '预案名称',
				field : 'planName',
				align : 'center',
				valign : 'middle',
				width : '9%'
			}, {
				title : '预案类型',
				field : 'planType',
				align : 'center',
				valign : 'middle',
				width : '8%'
			}, {
				title : '预案描述',
				field : 'planDetail',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}, {
				title : '创建人',
				field : 'createNo',
				align : 'center',
				valign : 'middle',
				width : '8%'
			}, {
				title : '创建时间',
				field : 'createTime',
				align : 'center',
				valign : 'middle',
				width : '12%'
			}, {
				title : '发布状态',
				field : 'pushType',
				align : 'center',
				valign : 'middle',
				width : '8%'
			} ,{
				title : '审批人',
				field : 'auditingName',
				align : 'center',
				valign : 'middle',
				width : '8%'
			} , {
				title : '审批状态',
				field : 'auditingType',
				align : 'center',
				valign : 'middle',
				width : '8%'
			} , {
				title : '审批时间',
				field : 'auditingTime',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}] ]
			
		});
		table.method('load', model.list1);
	}

	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});