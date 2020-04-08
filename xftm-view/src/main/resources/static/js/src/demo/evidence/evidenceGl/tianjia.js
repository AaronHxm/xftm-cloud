define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#tianjia',
		data:{
			
		},
		methods:{
			saveReport:function(){
				
				tip.alert("提交成功");
				
			
		
	}
		}
	});
	
	
	
	
	try {
	
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});