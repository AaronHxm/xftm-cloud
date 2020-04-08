define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	var datepicker = require('frm/datepicker');
	var tip = require('frm/message');
	var select = require('frm/select');
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
		el: '#dsfs',
		data: {
			'dsfsList': {
				'total': '6',
				'rows': [
				    {
			    		'bh': '20171226001',
			    		'fsdw': 'xxx省监狱局',
			    		'jsdw':'xx省第二监狱',
			    		'time': '2017-12-26 08:00:00',
			    		'content': '及上报生产数据',
			    		'xxjsr':'张某某'
				    },{
				    	'bh': '20171226002',
			    		'fsdw': 'xxx省监狱局',
			    		'jsdw':'xx省第四监狱',
			    		'time': '2017-12-26 08:00:00',
			    		'content': '及上报昨日监狱汇总信息',
			    		'xxjsr':'李某某'
				    },{
				    	'bh': '20171226003',
			    		'fsdw': 'xx省监狱局',
			    		'jsdw':'xx省第六监狱',
			    		'time': '2017-12-26 08:00:00',
			    		'content': '及上报生产数据',
			    		'xxjsr':'楚某某'
				    },{
				    	'bh': '20171226004',
			    		'fsdw': 'xxx省监狱局',
			    		'jsdw':'xxx监狱',
			    		'time': '2017-12-26 08:00:00',
			    		'content': '及上报昨日监狱汇总信息',
			    		'xxjsr':'程某某'
				    },{
				    	'bh': '20171226005',
			    		'fsdw': 'xx省监狱局',
			    		'jsdw':'xxx省第五监狱',
			    		'time': '2017-12-26 08:00:00',
			    		'content': '及上报生产数据',
			    		'xxjsr':'李某某'
				    }
                ]
			},
		dsfsDetl:{"tittle":"晚班事宜","nr":"晚班事宜晚班事宜晚班事宜晚班事宜晚班事宜","fbmj":"张某某","fbsj":"2017-12-26"},
		'lbList':[
			{'id':'001','name':'投诉'},
			{'id':'002','name':'咨询'},
			{'id':'003','name':'建议'}
		],
		search:{
			'bh': '',
    		'fsdw': '',
    		'jsdw':'',
    		'time': '',
    		'content': '',
    		'xxjsr':''
		}
		},
		methods: {
			openSearchPanel:function(){
				openSearchPanel();
			},
			openAddPanel:function(){
				openAddPanel();
			},
			searchDb:function(){
				tip.alert("正在查询中");
				dialog.close(index1);
			},
			closeAddPanel:function(){
				tip.alert("添加成功");
				dialog.close(index2);
			},
			openEditPanel:function(row){
				var list = [];
				if(row){
					list.push({'bh': row['bh'],
		 	 				   'fsdw': row['fsdw'],
		 	 				   'jsdw': row['jsdw'],
		 	 				   'time': row['time'],
		 	 				   'content': row['content'],
		 	 				   'xxjsr': row['xxjsr']});
				}else{
					list = table.method("getSelections").map(function(row){
		 	 			return {'bh': row['bh'],
		 	 					'fsdw': row['fsdw'],
		 	 					'jsdw': row['jsdw'],
		 	 					'time': row['time'],
		 	 					'content': row['content'],
		 	 					'clzt': row['clzt']};
		 	 		});
				}
				if(!list.length){
					tip.alert("请选择一条要编辑的定时信息任务");
					return;
				}else if(list.length > 1){
					tip.alert("编辑的定时信息不能多选");
					return;
				}
				model.search.bh = list[0].bh;
				model.search.lb = list[0].lb;
				model.search.time = list[0].time;
				model.search.content = list[0].content;
				model.search.fbmj = list[0].fbmj;
				model.search.clzt = list[0].clzt;
				handelType = "edit";
				
				dialog3 = dialog.open({targetId:'add_edit_panel',title:'编辑定时信息',w:"650",h:"415"});
				if(!index3){
					index3 = dialog3.index;
				}
			},
			savePannel:function(){
				tip.alert("保存成功");
				dialog.close(index3);
			},
			openDelPanel:function(){
				var list = table.method("getSelections").map(function(row){
	 	 			return {
	 	 				    'bh': row.bh,
	 	 				    'time': row.time};
	 	 		});
				if(!list.length){
					tip.alert("请选择要删除的记录");
					return;
				}
				//删除
				tip.confirm("是否删除已勾选的"+list.length+"条记录？",function(index){
					tip.alert("删除成功");
//					db.updateByParamKey({ 
//						success:function(){
//							tip.alert("删除成功");
//							table.method("refresh");
//						},
//						error:function(data,respMsg){
//							tip.alert("删除成功");
//						}
//					});
				});
			}
		}
	});
	/**
	 * 打开添加面板
	 */
	function openAddPanel(){
		model.search.time='';
		model.search.lb='';
		model.search.content='';
		model.search.fbmj='';
		model.search.clzt='';
		dialog2 = dialog.open({targetId:'add_panel',title:'添加',w:'50',h:'60',top:'0%'});
		if(!index2){
			index2 = dialog2.index;
		}
		
	}
	//打开查询面板
	function openSearchPanel(){
		model.search.time='';
		model.search.lb='';
		dialog1 = dialog.open({targetId:'search_panel',title:'查询',w:'40',h:'40',top:'0%'});
		if(!index1){
			index1 = dialog1.index;
		}
	}
	//初始化表格
	function initTable(){
		table.init('cmd_alarm_dsfs_table', {
			request: {
				params: ' ',
				url: ' '
			},
			showColumns: false,
			pageSize:10,
			pageList:[10,20,30,40,50],
			columns: [[
				{
				    field: 'state',
				    checkbox: true
				},{
				    title: '编号',
				    field: 'bh',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '发送单位',
				    field: 'fsdw',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '接收单位',
				    field: 'jsdw',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '定时发送时间',
				    field: 'time',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '信息内容',
				    field: 'content',
				    align: 'center',
				    valign: 'middle'
				},{
				    title: '信息接收人',
				    field: 'xxjsr',
				    align: 'center',
				    valign: 'middle',
				}
            ]],
//            onDblClickRow: function(row, $element){
//            	dialog.open({targetId: 'dsfs_panel', title: '详情', w: '90', h: '90'});
//            	$('div#collapseCar').collapse('show');
//	       		 $('div#collapseDriver').collapse('show');
//	       		 $('div#collapseCheckPolice').collapse('show');
//	       		 $('div#overflow').animate({scrollTop: 0});
//            }
		});
		table.method('load', model.dsfsList);
	}
	
	try {
		initTable();
		$('button[type="button"]').css({'background-color':'#2966a3', 'border':'0'});
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});