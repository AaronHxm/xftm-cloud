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
		el:'#wfList',
		data:{
			wfListShow:
			 {},
			wfListList:[
	             {'orgName':'防撞柱','bumpPost':'56','bumpPostCount':43,'liftColumn':'46','liftColumnCount':68,'camera':'43','cameraCount':32,'safeCheckDoor':'55','metalDetector':'41','metalDetectorCount':28},
	             {'orgName':'防撞门','bumpPost':'21','bumpPostCount':24,'liftColumn':'33','liftColumnCount':37,'camera':'19','cameraCount':31,'safeCheckDoor':'40','metalDetector':'27','metalDetectorCount':38},
	             {'orgName':'摄像机','bumpPost':'245','bumpPostCount':213,'liftColumn':'328','liftColumnCount':277,'camera':'264','cameraCount':322,'safeCheckDoor':'296','metalDetector':'365','metalDetectorCount':293},
	             {'orgName':'报警器','bumpPost':'76','bumpPostCount':80,'liftColumn':'88','liftColumnCount':97,'camera':'127','cameraCount':70,'safeCheckDoor':'82','metalDetector':'104','metalDetectorCount':100},
	             {'orgName':'金属探测器','bumpPost':'23','bumpPostCount':26,'liftColumn':'35','liftColumnCount':19,'camera':'36','cameraCount':19,'safeCheckDoor':'26','metalDetector':'24','metalDetectorCount':27},
	             {'orgName':'安全门','bumpPost':'675','bumpPostCount':760,'liftColumn':'765','liftColumnCount':712,'camera':'895','cameraCount':880,'safeCheckDoor':'698','metalDetector':'677','metalDetectorCount':721},
	             {'orgName':'对讲机','bumpPost':'134','bumpPostCount':159,'liftColumn':'188','liftColumnCount':174,'camera':'168','cameraCount':215,'safeCheckDoor':'209','metalDetector':'176','metalDetectorCount':231},
	             {'orgName':'紧急按钮','bumpPost':'294','bumpPostCount':276,'liftColumn':'227','liftColumnCount':234,'camera':'228','cameraCount':318,'safeCheckDoor':'294','metalDetector':'295','metalDetectorCount':278},
	             {'orgName':'震动探测仪','bumpPost':'8','bumpPostCount':6,'liftColumn':'10','liftColumnCount':13,'camera':'8','cameraCount':6,'safeCheckDoor':'9','metalDetector':'12','metalDetectorCount':14},
	             {'orgName':'红外探测仪','bumpPost':'56','bumpPostCount':67,'liftColumn':'93','liftColumnCount':81,'camera':'90','cameraCount':71,'safeCheckDoor':'63','metalDetector':'72','metalDetectorCount':88}
			]
		},
		methods:{
		}
	});
	function initTable(){
		var json = {"total": model.wfListList.length, "rows": model.wfListList}
		table.init('table', {
			request : {
				params:' ',
				url:' '
			},
			data:model.wfListList,
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
		 model.wfListShow = row;
	}
	
	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});