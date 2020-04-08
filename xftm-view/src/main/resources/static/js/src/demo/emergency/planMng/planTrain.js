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
		el : '#planTrain',
		data : {
			list1 : {
				"rows" : [ {
					"rn" : 1,
					"planName":"罪犯逃脱预案",
					"planType" : "罪犯逃脱",
					"planDetail" : "罪犯逃脱预案",
					"createNo" : "李峰",
					"createTime" : "2017-12-18",
					"pushType" : "未发布",
					"auditingName" : "李某某",
					"auditingType" : "未审核",
					"auditingTime" : "2017-12-24",
					"pxry" : "张某某  李某某  王某某  陈某某  赵某某  方某某  钱某某 孙某某 周某某  吴某某  郑某某  梁某某  刘某某  郭某某  蔡某某"
				}, {
					"rn" : 2,
					"planName":"罪犯暴狱预案",
					"planType" : "罪犯暴狱事件",
					"planDetail" : "罪犯暴狱预案",
					"createNo" : "郭芳",
					"createTime" : "2017-12-16",
					"pushType" : "已发布",
					"auditingName" : "李某某",
					"auditingType" : "已审核",
					"auditingTime" : "2017-12-12",
					"pxry" : "陈某某  赵某某  方某某  钱某某 孙某某 周某某  吴某某 郑某某 梁某某 刘某某  郭某某  蔡某某  张某某 李某某 王某某"
				},{
					"rn" : 3,
					"planName":"狱内行凶预案",
					"planType" : "狱内行凶事件",
					"planDetail" : "狱内行凶预案",
					"createNo" : "陈东",
					"createTime" : "2017-12-14",
					"pushType" : "已发布",
					"auditingName" : "李某某",
					"auditingType" : "已审核",
					"auditingTime" : "2017-12-20",
					"pxry" : "钱某某  孙某某  周某某  吴某某  郑某某 梁某某 刘某某  郭某某 蔡某某  张某某  李某某  王某某  陈某某  赵某某 方某某"
				}],
				"total" : 5
			},
			planList:{
				'yamc':'',
				'yalx':'',
				'yams':'',
				'pxmj':'',
				'pxnr':'',
				'pxsj':'',
				'pxry':''
			},
			search:{
				'time':'',
				'content':'',
				'name':'',
				'djmj':'',
				'pxmj':'',
				'lx':'',
				'pxry':''
				
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
				dialog2=dialog.open({targetId:'add_panel',title:'添加',w:'45',h:'90',top:'2%'});
				if(!index2){
					index2 = dialog2.index;
				}
			},
			openEditPanel:function(row){
				var list = [];
				if(row){
					list.push({'time': row['auditingTime'],
		 	 				   'name': row['planName'],
		 	 				   'content': row['planDetail']});
				}else{
					list = table.method("getSelections").map(function(row){
		 	 			return {'time': row['auditingTime'],
		 	 					'name': row['planName'],
		 	 					'content': row['planDetail'],
		 	 					'lx': row['planType'],
		 	 					'pxmj': row['auditingName'],
		 	 					'pxry':row['pxry']};
		 	 		});
				}
				if(!list.length){
					tip.alert("请选择一条要修订的预案");
					return;
				}
				model.search.time = list[0].time;
				model.search.name = list[0].name;
				model.search.content = list[0].content;
				model.search.lx = list[0].lx;
				model.search.pxmj=list[0].pxmj;
				model.search.pxry=list[0].pxry;
				handelType = "edit";
				
				$('#sel_edit').val(model.search.lx);
				dialog3=dialog.open({targetId:'edit_panel',title:'修改',w:'45',h:'90',top:'2%'});
				if(!index3){
					index3 = dialog3.index;
				}
			},
			closeAddPanel:function(){
				tip.confirm("是否添加新预案",function(index){
					tip.alert("添加成功");
					dialog.close(index2);
				});
			},
			closeEditPanel:function(){
				var ms=$('#ms').val();
				var mj=$('#mj').val();
				var ry=$('#ry').val();
				tip.confirm("是否修改预案",function(index){
					table.method("getSelections").map(function(row){
						if(ms.length>0 && mj.length>0 && ry.length>0 &&ms!=null){
							if(row['rn']==1){
								$('#table tr td').eq(3).text(ms);
								$('#table tr td').eq(4).text(ry);
								$('#table tr td').eq(5).text(mj);
							}else if(row['rn']==2){
								$('#table tr td').eq(10).text(ms);
								$('#table tr td').eq(11).text(ry);
								$('#table tr td').eq(12).text(mj);
							}else{
								$('#table tr td').eq(17).text(ms);
								$('#table tr td').eq(18).text(ry);
								$('#table tr td').eq(19).text(mj);
							}
							row['planDetail']=ms;
							row['pxry']=ry;
							row['auditingName']=mj;
						}else{
							alert(ms);
							tip.alert("不能为空")
						}
					})
					tip.alert("修改成功");
					dialog.close(index3);
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
				{
				field : 'status',
				radio : 'true',
				width :'3%'
				},{
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
				title : '参加培训人员',
				field : 'pxry',
				align : 'center',
				valign : 'middle',
				width : '6%'
			},{
				title : '培训民警',
				field : 'auditingName',
				align : 'center',
				valign : 'middle',
				width : '8%'
			}, {
				title : '培训完成时间',
				field : 'auditingTime',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}] ],
			onDblClickRow:function(row,$element){
				model.planList.yamc = row['planName'];
				model.planList.yalx = row['planType'];
				model.planList.yams = row['planDetail'];
				model.planList.pxsj = row['auditingTime'];
				model.planList.pxmj = row['auditingName'];
				model.planList.pxry = row['pxry'];
				dialog.open({targetId:'show_panel',title:'详情',w:45,h:70,top:2});
				$("div#show_panel").show();
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