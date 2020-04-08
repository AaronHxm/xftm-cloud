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
		el : '#planReview',
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
					"auditingType" : "重新评审",
					"auditingTime" : "2017-12-18",
					"psyj" : "评审不通过,重新评审"
				}, {
					"rn" : 2,
					"planName":"罪犯暴狱预案",
					"planType" : "罪犯暴狱事件",
					"planDetail" : "罪犯暴狱预案",
					"createNo" : "郭芳",
					"createTime" : "2017-12-16",
					"pushType" : "已发布",
					"auditingName" : "李某某",
					"auditingType" : "不通过",
					"auditingTime" : "2017-12-16",
					"psyj" : "评审不通过"
				},{
					"rn" : 3,
					"planName":"狱内行凶预案",
					"planType" : "狱内行凶事件",
					"planDetail" : "狱内行凶预案",
					"createNo" : "陈东",
					"createTime" : "2017-12-16",
					"pushType" : "已发布",
					"auditingName" : "李某某",
					"auditingType" : "通过",
					"auditingTime" : "2017-12-16",
					"psyj" : "评审通过"
				}],
				"total" : 5
			},
		planList:{
			'yasj':'',
			'yamc':'',
			'yalx':'',
			'yams':'',
			'pszt':'',
			'psnr':'',
			'psmj':'张某某',
			'pssj':''
		},
			search:{
				'time':'',
				'content':'',
				'name':'',
				'djmj':'',
				'pszt':''
				
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
		 	 				   'content': row['planDetail'],
		 	 				   'djmj':row['createNo'],
		 	 				   'pszt':row['auditingType']});
				}else{
					list = table.method("getSelections").map(function(row){
		 	 			return {'time': row['createTime'],
		 	 					'name': row['planName'],
		 	 					'content': row['planDetail'],
		 	 					'djmj':row['createNo'],
		 	 					'pszt':row['auditingType']};
		 	 		});
				}
				if(!list.length){
					tip.alert("请选择一条要评审的预案");
					return;
				}else if(list[0].pszt=="通过"){
					tip.alert("评审通过的预案不可再选");
					return;
				}
				model.search.time = list[0].time;
				model.search.name = list[0].name;
				model.search.content = list[0].content;
				model.search.djmj = list[0].djmj;
				handelType = "edit";
				
				
				dialog2=dialog.open({targetId:'edit_panel',title:'评审',w:'45',h:'75',top:'0%'});
				if(!index2){
					index2 = dialog2.index;
				}
			},
			closeAddPanel:function(){
				var jg=$('#jg').val();
				var yj=$('#yj').val();
				var ms=$('#ms').val();
				tip.confirm("是否保存评审项",function(index){
					table.method("getSelections").map(function(row){
						if(yj.length>0){
							row['psyj']=yj;
						}
						if(jg.length>0){
							if(row['rn']==1){
								row['auditingType']=jg;
								$('#table tr td').eq(6).text(jg);
							}else if(row['rn']==2){
								row['auditingType']=jg;
								$('#table tr td').eq(13).text(jg);
							}else{
								row['auditingType']=jg;
								$('#table tr td').eq(20).text(jg);
							}
						}
						if(ms.length>0){
							if(row['rn']==1){
								row['planDetail']=ms;
								$('#table tr td').eq(4).text(ms);
							}else if(row['rn']==2){
								row['planDetail']=ms;
								$('#table tr td').eq(11).text(ms);
							}else{
								row['planDetail']=ms;
								$('#table tr td').eq(18).text(ms);
							}
						}
					})
					tip.alert("评审成功");
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
				{
				field : 'status',
				radio : 'true',
				width :'3%'
				},{
				title : '预案创建时间',
				field : 'createTime',
				align : 'center',
				valign : 'middle',
				width : '12%'
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
				title : '评审时间',
				field : 'auditingTime',
				align : 'center',
				valign : 'middle',
				width : '10%'
			  } , {
				title : '评审结果',
				field : 'auditingType',
				align : 'center',
				valign : 'middle',
				width : '8%'
			}] ],
			onDblClickRow:function(row,$element){
					model.planList.yamc = row['planName'];
					model.planList.yalx = row['planType'];
					model.planList.yams = row['planDetail'];
					model.planList.yasj = row['createTime'];
					model.planList.pszt = row['auditingType'];
					model.planList.pzsj = row['auditingTime'];
					model.planList.pssj = row['auditingTime'];
					model.planList.psnr = row['psyj'];
					dialog.open({targetId: 'show_panel', title: '详情',top:5, w: 50, h: 90});
					$('div#show_panel').show();
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