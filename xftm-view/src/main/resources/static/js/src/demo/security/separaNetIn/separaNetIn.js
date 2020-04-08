define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#separaNetIn',
		data:{
			menuListThree:[
				 {'id':'400201','name':'进隔离网复核','url':'wallRoundRelSuperv.html'},
				 {'id':'400202','name':'电网关闭复核','url':'electricalRelSuperv.html'},
				 {'id':'400205','name':'围墙周界异常统计','url':'wallRoundStatisAnalysis.html'}
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