define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var menu_event = require('frm/menu_event');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_video',
		data: {
			'menuListThree': [
  			    {'id': '2005001', 'name': '视频点名', 'url': 'cmd_ssdm.html'},
  			    {'id': '2005002', 'name': '点名记录', 'url': 'cmd_dmjl.html'}
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