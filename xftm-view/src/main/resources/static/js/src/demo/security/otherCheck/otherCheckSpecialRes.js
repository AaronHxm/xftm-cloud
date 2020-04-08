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
		el:'#otherCheckSpecialRes',
		data:{
			otherCheckSpecialResShow:{},
			otherCheckSpecialResList:[
				{'type':'麻醉药品','name':'物资运送','number':2,'applyer':'李某',dept:'第二监狱','time':'2017-12-08 13:05','reason':'',check:'局某某'},
				{'type':'麻醉药品','name':'电网故障维修','number':1,'applyer':'王某某','dept':'第三监狱','time':'2017-12-08 14:05','reason':'',check:'廖某某'},
				{'type':'腐蚀品','name':'药品运送','number':1,'applyer':'赵某某','dept':'第四监狱','time':'2017-12-09 12:03','reason':'',check:'贺某某'},
				{'type':'腐蚀品','name':'危险品运送','number':1,'applyer':'王某','dept':'第五监狱','time':'2017-12-09 15:05','reason':'',check:'赖某'},
				{'type':'腐蚀品','name':'危险品运送','number':1,'applyer':'凤某某','dept':'金华监狱','time':'2017-12-08 14:05','reason':'',check:'庹某某'},
				{'type':'腐蚀品','name':'物资运送','number':1,'applyer':'京某','dept':'湖州监狱','time':'2017-12-08 12:45','reason':'',check:'宏某某'},
				{'type':'腐蚀品','name':'安全门维修','number':1,'applyer':'赖某','dept':'绍兴监狱','time':'2017-12-08 15:51','reason':'',check:'花某'},
				{'type':'植物','name':'安全故障维护','number':1,'applyer':'李某某','dept':'第六监狱','time':'2017-12-09 18:05','reason':'',check:'信某某'}
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
			},
			opencheck:function(){
				tip.alert('已复核');
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
		var json = {"total": model.otherCheckSpecialResList.length, "rows": model.otherCheckSpecialResList}
		table.init('table', {
			request : '',
			data:model.otherCheckSpecialResList,
			showColumns: true,
			pageList: [10,20,30,40,50,100],
			pageSize: 10,
			columns: [[
				{
					field: 'states',
					checkbox:true,
					align: 'center',
	                valign: 'middle',
	                width:'4%'
				},{
	                title: '单位',
	                field: 'dept',
	                align: 'center',
	                valign: 'middle',
	                width: '10%',
	                formatter: function(value,row,index){
	                	
	                	return 'XX监狱';
	                }
	            },
	            {
	                title: '复核信息',
	                field: 'name',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '复核通过时间',
	                field: 'time',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '审批人',
	                field: 'applyer',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '复核人',
	                field: 'check',
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