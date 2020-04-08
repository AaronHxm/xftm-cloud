define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var table = require('frm/table');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#rckh',
		data: {
			'tsjlList': {
				'total': '12',
				'rows': [
     			    {'id': '01', 'dw': 'XX省第二监狱', 'rs': '986', 'date': '2017-10-16', 'text': '本次考核所有民警均合格', 'mj': '张某', 'pos': '张某、李某'},
    			    {'id': '02', 'dw': 'XX省第四监狱', 'rs': '864', 'date': '2017-11-16', 'text': '考核通过率达99%', 'mj': '李某', 'pos': '王某'}
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
				    title: '考核单位',
				    field: 'dw',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '考核日期',
				    field: 'date',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '考核人数',
				    field: 'rs',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '考核描述',
				    field: 'text',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '考核人',
				    field: 'mj',
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