define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var menu_event = require('frm/menu_event');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_property',
		data: {
			'menuListThree': [
			    {'id': '2004001', 'name': '资产信息', 'url': 'cmd_zcxx.html'},
			    {'id': '2004002', 'name': '运维记录', 'url': 'cmd_ywjl.html'}
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