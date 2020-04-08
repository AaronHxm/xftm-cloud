define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var bootstrp = require('bootstrap');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#planImp',
		data:{
			menuListThree:[
							 {'id':'600401','name':'周边地图','url':'#mapDiv'},
				             {'id':'600402','name':'视频','url':'#videoDiv'}
						],
			mapInfo : {'name':'','phone':'','address':''},
			nearbyUnit :[
						 {'id':'1','name':'杭州市消防队','phone':'0571 57867734'},
						 {'id':'2','name':'杭州市警察局','phone':'0571 57867734'}, 
						 {'id':'3','name':'杭州市交通管理支队','phone':'0571 57867734'},  
						 {'id':'4','name':'杭州市第一人民医院','phone':'0571 57867734'}
			],
			eventInfo: {
				'unitName':'省九十九监狱',
				'eType':'安全演练',
				'position':'杭州市余杭区',
				'time':'2199-11-11',
				'leadership':'李志',
				'phone':'0571 57867734',
				'state':'处理中'
			},
			title:[
			       {'titleName':'应急事件类型','infoAttrName':'eType','infoVal':''},
			       {'titleName':'应急事件具体位置','infoAttrName':'position','infoVal':''},
			       {'titleName':'应急事件发生时间','infoAttrName':'time','infoVal':''},
			       {'titleName':'当前指挥领导','infoAttrName':'leadership','infoVal':''},
			       {'titleName':'联系方式','infoAttrName':'phone','infoVal':''},
			       {'titleName':'应急事件状态','infoAttrName':'state','infoVal':''}
			],
			videos:['vedio/5.mp4',
			        'vedio/6.mp4',
			        'vedio/7.mp4',
			        'vedio/8.mp4']
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
				$("#myTabContent").children("div:not("+url+")").hide();
				$(url).show();
				if(url=="#videoDiv"){
					var videoEles = document.getElementsByName("videoEle");
					for (var i = 0; i < videoEles.length; i++) {
						var ele = videoEles[i];
						ele.play();
					}
				}
				
			},
			tipMouseOver : function (){
				$("#win_top").fadeIn("slow");
				/*var width = event.target.width;
				var height = event.target.height;
				var x = event.offsetX;
				var y = event.offsetY;
				if(x>=width*0.5 && x<=width*0.58 &&y>=height*0.47 && y<=height*0.6){
					var tip = document.getElementById("tip");
					model.mapInfo.name="杭州市余杭区人民医院";
					model.mapInfo.address="人民路109号"
					model.mapInfo.phone="0571 57867734";
					tip.style.left=x+10;
					tip.style.top=y+10;
					$(tip).show();
					
				}else if(x>=width*0.72 && x<=width*0.75 &&y>=height*0.22 && y<=height*0.3){
					var tip = document.getElementById("tip");
					model.mapInfo.name="杭州市余杭区派出所";
					model.mapInfo.address="人民路108号"
					model.mapInfo.phone="0571 57867734";
					tip.style.left=x+10;
					tip.style.top=y+10;
					$(tip).show();
				}else if(x>=width*0.7 && x<=width*0.73 &&y>=height*0.52 && y<=height*0.6){
					var tip = document.getElementById("tip");
					model.mapInfo.name="杭州市余杭区消防队";
					model.mapInfo.address="人民路107号"
					model.mapInfo.phone="0571 57867734";
					tip.style.left=x+10;
					tip.style.top=y+10;
					$(tip).show();
				}else{
					$("#tip").hide();
				}*/
			},
			tipMouseOut : function (){
				$("#win_top").slideUp(6000);
			}
		}
	});
	
	function init(){
		var titles = model.title;
		for (var int = 0; int < titles.length; int++) {
			console.log(model.eventInfo[titles[int].infoAttrName]);
			titles[int].infoVal = model.eventInfo[titles[int].infoAttrName];
		}
		
		var mpImg = document.getElementById("mpImg");
		mpImg.src="img/002.png";
		
		

	} 
	$("#menusTwo").find("li:first").removeClass().addClass("checked");
	
	try {
		init();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});