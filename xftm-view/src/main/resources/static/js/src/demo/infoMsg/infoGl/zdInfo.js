define(function(require) {
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var echarts = require('echarts');
	var table = require('frm/table');
	

	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el : '#zdInfo',
		data : {
			/*
			 * list1 : { 'rows' : [ { "rn" : 1, "time" : "2017-12-10 18:09:34",
			 * "dept" : "第二监狱", "qy" : "东围墙", "type" : "维修" },{ "rn" : 2, "time" :
			 * "2017-12-10 17:39:34", "dept" : "第一监狱", "qy" : "隔离网", "type" :
			 * "断电抢修" },{ "rn" : 3, "time" : "2017-12-10 17:09:34", "dept" :
			 * "金华监狱", "qy" : "东围墙2", "type" : 0 },{ "rn" : 4, "time" :
			 * "2017-12-09 18:09:34", "dept" : "乔司监狱", "qy" : "西围墙", "type" :
			 * "设备故障" },{ "rn" : 5, "time" : "2017-12-08 18:09:34", "dept" :
			 * "第二监狱", "qy" : "东围墙", "type" : 0 } ], 'total' : 5 },
			 */
			list2 : {
				'rows' : [ {
					"rn" : 1,
					"time" : "2018-03-10 07:09:34",
					"dept" : "合肥监狱",
					"titie" : "合肥要情日报"
				}, {
					"rn" : 2,
					"time" : "2018-03-10 07:09:34",
					"dept" : "巢湖监狱",
					"titie" : "巢湖要情日报"
				}, {
					"rn" : 3,
					"time" : "2018-03-10 07:09:34",
					"dept" : "宿州监狱",
					"titie" : "宿州要情日报"
				}, {
					"rn" : 4,
					"time" : "2018-03-10 07:09:34",
					"dept" : "蜀山监狱",
					"titie" : "蜀山要情日报"
				}, {
					"rn" : 5,
					"time" : "2018-03-10 07:09:34",
					"dept" : "庐江监狱",
					"titie" : "庐江要情日报"
				} ],
				'total' : 6
			},
			
			
			
			list3:[
					   {"rn":1,id:3223,name:'白湖监狱',rs:862,zg:371,yj:27,cc:17,qj:5},                    
		           {"rn":2,id:32236,name:'九成监狱',rs:497,zg:256,yj:17,cc:3,qj:0},
		           {"rn":3,id:32237,name:'巢湖监狱',rs:950,zg:316,yj:38,cc:31,qj:12},
		           {"rn":4,id:32238,name:'阜阳监狱',rs:570,zg:262,yj:2,cc:37,qj:6}, 
		           {"rn":5,id:322310,name:'合肥监狱',rs:542,zg:196,yj:10,cc:0,qj:15},
		           {"rn":6,id:322314,name:'安庆监狱',rs:490,zg:131,yj:15,cc:17,qj:10},
		           {"rn":7,id:322315,name:'宿州监狱',rs:760,zg:297,yj:20,cc:15,qj:6},
		           {"rn":8,id:322316,name:'庐江监狱',rs:390,zg:121,yj:14,cc:15,qj:7},
		           {"rn":9,id:322317,name:'庐江监狱',rs:790,zg:361,yj:16,cc:15,qj:5},
		           {"rn":10,id:3224,name:'蚌埠监狱',rs:847,zg:314,yj:7,cc:8,qj:4},
		           {"rn":11,id:3225,name:'蜀山监狱',rs:776,zg:275,yj:9,cc:10,qj:3},
		           {"rn":12,id:3226,name:'马鞍山监狱',rs:681,zg:191,yj:15,cc:10,qj:6},
		           {"rn":13,id:32234,name:'女子监狱',rs:689,zg:300,yj:26,cc:15,qj:5},
		           {"rn":14,id:32231,name:'潜川监狱',rs:1192,zg:495,yj:30,cc:20,qj:10},
		           {"rn":15,id:3227,name:'青山监狱',rs:1192,zg:495,yj:30,cc:20,qj:10},
		           {"rn":15,id:3227,name:'滁州监狱',rs:793,zg:214,yj:15,cc:10,qj:5},
		           {"rn":16,id:3228,name:'九龙监狱',rs:471,zg:162,yj:0,cc:10,qj:5}],
			/*
			 * list3:[
			 * {"rn":1,id:3223,name:'第二监狱',rs:862,zg:371,yj:27,cc:17,qj:5},
			 * {"rn":2,id:32236,name:'长湖监狱',rs:497,zg:256,yj:17,cc:3,qj:0},
			 * {"rn":3,id:32237,name:'临海监狱',rs:950,zg:316,yj:38,cc:31,qj:12},
			 * {"rn":4,id:32238,name:'之江监狱',rs:570,zg:262,yj:2,cc:37,qj:6},
			 * {"rn":5,id:322310,name:'西郊监狱',rs:542,zg:196,yj:10,cc:0,qj:15},
			 * {"rn":6,id:322314,name:'黄湖监狱',rs:490,zg:131,yj:15,cc:17,qj:10},
			 * {"rn":7,id:322315,name:'望春监狱',rs:760,zg:297,yj:20,cc:15,qj:6},
			 * {"rn":8,id:322316,name:'高桥监狱',rs:390,zg:121,yj:14,cc:15,qj:7},
			 * {"rn":9,id:322317,name:'湖州监狱',rs:790,zg:361,yj:16,cc:15,qj:5},
			 * {"rn":10,id:3224,name:'第四监狱',rs:847,zg:314,yj:7,cc:8,qj:4},
			 * {"rn":11,id:3225,name:'第一监狱',rs:776,zg:275,yj:9,cc:10,qj:3},
			 * {"rn":12,id:3226,name:'第三监狱',rs:681,zg:191,yj:15,cc:10,qj:6},
			 * {"rn":13,id:32234,name:'金华监狱',rs:689,zg:300,yj:26,cc:15,qj:5},
			 * {"rn":14,id:32231,name:'乔司监狱',rs:1192,zg:495,yj:30,cc:20,qj:10},
			 * {"rn":15,id:3227,name:'第五监狱',rs:793,zg:214,yj:15,cc:10,qj:5},
			 * {"rn":16,id:3228,name:'第六监狱',rs:471,zg:162,yj:0,cc:10,qj:5} ],
			 */
			/*
			 * list4:[{'tid':3223,'classs':'总值班','name':'汪峰','color':'#0FFF0F'},
			 * {'tid':3223,'classs':'副总值班','name':'鲁预、张亮','color':'#0FFF0F'},
			 * {'tid':3223,'classs':'指挥长','name':'杨东升','color':'#FF3535'},
			 * {'tid':3223,'classs':'巡查组','name':'张三、李四','color':'#0FFF0F'},
			 * {'tid':3223,'classs':'一监区','name':'王五','color':'#0FFF0F'},
			 * {'tid':3223,'classs':'二监区','name':'谢东升','color':'#0FFF0F'},
			 * {'tid':3223,'classs':'三监区','name':'王丽','color':'#FF3535'},
			 * {'tid':3223,'classs':'四监区','name':'盘已待','color':'#0FFF0F'},
			 * {'tid':3223,'classs':'五监区','name':'高二','color':'#FF2828'} ],
			 */
			/*
			 * list5:[{'tid':3223,'classs':'总值班','name':'汪峰','color':'#0FFF0F'},
			 * {'tid':3223,'classs':'副总值班','name':'鲁预、张亮','color':'#0FFF0F'},
			 * {'tid':3223,'classs':'指挥长','name':'杨东升','color':'#FF3535'},
			 * {'tid':3223,'classs':'巡查组','name':'张三、李四','color':'#0FFF0F'},
			 * {'tid':3223,'classs':'一监区','name':'王五','color':'#0FFF0F'},
			 * {'tid':3223,'classs':'二监区','name':'谢东升','color':'#0FFF0F'},
			 * {'tid':3223,'classs':'三监区','name':'王丽','color':'#FF3535'},
			 * {'tid':3223,'classs':'四监区','name':'盘已待','color':'#0FFF0F'},
			 * {'tid':3223,'classs':'五监区','name':'高二','color':'#FF2828'},
			 * {'tid':32236,'classs':'总值班','name':'汪峰','color':'#FF3535'},
			 * {'tid':32236,'classs':'副总值班','name':'鲁预、张亮','color':'#0FFF0F'},
			 * {'tid':32236,'classs':'指挥长','name':'杨东升','color':'#FF3535'},
			 * {'tid':32236,'classs':'巡查组','name':'张三、李四','color':'#0FFF0F'},
			 * {'tid':32236,'classs':'一监区','name':'王五','color':'#FF3535'},
			 * {'tid':32236,'classs':'二监区','name':'谢东升','color':'#FF3535'},
			 * {'tid':32236,'classs':'三监区','name':'王丽','color':'#FF3535'},
			 * {'tid':32236,'classs':'四监区','name':'盘已待','color':'#0FFF0F'},
			 * {'tid':32236,'classs':'五监区','name':'高二','color':'#0FFF0F'},
			 * {'tid':32237,'classs':'总值班','name':'汪峰','color':'#0FFF0F'},
			 * {'tid':32237,'classs':'副总值班','name':'鲁预、张亮','color':'#0FFF0F'},
			 * {'tid':32237,'classs':'指挥长','name':'杨东升','color':'#0FFF0F'},
			 * {'tid':32237,'classs':'巡查组','name':'张三、李四','color':'#0FFF0F'},
			 * {'tid':32237,'classs':'一监区','name':'王五','color':'#0FFF0F'},
			 * {'tid':32237,'classs':'二监区','name':'谢东升','color':'#0FFF0F'},
			 * {'tid':32237,'classs':'三监区','name':'王丽','color':'#FF3535'},
			 * {'tid':32237,'classs':'四监区','name':'盘已待','color':'#0FFF0F'},
			 * {'tid':32237,'classs':'五监区','name':'高二','color':'#FF2828'} ],
			 */
			/*
			 * flowList:[ {'name':'监外执行','value':124},
			 * {'name':'押回再审','value':64}, {'name':'特勤借用','value':44},
			 * {'name':'监狱医院','value':114}, {'name':'中心医院','value':74},
			 * {'name':'社会医院','value':154}, {'name':'新犯收押','value':84},
			 * {'name':'释放','value':76} ],
			 */
			list6:[ 
			        {'name':'合肥监狱','value':5},
			        {'name':'巢湖监狱','value':4},
			        {'name':'蜀山监狱','value':1},
			        {'name':'庐江监狱','value':1},
			        {'name':'宿州监狱','value':3},
			        {'name':'白湖监狱','value':1},
			        
			 ],
			ssList1 : [ {
				'name' : '合肥监狱',
				'num1' : 349,
				
			}, {
				'name' : '巢湖监狱',
				'num1' : 765,
				
			}, {
				'name' : '蜀山监狱',
				'num1' : 965,
				
			}, {
				'name' : '庐江监狱',
				'num1' : 1164,
				
			}, {
				'name' : '宿州监狱',
				'num1' : 465,
				
			}, {
				'name' : '白湖监狱',
				'num1' : 115,
				
			} ],
			ssList2 : [ {
				'name' : '隔离网',
				'num1' : 1765,
				'num2' : 349
			}, {
				'name' : '北围墙',
				'num1' : 65,
				'num2' : 159
			}, {
				'name' : '东围墙',
				'num1' : 765,
				'num2' : 19
			}, {
				'name' : '西围墙',
				'num1' : 1464,
				'num2' : 49
			}, {
				'name' : '南围墙',
				'num1' : 165,
				'num2' : 12
			}, {
				'name' : 'AB门',
				'num1' : 2415,
				'num2' : 292
			} ],
			/*ssList3 : [  {
				'name' : '第一监狱',
				'num1' : 7,
				
			}, {
				'name' : '第二监狱',
				'num1' : 13,
				
			}, {
				'name' : '第三监狱',
				'num1' : 5,
				
			}, {
				'name' : '第四监狱',
				'num1' : 11,
				
			}, {
				'name' : '乔司监狱',
				'num1' : 8,
				
			}, {
				'name' : '金华监狱',
				'num1' : 15,
				
			}  ],*/
			ssList5 : [ {
				'name' : '摄像机',
				'num1' : 1565,
				'num2' : 349
			}, {
				'name' : '门禁',
				'num1' : 765,
				'num2' : 159
			}, {
				'name' : '网络服务',
				'num1' : 965,
				'num2' : 49
			}, {
				'name' : '电网',
				'num1' : 1164,
				'num2' : 249
			}, {
				'name' : '破胎器',
				'num1' : 465,
				'num2' : 92
			}, {
				'name' : '球机',
				'num1' : 2115,
				'num2' : 592
			} ],
			ssList6 : [  {
				'name' : '合肥监狱',
				'num1' : 57,
				
			}, {
				'name' : '宿州监狱',
				'num1' : 59,
				
			}, {
				'name' : '白湖监狱',
				'num1' : 34,
				
			}, {
				'name' : '巢湖监狱',
				'num1' : 78,
				
			}, {
				'name' : '庐山监狱',
				'num1' : 37,
				
			}, {
				'name' : '蜀山监狱',
				'num1' : 66,
				
			} ],
			
		/*
		 * list6:[{"rn":11,id:3225,name:'第一监狱','prname':'张勇','place':'中心医院','num1':1,'num2':1,'num3':1},
		 * {"rn":11,id:3223,name:'第二监狱','prname':'王菲','place':'社会医院','num1':1,'num2':0,'num3':0},
		 * {"rn":12,id:3226,name:'第三监狱','prname':'张毅','place':'金华医院','num1':0,'num2':0,'num3':0},
		 * {"rn":13,id:32234,name:'金华监狱','prname':'潘华','place':'中心医院','num1':1,'num2':1,'num3':1},
		 * {"rn":14,id:32231,name:'乔司监狱','prname':'谢虎','place':'中心医院','num1':1,'num2':0,'num3':0},
		 * {"rn":15,id:3227,name:'第五监狱','prname':'王大力','place':'金华医院','num1':0,'num2':0,'num3':0},
		 * {"rn":16,id:3228,name:'第六监狱','prname':'张三','place':'中心医院','num1':1,'num2':1,'num3':1}
		 *  ]
		 */
		},
		methods : {
			openPolice : function(item) {
				model.list4 = [];
				var id = item.id;
				var obj = event.target;
				$("#prisons").find("li").each(function() {
					$(this).removeClass("checked");
				});
				$(obj).addClass("checked");
				for (var i = 0; i < model.list5.length; i++) {
					if (id == model.list5[i].tid) {
						model.list4.push({
							'tid' : id,
							'classs' : model.list5[i].classs,
							'name' : model.list5[i].name,
							'color' : model.list5[i].color
						});
					}
				}
			}
		}
	})

	/*
	 * $("#prisons").find("li:first").addClass("checked");
	 * 
	 * 
	 * table.init("alarmInfo",{ request: {params:' ',url:' '}, showColumns:
	 * false, pagination :false, columns: [[ { title: '时间', field: 'time',
	 * align: 'center', valign: 'middle' },{ title: '单位', field: 'dept', align:
	 * 'center', valign: 'middle' },{ title: '区域', field: 'qy', align: 'center',
	 * valign: 'middle' },{ title: '处理结果', field: 'type', align: 'center',
	 * valign: 'middle', formatter: function(value,row,index){ return value == 0 ? '<span
	 * style="color:#FF4D4D;">未处理</span>' : value; } } ]] });
	 * table.method('load',model.list1);
	 */

	table.init("yqsbInfo", {
		request : {
			params : ' ',
			url : ' '
		},
		showColumns : false,
		pagination : false,
		columns : [ [ {
			title : '时间',
			field : 'time',
			align : 'center',
			valign : 'middle'
		}, {
			title : '标题',
			field : 'titie',
			align : 'center',
			valign : 'middle'
		}, {
			title : '单位',
			field : 'dept',
			align : 'center',
			valign : 'middle'
		} ] ],
		onDblClickRow : function(row, $element) {
			$('div#overflow').animate({
				scrollTop : 0
			});
			dialog1 = dialog.open({
				targetId : 'show_panel',
				title : '上报省局详情',
				w : 96,
				h : 90
			});
		}
	});
	table.method('load', model.list2);

	// var nameX = [],array1=[];
	// for(var i=0;i<model.flowList.length;i++){
	// nameX.push({"name" : model.flowList[i].name, "max" : 150});
	// array1.push(model.flowList[i].value);
	// }
	//	
	// var prisonFlow = echarts.init(document.getElementById('prisonFlow'));
	// var prisonFlowOption = {
	// title: {
	// text: '',
	// padding:5,
	// textStyle: {
	// fontSize: '14',
	// color: '#1AFFFF'
	// }
	// },
	// tooltip:{
	// trigger : 'axis',
	// axisPointer: {
	// type : 'shadow'
	// }
	// },
	// radar: {
	// indicator: nameX,
	// // center:['50%','55%'],
	// radius:70,
	// shape: 'circle',
	// splitNumber: 5,
	// name: {
	// textStyle: {
	// color: 'rgb(238, 197, 102)',
	// fontSize:'14px'
	// }
	// },
	// splitLine: {
	// lineStyle: {
	// color: [
	// 'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
	// 'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
	// 'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
	// ].reverse()
	// }
	// },
	// splitArea: {
	// show: false
	// },
	// axisLine: {
	// lineStyle: {
	// color: 'rgba(238, 197, 102, 0.15)'
	// }
	// }
	// },
	// series: [
	// {
	// name: '流动',
	// type: 'radar',
	// lineStyle: {
	// normal: {
	// width: 2,
	// opacity: 1
	// }
	// },
	// data: [array1],
	// symbol: 'none',
	// itemStyle: {
	// normal: {
	// color: '#B3E4A1',
	// fontSize:'16px'
	// }
	// },
	// areaStyle: {
	// normal: {
	// opacity: 0.5
	// }
	// }
	// }]
	// };
	// prisonFlow.setOption(prisonFlowOption);
	//	
	// prisonFlow.on('click', function(param){
	// // qryFlowInfo();
	// dialog2 = dialog.open({targetId:'flow_panel',title:'流动信息',w: 40, h: 70});
	// qryFlowInfo();
	// });
	/*
	 * function qryFlowInfo(){ table.init("flowInfo",{ request: {params:'
	 * ',url:' '}, showColumns: false, data:model.flowList, pagination :false,
	 * columns: [[ { title: '罪犯流动事由', field: 'name', align: 'center', valign:
	 * 'middle' },{ title: '罪犯人数', field: 'value', align: 'center', valign:
	 * 'middle' } ]] }); }
	 * 
	 * table.init("zdFlow",{ request: {params:' ',url:' '}, showColumns: false,
	 * data:model.list6, pagination :false, columns: [[ { title: '单位', field:
	 * 'name', align: 'center', valign: 'middle' },{ title: '罪犯名称', field:
	 * 'prname', align: 'center', valign: 'middle' },{ title: '目的地', field:
	 * 'place', align: 'center', valign: 'middle' },{ title: '大门', field:
	 * 'num1', align: 'center', valign: 'middle', formatter:
	 * function(value,row,index){ return value==1 ? '<span
	 * style="color:#00D235;">已出</span>' : '<span style="color:#FF4D4D;">未出</span>' }
	 * 
	 * },{ title: '高速', field: 'num2', align: 'center', valign: 'middle',
	 * formatter: function(value,row,index){ return (value==1 && row.num1 == 1) ? '<span
	 * style="color:#00D235;">已达</span>' : '<span
	 * style="color:#11FFFF;text-decoration : underline;cursor : pointer;">监控</span>'; }
	 * 
	 * },{ title: '状态', field: 'num3', align: 'center', valign: 'middle',
	 * formatter: function(value,row,index){ return value==1 ? '完成' : '<span
	 * style="color:#FF4D4D;">未完成</span>' } } ]],
	 * onDblClickRow:function(row,$element){ dialog3 =
	 * dialog.open({targetId:'flow_panel2',title:'罪犯流动详细',w:70,h:90}); },
	 * onClickCell : function(field, value, row, $element){ if (field == "num2") {
	 * if(row.num2 == 0){ dialog4 =
	 * dialog.open({targetId:'flow_panel3',title:'高速路况监控',w:45,h:62}); var
	 * myVideo = document.getElementsByTagName('video'); for (var i = 0; i <
	 * myVideo.length; i++) { myVideo[i].play(); } } }
	 *  } });
	 */

	var ss1Namex = [], ss1Array1 = [], ss1Array2 = [];
	for (var i = 0; i < model.ssList1.length; i++) {
		ss1Namex.push(model.ssList1[i].name);
		ss1Array1.push(model.ssList1[i].num1);
		ss1Array2.push(model.ssList1[i].num2);
	}

	var zaiya = echarts.init(document.getElementById('zaiya'));
	var zaiyaOption = {
		color : [ "#3399FF", "#FF6262" ],
		tooltip : {
			trigger : 'axis',
			axisPointer : {
				type : 'shadow'
			}
		},
		title : {
			text : '',
			textStyle : {
				fontSize : '14',
				fontWeight : 'bold',
				color : '#1AFFFF'
			}
		},
		/*legend : {
			x : 'center',
			data : [ '正常', '损坏' ],
			textStyle : {
				color : '#fff'
			}
		},*/
		grid : {
			top : '5%',
			left : '2%',
			right : '3%',
			bottom : '2%',
			containLabel : true
		},
		xAxis : {
			type : 'category',
			axisLabel : {
				show : true,
				interval : 0,
				rotate : 10,
				textStyle : {
					color : '#BEBEBE',
					fontSize : '10'
				}
			},
			splitLine : {
				show : false
			},
			axisLine : {
				lineStyle : {
					color : '#fff',
					width : 0.5
				}
			},
			data : ss1Namex
		},
		yAxis : {
			type : 'value',
			axisLabel : {
				show : true,
				textStyle : {
					color : '#BEBEBE'
				}
			},
			splitLine : {
				show : false
			},
			axisLine : {
				show : true,
				lineStyle : {
					color : '#fff',
					width : 0.5
				}
			}
		},
		series : [ {
			name : '正常',
			type : 'bar',
			stack : '总数',
			label : {
				normal : {
					show : true,
					position : 'inside'
				}
			},
			data : ss1Array1
		}, /*{
			name : '损坏',
			type : 'bar',
			stack : '总数',
			label : {
				normal : {
					show : true,
					position : 'inside'
				}
			},
			data : ss1Array2
		} */]
	};
	zaiya.setOption(zaiyaOption);

	var ss2Namex = [], ss2Array1 = [], ss2Array2 = [];
	for (var i = 0; i < model.ssList2.length; i++) {
		ss2Namex.push(model.ssList2[i].name);
		ss2Array1.push(model.ssList2[i].num1);
		ss2Array2.push(model.ssList2[i].num2);
	}

	var quyu = echarts.init(document.getElementById('quyu'));
	var quyuOption = {
		color : [ "#3399FF", "#FF6262" ],
		tooltip : {
			trigger : 'axis',
			axisPointer : {
				type : 'shadow'
			}
		},
		title : {
			text : '',
			textStyle : {
				fontSize : '14',
				fontWeight : 'bold',
				color : '#1AFFFF'
			}
		},
		legend : {
			x : 'center',
			data : [ '正常', '异常' ],
			textStyle : {
				color : '#fff'
			}
		},
		grid : {
			top : '5%',
			left : '2%',
			right : '3%',
			bottom : '2%',
			containLabel : true
		},
		xAxis : {
			type : 'category',
			axisLabel : {
				show : true,
				interval : 0,
				rotate : 10,
				textStyle : {
					color : '#BEBEBE',
					fontSize : '10'
				}
			},
			splitLine : {
				show : false
			},
			axisLine : {
				lineStyle : {
					color : '#fff',
					width : 0.5
				}
			},
			data : ss2Namex
		},
		yAxis : {
			type : 'value',
			axisLabel : {
				show : true,
				textStyle : {
					color : '#BEBEBE'
				}
			},
			splitLine : {
				show : false
			},
			axisLine : {
				show : true,
				lineStyle : {
					color : '#fff',
					width : 0.5
				}
			}
		},
		series : [ {
			name : '正常',
			type : 'bar',
			stack : '总数',
			label : {
				normal : {
					show : true,
					position : 'inside'
				}
			},
			data : ss2Array1
		}, {
			name : '异常',
			type : 'bar',
			stack : '总数',
			label : {
				normal : {
					show : true,
					position : 'inside'
				}
			},
			data : ss2Array2
		} ]
	};
	quyu.setOption(quyuOption);

	/*var ss3Namex = [], ss3Array1 = [], ss3Array2 = [];
	for (var i = 0; i < model.ssList3.length; i++) {
		ss3Namex.push(model.ssList3[i].name);
		ss3Array1.push(model.ssList3[i].num1);
		ss3Array2.push(model.ssList3[i].num2);
	}
*/
	/*var bingfan = echarts.init(document.getElementById('bingfan'));
	var bingfanOption = {
		color : [ "#3399FF", "#FF6262" ],
		tooltip : {
			trigger : 'axis',
			axisPointer : {
				type : 'shadow'
			}
		},
		title : {
			text : '',
			textStyle : {
				fontSize : '14',
				fontWeight : 'bold',
				color : '#1AFFFF'
			}
		},
		legend : {
			x : 'center',
			data : [ '正常', '损坏' ],
			textStyle : {
				color : '#fff'
			}
		},
		grid : {
			top : '5%',
			left : '2%',
			right : '3%',
			bottom : '2%',
			containLabel : true
		},
		xAxis : {
			type : 'category',
			axisLabel : {
				show : true,
				interval : 0,
				rotate : 10,
				textStyle : {
					color : '#BEBEBE',
					fontSize : '10'
				}
			},
			splitLine : {
				show : false
			},
			axisLine : {
				lineStyle : {
					color : '#fff',
					width : 0.5
				}
			},
			data : ss3Namex
		},
		yAxis : {
			type : 'value',
			axisLabel : {
				show : true,
				textStyle : {
					color : '#BEBEBE'
				}
			},
			splitLine : {
				show : false
			},
			axisLine : {
				show : true,
				lineStyle : {
					color : '#fff',
					width : 0.5
				}
			}
		},
		series : [ {
			name : '正常',
			type : 'bar',
			stack : '总数',
			label : {
				normal : {
					show : true,
					position : 'inside'
				}
			},
			data : ss3Array1
		}, {
			name : '损坏',
			type : 'bar',
			stack : '总数',
			label : {
				normal : {
					show : true,
					position : 'inside'
				}
			},
			data : ss3Array2
		} ]
	};
	bingfan.setOption(bingfanOption);*/
	
	
	
	var bingfan = echarts.init(document.getElementById('bingfan'));
	//指定图表的配置项和数据
	var bingfanOption6 = {
			color: [
					   '#FF5959',
					   '#c487ee',
					   '#005BB7',
		               '#0074E8',
//		               '#F7A35C',
//		               '#FF2DFF',
		               '#00BB2F',
		               '#478D8D',
		               '#7B00F7',
		               '#FF2F97',
		               '#004000',
		               '#944949',
		               '#EAEA00'
		               ],
			tooltip : {
				trigger : 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend : {
				show:false,
				orient: 'vertical',
				x: 'left',
				left: 'right',
				data : [],
				textStyle: {
					color: '#fff'
				}
			},
			series : [{
			    name: '病犯',
			    type: 'pie',
			    radius: 60,
	//		    center: ['45%','60%'],
			    avoidLabelOverlab: false,
			    label: {
		            normal: {
		                formatter: function(params, ticket, callback) {
		                    return params.name + '\n' + params.value + '\n' + params.percent + '%';
		                }
		            },
		        },
		        labelLine: {
		            normal: {
		                length: 15,
		                length2: 10,
		                lineStyle: {
		                    color: '#0b5263'
		                }
		            }
		        },
			    data: model.list6
			}]
		};
		bingfan.setOption(bingfanOption6);
		
		

	var ss5Namex = [], ss5Array1 = [], ss5Array2 = [];
	for (var i = 0; i < model.ssList5.length; i++) {
		ss5Namex.push(model.ssList5[i].name);
		ss5Array1.push(model.ssList5[i].num1);
		ss5Array2.push(model.ssList5[i].num2);
	}

	var ssyx = echarts.init(document.getElementById('ssyx'));
	var ssyxOption = {
		color : [ "#3399FF", "#FF6262" ],
		tooltip : {
			trigger : 'axis',
			axisPointer : {
				type : 'shadow'
			}
		},
		title : {
			text : '',
			textStyle : {
				fontSize : '14',
				fontWeight : 'bold',
				color : '#1AFFFF'
			}
		},
		legend : {
			x : 'center',
			data : [ '正常', '异常' ],
			textStyle : {
				color : '#fff'
			}
		},
		grid : {
			top : '5%',
			left : '2%',
			right : '3%',
			bottom : '2%',
			containLabel : true
		},
		xAxis : {
			type : 'category',
			axisLabel : {
				show : true,
				interval : 0,
				rotate : 10,
				textStyle : {
					color : '#BEBEBE',
					fontSize : '10'
				}
			},
			splitLine : {
				show : false
			},
			axisLine : {
				lineStyle : {
					color : '#fff',
					width : 0.5
				}
			},
			data : ss5Namex
		},
		yAxis : {
			type : 'value',
			axisLabel : {
				show : true,
				textStyle : {
					color : '#BEBEBE'
				}
			},
			splitLine : {
				show : false
			},
			axisLine : {
				show : true,
				lineStyle : {
					color : '#fff',
					width : 0.5
				}
			}
		},
		series : [ {
			name : '正常',
			type : 'bar',
			stack : '总数',
			label : {
				normal : {
					show : true,
					position : 'inside'
				}
			},
			data : ss5Array1
		}, {
			name : '异常',
			type : 'bar',
			stack : '总数',
			label : {
				normal : {
					show : true,
					position : 'inside'
				}
			},
			data : ss5Array2
		} ]
	};
	ssyx.setOption(ssyxOption);

	/*var ss6Namex = [], ss6Array1 = [], ss6Array2 = [];
	for (var i = 0; i < model.ssList6.length; i++) {
		ss6Namex.push(model.ssList6[i].name);
		ss6Array1.push(model.ssList6[i].num1);
		ss6Array2.push(model.ssList6[i].num2);
	}

	var zhongdian = echarts.init(document.getElementById('zhongdian'));
	var zhongdianOption = {
		color : [ "#3399FF", "#FF6262" ],
		tooltip : {
			trigger : 'axis',
			axisPointer : {
				type : 'shadow'
			}
		},
		title : {
			text : '',
			textStyle : {
				fontSize : '14',
				fontWeight : 'bold',
				color : '#1AFFFF'
			}
		},
		legend : {
			x : 'center',
			data : [ '正常', '损坏' ],
			textStyle : {
				color : '#fff'
			}
		},
		grid : {
			top : '5%',
			left : '2%',
			right : '3%',
			bottom : '2%',
			containLabel : true
		},
		xAxis : {
			type : 'category',
			axisLabel : {
				show : true,
				interval : 0,
				rotate : 10,
				textStyle : {
					color : '#BEBEBE',
					fontSize : '10'
				}
			},
			splitLine : {
				show : false
			},
			axisLine : {
				lineStyle : {
					color : '#fff',
					width : 0.5
				}
			},
			data : ss6Namex
		},
		yAxis : {
			type : 'value',
			axisLabel : {
				show : true,
				textStyle : {
					color : '#BEBEBE'
				}
			},
			splitLine : {
				show : false
			},
			axisLine : {
				show : true,
				lineStyle : {
					color : '#fff',
					width : 0.5
				}
			}
		},
		series : [ {
			name : '正常',
			type : 'bar',
			stack : '总数',
			label : {
				normal : {
					show : true,
					position : 'inside'
				}
			},
			data : ss6Array1
		}, {
			name : '损坏',
			type : 'bar',
			stack : '总数',
			label : {
				normal : {
					show : true,
					position : 'inside'
				}
			},
			data : ss6Array2
		} ]
	};
	zhongdian.setOption(zhongdianOption);*/
	

	  var psNameX = [];
for (var i = 0; i < model.list3.length; i++) {
	psNameX.push(model.list3[i].name);
}
var prisonSafe = echarts.init(document.getElementById('prisonSafe'));
var prisonSafeOption = {
	tooltip : {
		trigger : 'axis',
		axisPointer : {
			lineStyle : {
				color : '#57617B'
			}
		}
	},
	legend : {
		icon : 'rect',
		itemWidth : 14,
		itemHeight : 5,
		itemGap : 13,
		data : [ '重点罪犯', '减刑' ],
		right : '4%',
		textStyle : {
			fontSize : 12,
			color : '#F1F1F3'
		}
	},
	grid : {
		top : '10%',
		left : '2%',
		right : '3%',
		bottom : '2%',
		containLabel : true
	},
	xAxis : [ {
		type : 'category',
		boundaryGap : false,
		axisLine : {
			lineStyle : {
				color : '#BEBEBE'
			}
		},
		data : psNameX
	} ],
	yAxis : [ {
		type : 'value',
		axisTick : {
			show : false
		},
		axisLine : {
			lineStyle : {
				color : '#BEBEBE'
			}
		},
		axisLabel : {
			margin : 10,
			textStyle : {
				fontSize : 14
			}
		},
		splitLine : {
			lineStyle : {
				color : '#57617B'
			}
		}
	} ],
	series : [
			{
				name : '重点罪犯',
				type : 'line',
				smooth : true,
				lineStyle : {
					normal : {
						width : 1
					}
				},
				/*areaStyle : {
					normal : {
						color : new echarts.graphic.LinearGradient(0, 0, 0,
								1, [ {
									offset : 0,
									color : 'rgba(0, 136, 212, 0.3)'
								}, {
									offset : 0.8,
									color : 'rgba(0, 136, 212, 0)'
								} ], false),
						shadowColor : 'rgba(0, 0, 0, 0.1)',
						shadowBlur : 10
					}
				},
				itemStyle : {
					normal : {
						color : 'rgb(0,136,212)'
					}
				},
				data : [ 297, 299, 199, 400, 299, 290, 280, 291, 269, 267,
						290, 284 ]
			},
			{
				name : '减刑',
				type : 'line',
				smooth : true,
				lineStyle : {
					normal : {
						width : 1
					}
				},*/
				areaStyle : {
					normal : {
						color : new echarts.graphic.LinearGradient(0, 0, 0,
								1, [ {
									offset : 0,
									color : 'rgba(219, 50, 51, 0.3)'
								}, {
									offset : 0.8,
									color : 'rgba(219, 50, 51, 0)'
								} ], false),
						shadowColor : 'rgba(0, 0, 0, 0.1)',
						shadowBlur : 10
					}
				},
				itemStyle : {
					normal : {
						color : 'rgb(219,50,51)'
					}
				},
				data : [ 184, 181, 167, 172, 243, 188, 191, 201, 179, 187,
						192, 220 ]
			}, ]
};

prisonSafe.setOption(prisonSafeOption);

	/*
	 * var psNameX = []; for(var i=0;i<model.list3.length;i++){
	 * psNameX.push(model.list3[i].name); }
	 */
	/*
	 * var prisonSafe = echarts.init(document.getElementById('prisonSafe')); var
	 * prisonSafeOption = { tooltip: { trigger: 'axis', axisPointer: {
	 * lineStyle: { color: '#57617B' } } }, legend: { icon: 'rect', itemWidth:
	 * 14, itemHeight: 5, itemGap: 13, data: ['民警数', '警力线'], right: '4%',
	 * textStyle: { fontSize: 12, color: '#F1F1F3' } }, grid : { top:'10%', left :
	 * '2%', right : '3%', bottom : '2%', containLabel : true }, xAxis: [{ type:
	 * 'category', boundaryGap: false, axisLine: { lineStyle: { color: '#BEBEBE' } },
	 * data: psNameX }], yAxis: [{ type: 'value', axisTick: { show: false },
	 * axisLine: { lineStyle: { color: '#BEBEBE' } }, axisLabel: { margin: 10,
	 * textStyle: { fontSize: 14 } }, splitLine: { lineStyle: { color: '#57617B' } }
	 * }], series: [{ name: '民警数', type: 'line', smooth: true, lineStyle: {
	 * normal: { width: 1 } }, areaStyle: { normal: { color: new
	 * echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(0,
	 * 136, 212, 0.3)' }, { offset: 0.8, color: 'rgba(0, 136, 212, 0)' }],
	 * false), shadowColor: 'rgba(0, 0, 0, 0.1)', shadowBlur: 10 } }, itemStyle: {
	 * normal: { color: 'rgb(0,136,212)' } }, data: [297, 299, 199, 400, 299,
	 * 290, 280, 291, 269, 267, 290, 284] }, { name: '警力线', type: 'line',
	 * smooth: true, lineStyle: { normal: { width: 1 } }, areaStyle: { normal: {
	 * color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0,
	 * color: 'rgba(219, 50, 51, 0.3)' }, { offset: 0.8, color: 'rgba(219, 50,
	 * 51, 0)' }], false), shadowColor: 'rgba(0, 0, 0, 0.1)', shadowBlur: 10 } },
	 * itemStyle: { normal: { color: 'rgb(219,50,51)' } }, data: [184, 181, 167,
	 * 172, 243, 188, 191, 201, 179,187, 192, 220] }, ] };
	 * prisonSafe.setOption(prisonSafeOption);
	 */

	try {

		$(window).resize(function() {
			
			zaiya.resize();
			quyu.resize();
			bingfan.resize();
			ssyx.resize();
			zhongdian.resize();
			
		});
	} catch (e) {
		console.log("初始化数据失败!");
	}
})