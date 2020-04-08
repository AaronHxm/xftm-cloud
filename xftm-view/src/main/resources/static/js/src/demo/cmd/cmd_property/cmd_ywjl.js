define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var table = require('frm/table');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_property_ywjl',
		data: {
			'tsjlList': {
				'total': '12',
				'rows': [
     			    {'id': '01', 'name': '空调 格力', 'dept_name': 'xx省第一监狱', 'wx_date': '2017-10-19', 'text': ''},
     			    {'id': '02', 'name': 'HP电脑 HP-730', 'dept_name': 'xx省第二监狱', 'wx_date': '2017-11-01', 'text': '零件老化，更换内部零件'},
     			    {'id': '03', 'name': '路由器 DH-643', 'dept_name': 'xx省第四监狱', 'wx_date': '2017-12-01', 'text': ''},
     			    {'id': '04', 'name': '中央空调', 'dept_name': 'xx省第五监狱', 'wx_date': '2017-10-18', 'text': ''}
                ]
			}
		},
		methods: {}
	});
	
	function initTable(){
		table.init('table', {
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
				    title: '资产单位',
				    field: 'dept_name',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '资产名称',
				    field: 'name',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '维修日期',
				    field: 'wx_date',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '描述',
				    field: 'text',
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