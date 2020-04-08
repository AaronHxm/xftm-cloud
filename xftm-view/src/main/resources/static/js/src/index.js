define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#index',
		data:{
			menuList:[
				 {'id':0,'name':'首  页','url':'home.html'},
				 {'id':1,'name':'信息管理','url':'page/demo/infoMsg/infoMsg.html'}, 
				 {'id':2,'name':'指挥协调','url':'page/demo/cmd/cmd.html'}, 
				 {'id':3,'name':'视频督查','url':'page/demo/videoMsg/videoMsg.html'}, 
				 {'id':4,'name':'安全复核','url':'page/demo/security/security.html'}, 
				 {'id':5,'name':'证据固定','url':'page/demo/evidence/evidence.html'}, 
				 {'id':6,'name':'应急处突','url':'page/demo/emergency/emergency.html'} ,
				 {'id':7,'name':'指挥中心日常管理','url':'page/demo/zhzxrcgl/zhihuizhongxin.html'} 
			]
		},
		methods:{
			openMenu:function(item){
				var id = item.id;
				var url = item.url;
				$("#menu_ul").find("li").each(function() {
					$(this).removeClass().addClass("menuli_"+ this.id);
				});
				$("#"+id).removeClass().addClass("checked_" + id);
				$("#indexIframe").attr("src",url);
			}
		}
	});
	$("#menu_ul").find("li:first").removeClass().addClass("checked_0");
	try {		

	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});