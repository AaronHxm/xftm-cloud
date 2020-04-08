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
				fcp_police_name:'李某',
				fcp_dept_name:'指挥中心',
				fcp_work_phone:'611610'
			},
			swingCardPolice:{
				fcp_police_id:'3308103',
				fcp_police_name:'宋某',
				fcp_dept_name:'指挥中心',
				fcp_work_phone:'611615'
			},
			exterTraffOutInRecList:[
	             {'date':'2017-12-08','name':'谈某某','carNo':'浙AB15T0','statu':'进监','inOutTime':'2017-12-08 11:05','prisonName':'第二监狱',cio_whereabouts : "信息手续确认无误，准许进监",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "安徽省蒙城县小涧镇齐山村姜蔡庄098号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg',police:'徐某',police_check:'李某',fci_check : "未复核"},
	             {'date':'2017-12-08','name':'李某某','carNo':'浙BA1530','statu':'进监','inOutTime':'2017-12-08 12:05','prisonName':'第一监狱',cio_whereabouts : "信息手续确认无误，准许进监",cio_reason : "送水",fci_car_type : "小货车",fci_company_name : "一监区三分监区",fci_home_address : "浙江省杭州市余杭区临平路55号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy02.jpg',carImg:'img/car03.jpg',carInImg:'img/car04.jpg',police:'江某某',police_check:'钱某某',fci_check : "已复核"},
	             {'date':'2017-12-08','name':'左某某','carNo':'浙AC1520','statu':'进监','inOutTime':'2017-12-08 13:05','prisonName':'第二监狱',cio_whereabouts : "信息手续确认无误，准许进监",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "二监区三分监区",fci_home_address : "江苏省南京市江宁区诚信大道56号",fci_id_card : "320722195601216301",fci_sex : "男",img:'img/jsy03.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg',police:'陈某某',police_check:'着某某',fci_check : "已复核"},
	             {'date':'2017-12-08','name':'连某某','carNo':'浙AC1520','statu':'出监','inOutTime':'2017-12-08 15:05','prisonName':'第四监狱',cio_whereabouts : "信息手续确认无误，准许进监",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "二监区三分监区",fci_home_address : "江苏省南京市江宁区诚信大道56号",fci_id_card : "320722195601216301",fci_sex : "男",img:'img/jsy03.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg',police:'王某',police_check:'陈某某',fci_check : "未复核"},
	             {'date':'2017-12-08','name':'烟某某','carNo':'浙BA1530','statu':'出监','inOutTime':'2017-12-08 16:02','prisonName':'第二监狱',cio_whereabouts : "信息手续确认无误，准许进监",cio_reason : "送水",fci_car_type : "小货车",fci_company_name : "一监区三分监区",fci_home_address : "浙江省杭州市余杭区临平路55号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy02.jpg',carImg:'img/car03.jpg',carInImg:'img/car04.jpg',police:'朱某某',police_check:'林某',fci_check : "未复核"},
	             {'date':'2017-12-08','name':'解某某','carNo':'浙DB0586','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'绍兴监狱',cio_whereabouts : "信息手续确认无误，准许进监",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "安徽省蒙城县小涧镇齐山村姜蔡庄098号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg',police:'郑某',police_check:'苏某',fci_check : "未复核"},
	             {'date':'2017-12-08','name':'汗某某','carNo':'浙C0978D','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'台州监狱',cio_whereabouts : "信息手续确认无误，准许进监",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "安徽省蒙城县小涧镇齐山村姜蔡庄098号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg',police:'王某某',police_check:'王某某',fci_check : "已复核"},
	             {'date':'2017-12-08','name':'杭某某','carNo':'浙FCW871','statu':'出监','inOutTime':'2017-12-08 13:05','prisonName':'湖州监狱',cio_whereabouts : "信息手续确认无误，准许进监",cio_reason : "送货",fci_car_type : "中货车",fci_company_name : "七监区三分监区",fci_home_address : "安徽省蒙城县小涧镇齐山村姜蔡庄098号",fci_id_card : "341224197803159872",fci_sex : "男",img:'img/jsy.jpg',carImg:'img/car02.jpg',carInImg:'img/car01.jpg',police:'菜某某',police_check:'徐某',fci_check : "已复核"}
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
			showColumns: true,
			pageList: [20,30,40,50,100],
			pageSize: 20,
			columns: [[
				{
					field: 'states',
					checkbox:true,
					align: 'center',
	                valign: 'middle',
	                width:'4%'
				},{
	                title: '复核单位',
	                field: 'prisonName',
	                align: 'center',
	                valign: 'middle',
	                width: '10%',
	                formatter: function(value,row,index){
	                	
	                	return 'XX监狱';
	                }
	            },{
	                title: '车辆进出情况',
	                field: 'statu',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },
	            {
	                title: '车辆牌号',
	                field: 'carNo',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '进出人员姓名',
	                field: 'name',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '进出时间',
	                field: 'inOutTime',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '进出事由',
	                field: 'cio_reason',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '负责人',
	                field: 'police',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '复核人',
	                field: 'police_check',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '复核情况',
	                field: 'cio_whereabouts',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '复核状态',
	                field: 'fci_check',
	                align: 'center',
	                valign: 'middle',
	                width: '10%',
	                formatter: function(value, row, index){
	 	              return value == '未复核' ? '<span style="color:#DC143C;">'+value+'</span>':'<span style="color:#00FF00;">' +value+'</span>';
	 	           }
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