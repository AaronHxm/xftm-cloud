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
		el : '#planPub',
		data : {
			list1 : {
				"rows" : [ {
					"rn" : 1,
					"planName":"罪犯逃脱预案",
					"planType" : "罪犯逃脱",
					"planDetail" : "罪犯逃脱预案",
					"createNo" : "李某某",
					"createTime" : "2017-12-16",
					"pushType" : "未发布",
					"auditingName" : "李某某",
					"auditingType" : "不通过",
					"auditingTime" : "2017-12-18",
					"cz" : "发布"
				}, {
					"rn" : 1,
					"planName":"罪犯暴狱预案",
					"planType" : "罪犯暴狱事件",
					"planDetail" : "罪犯暴狱预案",
					"createNo" : "郭某某",
					"createTime" : "2017-12-16",
					"pushType" : "未发布",
					"auditingName" : "李某某",
					"auditingType" : "通过",
					"auditingTime" : "2017-12-16",
					"cz" : "发布"
				},{
					"rn" : 1,
					"planName":"狱内行凶预案",
					"planType" : "狱内行凶事件",
					"planDetail" : "狱内行凶预案",
					"createNo" : "陈某某",
					"createTime" : "2017-12-16",
					"pushType" : "已发布",
					"auditingName" : "李某某",
					"auditingType" : "通过",
					"auditingTime" : "2017-12-16",
					"cz" : "发布"
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
				dialog1 = dialog.open({targetId:'search_panel',title:'查询',w:'35',h:'30',top:'0%'});
				if(!index1){
					index1 = dialog1.index;
				}
			},
			searchDb:function(){
				tip.alert("正在查询中");
				dialog.close(index1);
			},
			openEditPanel:function(row){
				var list = [];
				if(row){
					list.push({'time': row['createTime'],
		 	 				   'name': row['planName'],
		 	 				   'content': row['planDetail']});
				}else{
					list = table.method("getSelections").map(function(row){
		 	 			return {'time': row['createTime'],
		 	 					'name': row['planName'],
		 	 					'content': row['planDetail']};
		 	 		});
				}
				if(!list.length){
					tip.alert("请选择一条要修订的预案");
					return;
				}else if(list.length > 1){
					tip.alert("修订的预案不能多选");
					return;
				}
				model.search.time = list[0].time;
				model.search.name = list[0].name;
				model.search.content = list[0].content;
				handelType = "edit";
				
				
				dialog2=dialog.open({targetId:'edit_panel',title:'修订',w:'45',h:'50',top:'0%'});
				if(!index2){
					index2 = dialog2.index;
				}
			},
			closeAddPanel:function(){
				tip.confirm("是否保存修改项",function(index){
					tip.alert("修改成功");
					dialog.close(index2);
				});
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
			columns : [ [ 
				/*{
				field : 'status',
				checkbox : 'true',
					width :'3%'
				},*/{
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
			}, /*{
				title : '预案民警',
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
				title : '修订民警',
				field : 'auditingName',
				align : 'center',
				valign : 'middle',
				width : '8%'
			} , {
				title : '评审结果',
				field : 'auditingType',
				align : 'center',
				valign : 'middle',
				width : '8%'
			} , {
				title : '修订时间',
				field : 'auditingTime',
				align : 'center',
				valign : 'middle',
				width : '10%'
			} , {
				title : '操作',
				field : 'cz',
				align : 'center',
				valign : 'middle',
				width : '8%',
				formatter: function(value,row,index){
					return '<a class="btn btn-xs btn-info">'+value+'</a>';
				}
			}] ],
			 onClickCell:function(field,value,row,$element){
				 if(field=="cz"){
					 if(row.pushType=="未发布"){
						 if(row.auditingType=="通过"){
							 row.pushType="发布";
							$('#table tr td').eq(13).text("已发布");
							 tip.alert("发布成功");
						 }else{
							 tip.alert("评审未通过,不能发布");
						 }
					 }
					 else{
						 tip.alert("已经发布了,请不要重新发布");
					 }
				 }
			 }
			
		});
		table.method('load', model.list1);
	}

	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});