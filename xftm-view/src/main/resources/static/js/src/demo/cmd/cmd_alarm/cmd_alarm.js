define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var menu_event = require('frm/menu_event');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_alarm',
		data: {
			'menuListThree': [
				{'id': '2001001', 'name': '接警处警', 'url': 'cmd_ssjq.html'},
				{'id': '2001002', 'name': '接处警跟踪记录', 'url': 'cmd_lsjl.html'},
				{'id': '2001003', 'name': '接警分析统计', 'url': 'cmd_tjfx.html'},
				{'id': '2001004', 'name': '联动管理', 'url': 'cmd_ldgl.html'},
				{'id': '2001005', 'name': '咨询投诉管理', 'url': 'cmd_zxts.html'}
            ]
		},
		methods: {
			'openMenu': menu_event.openMenu
		}
	});

	try {
		$("#menusTwo").find("li:first").removeClass().addClass("checked");
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});