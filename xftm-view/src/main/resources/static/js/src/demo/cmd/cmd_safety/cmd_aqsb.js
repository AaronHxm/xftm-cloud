define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var table = require('frm/table');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_safety_aqsb',
		data: {
			'tsjlList': {
				'total': '12',
				'rows': [
			        {
			        	'id': '01',
			        	'dept_name': 'xx省第二监狱',
			        	'dm_time':'2017-12-09 08:26:32',
			        	'sbnr': 'xx第二监狱今日生产安全，一切正常'
			        },
     			    {
			        	'id': '02',
			        	'dept_name': 'xx省第一监狱',
			        	'dm_time': '2017-12-09 08:26:32',
			        	'sbnr': '今日我xx省第一监狱生产基本正常'
			        }
                ]
			}
		},
		methods: {}
	});
	
	function initTable(){
		table.init('', {
			request: {
				params: ' ',
				url: ' '
			},
			showColumns: false,
			pagination: false,
			columns: [[
				{
				    title: '编号',
				    field: 'id',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '上报单位',
				    field: 'dept_name',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '上报时间',
				    field: 'dm_time',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '上报内容',
				    field: 'sbnr',
				    align: 'center',
				    valign: 'middle'
				}
            ]]
		});
		table.method('load', model.tsjlList);
	}

	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});