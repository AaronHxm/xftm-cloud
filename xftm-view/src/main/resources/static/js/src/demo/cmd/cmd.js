define(function(require){
	var $ = require('jquery');
	var vue = require('vue');

	var layer = require('layer');

	layer.config({
//		shift:0, //默认动画风格
//		extend: ['blue/style.css'],
		path: ctx + 'libs/layer/' //layer.js所在的目录，requirejs必须用
	});

	var message = require('frm/message');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd',
		data: {
			cmdMenuList: [
				 {'id': '2001', 'name':'接警处警', 'url': 'cmd_alarm/cmd_alarm.html', 'icon': '../../../css/images/letter_icon/i2001.png'},
				 {'id': '2002', 'name':'消息推送', 'url': 'cmd_msg/cmd_msg.html', 'icon': '../../../css/images/letter_icon/i2003.png'},
				 {'id': '2003', 'name':'视频点名', 'url': 'cmd_video/cmd_video.html', 'icon': '../../../css/images/letter_icon/i2005.png'},
				 {'id': '2004', 'name':'安全零报告', 'url': 'cmd_safety/cmd_safety.html', 'icon': '../../../css/images/letter_icon/i2006.png'},
				 {'id': '2005', 'name':'日常管理', 'url': 'cmd_everyday/cmd_everyday.html', 'icon': '../../../css/images/letter_icon/i2002.png'}, 
				 {'id': '2006', 'name':'资产运维', 'url': 'cmd_property/cmd_property.html', 'icon': '../../../css/images/letter_icon/i2004.png'}
			]
		},
		methods: {
			openCmdMenu: function(item){
				var url = item.url;
				if (url.lastIndexOf('.html') < 0 || url.lastIndexOf('.html') != url.length - 5) {
					url = '../../../error.html'
				}
				$("#cmdWin").attr("src", url);
			}
		}
	});

	try {
		
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});