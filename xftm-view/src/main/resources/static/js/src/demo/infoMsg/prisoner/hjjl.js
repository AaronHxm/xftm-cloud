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
		el:'#hjjl',
		data:{
			list1 : {
				"rows" : [ {
					"rn" : 1,
					"pr_name" : "李某某",
					"visitor_info" : "许某某(女儿)；李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 3,
					"state" : "超时结束",
					"startdate" : "2017-08-22 10:20:52",
					"enddate" : "2017-08-22 10:50:52"
				}, {
					"rn" : 2,
					"pr_name" : "李某某",
					"visitor_info" : "许某某(女儿)；李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 1,
					"state" : "正常结束",
					"startdate" : "2016-06-21 13:56:19",
					"enddate" : "2016-06-21 14:26:18"
				}, {
					"rn" : 3,
					"pr_name" : "李某某",
					"visitor_info" : "钟某某(表妹,)；章某某(,表妹夫,)",
					"visittype" : "普见",
					"prenum" : 3,
					"state" : "正常结束",
					"startdate" : "2016-05-17 14:33:21",
					"enddate" : "2016-05-17 15:03:21"
				}, {
					"rn" : 4,
					"pr_name" : "李某某",
					"visitor_info" : "李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 2,
					"state" : "正常结束",
					"startdate" : "2015-06-23 14:27:25",
					"enddate" : "2015-06-23 14:57:25"
				}, {
					"rn" : 5,
					"pr_name" : "李某某",
					"visitor_info" : "李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 1,
					"state" : "超时结束",
					"startdate" : "2015-02-10 09:39:30",
					"enddate" : "2015-02-10 10:09:29"
				}, {
					"rn" : 6,
					"pr_name" : "李某某",
					"visitor_info" : "李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 1,
					"state" : "正常结束",
					"startdate" : "2014-07-22 08:50:25",
					"enddate" : "2014-07-22 09:20:25"
				}, {
					"rn" : 7,
					"pr_name" : "李某某",
					"visitor_info" : "李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 2,
					"state" : "超时结束",
					"startdate" : "2014-05-20 08:38:35",
					"enddate" : "2014-05-20 09:08:35"
				}, {
					"rn" : 8,
					"pr_name" : "李某某",
					"visitor_info" : "许某某(女)",
					"visittype" : "普见",
					"prenum" : 2,
					"state" : "挂机结束",
					"startdate" : "2014-03-18 08:53:18",
					"enddate" : "2014-03-18 09:22:44"
				}, {
					"rn" : 9,
					"pr_name" : "李某某",
					"visitor_info" : "李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 1,
					"state" : "超时结束",
					"startdate" : "2014-02-18 09:12:40",
					"enddate" : "2014-02-18 09:42:40"
				}, {
					"rn" : 10,
					"pr_name" : "李某某",
					"visitor_info" : "李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 2,
					"state" : "正常结束",
					"startdate" : "2014-01-21 09:28:02",
					"enddate" : "2014-01-21 09:58:02"
				} ],
				"total" : 15
			}
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
	                title: '会见类型',
	                field: 'visittype',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '会见人信息',
	                field: 'visitor_info',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '会见人数',
	                field: 'prenum',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '开始时间',
	                field: 'startdate',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '结束时间',
	                field: 'enddate',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '会见状态',
	                field: 'state',
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