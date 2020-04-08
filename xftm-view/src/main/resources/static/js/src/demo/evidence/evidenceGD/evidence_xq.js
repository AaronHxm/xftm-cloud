define(function(require) {
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	/**
	 * 创建模型
	 */
	var model = new vue({
		el : '#xq',
		data : {
			list1 : {
				"rows" : [{"depart_name" :"第二监狱","evidencelx": "视频","zf_name" :"张某某","depart" :"九监区二分监区","zm" :"故意杀人","xq" :"16年8月","rjrq" :"2010-9-2","uploadTime" :"2017-12-10 06:25:35"},
					{"depart_name" :"第二监狱","evidencelx": "视频","zf_name" :"赵某某","depart" :"二监区二分监区","zm" :"故意伤害","xq" :"8年9月","rjrq" :"2015-9-8","uploadTime" :"2017-12-10 08:38:45"}, 
					{"depart_name" :"第二监狱","evidencelx": "视频","zf_name" :"李某某","depart" :"七监区二分监区","zm" :"盗窃","xq" :"5年8月","rjrq" :"2014-5-21","uploadTime" :"2017-12-10 11:25:35"}, 
					{"depart_name" :"第二监狱","evidencelx": "视频","zf_name" :"王某某","depart" :"九监区三分监区","zm" :"抢劫","xq" :"13年3月","rjrq" :"2017-9-22","uploadTime" :"2017-12-10 12:23:05"},
					{"depart_name" :"第二监狱","evidencelx": "视频","zf_name" :"张某某","depart" :"五监区二分监区","zm" :"诈骗","xq" :"11年2月","rjrq" :"2011-1-12","uploadTime" :"2017-12-10 13:05:26"},		
					{"depart_name" :"第二监狱","evidencelx": "视频","zf_name" :"黄某某","depart" :"四监区三分监区","zm" :"合同诈骗","xq" :"8年8月","rjrq" :"2015-3-2","uploadTime" :"2017-12-10 14:25:35"},
					{"depart_name" :"第二监狱","evidencelx": "视频","zf_name" :"曹某某","depart" :"九监区二分监区","zm" :"贪污","xq" :"13年5月","rjrq" :"2016-6-26","uploadTime" :"2017-12-10 15:25:55"},		
					{"depart_name" :"第二监狱","evidencelx": "视频","zf_name" :"李某某","depart" :"三监区二分监区","zm" :"故意伤害","xq" :"9年6月","rjrq" :"2012-5-2","uploadTime" :"2017-12-10 17:22:13"},	
					{"depart_name" :"第二监狱","evidencelx": "视频","zf_name" :"张某某","depart" :"八监区二分监区","zm" :"抢劫","xq" :"15年9月","rjrq" :"2013-9-15","uploadTime" :"2017-12-10 19:34:10"},
					{"depart_name" :"第二监狱","evidencelx": "视频","zf_name" :"赵某某","depart" :"九监区一分监区","zm" :"贩卖毒品","xq" :"无期","rjrq" :"2009-8-26","uploadTime" :"2017-12-10 21:45:20"}
					],
				"total" : '10'
			}
		},
		methods : {

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
			columns : [ [ {
				title : '所属监狱',
				field : 'depart_name',
				align : 'center',
				valign : 'middle'
			}, {
				title : '证据类型',
				field : 'evidencelx',
				align : 'center',
				valign : 'middle'
			}, {
				title : '罪犯姓名',
				field : 'zf_name',
				align : 'center',
				valign : 'middle'
			},{
				title : '所属监区',
				field : 'depart',
				align : 'center',
				valign : 'middle'
			},{
				title : '罪名',
				field : 'zm',
				align : 'center',
				valign : 'middle'
			},{
				title : '刑期',
				field : 'xq',
				align : 'center',
				valign : 'middle'
			},{
				title : '入监时间',
				field : 'rjrq',
				align : 'center',
				valign : 'middle'
			},{
				title : '发生时间',
				field : 'uploadTime',
				align : 'center',
				valign : 'middle'
			}
			
			] ],
		});
		table.method('load', model.list1);
	}

	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});