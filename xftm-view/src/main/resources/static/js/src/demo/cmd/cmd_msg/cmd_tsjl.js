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
     			    {'id': '01', 'from': 'xx省监狱局', 'to': 'xx省第二监狱', 'text': '及时上报生产数据', 'pos': '张某某、李某某'},
    			    {'id': '02', 'from': 'xx省监狱局', 'to': 'xx省第四监狱', 'text': '及时上报生产数据', 'pos': '王某某'},
    			    {'id': '03', 'from': 'xx省监狱局', 'to': 'xx省第六监狱', 'text': '及时上报生产数据', 'pos': '赵某某'},
    			    {'id': '04', 'from': 'xx省监狱局', 'to': 'xx省第二监狱', 'text': '及时上报生产数据', 'pos': '王某某'},
    			    {'id': '05', 'from': 'xx省监狱局', 'to': 'xxx监狱', 'text': '及时上报生产数据', 'pos': '赵某某'},
    			    {'id': '06', 'from': 'xx省监狱局', 'to': 'xx省第一监狱', 'text': '及时上报生产数据', 'pos': '张某某'},
    			    {'id': '07', 'from': 'xx省监狱局', 'to': 'xx省第二监狱', 'text': '及时上报生产数据', 'pos': '李某某'},
    			    {'id': '08', 'from': 'xx省监狱局', 'to': 'xx省第三监狱', 'text': '及时上报生产数据', 'pos': '张某某'}
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
				    title: '发送方',
				    field: 'from',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '接收方',
				    field: 'to',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '发送消息',
				    field: 'text',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '信息接收人',
				    field: 'pos',
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