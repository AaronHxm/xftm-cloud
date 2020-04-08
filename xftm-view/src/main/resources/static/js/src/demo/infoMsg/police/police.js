define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#police',
		data:{
			menuListThree:[

	             {'id':'100501','name':'民警分布','url':'aqzf.html'},
	             {'id':'100502','name':'民警信息','url':'mjdk.html'},
	             {'id':'100503','name':'民警值班','url':'policeZB.html'},
	             {'id':'100504','name':'特警队信息','url':'specialpolice.html'},
	             {'id':'100505','name':'通联方式','url':'contact.html'}

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