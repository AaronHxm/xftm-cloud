define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#menu',
		data:{
			menuListThree:[
				 {'id':'600301','name':'预案登记','url':'planReg.html'},
				 {'id':'600302','name':'预案修订','url':'planEdit.html'},
				 {'id':'600303','name':'预案配置','url':'planConf.html'},
				 {'id':'600304','name':'预案评审','url':'planReview.html'},
				 {'id':'600305','name':'预案培训','url':'planTrain.html'},
				 {'id':'600306','name':'预案发布','url':'planPub.html'},
				 {'id':'600307','name':'预案查询','url':'planSearch.html'}
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