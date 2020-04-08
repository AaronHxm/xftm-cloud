define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var datepicker = require('frm/datepicker');
	var dialog = require('frm/dialog');
	var dialog_search = null;
	var index_search = null;
	var index_edit = null;
	var dialog_edit = null;
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#notice',
		data:{
			groupList:[
				 {'groupName':'应急防火灾演练通知','time':'2018-1-12','deputyLeader':'XXX',member:['防灾小组','后勤小组','应急处理小组','信息小组','预警小组'],
				  'duty':'经过上级领导的批准与审核，并且响应党关于“监狱安全决定政策”，我部门决定在12号在XXX举行应急防火演练。本次演练由XXX监狱的防灾小组、后勤小组、应急处理小组、信息小组与预警小组参加，希望各部门接到通知后相互转告，准时参加。'},
				 {'groupName':'应急冲突演练通知','time':'2018-1-21','deputyLeader':'XXX',member:['XXX武警分队','紧急处理小队','武器管理组','医疗救助小组','信息小组','后勤小组'],
				  'duty':'为了响应党的政策，并且确保监狱的绝对安全，在经过领导批准后，本监狱决定在1月21日举行应急冲突演练。本次演练的参与小组有：XXX武警分队、紧急处理小队、武器管理组、医疗救助小组、信息小组与后勤小组，希望各部门接到通知后相互转告，准时参加。'}
			]
		},
		search:{
			'plandate':'',
			'planDW':'',
			'planNo':''
		},
		edit:{
			'plandate':'',
			'planDW':'',
			'plantype':'',
			'planname':''
		},
		methods:{
			openSearchPanel:function(){
				openSearchPanel();
			},
			openEditPanel:function(){
				openEditPanel();
			},
			searchDb:function(){
				searchDb();},
			editDb:function(){
					editDb();},
			
		}
	});
	function openSearchPanel(){
//		model.search.plandate='';
//		model.search.planDW='';
//		model.search.planNo='';
		dialog_search = dialog.open({targetId:'search_panel',title:'演练通知查询',w:'70',h:'60',top:'0%'});
		if(!index_search){
			index_search = dialog_search.index;
		}
	}
	function openEditPanel(){
//		model.edit.startdate='';
//		model.edit.planDW='';
//		model.edit.plantype='';
//		model.edit.planname='';
		dialog_edit = dialog.open({targetId:'edit_panel',title:'演练计划启动',w:'70',h:'85',top:'0%'});
		if(!index_edit){
			index_edit = dialog_edit.index;
		}
	}
	function searchDb(){
		dialog.close(index_search);
		tip.alert('正在查询');
	}
	function editDb(){
		dialog.close(index_edit);
		tip.alert('正在启动');
	}
	
	$("#menusTwo").find("li:first").addClass("selected");
	try {
		
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});