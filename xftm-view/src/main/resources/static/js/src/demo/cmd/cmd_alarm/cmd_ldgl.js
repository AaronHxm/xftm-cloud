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
 			{ id:1, pId:0, name:"水电", open:true},
 			{ id:2, pId:0, name:"公安", open:true},
 			{ id:3, pId:0, name:"法院", open:true},
 			{ id:4, pId:0, name:"交警", open:true},
 			{ id:5, pId:0, name:"武警", open:true}
 		];
	$.fn.zTree.init($("#prisonList"), setting, zNodes);

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_alarm_ldgl',
		data: {},
		methods: {}
	});

	try {
		
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});