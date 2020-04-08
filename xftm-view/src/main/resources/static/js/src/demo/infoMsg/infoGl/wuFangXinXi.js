define(function(require) {
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	var echarts = require('echarts');
	var personArea = null,personAreaOption = {};
	var carArea = null,carAreaOption = {};
	var carPersonSpread = null,carPersonSpreadOption = {};
	var carPersonPie = null,carPersonPieOption = {};
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#statisAnalysis',
		data:{
			personAreaData:[  
                {'time':'00:00~3:00','incount':5,'outcount':5},
		 		        {'time':'3:00~6:00','incount':15,'outcount':20},
				        {'time':'6:00~9:00','incount':30,'outcount':25},
				        {'time':'9:00~12:00','incount':60,'outcount':50},
				        {'time':'12:00~15:00','incount':30,'outcount':45},
				        {'time':'15:00~18:00','incount':50,'outcount':30},
				        {'time':'18:00~21:00','incount':20,'outcount':40},
				        {'time':'21:00~24:00','incount':5,'outcount':0}],
		    carAreaData:[{'time':'00:00~3:00','incount':50,'outcount':150},
		 		        {'time':'3:00~6:00','incount':20,'outcount':100},
				        {'time':'6:00~9:00','incount':30,'outcount':250},
				        {'time':'9:00~12:00','incount':45,'outcount':300},
				        {'time':'12:00~15:00','incount':38,'outcount':408},
				        {'time':'15:00~18:00','incount':26,'outcount':305},
				        {'time':'18:00~21:00','incount':34,'outcount':322},
				        {'time':'21:00~24:00','incount':22,'outcount':124}],
			carPersonSpreadData:[
				{'prisonName':'第二监狱','carCount':100,'personCount':80},
				{'prisonName':'第三监狱','carCount':42,'personCount':65},
				{'prisonName':'第四监狱','carCount':95,'personCount':64},
				{'prisonName':'第五监狱','carCount':55,'personCount':85},
				{'prisonName':'第六监狱','carCount':65,'personCount':86},
				{'prisonName':'xx监狱','carCount':98,'personCount':89},
				{'prisonName':'女子监狱','carCount':43,'personCount':62},
				{'prisonName':'xx监狱','carCount':54,'personCount':35}
			 ],
			carPersonInfoList : [ {
				'id' : '10001',
				'name' : '当日车辆入监',
				'total' : '50',
				'detail' : [ {
					'date' : '2017-12-08',
					'name' : '张某某',
					'carNo' : 'xAB8T50',
					'statu' : '进监',
					'inOutTime' : '2017-12-08 11:05',
					'prisonName' : '第二监狱'
				}, {
					'date' : '2017-12-08',
					'name' : '李某某',
					'carNo' : 'xAC7C30',
					'statu' : '进监',
					'inOutTime' : '2017-12-08 12:09',
					'prisonName' : '第二监狱'
				}, {
					'date' : '2017-12-08',
					'name' : '王某某',
					'carNo' : 'xBB3520',
					'statu' : '进监',
					'inOutTime' : '2017-12-08 13:05',
					'prisonName' : '第二监狱'
				} ]

			}, {
				'id' : '10001',
				'name' : '当日车辆出监',
				'total' : '50',
				'detail' : [ {
					'date' : '2017-12-08',
					'name' : '宋某某',
					'carNo' : 'xAB8T50',
					'statu' : '出监',
					'inOutTime' : '2017-12-08 10:05',
					'prisonName' : '第二监狱'
				}, {
					'date' : '2017-12-08',
					'name' : '赵某某',
					'carNo' : 'xAC7C30',
					'statu' : '出监',
					'inOutTime' : '2017-12-08 11:05',
					'prisonName' : '第二监狱'
				}, {
					'date' : '2017-12-08',
					'name' : '孙某某',
					'carNo' : 'xBB3520',
					'statu' : '出监',
					'inOutTime' : '2017-12-08 15:05',
					'prisonName' : '第二监狱'
				} ]
			}, {
				'id' : '10001',
				'name' : '当日人员入监',
				'total' : '30',
				'detail' : [ {
					'date' : '2017-12-08',
					'name' : '李某某',
					'carNo' : 'xA88888',
					'statu' : '进监',
					'inOutTime' : '2017-12-08 11:05',
					'prisonName' : '第二监狱'
				}, {
					'date' : '2017-12-08',
					'name' : '张某某',
					'carNo' : 'xAY8923',
					'statu' : '进监',
					'inOutTime' : '2017-12-08 11:05',
					'prisonName' : '第二监狱'
				}, {
					'date' : '2017-12-08',
					'name' : '赵某某',
					'carNo' : 'xA8T342',
					'statu' : '进监',
					'inOutTime' : '2017-12-08 11:05',
					'prisonName' : '第二监狱'
				} ]
			}, {
				'id' : '10001',
				'name' : '当日人员出监',
				'total' : '30',
				'detail' : [ {
					'date' : '2017-12-08',
					'name' : '张某某',
					'carNo' : 'xA85648',
					'statu' : '出监',
					'inOutTime' : '2017-12-08 11:05',
					'prisonName' : '第二监狱'
				}, {
					'date' : '2017-12-08',
					'name' : '李某某',
					'carNo' : 'xA88082',
					'statu' : '出监',
					'inOutTime' : '2017-12-08 11:05',
					'prisonName' : '第二监狱'
				}, {
					'date' : '2017-12-08',
					'name' : '张某某',
					'carNo' : 'xAC8875',
					'statu' : '出监',
					'inOutTime' : '2017-12-08 16:05',
					'prisonName' : '第二监狱'
				} ]
			} ],
			carPersonList:[{'name':'人员','value':100},{'name':'车辆','value':200}],
			list6:[{'name':'防弹衣','value':500},
			        {'name':'警棍','value':800},
			        {'name':'手枪','value':100},
			        {'name':'手铐','value':1000},
			        {'name':'烟雾弹','value':30},
			        {'name':'手电','value':1200},
			        
			 ],
			 list5:[{'name':'防撞拄','value':1565},
			        {'name':'防撞墙','value':765},
			        {'name':'摄像机','value':1164},
			        {'name':'报警器','value':465},
			        {'name':'安全门','value':2115},
			        {'name':'对讲机','value':465},
			        {'name':'红外探测仪','value':485},
			        {'name':'紧急按钮','value':635},
			      
			        
			        ],
			        
			        ssList5 : [ {
						'name' : '防撞拄',
						'num1' : 1565,
						'num2' : 349
					}, {
						'name' : '防撞墙',
						'num1' : 765,
						'num2' : 159
					}, {
						'name' : '摄像机',
						'num1' : 965,
						'num2' : 49
					}, {
						'name' : '报警器',
						'num1' : 1164,
						'num2' : 249
					}, {
						'name' : '安全门',
						'num1' : 465,
						'num2' : 92
					}, {
						'name' : '对讲机',
						'num1' : 2115,
						'num2' : 592
					} , {
						'name' : '红外探测仪',
						'num1' : 465,
						'num2' : 92
					}, {
						'name' : '紧急按钮',
						'num1' : 465,
						'num2' : 92
					}],
			carPersonInfoShow:{}
		},
		methods:{
			
		}
	})
	/**
	 * 人员进出趋势图
	 */
	var namex = [];
	var array1 = [];
	var array2 = [];
	var list0 = model.carAreaData;
	for (var m in list0) {
		namex.push(list0[m].time);
		array1.push(list0[m].incount);
		array2.push(list0[m].outcount);
	}
	
		var carArea = echarts.init(document.getElementById('carArea'));
		var carAreaOption = {
			title : {
				text : '',
				subtext : '',
				textStyle : {
					fontWeight : 'normal',
					color : '#06FFFF',
					fontSize : 16
				}
			},
			tooltip : {
				trigger : 'axis'
			},
			grid : {
				top:'5%',
				left : '2%',
				right : '10%',
				bottom : '25%',
				containLabel : true
			},
			calculable : true,
			xAxis : {
				type : 'category',
				axisLabel : {
					show : true,
					interval : 0,
					rotate:-15,
					textStyle : {
						color : '#fff',
						fontSize : '10'
					}
				},
				axisLine : {
					lineStyle : {
						color : '#fff',
						width : 0.5
					}
				},
				data : ['防爆头盔','防弹衣','警棍','手枪','步枪','手铐','手电','烟雾弹'],
			},
			yAxis : {
				type : 'value',
				splitLine : {
					show : false
				},
				axisLine : {
					lineStyle : {
						color : '#fff',
						width : 0.5
					}
				}
			},
			series : [/* {
				name : '损坏',
				type : 'line',
				smooth : true,
				itemStyle : {
					normal : {
						color : '#B3E4A1'
					}
				},
				areaStyle : {
					normal : {
						opacity : 0.5
					}
				},
				data : array1
			},*/
			 {
				name : '增加',
				type : 'line',
				smooth : true,
				itemStyle : {
					normal : {
						color : '#06FFFF'
					}
				},
				areaStyle : {
					normal : {
						opacity : 0.5
					}
				},
				data : array2
			}]

		};
		carArea.setOption(carAreaOption);
	
	function loadCarArea() {
		getCarArea();
		var namex = [];
		var array1 = [];
		var array2 = [];
		var list0 = model.carAreaData;
		for (var m in list0) {
			namex.push(list0[m].time);
			array1.push(list0[m].incount);
			array2.push(list0[m].outcount);
		}
		carArea.setOption({
			xAxis : {data : namex},
			series : [{
				name : '车辆进监',
				data : array1
			},
			{
				name : '车辆出监',
				data : array2
			}]
		});
		carArea.on('click', function(param){
			model.carPersonInfoShow = model.carPersonInfoList[0];
			dialog.open({targetId:'show_panel',title:'外来人车进出记录详情',w: 90, h: 90});
		});
	}
	/**
	 * 人员进出趋势图
	 */
	/*function getPersonArea() {
		personArea = echarts.init(document.getElementById('personArea'));
		personAreaOption = {
			title : {
				text : '',
				subtext : '',
				textStyle : {
					fontWeight : 'normal',
					color : '#06FFFF',
					fontSize : 16
				}
			},
			grid : {
				top:'5%',
				left : '2%',
				right : '10%',
				bottom : '25%',
				containLabel : true
			},
			tooltip : {
				trigger : 'axis'
			},
			calculable : true,
			xAxis : {
				type : 'category',
				axisLabel : {
					show : true,
					interval : 0,
					rotate:-15,
					textStyle : {
						color : '#fff',
						fontSize : '10'
					}
				},
				axisLine : {
					lineStyle : {
						color : '#fff',
						width : 0.5
					}
				},
				data : [],
			},
			yAxis : {
				type : 'value',
				axisLine : {
					lineStyle : {
						color : '#fff',
						width : 0.5
					}
				},
				splitLine : {
					show : false
				},
			},
			series : [ {
				name : '人员进监',
				type : 'line',
				smooth : true,
				itemStyle : {
					normal : {
						color : '#B3E4A1'
					}
				},
				areaStyle : {
					normal : {
						opacity : 0.5
					}
				},
				data : []
			},{
				name : '人员出监',
				type : 'line',
				smooth : true,
				itemStyle : {
					normal : {
						color : '#06FFFF'
					}
				},
				areaStyle : {
					normal : {
						opacity : 0.5
					}
				},
				data : []
			} ]

		}
		personArea.setOption(personAreaOption);
	}*/
	
	
	var ss5Namex = [], ss5Array1 = [], ss5Array2 = [];
	for (var i = 0; i < model.ssList5.length; i++) {
		ss5Namex.push(model.ssList5[i].name);
		ss5Array1.push(model.ssList5[i].num1);
		ss5Array2.push(model.ssList5[i].num2);
	}

	var ssyx = echarts.init(document.getElementById('personArea'));
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
	
	
	function loadPersonArea() {
		getPersonArea();
		var namex = [];
		var array1 = [];
		var array2 = [];
		var list0 = model.personAreaData;
		for (var m in list0) {
			namex.push(list0[m].time);
			array1.push(list0[m].incount);
			array2.push(list0[m].outcount);
		}
		personArea.setOption({
			xAxis : {data : namex},
			series : [{
				name : '人员进监',
				data : array1
			},{
				name : '人员出监',
				data : array2
			}]
		});
		personArea.on('click', function(param){
			model.carPersonInfoShow = model.carPersonInfoList[0];
			dialog.open({targetId:'show_panel',title:'外来人车进出记录详情',w: 90, h: 90});
		});
	}
		var namex = [];
		var array1 = [];
		var array2 = [];
		var list0 = model.carPersonSpreadData;
		for (var m in list0) {
			namex.push(list0[m].prisonName);
			array1.push(list0[m].personCount);
			array2.push(list0[m].carCount);
		}
		var carPersonSpread = echarts.init(document.getElementById('personCarSpread'));
		var carPersonSpreadOption = {
			title : {
				text : '',
				subtext : '',
				textStyle : {
					fontWeight : 'normal',
					color : '#06FFFF',
					fontSize : 16
				}
			},
			tooltip : {
				trigger : 'axis',
				axisPointer : { // 坐标轴指示器，坐标轴触发有效
					type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid : {
				top:'2%',
				left : '3%',
				right : '4%',
				bottom : '10%',
				containLabel : true
			},
			legend : {
				data : [ '人员', '车辆' ],
				left : 'right',
				textStyle : {
					color : '#fff'
				}
			},
			calculable : true,
			xAxis : [ {
				type : 'value',
				axisLabel : {
					show : true,
					interval : 0,
					textStyle : {
						color : '#fff',
						fontSize : '10'
					}
				},
				axisLine : {
					lineStyle : {
						color : '#fff',
						width : 2
					}
				},
				splitLine : {
					show : false
				},
			} ],
			yAxis : [ {
				type : 'category',
				data : namex ,
				axisLabel : {
					show : true,
					interval : 0,
					rotate : 15,
					textStyle : {
						color : '#fff',
						fontSize : '10'
					}
				},
				axisLine : {
					lineStyle : {
						color : '#fff',
						width : 2
					}
				}
			} ],
			series : [ {
				name : '人员',
				type : 'bar',
				stack : '总量',
				itemStyle : {
					normal : {
						color : '#3399FF',
						label : {
							show : true,
							position : 'insideRight'
						},
						opacity : 0.7
					}
				},
				data : array1
			}, {
				name : '车辆',
				type : 'bar',
				stack : '总量',
				itemStyle : {
					normal : {
						color : '#FF6262',
						label : {
							show : true,
							position : 'insideRight'
						},
						opacity : 0.8
					}
				},
				data : array2
			}

			]

		};
		carPersonSpread.setOption(carPersonSpreadOption);
	
	/**
	 * 人员车辆分布
	 */
	function loadCarPersonSpread() {
		getCarPersonSpread();
		var namex = [];
		var array1 = [];
		var array2 = [];
		var list0 = model.carPersonSpreadData;
		for (var m in list0) {
			namex.push(list0[m].prisonName);
			array1.push(list0[m].personCount);
			array2.push(list0[m].carCount);
		}
		carPersonSpread.setOption({
			yAxis : {data : namex},
			series : [{
				name : '人员',
				data : array1
			},{
				name : '车辆',
				data : array2
			}]
		});
		carPersonSpread.on('click', function(param){
			model.carPersonInfoShow = model.carPersonInfoList[0];
			dialog.open({targetId:'show_panel',title:'外来人车进出记录详情',w: 90, h: 90});
		});
	}
	function loadCarPersonPie(){
		getCarPersonPie();
		var array1 = [];
		var namex = [];
		var list0 = model.carPersonList;
		for (var m in list0) {
			array1.push(list0[m]);
			namex.push(list0[m].name);
		}
		carPersonPie.setOption({
			legend : {
				data : namex
			},
			series : [{
				name : '人数',
				data : array1
			}]
		});
		carPersonPie.on('click', function(param){
			model.carPersonInfoShow = model.carPersonInfoList[0];
			dialog.open({targetId:'show_panel',title:'外来人车进出记录详情',w: 90, h: 90});
		});
	}
	/**
	 * 人员/车辆饼图
	 */
	function getCarPersonPie(){
		carPersonPie = echarts.init(document.getElementById('carPersonPie'));
		carPersonPieOption = {
			title : {
				text : '',
				subtext : '',
				x : 'left',
				textStyle : {
					fontWeight : 'normal',
					color : '#06FFFF',
					fontSize : 16
				}
			},
			tooltip : {
				trigger : 'item',
				formatter : "{a} <br/>{b}: {c} ({d}%)"
			},
			grid : {
				top:'2%',
				left : '2%',
				right : '3%',
				bottom : '2%',
				containLabel : true
			},
			legend : {
				top : 'bottom',
				data : [],
				textStyle : {
					color : '#fff'
				}
			},
			series : [ {
				name : '数量',
				type : 'pie',
				radius : '60%',
				center : [ '50%', '40%' ],
				data : [],
				itemStyle : {
					emphasis : {
						shadowBlur : 10,
						shadowOffsetX : 0,
						shadowColor : 'rgba(0, 0, 0, 0.5)'
					}
				},
				label : {
					normal : {
						show : true,
						position : 'inner',
						formatter : function(param) {
							if (param.percent > 2) {
								return param.name;
							} else {
								return '';
							}
						},
						textStyle : {
							color : '#fff',
							fontSize : 12
						}
					}
				},
				labelLine : {
					normal : {
						show : true
					}
				}

			} ]
		}
		carPersonPie.setOption(carPersonPieOption);
	}
	
	
	
	var pie6 = echarts.init(document.getElementById('jingyongshebei'));
	//指定图表的配置项和数据
	var pieOption6 = {
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
			    name: '设备',
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
		pie6.setOption(pieOption6);
		
		
		var anfang = echarts.init(document.getElementById('anfang'));
		//指定图表的配置项和数据
		var anfangOption6 = {
				color: [
						   '#FF5959',
						   '#c487ee',
						   '#005BB7',
			               '#0074E8',
//			               '#F7A35C',
//			               '#FF2DFF',
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
				    name: '设施',
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
				    data: model.list5
				}]
			};
		anfang.setOption(anfangOption6);
		
	
	function initTable(){
		table.init('table', {
			request : '',
			data : model.carPersonInfoList,
			showColumns : false,
			pagination :false,
			columns : [ [ {
				title : '人/车进出',
				field : 'name',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}, {
				title : '数量',
				field : 'total',
				align : 'center',
				valign : 'middle',
				width : '10%'
			} ] ],
			onDblClickRow : function(row) {
				model.carPersonInfoShow = row;
				dialog.open({
					targetId : 'show_panel',
					title : '详情',
					w : "80",
					h : "80"
				});
			}
		});
	}
	
	try {
		loadCarPersonPie();
		loadCarPersonSpread();
		loadPersonArea();
		
		initTable();
		$(window).resize(function(){
			pie6.resize();
			ssyx.resize();
			anfang.resize();
			personArea.resize();
			carArea.resize();
			carPersonSpread.resize();
			carPersonPie.resize();
			
		});
	} catch (e) {
		console.error(e);
	}
})
