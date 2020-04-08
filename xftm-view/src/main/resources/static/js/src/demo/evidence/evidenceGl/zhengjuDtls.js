
define(function(require) {
	var $ = require('jquery');
	var vue = require('vue');

	 
  var model = new vue({
		el : '#zhengjuchaxun',
		data : {
			
				
			
			
		},
		methods : {
			chg:function (e) {  
			    var img = $(e.srcElement || e.target);         //添加对 IE的支持，并封装为JQuery对象  
			    if(img.attr("class")!="pic")  
			        return;  
			    if(img.width()==218) {                         //根据图片大小调整  
                    img.width("250px");  
                    img.height("250px");  
                } else {  
                    img.width("218px");  
                    img.height("218px");  
                }  
			      
			}  
		}
	});

 
	

	try {
		
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});
