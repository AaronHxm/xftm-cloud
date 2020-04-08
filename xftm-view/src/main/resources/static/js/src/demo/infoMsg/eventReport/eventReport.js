define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#eventReport',
		data:{
			selected:'罪犯离监',
			menuListThree:[
				{'id':'100301','name':'罪犯离监','url':'eventList.html'},
				  {'id':'100302','name':'夜间重控犯','url':'evecriminal.html'},
				  {'id':'100303','name':'重大行动','url':'vitalevents.html'},
				  {'id':'100304','name':'重点罪犯','url':'vitalcriminal.html'},
				  {'id':'100305','name':'重要安防','url':'vitalproblem.html'},
   			      {'id':'100306','name':'重要情况','url':'prisonmove.html'},
				  {'id':'100307','name':'信息位置','url':'infoposition.html'},
			      {'id':'100308','name':'罪犯作息','url':'prisonrutine.html'},
				  {'id':'100309','name':'应急演练','url':'emergency.html'},
				  {'id':'100310','name':'监狱备勤','url':'eventsmain.html'},
				  {'id':'100311','name':'罪犯出收工','url':'prisonwork.html'},
				  {'id':'100312','name':'罪犯区域流动','url':'prisonarea.html'},
				  {'id':'100313','name':'工具人数清点','url':'peopleaccount.html'}

			]
		},
		methods:{
			/*openMenu:function(item){
				var id = item.id;
				var url = item.url;
				var obj = event.target;
				$("#menusTwo").find("li").each(function() {
					$(this).removeClass().addClass("menus2_li");   
				});
				$(obj).removeClass().addClass("checked");
				$("#winIframe").attr("src",url);
			},*/
			testOpen:function(){
				var url = $('#eventReport option:selected') .val();
				$("#winIframe").attr("src",url);
			},
			
		      
		}
	});

	$('#eventReport option:selected').val('eventList.html');
//	$("#menusTwo").find("li:first").removeClass().addClass("checked");
	try {
		
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});