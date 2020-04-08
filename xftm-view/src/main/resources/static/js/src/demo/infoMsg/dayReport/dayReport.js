define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#dayReport',
		data:{
			menuListThree:[
				 {'id':'100201','name':'监管信息','url':'jianGuan.html'},
				 {'id':'100202','name':'大门进出信息','url':'daMen.html'},
				 {'id':'100203','name':'外来人员进出数据','url':'waiLai.html'},
				 {'id':'100204','name':'重要犯情','url':'zhongYao.html'},
				 {'id':'100204','name':'日收日解','url':'drList.html'}
				
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