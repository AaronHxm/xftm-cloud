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
		el : '#planConf',
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
					"auditingType" : "法律法规",
					"auditingTime" : "",
					"bz" : "第二步"
				}, {
					"rn" : 2,
					"planName":"罪犯暴狱预案",
					"planType" : "罪犯暴狱事件",
					"planDetail" : "罪犯暴狱预案",
					"createNo" : "郭芳",
					"createTime" : "2017-12-16",
					"pushType" : "已发布",
					"auditingName" : "李某某",
					"auditingType" : "应急小组",
					"auditingTime" : "2017-12-16",
					"bz" : "第一步"
				},{
					"rn" : 3,
					"planName":"狱内行凶预案",
					"planType" : "狱内行凶事件",
					"planDetail" : "狱内行凶预案",
					"createNo" : "陈东",
					"createTime" : "2017-12-16",
					"pushType" : "已发布",
					"auditingName" : "李某某",
					"auditingType" : "应急物资",
					"auditingTime" : "2017-12-16",
					"bz" : "第三步"
				}],
				"total" : 5
			},
			planList:{
				'yamc':'',
				'yalx':'',
				'yams':'',
				'yasj':'',
				'pzzt':'',
				'pznr':'',
				'pzmj':'张某某',
				'pzsj':'2017-12-17'
			},
			search:{
				'time':'',
				'content':'',
				'name':'',
				'djmj':'',
				'pzzt':'',
				'lx':''
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
			openConfPanel:function(row){
				var list = [];
				if(row){
					list.push({'time': row['createTime'],
		 	 				   'name': row['planName'],
		 	 				   'content': row['planDetail'],
		 	 				   'djmj':row['createNo'],
		 	 				   'pzzt':row['auditingType'],
		 	 				   'lx': row['planType']});
				}else{
					list = table.method("getSelections").map(function(row){
		 	 			return {'time': row['createTime'],
		 	 					'name': row['planName'],
		 	 					'content': row['planDetail'],
		 	 					'djmj':row['createNo'],
		 	 					'pzzt':row['auditingType'],
		 	 					'lx': row['planType']};
		 	 		});
				}
				if(!list.length){
					tip.alert("请选择一条要配置的预案");
					return;
				}else if(list.length > 1){
					tip.alert("配置的预案不能多选");
					return;
				}else if(list[0].pzzt=="已配置"){
					tip.alert("已经配置完成的不可再配置");
					return;
				}
				model.search.time = list[0].time;
				model.search.name = list[0].name;
				model.search.content = list[0].content;
				model.search.djmj = list[0].djmj;
				model.search.lx = list[0].lx;
				handelType = "edit";
				
				
				dialog2=dialog.open({targetId:'edit_panel',title:'配置',w:'45',h:'95',top:'0%'});
				if(!index2){
					index2 = dialog2.index;
				}
			},
			closeAddPanel:function(){
				var pz=$('#pz').val();
				var bz=$('#bz').val();
				var ms=$('#ms').val();
				tip.confirm("是否保存修改项",function(index){
					table.method("getSelections").map(function(row){
						if(bz.length>0){
							row['bz']=bz;
						}
						if(pz.length>0){
							if(row['rn']==1){
								row['auditingType']=pz;
								$('#table tr td').eq(6).text(pz);
							}else if(row['rn']==2){
								row['auditingType']=pz;
								$('#table tr td').eq(13).text(pz);
							}else{
								row['auditingType']=pz;
								$('#table tr td').eq(20).text(pz);
								}
						   }
						if(ms.length>0){
							if(row['rn']==1){
								row['planDetail']=ms;
								$('#table tr td').eq(3).text(ms);
							}else if(row['rn']==2){
								row['planDetail']=ms;
								$('#table tr td').eq(10).text(ms);
							}else{
								row['planDetail']=ms;
								$('#table tr td').eq(17).text(ms);
								}
						}
							
					})
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
			}, {
				title : '预案配置',
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
				model.planList.pznr = row['auditingType'];
				model.planList.pzzt = row['bz'];
				dialog.open({targetId:'show_panel',title:'配置详情',w: 50,h: 75,top: 5});
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