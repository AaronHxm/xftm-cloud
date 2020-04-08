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
		el: '#tzgg',
		data: {
			'tsjlList': {
				'total': '12',
				'rows': [
     			    {'id': '2018010201', 'dw': '第二监狱 狱政科', 'rs': '指挥中心 组织人事科 狱政科,', 'date': '2017-12-16', 'text': '本次考核所有民警均合格', 'mj': '张三'},
    			    {'id': '2018010202', 'dw': '第四监狱 狱政科', 'rs': '狱政科 审计科 三监区', 'date': '2017-11-28', 'text': '本次学习培训良好', 'mj': '李四'},
    			    {'id': '2018010203', 'dw': '第三监狱 狱政科', 'rs': '法制科 保卫科 监察科', 'date': '2017-11-06', 'text': '考核通过率达99%', 'mj': '李四'},
    			    {'id': '2018010204', 'dw': '第五监狱 狱政科', 'rs': '宣传教育科 生活卫生科', 'date': '2017-10-13', 'text': '考核通过率达99%', 'mj': '李四'}
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
			columns: [[
				{
				    title: '编号',
				    field: 'id',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '通知发布部门',
				    field: 'dw',
				    align: 'center',
				    valign: 'middle'
				},  {
				    title: '通知对象',
				    field: 'rs',
				    align: 'center',
				    valign: 'middle'
				},{
				    title: '通知发布日期',
				    field: 'date',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '通知描述',
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