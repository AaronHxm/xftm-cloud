define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#lqInfo',
		data:{
			menuListThree:[

	             {'id':'100801','name':'天气信息','url':'lqList.html'},
	             {'id':'100802','name':'交通信息','url':'jtxx.html'},
	             {'id':'100803','name':'舆情信息','url':'yqxx.html'},
	             {'id':'100804','name':'协同单位共享信息','url':'gxxx.html'},
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