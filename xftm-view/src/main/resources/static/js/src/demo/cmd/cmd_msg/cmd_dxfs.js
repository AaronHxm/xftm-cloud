define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var ztree = require('ztree');
	
	var setting = {
			check: {
				enable: true,
				chkboxType: {
					'Y' : 'ps',
					'N' : 'ps'
				}
			},
			data: {
				simpleData: {
					enable: true
				}
			}
		};
	var zNodes =[
 			{ id:1, pId:0, name:"xxx省第二监狱", open:true},
 			{ id:11, pId:1, name:"监狱领导", open:false},
 			{ id:111, pId:11, name:"张某某"},
 			{ id:112, pId:11, name:"李某某"},
 			{ id:12, pId:1, name:"指挥中心", open:false},
 			{ id:121, pId:12, name:"王某某"},
 			{ id:122, pId:12, name:"赵某某"},
 			{ id:2, pId:0, name:"xxx省第四监狱", open:true},
 			{ id:22, pId:2, name:"指挥中心", open:false},
 			{ id:221, pId:22, name:"王某某"},
 			{ id:222, pId:22, name:"张某某"},
 			{ id:23, pId:2, name:"信息科"}
 		];
	$.fn.zTree.init($("#prisonList"), setting, zNodes);

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_msg_xxts',
		data: {
		tempInfo:[
				  {'titleInfo':'常用信息一',"content":"常用信息一的短信内容常用信息一的短信内容常用信息一的短信内容"},
				  {'titleInfo':'常用信息二',"content":"常用信息二的短信内容常用信息二的短信内容常用信息二的短信内容"},
				  {'titleInfo':'常用信息三',"content":"常用信息三的短信内容常用信息三的短信内容常用信息三的短信内容"},
				  {'titleInfo':'常用信息四',"content":"常用信息四的短信内容常用信息四的短信内容常用信息四的短信内容"}
	]
		},
		methods: {
			useTemp:function(info){
				$("#msgText").val(info);
			}
		}
	});

	try {
		
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});