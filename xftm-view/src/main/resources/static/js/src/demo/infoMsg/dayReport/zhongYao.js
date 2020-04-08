define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#situation',
		data:{
			groupList:[
				 {'groupName':'2017年12月26','headman':'今日全省各监共压187581名犯人','deputyLeader':'监察中发生以下情况',member:['xxx','xxx','xx','xxx'],
				    'weigui':'在第二监狱，第四监区的李x和李xx，打架。',
					'weiji':'在第四监狱，第五监区，黄xx有重大违纪。',
				    'yuqing':'截至今日，监狱在册罪犯3591人，较昨日减少6人，在押3561人，较昨日减少6人，其中暂予监外执行25人，解回再审5人，特情借用0人，中心医院住院3人，中心医院借用护理人员0人，监狱医院29人，高度戒备管理罪犯9人，隔离审查0人，xx医院精神病区（重症）住院3人，社会医院住院0人。。',
					
					  },
				 
			]
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