define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	var datepicker = require('frm/datepicker');
	var dialog_search = null;
	var index_search = null;
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#prisonerMoveApproveInfo',
		data:{
			prisonerMoveApproveInfoShow:{},
			prisonerMoveApproveInfoList:[
	             {'No':329182,'appro_event':'紧急警力调动','emergency_lv':'紧急','prisonerName':'钱某','moveBeforeOrg':'第二监狱','moveLaterOrg':'第三监狱','moveType':'短信提醒','moveTime':'2017-12-08 13:38','moveStatus':'已完成','checkOrgName':'浙江省监狱管理局','checkTime':'2017-12-09 13:05','checkOption':'已通过'},
	             {'No':281734,'appro_event':'紧急设备维护','emergency_lv':'紧急','prisonerName':'莫某某','moveBeforeOrg':'第六监狱','moveLaterOrg':'第五监狱','moveType':'短信提醒','moveTime':'2017-12-08 16:21','moveStatus':'已完成','checkOrgName':'浙江省监狱管理局','checkTime':'2017-12-09 13:05','checkOption':'已通过'},
	             {'No':314390,'appro_event':'紧急电网维修','emergency_lv':'紧急','prisonerName':'陈某某','moveBeforeOrg':'第五监狱','moveLaterOrg':'第二监狱','moveType':'短信提醒','moveTime':'2017-12-08 08:56','moveStatus':'已完成','checkOrgName':'浙江省监狱管理局','checkTime':'2017-12-09 13:05','checkOption':'未通过'},
	             {'No':323516,'appro_event':'紧急警力调动','emergency_lv':'紧急','prisonerName':'周某某','moveBeforeOrg':'第三监狱','moveLaterOrg':'第一监狱','moveType':'短信提醒','moveTime':'2017-12-08 10:05','moveStatus':'已完成','checkOrgName':'浙江省监狱管理局','checkTime':'2017-12-09 13:05','checkOption':'已通过'},
	             {'No':323434,'appro_event':'紧急人员就医','emergency_lv':'紧急','prisonerName':'钱某某','moveBeforeOrg':'第四监狱','moveLaterOrg':'第六监狱','moveType':'短信提醒','moveTime':'2017-12-08 15:08','moveStatus':'已完成','checkOrgName':'浙江省监狱管理局','checkTime':'2017-12-09 13:05','checkOption':'已通过'},
	             {'No':323764,'appro_event':'紧急人员就医','emergency_lv':'紧急','prisonerName':'卞某某','moveBeforeOrg':'第四监狱','moveLaterOrg':'第六监狱','moveType':'短信提醒','moveTime':'2017-12-08 16:38','moveStatus':'已完成','checkOrgName':'浙江省监狱管理局','checkTime':'2017-12-09 13:05','checkOption':'未通过'},
	             {'No':323494,'appro_event':'紧急警力调动','emergency_lv':'紧急','prisonerName':'王某某','moveBeforeOrg':'第四监狱','moveLaterOrg':'第六监狱','moveType':'短信提醒','moveTime':'2017-12-08 13:50','moveStatus':'已完成','checkOrgName':'浙江省监狱管理局','checkTime':'2017-12-09 13:05','checkOption':'未通过'},
	             {'No':323471,'appro_event':'紧急药物输送','emergency_lv':'紧急','prisonerName':'关某某','moveBeforeOrg':'第四监狱','moveLaterOrg':'第六监狱','moveType':'短信提醒','moveTime':'2017-12-08 13:45','moveStatus':'已完成','checkOrgName':'浙江省监狱管理局','checkTime':'2017-12-09 13:05','checkOption':'未通过'},
	             {'No':323056,'appro_event':'紧急药物输送','emergency_lv':'紧急','prisonerName':'孟某某','moveBeforeOrg':'第四监狱','moveLaterOrg':'第六监狱','moveType':'短信提醒','moveTime':'2017-12-08 11:15','moveStatus':'已完成','checkOrgName':'浙江省监狱管理局','checkTime':'2017-12-09 13:05','checkOption':'已通过'},
	             {'No':322751,'appro_event':'紧急警力调动','emergency_lv':'紧急','prisonerName':'吕某某','moveBeforeOrg':'第四监狱','moveLaterOrg':'第六监狱','moveType':'短信提醒','moveTime':'2017-12-08 16:47','moveStatus':'已完成','checkOrgName':'浙江省监狱管理局','checkTime':'2017-12-09 13:05','checkOption':'已通过'},
	             {'No':320934,'appro_event':'紧急设备维护','emergency_lv':'紧急','prisonerName':'王某某','moveBeforeOrg':'第四监狱','moveLaterOrg':'第六监狱','moveType':'短信提醒','moveTime':'2017-12-08 09:53','moveStatus':'已完成','checkOrgName':'浙江省监狱管理局','checkTime':'2017-12-09 13:05','checkOption':'未通过'},
	             {'No':328062,'appro_event':'紧急设备维护','emergency_lv':'紧急','prisonerName':'宁某某','moveBeforeOrg':'第四监狱','moveLaterOrg':'第六监狱','moveType':'短信提醒','moveTime':'2017-12-08 10:14','moveStatus':'已完成','checkOrgName':'浙江省监狱管理局','checkTime':'2017-12-09 13:05','checkOption':'未通过'}
			],
			search:{
				'startdate':'',
				'enddate':'',
				'moveBeforeOrg':'',
				'moveLaterOrg':'',
				'prisonerName':''
			},
			
		},
		methods:{
			openSearchPanel:function(){
				openSearchPanel();
			},
			searchDb:function(){
				searchDb();
			},
			shDb:function(){
				shDb();
			}
		}
	});
	/**
	 * 查询面板
	 */
	function openSearchPanel(){
		model.search.startdate='';
		model.search.enddate='';
		model.search.prisonerName='';
		model.search.moveBeforeOrg='';
		model.search.moveLaterOrg='';
		dialog_search = dialog.open({targetId:'search_panel',title:'查询',w:'60',h:'50',top:'0%'});
		if(!index_search){
			index_search = dialog_search.index;
		}
	}
	/**
	 * 查询
	 */
	function shDb(){
		dialog.close();
		tip.alert('已审核');
	}
	function searchDb(){
		dialog.close(index_search);
	}
	function initTable(){
		var json = {"total": model.prisonerMoveApproveInfoList.length, "rows": model.prisonerMoveApproveInfoList}
		table.init('table', {
			request : '',
			data:model.prisonerMoveApproveInfoList,
			showColumns: true,
			pageList: [10,20,30,40,50,100],
			pageSize: 10,
			columns: [[
				{
	                title: '序号',
	                field: 'No',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },
	            {
	                title: '审批事项',
	                field: 'appro_event',
	                align: 'center',
	                valign: 'middle',
	                width: '15%'
	            },{
	                title: '事项紧急程度',
	                field: 'emergency_lv',
	                align: 'center',
	                valign: 'middle',
	                width: '15%'
	            },{
	                title: '审批日期',
	                field: 'moveTime',
	                align: 'center',
	                valign: 'middle',
	                width: '15%'
	            },{
	            	title: '审批状态',
	                field: 'checkOption',
	                align: 'center',
	                valign: 'middle',
	                width: '10%',
	                formatter:function(value,row,index){
	                	return value == '未通过' ? '<span style="color:#DC143C;">'+value+'</span>' : '<span style="color:#00FF00;">'+value+'</span>';
	                }
	            },{
	                title: '当前审批人',
	                field: 'prisonerName',
	                align: 'center',
	                valign: 'middle',
	                width: '15%'
	            },{
	                title: '短信提醒',
	                field: 'moveType',
	                align: 'center',
	                valign: 'middle',
	                width: '10%',
	                formatter: function(value,row,index){
						return '<a class="btn btn-xs btn-info">'+value+'</a>'
					}
	            }]],
	            onDblClickRow:function(row){
					model.prisonerMoveApproveInfoShow = row;
					dialog.open({targetId:'show_panel',title:'罪犯调动详情',w:"80",h:"80"});
				}	
			});
		table.method('load', json);
	}
	
	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});