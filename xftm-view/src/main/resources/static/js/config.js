/*
	requirejs config 配置项
	@s aaron
	baseUrl:默认的第三方插件库路径
	paths:自定义的插件库路径 key val 形式；
				其中 key 即为调用时的虚拟目录
				如下方的 'hz':'../js/src' 在页面调用 requirejs(['hz/home/index']);其实就是加载的 js/src/home/index.js
*/
var ip = window.document.location.href;	// 前端页面访问地址
ip = "http://crm.xianfengtaimeng.com:9511/";
var prjName = 'aaaaa';
var prjNameB = 'aaaaa';
var basePath = ctx = ip + prjName + '/';

var wip = ip;	// 前端页面访问地址
var bip = ip;	// 后台数据访问的地址
var mip = ip;	// 地图数据访问的地址

var WURL =  wip + 'aaaaa/';		// 前端统一资源URL
var BURL =  bip + 'aaaaa/';		// 后台统一资源URL

var mapBasePath = 'http://' + mip + ':8080/MapResource/';	// 地图资源文件访问根URL
var pathFindingURL = mapBasePath + 'mesh-data/';			// 地图寻路资源文件访问的URL
var websocketUrl = 'ws://' + bip + ':8442/websocket';
var videoWebsocketUrl = 'ws://127.0.0.1:4502/websocket';
requirejs.config({
	'baseUrl': WURL + '/libs',
	'paths': {
	  	'hz.frm': '../js/hz.frm',//内部核心框架库
		'hz':'../js/src',
		'sys':'../js/src/sys',
		'cds':'../js/src/cds',
		'frm':'../js/frm',
		'jquery':'jquery/jquery',
		'bootstrap':'bootstrap/bootstrap',
		'bootstrapMenu':'bootstrap/BootstrapMenu.min',
		'layer':'layer/layer',
		'hzdate':'hzdate/hzdate',
		'vue':'vue/vue.min',
		'echarts':'echarts/echarts.min',
		'zrender':'echarts/zrender.min',
		'echarts_theme':'echarts/theme',
		'map':'echarts/map',
		'highcharts':'highcharts/highcharts',
		'highchartsMore':'highcharts/highcharts-more',
		'highchartsModules':'highcharts/modules',
		'solidGauge':'highcharts/modules/solid-gauge',
		'fastclick':'fastclick/fastclick',//用于触屏消除300ms点击延迟
		'table':'bootstrap/bootstraptable/bootstrap-table',
		'table-export':'bootstrap/bootstraptable/table-export',
		'ztree':'ztree/js/jquery.ztree.all.min',
		'webuploader':'webuploader/webuploader.min',
		'moment':'moment/moment.min',
		'twix':'moment/twix.min',
		'cxcolor':'cxcolor/jquery.cxcolor',
		'twix':'moment/twix.min',
		'fileSaver':'wordexport/FileSaver',
		'wordexport':'wordexport/jquery.wordexport',
		'wdate':'wdate/WdatePicker',
		'bootstraptree':'../js/src/demo/emergency/bootstraptree/bootstrap-treeview.min'
	},
	'shim': {
		'bootstrap':['jquery'],//bootstrap都依赖于jquery
		'wdate':['jquery'],	
		'frm/datepicker':['jquery'],
		'layer':['jquery'],
		'table':['bootstrap','jquery'],
		'table-export':['table'],
		'ztree':['jquery'],
		'cxcolor':['jquery'],
		'wordexport':['jquery','fileSaver'],
		'highcharts':['jquery'],
		'highchartsMore':['highcharts'],
		'solidGauge':['highcharts', 'highchartsMore'],
		'bootstraptree':['bootstrap','jquery']
	}
});
