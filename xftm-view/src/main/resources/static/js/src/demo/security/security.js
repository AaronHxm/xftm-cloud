define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#security',
		data:{
			menuListTwo:[
						 {'id':'4001','name':'大门进出','url':'exterTraff/exterTraff.html','icon':'../../../css/images/letter_icon/i4001.png'},
						 {'id':'4002','name':'围墙周界','url':'separaNetIn/separaNetIn.html','icon':'../../../css/images/letter_icon/i4002.png'}, 
						 {'id':'4003','name':'其他信息','url':'otherCheck/otherCheck.html','icon':'../../../css/images/letter_icon/i4003.png'},  
						 {'id':'4004','name':'危品进监','url':'dangerResInOut/dangerResInOut.html','icon':'../../../css/images/letter_icon/i4004.png'}, 
						 {'id':'4005','name':'关押信息','url':'infoView/infoView.html','icon':'../../../css/images/letter_icon/i4005.png'},    
						 {'id':'4006','name':'门体信息','url':'doorInfo/doorInfo.html','icon':'../../../css/images/letter_icon/i4006.png'},
						 {'id':'4007','name':'审批管理','url':'approveManage/approveManage.html','icon':'../../../css/images/letter_icon/i4007.png'}
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