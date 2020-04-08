define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#planperform',
		data:{
			menuListThree:[
				 {'id':'900201','name':'演练计划','url':'plan.html'},
				 {'id':'900201','name':'演练通知','url':'notice.html'},
				 {'id':'900201','name':'演练执行','url':'planImp.html'},
				 {'id':'900201','name':'演练反馈','url':'feedback.html'},
				 {'id':'900201','name':'演练总结','url':'summary.html'}
			]
		},
		methods:{
			openMenu:function(item){
				var id = item.id;
				var url = item.url;
				var obj = event.target;
				$("#menusTwo").find("li").each(function() {
					$(this).removeClass().addClass("menus2_li");
				});
				$(obj).removeClass().addClass("checked");
				$("#winIframe").attr("src",url);
			}
		}
	});
	
	$("#menusTwo").find("li:first").removeClass().addClass("checked");
	try {
		
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});