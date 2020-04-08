define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#zcyw',
		data:{
			menuListThree:[
				
                 {'id':'100101','name':'设施报修','url':'devicerepair.html'},				 
				 {'id':'100102','name':'维修派单','url':'paidan.html'},
				 {'id':'100103','name':'设施维修','url':'devicerepair2.html'},
				 {'id':'100103','name':'统计分析','url':'dangerResAnalysis.html'}
				 
				
				 
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