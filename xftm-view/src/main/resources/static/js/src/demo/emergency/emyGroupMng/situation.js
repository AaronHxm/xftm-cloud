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
				 {'groupName':'应急特警队','headman':'林某某','deputyLeader':'李某',member:['成某','李某某','陈某某','瞿某'],
				  'duty':'处理各种突发情况，保证24小时能第一时间出现在需要的现场，确保事态不蔓延、不扩大。事件处理期间对重点部位及重点人员进行防控，对重点路段进行布置，把握突发事件处理方向。', 'No':'13154569080'},
				 {'groupName':'警用装备组','headman':'柳某','deputyLeader':'文某',member:['洪某','曹某','吴某','李某某'],
				  'duty':'保证在突发需要使用装备的时刻，能够第一时间供应并且送达相应的地点。在平时对警用装备进行管理与统计，及时上报需要补充的警用装备，以备不时之需。', 'No':'17154537787'},
				  {'groupName':'警用车辆组','headman':'王某','deputyLeader':'赵某某',member:['周某某','钱某某','吴某','王某'],
					  'duty':'保证在突发需要使用警用车辆之时，能够第一时间把车辆送到制定地点，为紧急突发事故提供充足且状态良好的警用车辆。平时对车辆进行维护，避免关键时刻车辆无法正常使用。', 'No':'15355256756'},
				 {'groupName':'紧急物资组','headman':'邱某某','deputyLeader':'李某',member:['倜某某','匹某某','许某','周某'],
						  'duty':'保证在突发需要使用紧急物资之时，能够第一时间把物资送到制定地点，为紧急突发事故提供充足且状态良好的物资。', 'No':'15967866013'}
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