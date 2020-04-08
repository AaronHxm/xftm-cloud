define(function(require) {
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var datepicker = require('frm/datepicker');
	var dialog = require('frm/dialog');
	var dialog_search = null;
	var index_search = null;
	var index_edit = null;
	var dialog_edit = null;
	/**
	 * 创建模型
	 */
	var model = new vue({
		el : '#summary',
		data : {
			list1 : {
				"rows" : [ {
					"rn" : 1,
					"uName":"linquan",
					"type":"挟持人质事件",
					"name" : "保护人质演练",
					'policeNum':"123123",
					"dept" : "省局指挥中心",
					"createNo" : "admin",
					"createTime" : "2017-12-16",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					"lostgoods":"无"
					
				},{
					"rn" : 1,
					"uName":"xjsfowe",
					"type":"公共卫生事件",
					"name" : "安全防治演练",
					'policeNum':"324324",
					"dept" : "第一监狱",
					"createNo" : "admin",
					"createTime" : "2018-1-5",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					"lostgoods":"无"
				},{
					"rn" : 1,
					"uName":"kwewoijs",
					"type":"重大安全生产事故",
					"name" : "电网紧急维护演练",
					'policeNum':"423423",
					"dept" : "第二监狱",
					"createNo" : "admin",
					"createTime" : "2017-10-13",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					"lostgoods":"无"
				},{
					"rn" : 1,
					"uName":"dfgafsfwe",
					"name" : "抓捕逃犯演练",
					"type":"罪犯逃脱",
					'policeNum':"123213",
					"dept" : "第三监狱",
					"createNo" : "admin",
					"createTime" : "2017-12-29",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					"lostgoods":"无"
					
				},{
					"rn" : 1,
					"uName":"weweqwe",
					"name" : "击毙罪犯演练",
					"type":"挟持人质事件",
					'policeNum':"435345",
					"dept" : "第四监狱",
					"createNo" : "admin",
					"createTime" : "2017-12-1",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					"lostgoods":"无"
					
				},{
					"rn" : 1,
					"uName":"srtertgd",
					"name" : "防火灾演练",
					'policeNum':"234234",
					"type":"自然灾害事件",
					"dept" : "第五监狱",
					"createNo" : "admin",
					"createTime" : "2017-11-4",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					"lostgoods":"无"
					
				}
				,{
					"rn" : 1,
					"uName":"srtertgd",
					"name" : "拯救人质演练",
					'policeNum':"237834",
					"type":"挟持人质事件",
					"dept" : "第五监狱",
					"createNo" : "admin",
					"createTime" : "2017-10-8",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					"lostgoods":"无"
					
				}
				,{
					"rn" : 1,
					"uName":"srtertgd",
					"name" : "防监狱暴动特殊演练",
					'policeNum':"309334",
					"type":"罪犯暴狱事件",
					"dept" : "第五监狱",
					"createNo" : "admin",
					"createTime" : "2017-12-26",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					"lostgoods":"无"
					
				}
				,{
					"rn" : 1,
					"uName":"srtertgd",
					"name" : "防疾病传播演练",
					'policeNum':"250324",
					"type":"公共卫生事件",
					"dept" : "第五监狱",
					"createNo" : "admin",
					"createTime" : "2017-12-19",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					"lostgoods":"无"
					
				}
				,{
					"rn" : 1,
					"uName":"srtertgd",
					"name" : "关于防撞们破损，罪犯出逃演练",
					'policeNum':"230495",
					"type":"重大安全生产事故",
					"dept" : "第五监狱",
					"createNo" : "admin",
					"createTime" : "2017-11-14",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					"lostgoods":"无"
					
				}],
				"total" : 10
			}
		},
		methods : {
			openSearchPanel:function(){
				openSearchPanel();
			},
			openEditPanel:function(){
				openEditPanel();
			},
			searchDb:function(){
				searchDb();},
			editDb:function(){
					editDb();},


		}
	});

	/**
	 * 加载表格
	 */
	function initTable() {
		table.init("table", {
			request : '',
			rows : 10,
			showColumns : false,
			pageList : [ 10, 20, 30, 40, 50 ],
			pageSize : 10,
			columns : [ [  {
				title : '演练预案类型',
				field : 'type',
				align : 'center',
				valign : 'middle',
				width : '15%'
			}, {
				title : '演练预案名称',
				field : 'name',
				align : 'center',
				valign : 'middle',
				width : '15%'
			},{
				title : '预案演练日期',
				field : 'createTime',
				align : 'center',
				valign : 'middle',
				width : '15%'
			}, {
				title : '参与部门',
				align : 'center',
				valign : 'middle',
				width : '10%',
				  formatter: function(value,row,index){
	                	
	                	return 'XX监狱';
	                }
			},{
				title : '物资损耗',
				field : 'lostgoods',
				align : 'center',
				valign : 'middle',
				width : '8%'
			},{
				title : '人员伤亡',
				field : 'lostgoods',
				align : 'center',
				valign : 'middle',
				width : '8%'
			}] ],
			 onDblClickRow:function(row){
	            	dialog.open({targetId:'show_panel',title:'演练总结',w:"90",h:"100"});
				},
				
		});
		table.method('load', model.list1);
	}
	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});