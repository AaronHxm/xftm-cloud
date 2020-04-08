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
		el:'#yqxx',
		data:{
			list1:{'total':15,'rows':[
				    {"rn":1,"lb":"投诉","bh":"20171226001","tittle":"审批手续繁杂,时间长","fbsj":"2017-12-26","state":"已转交"},
				    {"rn":2,"lb":"建议","bh":"20171226002","tittle":"关于开通建设新路","fbsj":"2017-12-26","state":"已转交"},
				    {"rn":3,"lb":"举报","bh":"20171225001","tittle":"上班时间不作为","fbsj":"2017-12-25","state":"已转交"},
				    {"rn":4,"lb":"建议","bh":"20171225002","tittle":"探监时间延长","fbsj":"2017-12-25","state":"已回复"},
				    {"rn":5,"lb":"咨询","bh":"20171225003","tittle":"放假安排","fbsj":"2017-12-25","state":"已转交"},
				    {"rn":6,"lb":"办事","bh":"20171223001","tittle":"送货上门","fbsj":"2017-12-23","state":"已回复"},
				    {"rn":7,"lb":"建议","bh":"20171223002","tittle":"关于时间安排问题","fbsj":"2017-12-23","state":"已转交"},
				    {"rn":8,"lb":"咨询","bh":"20171222001","tittle":"车辆停放问题","fbsj":"2017-12-22","state":"已转交"},
				    {"rn":9,"lb":"投诉","bh":"20171222002","tittle":"乱停车","fbsj":"2017-12-22","state":"已回复"},
				    {"rn":10,"lb":"投诉","bh":"20171221001","tittle":"乱扔垃圾","fbsj":"2017-12-21","state":"已转交"}
				    ]},
		yqList: {"tittle":"审批手续繁杂,时间长","nr":"审批手续繁杂,时间长审批手续繁杂,时间长审批手续繁杂,时间长审批手续繁杂,时间长审批手续繁杂,时间长","fbsj":"2017-12-26"}
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
	                title: '类别',
	                field: 'lb',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '编号',
	                field: 'bh',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '内容标题',
	                field: 'tittle',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '发布时间',
	                field: 'fbsj',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '状态',
	                field: 'state',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]],
	         onDblClickRow:function(row,$element){
	        	 dialog.open({targetId: 'prisoner_panel', title: '舆情详情',top:5, w: 96, h: 90});
	        	 //var url = "prisonDtls.html";
	        	 $('div#prisoner_panel').show();
	        	// $('div#prisoner_panel').find('iframe#contentHTML').attr('src',url);
	         }
		});
		table.method('load',model.list1);
	}
	
	
	
	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});