define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var table = require('frm/table');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_video_dmjl',
		data: {
			'tsjlList': {
				'total': '12',
				'rows': [
     			    {
			        	'id': '01',
			        	'dmzz': 'xx省第二监狱',
			        	'dmsj': '2017-12-09 08:25:56',
			        	'dmdd': 'xx省第二监狱一号厂房',
			        	'yd': '4387',
			        	'sd': '4387',
			        	'dmmj': '赵某某',
			        	'sfcg': '是',
			        	'dmfs': '手持机点名',
			        	'status': '点名完成'
			         }, {
			        	'id': '02',
			        	'dmzz': 'xx省第四监狱',
			        	'dmsj': '2017-12-09 08:25:56',
			        	'dmdd': 'xx省第四监狱二号监舍楼',
			        	'yd': '4476',
			        	'sd': '4476',
			        	'dmmj': '张某某',
			        	'sfcg': '否',
			        	'dmfs': '视频点名',
			        	'status': '点名完成'
			         }
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
				    title: '单位',
				    field: 'dmzz',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '点名时间',
				    field: 'dmsj',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '点名地点',
				    field: 'dmdd',
				    align: 'center',
				    valign: 'middle'
				},{
				    title: '应点人数',
				    field: 'yd',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '已点人数',
				    field: 'sd',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '点名民警',
				    field: 'dmmj',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '是否出工',
				    field: 'sfcg',
				    align: 'center',
				    valign: 'middle'
				},{
				    title: '点名方式',
				    field: 'dmfs',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '状态',
				    field: 'status',
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