define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#exterTraff',
		data:{
			menuListThree:[
				 {'id':'400101','name':'罪犯进出复核','url':'exterTraffcriminal.html'},
				 {'id':'400102','name':'外来车辆实时监管','url':'exterTraffRelSuperv.html'},
	             {'id':'400103','name':'外来人车进出记录','url':'exterTraffOutInRec.html'},
				 {'id':'400104','name':'统计分析','url':'statisAnalysis.html'}
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