define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var menu_event = require('frm/menu_event');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_safety',
		data: {
			'menuListThree': [
			    {'id': '2006001', 'name': '安全零报告', 'url': 'cmd_aqsb.html'},
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