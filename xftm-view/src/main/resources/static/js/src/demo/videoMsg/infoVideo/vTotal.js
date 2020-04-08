define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var echarts = require('echarts');
	var Highcharts = require('highcharts');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#vTotal',
		data:{
		}
	});
	
	//饼图
	var checkType = echarts.init(document.getElementById('checkType'));
	var checkTypeOption = {
			color: [
					   '#FF5959',
					   '#c487ee',
//					   '#005BB7',
		               '#0074E8',
//		               '#F7A35C',
//		               '#FF2DFF',
		               '#00BB2F',
//		               '#478D8D',
//		               '#7B00F7',
		               '#FF2F97',
		               '#004000',
		               '#944949',
		               '#EAEA00'
		               ],
		        tooltip : {
		   				trigger : 'item',
		   				formatter: "{a} <br/>{b}: {c} ({d}%)"
		   			},
	   			series : [{
				    name: '督察类型占比',
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
				    data: [
			                {'name':'玩手机','value':'3.7'},
					                {'name':'做与工作无关事情','value':'45.0'},
					                {'name':'卫生不达标','value':'26.8'},
					                {'name':'衣冠不整','value':'8.5'},
					                {'name':'打闲','value':'0.7'}
					            ]
				}]	
	};
	
	function reloadCheckType(){
		checkType.setOption(checkTypeOption);
		}
	
	//xy图
	var checkCount = echarts.init(document.getElementById('checkCount'));
	var checkCountOption = {
			    color:['#00BFFF'],
		        grid : {
					top:'5%',
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
						textStyle : {color : '#BEBEBE', fontSize : '10'}
					},
					splitLine : {show : false},
					axisLine : {
						lineStyle : {color : '#fff', width : 0.5}
					},
					data : ['第二监狱', 'xx监狱', '第三监狱', '第四监狱', '第五监狱', '第六监狱','xx省女子监狱','xx省xx坪监狱','xx省xx监狱','xx省xx监狱','xx省xx监狱','xx省xx监狱']
				},
				yAxis : {
					type : 'value',
					axisLabel : {
						show : true,
						textStyle : {color : '#BEBEBE'}
					},
					splitLine : {show : false},
					axisLine : {
						show : true,
						lineStyle : {color : '#fff', width : 0.5}
					}
				},
		        series: [{
		        	cursor:'pointer',
		            type:'bar',
		            data: [434, 523, 345, 785, 565, 843, 726, 590, 665, 434, 312,356],
		            itemStyle: {
		            	//type:'shadow',
		            	//shadowColor:'red',
		                normal: {
		                    label: {
		                        show: true,
		                        position: 'top',
		                        textStyle: {
		                            color: '#FFFFFF'
		                        },
		                    },
		                }
		            },
		        }],
		        tooltip: {
		        	show:'true',
		            axisPointer:{
		            	type:'shadow'
		            },
		            formatter: '{b}:<span style="color:white">{c}</span>',
		            backgroundColor:'red',
		        },
	};
	
	function reloadCheckCount(){
		checkCount.setOption(checkCountOption);
		}
	
	
	//曲线标识图
	var checkAlways = echarts.init(document.getElementById('checkAlways'));
	var checkAlwaysOption = {
		    color:['#FF69B4','#00FA9A'],
		    grid : {
				top:'5%',
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
					textStyle : {color : '#BEBEBE', fontSize : '6'}
				},
				splitLine : {show : false},
				axisLine : {
					lineStyle : {color : '#fff', width : 0.5}
				},
				data : ['01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00', '13:00','14:00','15:00','16:00','17:00','18:00','19:00', '20:00','21:00','22:00','23:00','24:00']
			},
			yAxis : {
				type : 'value',
				axisLabel : {
					show : true,
					textStyle : {color : '#BEBEBE'}
				},
				splitLine : {show : false},
				axisLine : {
					show : true,
					lineStyle : {color : '#fff', width : 0.5}
				}
			},

		    tooltip: {
		        crosshairs: true,
		        shared: true
		    },
		    plotOptions: {
		        spline: {
		            marker: {
		                radius: 4,
		                lineColor: '#666666',
		                lineWidth: 1
		            }
		        }
		    },
		    series: {
		        name: '次数',
		        type: 'line',
		        showSymbol: true,
		        showAllSymbol: true,
		        label: {
		        	normal:{
		        		show:true,
		        		color:'#00FA9A'
		        	}
		        },
		        itemStyle: {
		        	normal: {
		        	color: 'orange',
		        	}
		        },
		       /* marker: {
		            symbol: 'square'
		        },*/
		        data: [3,5,4,6,8,10,13,12,35,39,12,8,40,48,61, 22,18,19,15,11,12,9,6,5]
		    },
	};
	
	function reloadCheckAlways(){
		checkAlways.setOption(checkAlwaysOption);
		}
	
	//堆叠条形图
	var checkPrTop = echarts.init(document.getElementById('checkPrTop'));
	var checkPrTopOption = {
			color: ["#FF6262","#00BF00"],
			tooltip : {
				trigger : 'axis',
				axisPointer: {
					type : 'shadow'
				}
			},
		
			legend : {
		 		x:'center',
		        data : [ '公开', '不公开' ],
		        textStyle: {
		            color: '#fff'
		        }
			},
			 grid : {
					top:'10%',
					left : '2%',
					right : '5%',
					bottom : '2%',
					containLabel : true
				},
				yAxis : {
					type : 'category',
					axisLabel : {
						show : true,
//						interval : 0,
//						rotate : 10,
						textStyle : {color : '#BEBEBE', fontSize : '10'}
					},
					splitLine : {show : false},
					axisLine : {
						lineStyle : {color : '#fff', width : 0.5}
					},
					data:['张三', '李四', '王五', '赵六', '田七']
				},
				xAxis : {
					type : 'value',
					axisLabel : {
						show : true,
						textStyle : {color : '#BEBEBE'}
					},
					splitLine : {show : false},
					axisLine : {
						show : true,
						lineStyle : {color : '#fff', width : 0.5}
					}
				},
			series : [{
			    name: '公开',
			    type: 'bar',
			    stack: '总数',
			    label: {
			    	normal:{
			    		show: true,
			    		position: 'inside'
			    	}
			    },
			    data: [
			           {'name':'张三','value':'43'},
			           {'name':'李四','value':'23'},
			           {'name':'王五','value':'65'},
			           {'name':'赵六','value':'33'},
			           {'name':'田七','value':'63'},
			           ]
			},{
			    name: '不公开',
			    type: 'bar',
			    stack: '总数',
			    label: {
			    	normal:{
			    		show: true,
			    		position: 'inside'
			    	}
			    },
			    data: [
			           {'name':'张三','value':'21'},
			           {'name':'李四','value':'43'},
			           {'name':'王五','value':'54'},
			           {'name':'赵六','value':'76'},
			           {'name':'田七','value':'87'},
			           ]
			}]
	};
	
	function reloadCheckPrTop(){
		checkPrTop.setOption(checkPrTopOption);
		}
	
	
	try {
	$(window).resize(function(){
		checkType.resize();	
		checkAlways.resize();
		checkCount.resize();
		checkPrTop.resize();
		})
		reloadCheckType();
		reloadCheckCount();
		reloadCheckAlways();
		reloadCheckPrTop();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});