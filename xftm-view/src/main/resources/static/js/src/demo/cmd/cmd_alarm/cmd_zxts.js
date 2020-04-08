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
		el: '#zxts',
		data: {
			'zxtsList': {
				'total': '6',
				'rows': [
				    {
			    		'bh': '20171226001',
			    		'lb': '咨询',
			    		'time': '2017-12-26',
			    		'content': '晚班事宜',
			    		'fbmj':'张某某',
			    		'clzt': '处理中'
				    },{
				    	'bh': '20171225002',
			    		'lb': '投诉',
			    		'time': '2017-12-25',
			    		'content': '上班时间玩手机',
			    		'fbmj':'李某某',
			    		'clzt': '处理中'
				    },{
				    	'bh': '20171224003',
			    		'lb': '咨询',
			    		'time': '2017-12-24',
			    		'content': '乱停车',
			    		'fbmj':'楚某某',
			    		'clzt': '已处理'
				    },{
				    	'bh': '20171224004',
			    		'lb': '投诉',
			    		'time': '2017-12-23',
			    		'content': '上班时间睡觉',
			    		'fbmj':'程某某',
			    		'clzt': '处理中'
				    },{
				    	'bh': '20171222001',
			    		'lb': '咨询',
			    		'time': '2017-12-22',
			    		'content': '值班事宜',
			    		'fbmj':'李某某',
			    		'clzt': '已处理'
				    }
                ]
			},
		zxtsDetl:{"tittle":"晚班事宜","nr":"晚班事宜晚班事宜晚班事宜晚班事宜晚班事宜","fbmj":"张某某","fbsj":"2017-12-26"},
		search:{
			'time':'',
			'bh':'',
			'lb':'',
			'content':'',
			'fbmj':'',
			'clzt':''
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
		 	 				   'lb': row['lb'],
		 	 				   'time': row['time'],
		 	 				   'content': row['content'],
		 	 				   'fbmj': row['fbmj'],
		 	 				   'clzt': row['clzt']});
				}else{
					list = table.method("getSelections").map(function(row){
		 	 			return {'bh': row['bh'],
		 	 					'lb': row['lb'],
		 	 					'time': row['time'],
		 	 					'content': row['content'],
		 	 					'fbmj': row['fbmj'],
		 	 					'clzt': row['clzt']};
		 	 		});
				}
				if(!list.length){
					tip.alert("请选择一条要编辑的咨询投诉记录");
					return;
				}else if(list.length > 1){
					tip.alert("编辑的咨询投诉记录不能多选");
					return;
				}
				model.search.bh = list[0].bh;
				model.search.lb = list[0].lb;
				model.search.time = list[0].time;
				model.search.content = list[0].content;
				model.search.fbmj = list[0].fbmj;
				model.search.clzt = list[0].clzt;
				handelType = "edit";
				
				dialog3 = dialog.open({targetId:'add_edit_panel',title:'编辑咨询投诉',w:"650",h:"415"});
				if(!index3){
					index3 = dialog3.index;
				}
			},
			savePannel:function(){
				tip.alert("保存成功");
				dialog.close(index3);
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
		table.init('cmd_alarm_zxts_table', {
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
				    title: '类别',
				    field: 'lb',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '时间',
				    field: 'time',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '内容',
				    field: 'content',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '发布民警',
				    field: 'fbmj',
				    align: 'center',
				    valign: 'middle'
				},{
				    title: '处理状态',
				    field: 'clzt',
				    align: 'center',
				    valign: 'middle',
				    formatter: function(value, row, index){
				    	return value == '处理中' ? '<span style="color:#00f3ff;">'+value+'</span>':'<span>' + value + '</span>';
				    }
				}
            ]],
            onDblClickRow: function(row, $element){
            	dialog.open({targetId: 'zxts_panel', title: '详情', w: '90', h: '90'});
//            	$('div#collapseCar').collapse('show');
//	       		 $('div#collapseDriver').collapse('show');
//	       		 $('div#collapseCheckPolice').collapse('show');
//	       		 $('div#overflow').animate({scrollTop: 0});
            }
		});
		table.method('load', model.zxtsList);
	}
	
	try {
		initTable();
		$('button[type="button"]').css({'background-color':'#2966a3', 'border':'0'});
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});