define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var message = require('frm/message');
	var menu_event = require('frm/menu_event');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_msg',
		data: {
			'menuListThree': [
				{'id': '2003001', 'name': 'LED屏推送', 'url': 'cmd_ledts.html'},
				{'id': '2003002', 'name': '消息推送系统', 'url': 'cmd_xxtsxt.html'},
  			    {'id': '2003003', 'name': '短信发送', 'url': 'cmd_dxfs.html'},
  			    {'id': '2003004', 'name': '定时发送', 'url': 'cmd_dsfs.html'},
  			    {'id': '2003005', 'name': '推送记录', 'url': 'cmd_tsjl.html'}
  	        ]
		},
		methods: {
			'openMenu': menu_event.openMenu
		}
	});

	try {
		$("#menusTwo").find("li:first").removeClass().addClass("checked");
		//message.alert('消息推送');
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});