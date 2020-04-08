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
		el:'#dangervehicle',
		data:{
			dangerResInOutRecordShow:{},
			dangerResInOutRecordList:[
	             {'type':'罪犯企图自杀','name':'需要使用梯子进行设备维修','number':2,'applyer':'李某','dept':'第二监狱','time':'2017-12-08 13:05',check_p:'藤某某',company:'余杭医院救护人员',vehicle:'救护车',vehicle_code:'浙AF322'},
	             {'type':'电网大规模故障','name':'水管需要更换','number':1,'applyer':'王某','dept':'第三监狱','time':'2017-12-08 14:05',check_p:'终某某',company:'电网工程人员',vehicle:'电网工程车',vehicle_code:'浙AC376'},
	             {'type':'设备故障','name':'需要使用梯子进行设备维修','number':1,'applyer':'赵某','dept':'第四监狱','time':'2017-12-09 12:03',check_p:'玉某某',company:'设备维护修理人员',vehicle:'工程车',vehicle_code:'浙DE279'},
	             {'type':'监狱起火','name':'需要使用梯子进行设备维修','number':1,'applyer':'王某某','dept':'第五监狱','time':'2017-12-09 15:05',check_p:'镇某某',company:'消防人员',vehicle:'消防车',vehicle_code:'浙A9087'},
	             {'type':'设备故障','name':'需要小刀进行设备维护','number':1,'applyer':'李某','dept':'第六监狱','time':'2017-12-09 18:05',check_p:'兆某某',company:'设备维护修理人员',vehicle:'工程车',vehicle_code:'浙AH602'}
			],
			search:{
				'type':'',
				'name':'',
				'dept':'',
				'time':''
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
		model.search.prisonName='';
		model.search.name='';
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
		var json = {"total": model.dangerResInOutRecordList.length, "rows": model.dangerResInOutRecordList}
		table.init('table', {
			request : '',
			data:model.dangerResInOutRecordList,
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
	            },{
	                title: '进出车辆',
	                field: 'vehicle',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '车牌号码',
	                field: 'vehicle_code',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '事由',
	                field: 'type',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },
	            {
	                title: '进出时间',
	                field: 'name',
	                align: 'center',
	                valign: 'middle',
	                width: '15%'
	            },{
	                title: '随车人员',
	                field: 'company',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '审批人',
	                field: 'check_p',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '复核人',
	                field: 'applyer',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            }]],
	            onDblClickRow:function(row){
					model.dangerResInOutRecordShow = row;
					dialog.open({targetId:'show_panel',title:'详情',w:"80",h:"80"});
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