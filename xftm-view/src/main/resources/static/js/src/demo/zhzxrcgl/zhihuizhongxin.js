define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#zhihuizhongxin',
		data:{
			menuListTwo:[
						 
						 {'id':'1002','name':'日常管理','url':'rcgl/rcgl.html','icon':'../../../css/images/letter_icon/i1002.png'},
						 {'id':'1001','name':'情况汇报','url':'qkhb/qkhb.html','icon':'../../../css/images/letter_icon/i1001.png'},
						 {'id':'1003','name':'资产运维','url':'zcyw/zcyw.html','icon':'../../../css/images/letter_icon/i1003.png'},  
						
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