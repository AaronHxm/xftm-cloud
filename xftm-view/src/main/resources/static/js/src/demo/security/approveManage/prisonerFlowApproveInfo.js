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
		el:'#prisonerFlowApproveInfo',
		data:{
			prisonerFlowApproveInfoShow:{},
			prisonerFlowApproveInfoList:[
	             {'orgName':'第二监狱','prisonName':'一监区一分监区','prisonerName':'张三','flowType':'出监','flowReason':'看病','reportPoliceName':'李伟','planInOutTime':'2017-12-08 13:05','backPrionTime':'2017-12-10 13:05','approveStatus':'待回监复核','checkPoliceName':'王五','checkTime':'2017-12-09 13:05','checkOption':'通过'},
	             {'orgName':'第三监狱','prisonName':'一监区','prisonerName':'李四','flowType':'入监','flowReason':'新犯收押','reportPoliceName':'王伟','planInOutTime':'2017-12-08 13:05','backPrionTime':'2017-12-09 13:05','approveStatus':'待回监复核','checkPoliceName':'孙磊','checkTime':'2017-12-09 13:05','checkOption':'通过'},
	             {'orgName':'第四监狱','prisonName':'三监区','prisonerName':'王思','flowType':'出监','flowReason':'保外就医','reportPoliceName':'张伟','planInOutTime':'2017-12-08 13:05','backPrionTime':'2017-12-09 13:05','approveStatus':'待回监复核','checkPoliceName':'赵三','checkTime':'2017-12-09 13:05','checkOption':'通过'},
	             {'orgName':'第五监狱','prisonName':'五监区','prisonerName':'宋磊','flowType':'出监','flowReason':'看病','reportPoliceName':'胡天','planInOutTime':'2017-12-08 13:05','backPrionTime':'2017-12-09 13:05','approveStatus':'待回监复核','checkPoliceName':'高虎','checkTime':'2017-12-09 13:05','checkOption':'通过'},
	             {'orgName':'第六监狱','prisonName':'二监区','prisonerName':'胡汉三','flowType':'出监','flowReason':'看病','reportPoliceName':'赵瑞','planInOutTime':'2017-12-08 13:05','backPrionTime':'2017-12-09 13:05','approveStatus':'待回监复核','checkPoliceName':'马元','checkTime':'2017-12-09 13:05','checkOption':'通过'}
			],
			search:{
				'orgName':'',
				'prisonerName':'',
				'flowType':'',
				'startdate':'',
				'enddate':''
			},
			
		},
		methods:{
			openSearchPanel:function(){
				openSearchPanel();
			},
			searchDb:function(){
				searchDb();
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
		model.search.flowType='';
		model.search.orgName='';
		dialog_search = dialog.open({targetId:'search_panel',title:'查询',w:'60',h:'50',top:'0%'});
		if(!index_search){
			index_search = dialog_search.index;
		}
	}
	/**
	 * 查询
	 */
	function searchDb(){
		dialog.close(index_search);
	}
	function initTable(){
		var json = {"total": model.prisonerFlowApproveInfoList.length, "rows": model.prisonerFlowApproveInfoList}
		table.init('table', {
			request : '',
			data:model.prisonerFlowApproveInfoList,
			showColumns: true,
			pageList: [10,20,30,40,50,100],
			pageSize: 10,
			columns: [[
				{
	                title: '单位名称',
	                field: 'orgName',
	                align: 'center',
	                valign: 'middle',
	                width: '12%'
	            },
	            {
	                title: '监区名称',
	                field: 'prisonName',
	                align: 'center',
	                valign: 'middle',
	                width: '12%',
	                formatter: function(value,row,index){
	                	
	                	return 'XX监狱';
	                }
	            },{
	                title: '罪犯姓名',
	                field: 'prisonerName',
	                align: 'center',
	                valign: 'middle',
	                width: '5%'
	            },{
	            	title: '流动事由',
	                field: 'flowType',
	                align: 'center',
	                valign: 'middle',
	                width: '5%'
	            },{
	                title: '流动事由',
	                field: 'flowReason',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '上报民警',
	                field: 'reportPoliceName',
	                align: 'center',
	                valign: 'middle',
	                width: '5%'
	            },{
	                title: '预计出入时间',
	                field: 'planInOutTime',
	                align: 'center',
	                valign: 'middle',
	                width: '12%'
	            },
	            {
	                title: '回监时间',
	                field: 'backPrionTime',
	                align: 'center',
	                valign: 'middle',
	                width: '12%'
	            },
	            {
	            	title: '审批状态',
	                field: 'approveStatus',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            }]],
	            onDblClickRow:function(row){
					model.prisonerFlowApproveInfoShow = row;
					dialog.open({targetId:'show_panel',title:'罪犯流动详情',w:"80",h:"80"});
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