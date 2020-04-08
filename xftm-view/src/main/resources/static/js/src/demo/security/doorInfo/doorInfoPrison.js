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
		el:'#doorInfoPrison',
		data:{
			doorInfoPrisonShow:{},
			doorInfoPrisonList:[
	             {'orgName':'第二监狱','vendor':'杭州xx公司','buildTime':'2007-12-08','repairTime':3,'lifeLength':20,'AC_VPASSCount':2,'monitorCount':3},
	             {'orgName':'第三监狱','vendor':'江苏xx公司','buildTime':'2009-10-08','repairTime':2,'lifeLength':20,'AC_VPASSCount':3,'monitorCount':4},
	             {'orgName':'第四监狱','vendor':'安徽xx公司','buildTime':'2007-11-08','repairTime':4,'lifeLength':15,'AC_VPASSCount':1,'monitorCount':2},
	             {'orgName':'第五监狱','vendor':'湖南xx公司','buildTime':'2007-12-08','repairTime':1,'lifeLength':20,'AC_VPASSCount':2,'monitorCount':2},
	             {'orgName':'第六监狱','vendor':'浙江xx公司','buildTime':'2006-09-08','repairTime':2,'lifeLength':20,'AC_VPASSCount':2,'monitorCount':3}
			]
		},
		methods:{
		}
	});
	function initTable(){
		var json = {"total": model.doorInfoPrisonList.length, "rows": model.doorInfoPrisonList}
		table.init('table', {
			request : '',
			data:model.doorInfoPrisonList,
			showColumns: false,
			pageList: [10,20,30,40,50,100],
			pageSize: 10,
			columns: [[
				{
	                title: '单位名称',
	                field: 'orgName',
	                align: 'center',
	                valign: 'middle',
	                width: '12%',
	                formatter: function(value,row,index){
	                	
	                	return 'XX监狱';
	                }
	            },
	            {
	                title: 'AB门生产厂商',
	                field: 'vendor',
	                align: 'center',
	                valign: 'middle',
	                width: '12%'
	            },{
	                title: '安装时间',
	                field: 'buildTime',
	                align: 'center',
	                valign: 'middle',
	                width: '5%'
	            },{
	            	title: '维修次数',
	                field: 'repairTime',
	                align: 'center',
	                valign: 'middle',
	                width: '5%'
	            },{
	                title: '使用寿命',
	                field: 'lifeLength',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            },{
	                title: '指纹打卡器数目',
	                field: 'AC_VPASSCount',
	                align: 'center',
	                valign: 'middle',
	                width: '5%'
	            },{
	                title: '监控设备数目',
	                field: 'monitorCount',
	                align: 'center',
	                valign: 'middle',
	                width: '12%'
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