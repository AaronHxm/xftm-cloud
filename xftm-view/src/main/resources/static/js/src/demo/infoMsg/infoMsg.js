define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#infoMsg',
		data:{
			menuListTwo:[
						 {'id':'1001','name':'信息概览','url':'infoGl/infoGl.html','icon':'../../../css/images/letter_icon/i1001.png'},
						 {'id':'1002','name':'要情日报','url':'dayReport/dayReport.html','icon':'../../../css/images/letter_icon/i1002.png'}, 
						 {'id':'1003','name':'信息报备','url':'eventReport/eventReport.html','icon':'../../../css/images/letter_icon/i1003.png'},  
						 {'id':'1004','name':'罪犯信息','url':'prisoner/prisoner.html','icon':'../../../css/images/letter_icon/i1004.png'}, 
						 {'id':'1005','name':'民警信息','url':'police/police.html','icon':'../../../css/images/letter_icon/i1005.png'},  
						 {'id':'1006','name':'信息简报','url':'jbInfo/jbInfo.html','icon':'../../../css/images/letter_icon/i1006.png'},  
						 {'id':'1007','name':'物防信息','url':'wfInfo/wfInfo.html','icon':'../../../css/images/letter_icon/i1007.png'}, 
						 {'id':'1008','name':'联勤信息','url':'lqInfo/lqInfo.html','icon':'../../../css/images/letter_icon/i1008.png'}
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