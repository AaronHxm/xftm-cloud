define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#dangerResInOut',
		data:{
			menuListThree:[
				{'id':'400401','name':'危险品进监概况','url':'dangerResAnalysis.html'}, 
				{'id':'400402','name':'危险工具复核','url':'dangerResInOutRecord.html'},
				{'id':'400403','name':'特种车辆复核','url':'dangervehicle.html'},	            
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