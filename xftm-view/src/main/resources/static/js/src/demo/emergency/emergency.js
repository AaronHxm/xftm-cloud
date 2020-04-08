define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#emergency',
		data:{
			menuListTwo:[
			             {'id':'6001','name':'电子地图','url':'eleMap/menu.html','icon':'../../../css/images/letter_icon/i6001.png'},
			             {'id':'6002','name':'日常调度','url':'dailySche/menu.html','icon':'../../../css/images/letter_icon/i6002.png'}, 
			             {'id':'6003','name':'预案管理','url':'planMng/menu.html','icon':'../../../css/images/letter_icon/i6003.png'},  
			             {'id':'6004','name':'预案执行','url':'plan/planZX.html','icon':'../../../css/images/letter_icon/i6004.png'}, 
			             {'id':'6005','name':'预案演练','url':'planperform/menu.html','icon':'../../../css/images/letter_icon/i6004.png'}, 				
						 {'id':'6006','name':'应急组管理','url':'emyGroupMng/emyGroupMng.html','icon':'../../../css/images/letter_icon/i6006.png'}, 
						 {'id':'6007','name':'警车管理','url':'policeCarMng/menu.html','icon':'../../../css/images/letter_icon/i6007.png'},
						 {'id':'6008','name':'系统设置','url':'sysSet/menu.html','icon':'../../../css/images/letter_icon/i6008.png'}
			]
		},
		methods:{
			openMenuTwo:function(item){
				var url = item.url;
				if(url == ''){
					url = '../../../error.html'
				}
				$("#msgWin").attr("src",url);
			}
		}
	});

	try {
		
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});