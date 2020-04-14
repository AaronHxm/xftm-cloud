define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');

	var utils = require('frm/hz.utils');

	var validate = require('frm/validate');
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#loginBody',
		data:{
			userName:'',
			userPwd:''
		},
		methods:{
			loginByUserNameAndPwd:function(){
				if (validate.isEmpty(model.userName)){
					tip.alert("请输入用户名");
					return;
				}
				if (validate.isEmpty(model.userPwd)){
					tip.alert("请输入密码");
					return;
				}

				tip.alert("我开始登陆了");
				utils.ajax("user/loginByUserNameAndPwd",{"name":model.userName,"userPwd":model.userPwd},function(data){


				},function(e){
					alert(e);

				},false);
			}
		}
	});
	try {

	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});