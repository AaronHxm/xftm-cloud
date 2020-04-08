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
		el:'#thly',
		data:{
			list1 : {
			"rows":[{"rn":1,"infotime":"2017-07-30 15:18:46","po_name":"章某某","pr_name":"李某某","prisonername":"九监区","thsc":"00:00:53","indfdesc":"个别教育.月度谈","infodegree":"正常","cz":"播放"},
				{"rn":2,"infotime":"2017-07-22 20:15:03","po_name":"章某某","pr_name":"张某某","prisonername":"九监区","thsc":"00:07:11","indfdesc":"个别教育.十必谈","infodegree":"一般异常","cz":"播放"},
				{"rn":3,"infotime":"2017-07-06 19:41:11","po_name":"章某某","pr_name":"王某某","prisonername":"九监区","thsc":"00:00:42","indfdesc":"个别教育.月度谈","infodegree":"正常","cz":"播放"},
				{"rn":4,"infotime":"2017-06-24 08:08:04","po_name":"姜某某","pr_name":"李某某","prisonername":"九监区","thsc":"00:08:44","indfdesc":"个别教育.月度谈","infodegree":"正常","cz":"播放"},
				{"rn":5,"infotime":"2017-05-28 18:53:09","po_name":"章某某","pr_name":"李某某","prisonername":"九监区","thsc":"00:00:36","indfdesc":"个别教育.月度谈","infodegree":"正常","cz":"播放"},
				{"rn":6,"infotime":"2017-04-30 18:47:33","po_name":"章某某","pr_name":"黄某某","prisonername":"九监区","thsc":"00:01:32","indfdesc":"个别教育.月度谈","infodegree":"正常","cz":"播放"},
				{"rn":7,"infotime":"2017-04-24 15:46:46","po_name":"周某某","pr_name":"赵某某","prisonername":"九监区","thsc":"00:00:42","indfdesc":"个别教育.月度谈","infodegree":"正常","cz":"播放"},
				{"rn":8,"infotime":"2017-04-18 20:32:18","po_name":"章某某","pr_name":"商某某","prisonername":"九监区","thsc":"00:00:39","indfdesc":"个别教育.月度谈","infodegree":"正常","cz":"播放"},
				{"rn":9,"infotime":"2017-02-27 18:39:46","po_name":"章某某","pr_name":"殷某某","prisonername":"九监区","thsc":"00:02:53","indfdesc":"个别教育.月度谈","infodegree":"正常","cz":"播放"},
				{"rn":10,"infotime":"2017-02-25 18:18:54","po_name":"章某某","pr_name":"程某某","prisonername":"九监区","thsc":"00:01:23","indfdesc":"个别教育.月度谈","infodegree":"正常","cz":"播放"}],
				"total":57}
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
			showColumns: false,
			columns: [[
				{
	                title: '谈话民警',
	                field: 'po_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '谈话时间',
	                field: 'infotime',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '被谈罪犯',
	                field: 'pr_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '谈话部门',
	                field: 'prisonername',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '谈话时长',
	                field: 'thsc',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '谈话类型',
	                field: 'indfdesc',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '危险评估',
	                field: 'infodegree',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '操作',
	                field: 'cz',
	                align: 'center',
	                valign: 'middle',
	                formatter: function(value,row,index){
						return value == '播放' ? '<span style="color:green;">'+value+'</span>':'<span style="color:red;">'+value+'</span>';
					}
	            }
	         ]]
		});
		table.method('load',model.list1);
	}
	
	
	
	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});