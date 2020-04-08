define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var message = require('frm/message');
	var menu_event = require('frm/menu_event');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_everyday_gzyj',
		data: {},
		methods: {}
	});

	try {
		message.alert('交接班');
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});