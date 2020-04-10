define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#body',
		data:{
			menuList:[
				 {'id':0,'name':'首  页','url':'22222','icon':'','children':[

						 {'id':1,'name':'test1','url':'1','icon':''},
						 {'id':2,'name':'test1','url':'2','icon':''},
						 {'id':3,'name':'test1','url':'3','icon':''},
						 {'id':4,'name':'test1','url':'4','icon':''},
						 {'id':5,'name':'test1','url':'5','icon':''}

					 ]},
				{'id':6,'name':'首  页1','url':'home.html','icon':'','children':[

						{'id':7,'name':'test1','url':'6','icon':''},
						{'id':8,'name':'test1','url':'7','icon':''},
						{'id':9,'name':'test1','url':'8','icon':''},
						{'id':10,'name':'test1','url':'','icon':''},
						{'id':11,'name':'test1','url':'','icon':''}

					]},
				{'id':12,'name':'首  页2','url':'home.html','icon':'','children':[

						{'id':13,'name':'test1','url':'','icon':'','children':[

								{'id':131,'name':'test1','url':'','icon':''},
								{'id':142,'name':'test1','url':'','icon':''},
								{'id':153,'name':'test1','url':'','icon':''},
								{'id':164,'name':'test1','url':'','icon':''},
								{'id':175,'name':'test1','url':'','icon':''}

							]},
						{'id':14,'name':'test1','url':'','icon':''},
						{'id':15,'name':'test1','url':'','icon':''},
						{'id':16,'name':'test1','url':'','icon':''},
						{'id':17,'name':'test1','url':'','icon':''}

					]},
				{'id':0,'name':'首  页','url':'111111','icon':''}

			]
		},
		methods:{
			openMenu:function(item){
 				var id = item.id;
				var url = item.url;
				//$("#menu_ul").find("li").removeClass();
			$("#menu_ul").find("li").each(function() {
				// $(this).removeClass();
				//
 				if($(this).attr('id') ==id){
					if($("#"+id).hasClass("open")){
						$("#"+id).removeClass("open");
					}else{
						$("#"+id).removeClass().addClass("open");
					}
					// if(!$("#"+id).hasClass("active")){
					// 	$("#"+id).addClass("active");
					// }
				}else{
					$(this).removeClass("active");
				}
			//	alert($(this).attr('id'));

				});


				tip.alert(item.url);

			// $("#"+id).removeClass().addClass("open").addClass("active");
				// $("#main-content-body").load(url);
			}
		}
	});
	try {

	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});