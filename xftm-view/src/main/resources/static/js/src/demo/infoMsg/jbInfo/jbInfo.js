define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#jbInfo',
		data:{
			menuListThree:[

	             //{'id':'100601','name':'简报审编','url':'jianbaoSB.html'},
	            // {'id':'100601','name':'简报审核推送','url':'jianbaoSHTS.html'},
	            
	             {'id':'100601','name':'简报信息','url':'jbList.html'},
	             {'id':'100602','name':'简报查询','url':'jianbaoCX.html'},
	             
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