define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#rcgl',
		data:{
			menuListThree:[
				
                 {'id':'100101','name':'交接班','url':'jjb.html'},
				 
				 {'id':'100102','name':'日常考核','url':'rckh.html'},
				 {'id':'100103','name':'学习培训','url':'xxpx.html'},
				 {'id':'100104','name':'知识管理','url':'zsgl.html'},
				 {'id':'100105','name':'通知公告','url':'tzgg.html'},
				 {'id':'100106','name':'任务管理','url':'rwgl.html'},
				 {'id':'100107','name':'消息提醒','url':'xxtx.html'},
				 {'id':'100108','name':'加班备勤','url':'jiaban.html'},
				 //{'id':'100103','name':'学习培训','url':'gzjcj.html'},
				 {'id':'100109','name':'一日工作流程','url':'gzlc.html'},
				
				
				 
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