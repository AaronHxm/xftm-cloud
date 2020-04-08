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
		el:'#policegear',
		data:{
			policegearShow:
			 {},
			policegearList:[
	             {'orgName':'防爆头盔','bumpPost':'82','bumpPostCount':93,'liftColumn':'57','liftColumnCount':79,'camera':'54','cameraCount':41,'safeCheckDoor':'70','metalDetector':'62','metalDetectorCount':35},
	             {'orgName':'防弹衣','bumpPost':'82','bumpPostCount':93,'liftColumn':'57','liftColumnCount':79,'camera':'54','cameraCount':41,'safeCheckDoor':'70','metalDetector':'62','metalDetectorCount':35},
	             {'orgName':'警棍','bumpPost':'82','bumpPostCount':93,'liftColumn':'57','liftColumnCount':79,'camera':'54','cameraCount':41,'safeCheckDoor':'70','metalDetector':'62','metalDetectorCount':35},
	             {'orgName':'防爆盾','bumpPost':'24','bumpPostCount':31,'liftColumn':'28','liftColumnCount':36,'camera':'30','cameraCount':18,'safeCheckDoor':'22','metalDetector':'25','metalDetectorCount':40},
	             {'orgName':'防爆手枪','bumpPost':'82','bumpPostCount':93,'liftColumn':'57','liftColumnCount':79,'camera':'54','cameraCount':41,'safeCheckDoor':'70','metalDetector':'62','metalDetectorCount':35},
	             {'orgName':'防爆步枪','bumpPost':'23','bumpPostCount':26,'liftColumn':'31','liftColumnCount':29,'camera':'24','cameraCount':18,'safeCheckDoor':'23','metalDetector':'21','metalDetectorCount':16},
	             {'orgName':'烟雾弹','bumpPost':'134','bumpPostCount':159,'liftColumn':'188','liftColumnCount':174,'camera':'168','cameraCount':215,'safeCheckDoor':'209','metalDetector':'176','metalDetectorCount':231},
	             {'orgName':'手铐','bumpPost':'2294','bumpPostCount':2276,'liftColumn':'2227','liftColumnCount':2234,'camera':'2228','cameraCount':2318,'safeCheckDoor':'2294','metalDetector':'2295','metalDetectorCount':2278},
	             {'orgName':'强光手电','bumpPost':'800','bumpPostCount':600,'liftColumn':'810','liftColumnCount':913,'camera':'879','cameraCount':670,'safeCheckDoor':'907','metalDetector':'1002','metalDetectorCount':1004},
	             {'orgName':'防爆工具箱','bumpPost':'56','bumpPostCount':67,'liftColumn':'93','liftColumnCount':81,'camera':'90','cameraCount':71,'safeCheckDoor':'63','metalDetector':'72','metalDetectorCount':88}
			]
		},
		methods:{
		}
	});
	function initTable(){
		var json = {"total": model.policegearList.length, "rows": model.policegearList}
		table.init('table', {
			request : {
				params:' ',
				url:' '
			},
			data:model.policegearList,
			showColumns: false,
			pageList: [10,20,30,40,50,100],
			pageSize: 10,
			columns: [[
				{
	                title: '设备名称',
	                field: 'orgName',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },
	            {
	                title: '第一监狱',
	                field: 'bumpPost',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '第二监狱',
	                field: 'bumpPostCount',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	            	title: '第三监狱',
	                field: 'liftColumn',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '第四监狱',
	                field: 'liftColumnCount',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: 'XX监狱',
	                field: 'camera',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: 'XX监狱',
	                field: 'cameraCount',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	            	title: 'XX监狱',
	                field: 'safeCheckDoor',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	            	title: 'XX监狱',
	                field: 'metalDetector',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	            	title: 'XX监狱',
	                field: 'metalDetectorCount',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            }]],
	            onDblClickRow:function(row){
	            	loadShowPanel(row);
	            	dialog.open({targetId:'show_panel',title:'详情',w:"60",h:"80"});
				}	
			});
		table.method('load', json);
	}
	function loadShowPanel(row){
		 model.policegearShow = row;
	}
	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});