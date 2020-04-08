define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var table = require('frm/table');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_msg_tsjl',
		data: {
			'tsjlList': {
				'total': '12',
				'rows': [
     			    {'id': '01', 'name': 'HP电脑 HP-730', 'dept_name': 'xx省第二监狱', 'shop_date': '2017-10-01', 'text': '因民警增加购置HP电脑'},
     			    {'id': '02', 'name': '空调 格力', 'dept_name': 'xx省第一监狱', 'shop_date': '2017-10-01', 'text': ''},
     			    {'id': '03', 'name': '中央空调', 'dept_name': 'xx省第五监狱', 'shop_date': '2017-10-01', 'text': ''},
     			    {'id': '04', 'name': '路由器 DH-643', 'dept_name': 'xx省第四监狱', 'shop_date': '2017-10-01', 'text': ''}
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
				    title: '购买日期',
				    field: 'shop_date',
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