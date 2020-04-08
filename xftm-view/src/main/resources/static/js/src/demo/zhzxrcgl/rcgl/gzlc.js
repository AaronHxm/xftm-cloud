define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#gzlc',
		data:{
			groupList:
				 {'groupName':'副指挥长','member1':'8:30进行指挥中心人员岗位执勤情况巡查','member2':'11:30-12:00 进行当日罪犯点名情况核查',
				'member3':'17:00-17-30 进行当日罪犯点名核查','member4':'17:30 交接班',
				 
				 },
				
		   groupList1:
				 {'groupName':'视频督察员','member1':'8:00进行重点部位视频督察','member2':'9:00-11:30 生产区视频督察',
					 'member3':'13:00-14:00 生活区视频督察','member4':'14:00-18:00 生产区视频督察','member5':'18:00-20:00 生活区视频督察',
					 'member6':'24小时 生活区和围墙周界不定时随机进行视频督察',
					 
				 },
				 
			
		},
		methods:{
			
		}
	});
	
	$("#menusTwo").find("li:first").addClass("selected");
	try {
		
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});