define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#infoGl',
		data:{
			menuListThree:[
				
                 {'id':'100101','name':'重点信息','url':'zdInfo.html'},
				 
				 {'id':'100102','name':'罪犯统计','url':'zuiFanTongJi.html'},
				 {'id':'100103','name':'民警统计','url':'policeTongJi.html'},
				 //{'id':'100104','name':'滚动信息','url':'gunDongXinXi.html'},
				 {'id':'100105','name':'统计分析','url':'tongJiFenXi.html'},
				 {'id':'100106','name':'各类信息统计','url':'geLeiXinXi.html'},
				 {'id':'100107','name':'物防信息','url':'wuFangXinXi.html'},
				// {'id':'100108','name':'智能检索','url':'znSearch.html'},
				 
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