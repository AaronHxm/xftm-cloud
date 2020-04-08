define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#approveManage',
		data:{
			menuListThree:[
				 {'id':'400701','name':'审批管理记录','url':'prisonerMoveApproveInfo.html'},
	             {'id':'400702','name':'审批罪犯记录','url':'prisonerFlowApproveInfo.html'},
				 {'id':'400703','name':'审批统计','url':'sptj.html'}
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