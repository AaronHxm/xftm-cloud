define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
//	var message = require('frm/message');
	var menu_event = require('frm/menu_event');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_everyday',
		data: {
			'menuListThree': [
			    {'id': '2002001', 'name': '交接班', 'url': 'cmd_jjb.html'},
//			    {'id': '2002002', 'name': '工作预警', 'url': 'cmd_gzyj.html'},
			    {'id': '2002003', 'name': '考核统计', 'url': 'cmd_khtj.html'}
	        ]
		},
		methods: {
			'openMenu': menu_event.openMenu
		}
	});

	try {
		$("#menusTwo").find("li:first").removeClass().addClass("checked");
//		message.alert('日常管理');
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});