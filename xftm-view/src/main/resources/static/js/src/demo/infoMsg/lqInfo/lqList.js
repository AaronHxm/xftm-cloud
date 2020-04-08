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
		el:'#lqList',
		data:{
			lqListShow:{},
			list1 : {
			"rows":[{"rn":1,"name":"市委政法委","fzr":"张某某","lxfs":"85252110","cz":"呼叫"},
				{"rn":2,"name":"xx市公安局","fzr":"李某某","lxfs":"87280114","cz":"呼叫"},
				{"rn":3,"name":"xx派出所","fzr":"李某某","lxfs":"87065709","cz":"呼叫"},
				{"rn":4,"name":"xx省高级人民法院","fzr":"朱某某","lxfs":"87393305","cz":"呼叫"},
				{"rn":5,"name":"xx市中级人民法院","fzr":"薛某某","lxfs":"85106667","cz":"呼叫"},
				{"rn":6,"name":"xx省武警总队","fzr":"宋某某","lxfs":"7075959","cz":"呼叫"},
				{"rn":7,"name":"xx武警支队","fzr":"楚某某","lxfs":"85100114","cz":"呼叫"},
				{"rn":8,"name":"xx市xx区人民法院","fzr":"薛某某","lxfs":"84102323","cz":"呼叫"},
				{"rn":9,"name":"xx市xx区公安局分局","fzr":"宋某某","lxfs":"87260123","cz":"呼叫"},
				{"rn":10,"name":"xx派出所","fzr":"朱某某","lxfs":"86063837","cz":"呼叫"}],
				"total":57}
		},
		methods:{}
	});
	function initTable(){
		table.init("table",{
			request: {params:' ',url:' '},
			showColumns: false,
			columns: [[
				{
	                title: '名称',
	                field: 'name',
	                align: 'left',
	                valign: 'middle'
	            },{
	                title: '负责人',
	                field: 'fzr',
	                align: 'left',
	                valign: 'middle'
	            },{
	                title: '值班电话',
	                field: 'lxfs',
	                align: 'left',
	                valign: 'middle'
	            },{
	                title: '操作',
	                field: 'cz',
	                align: 'left',
	                valign: 'middle',
	                formatter: function(value,row,index){
						return '<a class="btn btn-xs btn-info">'+value+'</a>';
					}
	            }
	         ]]
		});
		table.method('load',model.list1);
	}
	
	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});