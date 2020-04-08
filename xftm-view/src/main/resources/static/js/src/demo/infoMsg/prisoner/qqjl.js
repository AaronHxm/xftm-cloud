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
		el:'#qqjl',
		data:{
			list1 : {"rows":[{"rn":1,"pr_name":"李某某","area_sub_name":"九监区二分监区","person_name":"钟某某","person_relation":"母亲","phone_numver":"013958921126","start_time":"2017-11-20 19:24:09","end_time":"2017-11-20 19:29:08","time_long":"299"},
				{"rn":2,"pr_name":"李某某","area_sub_name":"九监区二分监区","person_name":"钟某某","person_relation":"女儿","phone_numver":"015258717179","start_time":"2017-11-18 18:12:51","end_time":"2017-11-18 18:14:45","time_long":"114"},
				{"rn":3,"pr_name":"李某某","area_sub_name":"九监区二分监区","person_name":"钟某某","person_relation":"母亲","phone_numver":"013958921126","start_time":"2017-11-06 11:29:22","end_time":"2017-11-06 11:34:20","time_long":"298"},
				{"rn":4,"pr_name":"李某某","area_sub_name":"九监区二分监区","person_name":"钟某某","person_relation":"母亲","phone_numver":"013958921126","start_time":"2017-10-13 19:14:26","end_time":"2017-10-13 19:19:25","time_long":"299"},
				{"rn":5,"pr_name":"李某某","area_sub_name":"老残监区","person_name":"钟某某","person_relation":"母亲","phone_numver":"013958921126","start_time":"2017-09-16 19:24:05","end_time":"2017-09-16 19:28:43","time_long":"278"},
				{"rn":6,"pr_name":"李某某","area_sub_name":"老残监区","person_name":"许某某","person_relation":"三叔","phone_numver":"013706639130","start_time":"2017-09-08 13:52:48","end_time":"2017-09-08 13:57:46","time_long":"298"},
				{"rn":7,"pr_name":"李某某","area_sub_name":"老残监区","person_name":"钟某某","person_relation":"女儿","phone_numver":"015258717179","start_time":"2017-07-28 18:45:41","end_time":"2017-07-28 18:50:40","time_long":"299"},
				{"rn":8,"pr_name":"李某某","area_sub_name":"老残监区","person_name":"钟某某","person_relation":"母亲","phone_numver":"013958921126","start_time":"2017-07-09 14:43:01","end_time":"2017-07-09 14:48:00","time_long":"299"},
				{"rn":9,"pr_name":"李某某","area_sub_name":"老残监区","person_name":"钟某某","person_relation":"母亲","phone_numver":"013958921126","start_time":"2017-05-21 18:41:04","end_time":"2017-05-21 18:46:03","time_long":"299"},
				{"rn":10,"pr_name":"李某某","area_sub_name":"老残监区","person_name":"钟某某","person_relation":"母亲","phone_numver":"013958921126","start_time":"2017-04-29 12:31:52","end_time":"2017-04-29 12:36:51","time_long":"299"}],"total":67}
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
	                title: '罪犯姓名',
	                field: 'pr_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '部门',
	                field: 'area_sub_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '通话人',
	                field: 'person_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '关系',
	                field: 'person_relation',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '拨打号码',
	                field: 'phone_numver',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '开始时间',
	                field: 'start_time',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '结束时间',
	                field: 'end_time',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '通话时长（秒）',
	                field: 'time_long',
	                align: 'center',
	                valign: 'middle'
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