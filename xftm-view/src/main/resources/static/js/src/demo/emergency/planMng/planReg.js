define(function(require) {
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	var datepicker = require('frm/datepicker');
	var dialog1 = null;
	var dialog2 = null;
	var dialog3 = null;
	var index1 = null;
	var index2 = null;
	var index3 = null;
	/**
	 * 创建模型
	 */
	var model = new vue({
		el : '#planMng',
		data : {
			list1 : {
				"rows" : [ {
					"rn" : 1,
					"planName":"罪犯逃脱预案",
					"planType" : "罪犯逃脱",
					"planDetail" : "罪犯逃脱预案",
					"createNo" : "李峰",
					"createTime" : "2017-12-16",
					"pushType" : "未发布",
					"auditingName" : "李某某",
					"auditingType" : "未审核",
					"auditingTime" : ""
				}, {
					"rn" : 1,
					"planName":"罪犯暴狱预案",
					"planType" : "罪犯暴狱事件",
					"planDetail" : "罪犯暴狱预案",
					"createNo" : "郭芳",
					"createTime" : "2017-12-16",
					"pushType" : "已发布",
					"auditingName" : "李某某",
					"auditingType" : "已审核",
					"auditingTime" : "2017-12-16"
				},{
					"rn" : 1,
					"planName":"狱内行凶预案",
					"planType" : "狱内行凶事件",
					"planDetail" : "狱内行凶预案",
					"createNo" : "陈东",
					"createTime" : "2017-12-16",
					"pushType" : "已发布",
					"auditingName" : "李某某",
					"auditingType" : "已审核",
					"auditingTime" : "2017-12-16"
				}],
				"total" : 5
			},
			search:{
				'time':'',
				'content':'',
				'name':'',
				'djmj':''
				
			}
		},
		methods : {
			openSearchPanel:function(){
				dialog1 = dialog.open({targetId:'search_panel',title:'查询',w:'35',h:'30',top:'2%'});
				if(!index1){
					index1 = dialog1.index;
				}
			},
			searchDb:function(){
				tip.alert("正在查询中");
				dialog.close(index1);
			},
			openAddPanel:function(){
				dialog2=dialog.open({targetId:'add_panel',title:'登记',w:'45',h:'80',top:'2%'});
				if(!index2){
					index2 = dialog2.index;
				}
			},
			closeAddPanel:function(){
				tip.alert("添加成功");
				dialog.close(index2);
			}

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
			},/* {
				title : '登记民警',
				field : 'createNo',
				align : 'center',
				valign : 'middle',
				width : '8%'
			},*/ {
				title : '预案创建时间',
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
				title : '审批民警',
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