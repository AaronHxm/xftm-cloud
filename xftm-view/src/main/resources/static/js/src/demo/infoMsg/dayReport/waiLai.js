define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var datepicker = require('frm/datepicker');
	var dialog = require('frm/dialog');
	var dialog_search = null;
	var index_search = null;
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#exterTraffOutInRec',
		data:{
			exterTraffOutInRecShow:{},
			checkPolice:{
				fcp_police_id:'3309109',
				fcp_police_name:'顾某某',
				fcp_dept_name:'指挥中心',
				fcp_work_phone:'611611'
			},
			liabilityPolice:{
				fcp_police_id:'3303109',
				fcp_police_name:'李某某',
				fcp_dept_name:'指挥中心',
				fcp_work_phone:'611610'
			},
			swingCardPolice:{
				fcp_police_id:'3308103',
				fcp_police_name:'宋某某',
				fcp_dept_name:'指挥中心',
				fcp_work_phone:'611615'
			},
			exterTraffOutInRecList:[
 
	      
          {'date':'2017-12-08','name':'李某某','carNo':'xAB15T0','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'第二监狱',cio_whereabouts : "七监区三分监区",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "xx省xx县xx镇xx村xx庄098号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg'},
          {'date':'2017-12-08','name':'李某某','carNo':'xAB15T0','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'第二监狱',cio_whereabouts : "七监区三分监区",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "xx省xx市xx区xx街道54号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg'},
          {'date':'2017-12-08','name':'张某某','carNo':'xAB15T0','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'第二监狱',cio_whereabouts : "七监区三分监区",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "xx省xx县xx镇xx村xx庄098号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg'},
          {'date':'2017-12-08','name':'刘某某','carNo':'xAB15T0','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'第二监狱',cio_whereabouts : "七监区三分监区",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "xx省xx市xx区xx街道54号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg'},
          {'date':'2017-12-08','name':'唐某某','carNo':'xAB15T0','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'第二监狱',cio_whereabouts : "七监区三分监区",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "xx省xx县xx镇xx村xx庄098号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg'},
          {'date':'2017-12-08','name':'李某某','carNo':'xAB15T0','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'第二监狱',cio_whereabouts : "七监区三分监区",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "xx省xx市xx区xx街道54号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg'},
          {'date':'2017-12-08','name':'张某某','carNo':'xAB15T0','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'第二监狱',cio_whereabouts : "七监区三分监区",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "xx省xx县xx镇xx村xx庄098号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg'},
          {'date':'2017-12-08','name':'黄某某','carNo':'xAB15T0','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'第二监狱',cio_whereabouts : "七监区三分监区",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "xx省xx市xx区xx街道54号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg'},
          {'date':'2017-12-08','name':'曲某某','carNo':'xAB15T0','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'第二监狱',cio_whereabouts : "七监区三分监区",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "xx省xx县xx镇xx村xx庄098号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg'},
          {'date':'2017-12-08','name':'柳某某','carNo':'xAB15T0','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'第二监狱',cio_whereabouts : "七监区三分监区",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "xx省xx市xx区xx街道54号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg'},
          {'date':'2017-12-08','name':'李某某','carNo':'xAB15T0','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'第二监狱',cio_whereabouts : "七监区三分监区",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "xx省xx县xx镇xx村xx庄098号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg'},
          {'date':'2017-12-08','name':'金某某','carNo':'xAB15T0','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'第二监狱',cio_whereabouts : "七监区三分监区",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "xx省xx市xx区xx街道54号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg'},
          {'date':'2017-12-08','name':'马某某','carNo':'xAB15T0','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'第二监狱',cio_whereabouts : "七监区三分监区",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "xx省xx县xx镇xx村xx庄098号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg'},
          {'date':'2017-12-08','name':'刘某某','carNo':'xAB15T0','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'第二监狱',cio_whereabouts : "七监区三分监区",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "xx省xx市xx区xx街道54号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg'},
          
			],
			search:{
				'startdate':'',
				'enddate':'',
				'prisonName':'',
				'name':''
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
		model.search.prisonName='';
		model.search.name='';
		dialog_search = dialog.open({targetId:'search_panel',title:'查询',w:'70',h:'60',top:'0%'});
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
		var json = {"total": model.exterTraffOutInRecList.length, "rows": model.exterTraffOutInRecList}
		table.init('table', {
			request : '',
			data:model.exterTraffOutInRecList,
			showColumns: false,
			pageList: [20,30,40,50,100],
			pageSize: 20,
			columns: [[
				{
	                title: '日期',
	                field: 'date',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },
	            {
	                title: '监狱名称',
	                field: 'prisonName',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '姓名',
	                field: 'name',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '车牌号',
	                field: 'carNo',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '状态',
	                field: 'statu',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '进出时间',
	                field: 'inOutTime',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            }]],
	            onDblClickRow:function(row){
					loadShowPanel(row);
					dialog.open({targetId:'show_panel',title:'详情',w:"90",h:"90"});
				}	
			});
		table.method('load', json);
	}
	function loadShowPanel(row){
		 model.exterTraffOutInRecShow = row;
		 $('div#collapseCar').collapse('show');
		 $('div#collapseDriver').collapse('show');
		 $('div#collapseCheckPolice').collapse('show');
		 $('div#collapseLiabilityPolice').collapse('show');
		 $('div#collapseSwingCardPolice').collapse('show');
		 $('div#overflow').animate({scrollTop: 0});
	}
	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});