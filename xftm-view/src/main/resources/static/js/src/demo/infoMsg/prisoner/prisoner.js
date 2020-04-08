define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#prisoner',
		data:{
			menuListThree:[
				 {'id':'100401','name':'全省概况','url':'prisonQsgk.html'},
	             {'id':'100402','name':'罪犯信息档卡','url':'zfdk.html'},
	             {'id':'100403','name':'重点罪犯','url':'zdzf.html'},
	             {'id':'100403','name':'谈话录音','url':'thly.html'},
	             {'id':'100405','name':'亲情记录','url':'qqjl.html'},
	             {'id':'100406','name':'会见记录','url':'hjjl.html'},
	             {'id':'100407','name':'监管安全','url':'jgaq.html'}
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