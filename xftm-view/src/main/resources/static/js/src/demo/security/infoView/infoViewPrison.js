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
		el:'#infoViewPrison',
		data:{
			infoViewPrisonShow:{},
			infoViewPrisonList:[
			     {'orgName':'第一监狱','registerCount':2500,'warrantyCount':3,'takeBackCount':4,'lendCount':2,'remandCount':2493,'prisonCount':2491,'factoryCount':0,'hosipitalCount':0,'hosipitalOutCount':0},
	             {'orgName':'第二监狱','registerCount':3600,'warrantyCount':5,'takeBackCount':4,'lendCount':3,'remandCount':3591,'prisonCount':3588,'factoryCount':0,'hosipitalCount':0,'hosipitalOutCount':0},
	             {'orgName':'第三监狱','registerCount':3200,'warrantyCount':3,'takeBackCount':3,'lendCount':1,'remandCount':3196,'prisonCount':3195,'factoryCount':0,'hosipitalCount':0,'hosipitalOutCount':0},
	             {'orgName':'第四监狱','registerCount':2900,'warrantyCount':4,'takeBackCount':3,'lendCount':3,'remandCount':2883,'prisonCount':2880,'factoryCount':0,'hosipitalCount':0,'hosipitalOutCount':0},
	             {'orgName':'第五监狱','registerCount':1700,'warrantyCount':2,'takeBackCount':2,'lendCount':4,'remandCount':1696,'prisonCount':1692,'factoryCount':0,'hosipitalCount':0,'hosipitalOutCount':0},
	             {'orgName':'第六监狱','registerCount':2500,'warrantyCount':3,'takeBackCount':4,'lendCount':2,'remandCount':2493,'prisonCount':2491,'factoryCount':0,'hosipitalCount':0,'hosipitalOutCount':0},
	             {'orgName':'乔司监狱','registerCount':2900,'warrantyCount':4,'takeBackCount':3,'lendCount':3,'remandCount':2883,'prisonCount':2880,'factoryCount':0,'hosipitalCount':0,'hosipitalOutCount':0},
	             {'orgName':'湖州监狱','registerCount':1700,'warrantyCount':2,'takeBackCount':2,'lendCount':4,'remandCount':1696,'prisonCount':1692,'factoryCount':0,'hosipitalCount':0,'hosipitalOutCount':0},
	             {'orgName':'高桥监狱','registerCount':2500,'warrantyCount':3,'takeBackCount':4,'lendCount':2,'remandCount':2493,'prisonCount':2491,'factoryCount':0,'hosipitalCount':0,'hosipitalOutCount':0},
	             {'orgName':'临海监狱','registerCount':2900,'warrantyCount':4,'takeBackCount':3,'lendCount':3,'remandCount':2883,'prisonCount':2880,'factoryCount':0,'hosipitalCount':0,'hosipitalOutCount':0},
	             {'orgName':'之江监狱','registerCount':1700,'warrantyCount':2,'takeBackCount':2,'lendCount':4,'remandCount':1696,'prisonCount':1692,'factoryCount':0,'hosipitalCount':0,'hosipitalOutCount':0},
	             {'orgName':'望春监狱','registerCount':2500,'warrantyCount':3,'takeBackCount':4,'lendCount':2,'remandCount':2493,'prisonCount':2491,'factoryCount':0,'hosipitalCount':0,'hosipitalOutCount':0},
	             {'orgName':'金华监狱','registerCount':2500,'warrantyCount':3,'takeBackCount':4,'lendCount':2,'remandCount':2493,'prisonCount':2491,'factoryCount':0,'hosipitalCount':0,'hosipitalOutCount':0},
	             {'orgName':'黄湖监狱','registerCount':2500,'warrantyCount':3,'takeBackCount':4,'lendCount':2,'remandCount':2493,'prisonCount':2491,'factoryCount':0,'hosipitalCount':0,'hosipitalOutCount':0}
			],
			search:{
				'orgName':'',
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
		var json = {"total": model.infoViewPrisonList.length, "rows": model.infoViewPrisonList}
		table.init('table', {
			request : '',
			data:model.infoViewPrisonList,
			showColumns: false,
			pageList: [10,20,30,40,50,100],
			pageSize: 10,
			columns: [[
				{
	                title: '单位名称',
	                field: 'orgName',
	                align: 'center',
	                valign: 'middle',
	                width: '10%',
	                formatter: function(value,row,index){
	                	
	                	return 'XX监狱';
	                }
	            },
	            {
	                title: '在册总数',
	                field: 'registerCount',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '保外',
	                field: 'warrantyCount',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	            	title: '提回',
	                field: 'takeBackCount',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '特借',
	                field: 'lendCount',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '监内医院',
	                field: 'hosipitalCount',
	                align: 'center',
	                valign: 'middle',
	                width: '5%'
	            },{
	                title: '监外医院',
	                field: 'hosipitalOutCount',
	                align: 'center',
	                valign: 'middle',
	                width: '12%'
	            },
	            {
	                title: '在押',
	                field: 'remandCount',
	                align: 'center',
	                valign: 'middle',
	                width: '12%'
	            },
	            {
	            	title: '在监',
	                field: 'prisonCount',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },
	            {
	            	title: '厂房',
	                field: 'factoryCount',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            }]],
	            onDblClickRow:function(row){
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