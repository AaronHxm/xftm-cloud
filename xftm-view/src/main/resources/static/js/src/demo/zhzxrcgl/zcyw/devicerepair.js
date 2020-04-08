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
		el : '#devicerepair',
		data : {
			list1 : {
				"rows" : [ {
					"rn" : 1,
					"uName":"显示器",
					"type":"挟持人质事件",
					"name" : "保护人质演练",
					'policeNum':"123123",
					"dept" : "省局指挥中心",
					"createNo" : "admin",
					"createTime" : "2017-11-21",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					'reason':"显示器破损"
					
				},{
					"rn" : 1,
					"uName":"显示器",
					"type":"公共卫生事件",
					"name" : "安全防治演练",
					'policeNum':"324324",
					"dept" : "第一监狱",
					"createNo" : "admin",
					"createTime" : "2018-5-8",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					'reason':"显示器花屏"
					
				},{
					"rn" : 1,
					"uName":"对讲机",
					"type":"重大安全生产事故",
					"name" : "电网紧急维护演练",
					'policeNum':"423423",
					"dept" : "第二监狱",
					"createNo" : "admin",
					"createTime" : "2018-4-12",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					'reason':"对讲机音质差"
					
				},{
					"rn" : 1,
					"uName":"安防监控器",
					"name" : "抓捕逃犯演练",
					"type":"罪犯逃脱",
					'policeNum':"123213",
					"dept" : "第三监狱",
					"createNo" : "admin",
					"createTime" : "2018-2-5",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					'reason':"监控器画面无法显示"
					
				},{
					"rn" : 1,
					"uName":"摄像头",
					"name" : "击毙罪犯演练",
					"type":"挟持人质事件",
					'policeNum':"435345",
					"dept" : "第四监狱",
					"createNo" : "admin",
					"createTime" : "2018-1-27",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					'reason':"摄像头线路烧毁"
					
				},{
					"rn" : 1,
					"uName":"电脑桌",
					"name" : "防火灾演练",
					'policeNum':"234234",
					"type":"自然灾害事件",
					"dept" : "第五监狱",
					"createNo" : "admin",
					"createTime" : "2018-6-16",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					'reason':"电脑桌损坏"
					
				}
				,{
					"rn" : 1,
					"uName":"交换机",
					"name" : "拯救人质演练",
					'policeNum':"237834",
					"type":"挟持人质事件",
					"dept" : "第五监狱",
					"createNo" : "admin",
					"createTime" : "2018-3-11",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					'reason':"交换机端口老化"
					
				}
				,{
					"rn" : 1,
					"uName":"电脑桌",
					"name" : "防监狱暴动特殊演练",
					'policeNum':"309334",
					"type":"罪犯暴狱事件",
					"dept" : "第五监狱",
					"createNo" : "admin",
					"createTime" : "2017-12-29",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					'reason':"电脑桌一个桌角损坏"
					
				}
				,{
					"rn" : 1,
					"uName":"摄像头",
					"name" : "防疾病传播演练",
					'policeNum':"250324",
					"type":"公共卫生事件",
					"dept" : "第五监狱",
					"createNo" : "admin",
					"createTime" : "2018-1-16",
					"loginIp" : "192.157.0.3",
					"loginTime" : "2017-12-16 10:00:00",
					'reason':"摄像头损坏"
					
				}
				],
				"total" : 10
			},
	search:{
		'plandate':'',
		'planDW':'',
		'planNo':'',
		'plantype':'',
		'planname':''
	},
	edit:{
		'plandate':'',
		'planDW':'',
		'plantype':'',
		'planname':'',
		'planDepart':''
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
	function openSearchPanel(){
//		model.search.plandate='';
//		model.search.planDW='';
//		model.search.planNo='';
//		model.search.plantype='';
//		model.search.planname='';
		dialog_search = dialog.open({targetId:'search_panel',title:'维修查询',w:'50',h:'70',top:'0%'});
		if(!index_search){
			index_search = dialog_search.index;
		}
	}
	function openEditPanel(){
		model.edit.startdate='';
		model.edit.planDW='';
		model.edit.plantype='';
		model.edit.planname='';
		model.edit.planDepart='';
		dialog_edit = dialog.open({targetId:'edit_panel',title:'报修申请',w:'50',h:'70',top:'0%'});
		if(!index_edit){
			index_edit = dialog_edit.index;
		}
	}
	function searchDb(){
		dialog.close(index_search);
		tip.alert('正在查询');
	}
	function editDb(){
		dialog.close(index_edit);
		tip.alert('正在申请');
	}
	function initTable() {
		table.init("table", {
			request : '',
			rows : 10,
			showColumns : false,
			pageList : [ 10, 20, 30, 40, 50 ],
			pageSize : 10,
			columns : [ [ {
				title : '设施编号',
				field : 'policeNum',
				align : 'center',
				valign : 'middle',
				width : '12%'
			},{
				title : '设施单位',
				align : 'center',
				valign : 'middle',
				width : '15%',
				formatter: function(value,row,index){
		                	
		                	return 'XX监狱';
		                }
			}, {
				title : '设施维修日期',
				field : 'createTime',
				align : 'center',
				valign : 'middle',
				width : '15%'
			}, {
				title : '设施名称',
				align : 'center',
				field : 'uName',
				valign : 'middle',
				width : '12%',
			}, {
				title : '设施维修原因',
				field : 'reason',
				align : 'center',
				valign : 'middle',
				width : '18%'
			}] ]
		});
		table.method('load', model.list1);
	}

	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});