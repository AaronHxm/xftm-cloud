define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var table = require('frm/table');
	var tip = require('frm/message');
	var dialog = require('frm/dialog');
	var datepicker = require('frm/datepicker');
	var dialog1 = null;
	var index1 = null;

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#xxpx',
		data: {
			'tsjlList': {
				'total': '12',
				'rows': [
     			    {'id': '2018010201', 'dw': '第二监狱', 'rs': '486', 'date': '2017-12-16', 'text': '十九大精神', 'mj': '张三', 'pos': '张三、李四'},
    			    {'id': '2018010202', 'dw': '第三监狱', 'rs': '531', 'date': '2017-12-25', 'text': '十九大精神', 'mj': '李四', 'pos': '王五'},
    			    {'id': '2018010203', 'dw': '第四监狱', 'rs': '464', 'date': '2017-11-23', 'text': '十九大精神', 'mj': '李四', 'pos': '王五'},
    			    {'id': '2018010204', 'dw': '第五监狱', 'rs': '522', 'date': '2017-11-16', 'text': '十九大精神', 'mj': '李四', 'pos': '王五'}
                ]
			}
		},
		methods: {
			openSearchPanel:function(){
				dialog1 = dialog.open({targetId:'search_panel',title:'查询',w:'35',h:'30',top:'0%'});
				if(!index1){
					index1 = dialog1.index;
				}
			},
			searchDb:function(){
				tip.alert("正在查询中");
				dialog.close(index1);
			}
		}
	});

	function initTable(){
		table.init('table', {
			request: {
				params: ' ',
				url: ' '
			},
			showColumns: false,
			pagination: true,
			columns: [[
				{
				    title: '编号',
				    field: 'id',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '组织学习培训单位',
				    field: 'dw',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '学习培训日期',
				    field: 'date',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '学习培训人数',
				    field: 'rs',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '学习培训内容',
				    field: 'text',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '民警讲师',
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