define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#zfdk',
		data:{
			list1:{'total':10,'rows':[
				    {"rn":1,"pr_no":"3301008901","bs":"第二监狱","pr_name":"2220","pr_gender":"1333","pr_charge":"55","pr_term":"44","pr_termbegin":"45","pr_termend":"23","pr_arrival_day":"21","pr_nationality":"34","pr_state":"13","pr_area":"11","pr_level":"34"},
				    {"rn":2,"pr_no":"3301008901","bs":"第一监狱","pr_name":"2320","pr_gender":"1457","pr_charge":"26","pr_term":"56","pr_termbegin":"45","pr_termend":"23","pr_arrival_day":"18","pr_nationality":"36","pr_state":"14","pr_area":"2","pr_level":"36"},
				    {"rn":3,"pr_no":"3301008901","bs":"第三监狱","pr_name":"2560","pr_gender":"2111","pr_charge":"34","pr_term":"43","pr_termbegin":"45","pr_termend":"23","pr_arrival_day":"16","pr_nationality":"24","pr_state":"6","pr_area":"7","pr_level":"24"},
				    {"rn":4,"pr_no":"3301008901","bs":"第四监狱","pr_name":"3230","pr_gender":"2432","pr_charge":"44","pr_term":"34","pr_termbegin":"45","pr_termend":"23","pr_arrival_day":"22","pr_nationality":"14","pr_state":"8","pr_area":"12","pr_level":"14"},
				    {"rn":5,"pr_no":"3301008901","bs":"第五监狱","pr_name":"2467","pr_gender":"1864","pr_charge":"43","pr_term":"37","pr_termbegin":"45","pr_termend":"23","pr_arrival_day":"11","pr_nationality":"31","pr_state":"3","pr_area":"5","pr_level":"31"},
				    {"rn":6,"pr_no":"3301008901","bs":"第六监狱","pr_name":"3245","pr_gender":"2754","pr_charge":"25","pr_term":"41","pr_termbegin":"45","pr_termend":"23","pr_arrival_day":"9","pr_nationality":"43","pr_state":"9","pr_area":"8","pr_level":"43"},
				    {"rn":7,"pr_no":"3301008901","bs":"xx监狱","pr_name":"2345","pr_gender":"1245","pr_charge":"36","pr_term":"48","pr_termbegin":"45","pr_termend":"23","pr_arrival_day":"17","pr_nationality":"30","pr_state":"3","pr_area":"9","pr_level":"30"},
				    {"rn":8,"pr_no":"3301008901","bs":"xxx监狱","pr_name":"2754","pr_gender":"1754","pr_charge":"38","pr_term":"30","pr_termbegin":"45","pr_termend":"23","pr_arrival_day":"9","pr_nationality":"22","pr_state":"5","pr_area":"10","pr_level":"22"},
				    {"rn":9,"pr_no":"3301008901","bs":"xx监狱","pr_name":"3578","pr_gender":"2643","pr_charge":"41","pr_term":"29","pr_termbegin":"45","pr_termend":"23","pr_arrival_day":"6","pr_nationality":"35","pr_state":"3","pr_area":"3","pr_level":"33"},
				    {"rn":10,"pr_no":"3301008901","bs":"xxx监狱","pr_name":"2684","pr_gender":"1367","pr_charge":"47","pr_term":"50","pr_termbegin":"45","pr_termend":"23","pr_arrival_day":"21","pr_nationality":"33","pr_state":"4","pr_area":"4","pr_level":"34"},
				  
				    ]}
		},
		methods:{
			
		}
	});
	
	
	/**
	 * 加载表格
	 */
	function initTable(){
		table.init("table",{
			request: {params:' ',url:' '},
			showColumns:false,
			pageList: [10,20,30,40,50],
			pageSize: 10,
			columns: [[
				{
	                title: '所属监狱',
	                field: 'bs',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '在册',
	                field: 'pr_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '在押',
	                field: 'pr_gender',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '监外执行',
	                field: 'pr_area',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '提回再审',
	                field: 'pr_level',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '中心医院',
	                field: 'pr_charge',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '社会医院',
	                field: 'pr_term',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '新犯收押',
	                field: 'pr_arrival_day',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '今日释放',
	                field: 'pr_state',
	                align: 'center',
	                valign: 'middle',
	                formatter: function(value,row,index){
						return value == '在监' ? '<span style="color:#6AB5FF;">'+value+'</span>':'<span style="color:red;">'+value+'</span>';
					}
	            }
	         ]],
	        /* onDblClickRow:function(row,$element){
	        	 dialog.open({targetId: 'prisoner_panel', title: '罪犯详情',top:5, w: 96, h: 90});
	        	 var url = "prisonDtls.html";
	        	 $('div#prisoner_panel').find('iframe#contentHTML').show();
	        	 $('div#prisoner_panel').find('iframe#contentHTML').attr('src',url);
	         }*/
		});
		table.method('load',model.list1);
	}
	
	
	
	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});