define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#videoMsg',
		data:{
			menuListTwo:[
						 {'id':'3001','name':'督察登记','url':'infoVideo/infoVi.html','icon':'../../../css/images/letter_icon/i3001.png'},
						 {'id':'3002','name':'督察审核','url':'callBack/infoCB.html','icon':'../../../css/images/letter_icon/i3002.png'}, 
						 {'id':'3003','name':'督察反馈','url':'taskIn/infoTask.html','icon':'../../../css/images/letter_icon/i3003.png'},  
						 {'id':'3004','name':'督察跟踪','url':'checkVideo/checkDetail.html','icon':'../../../css/images/letter_icon/i3004.png'}
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