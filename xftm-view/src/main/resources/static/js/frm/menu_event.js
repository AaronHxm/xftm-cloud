define(function  (repuire) {
	var $ = require('jquery');
	
	var menu_event = {};
	
	menu_event.openMenu = function(item){
		var id = item.id;
		var url = item.url;
		var obj = event.target;
		$("#menusTwo").find("li").each(function() {
			$(this).removeClass().addClass("menus2_li");
		});
		$(obj).removeClass().addClass("checked");
		$("#winIframe").attr("src", url);
	}
	
	try {
		return menu_event;
	} catch (e) {
		console['error']('加载菜单事件失败');
	}
});