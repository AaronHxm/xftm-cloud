define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var echarts = require('echarts');
	var table = require('frm/table');
	var zhejiang = require('map/js/province/zhejiang');
	
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#prisonQsgk',
		data:{
			
			list2:[
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
		           {"rn":16,id:3228,name:'九龙监狱',rs:471,zg:162,yj:0,cc:10,qj:5} ],
	         list3:[{'name':'20岁以下','value':1465},
			        {'name':'20到30岁','value':674},
			        {'name':'31到35岁','value':3451},
			        {'name':'36到40岁','value':3451},
			        {'name':'41到50岁','value':3451},
			        {'name':'51到60岁','value':3451},
			        {'name':'60岁以上','value':3451},
			 ],
			 list4:[
			           {"rn":1,id:3223,name:'白湖监狱',rs:862,zg:371,yj:27,cc:17,qj:5},                    
		           {"rn":2,id:32236,name:'九成监狱',rs:497,zg:256,yj:17,cc:3,qj:0},
		           {"rn":3,id:32237,name:'巢湖监狱',rs:950,zg:316,yj:38,cc:31,qj:12},
		           {"rn":4,id:32238,name:'阜阳监狱',rs:570,zg:262,yj:2,cc:37,qj:6}, 
		           {"rn":5,id:322310,name:'合肥监狱',rs:542,zg:196,yj:10,cc:0,qj:15},
		           {"rn":6,id:322314,name:'安庆监狱',rs:490,zg:131,yj:15,cc:17,qj:10}
			           
			  ],
			  list5:[],
				 list6:[{'name':'1-2年','value':2465},
				        {'name':'3-5年','value':874},
				        {'name':'6-8年','value':7451},
				        {'name':'9-12年','value':5451},
				        {'name':'13-18年','value':3451},
				        {'name':'18年以上','value':1451},
				        
				 ],
			       
		},
		methods:{
			
		}
	});
	
	
	  
	  
	  
	 
	

		  var psNameX = [];
	for (var i = 0; i < model.list2.length; i++) {
		psNameX.push(model.list2[i].name);
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
			data : [ '加刑', '减刑' ],
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
					name : '加刑',
					type : 'line',
					smooth : true,
					lineStyle : {
						normal : {
							width : 1
						}
					},
					areaStyle : {
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
					data : [ 35, 29, 40, 36, 38, 29, 32, 42, 29, 37,
							35, 28 ]
				},
				{
					name : '减刑',
					type : 'line',
					smooth : true,
					lineStyle : {
						normal : {
							width : 1
						}
					},
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
					data : [ 28, 21, 27, 22, 38, 28, 29, 25, 37, 27,
							30, 40 ]
				}, ]
	};

	prisonSafe.setOption(prisonSafeOption);
	 
	
	
//	var pie1 = echarts.init(document.getElementById('prisonerpie1'));
//	var pieOption1 = {
//	    title: {
//	        text:'刑期变动数',
//	        left:'center',
//	        top:'56%',
//	        textStyle:{
//	            color:'#BEBEBE',
//	            fontSize:12,
//	            align:'center'
//	        }
//	    },
//	    legend: {
//	        selectedMode:false,
//	        formatter: function(name) {
//	            return 18;
//	        },
//	        data: [model.list2[0].name],
//	        left: 'center',
//	        top: 'center',
//	        icon: 'none',
//	        align:'center',
//	        textStyle: {
//	            color: "#5BFFFF",
//		        fontSize: 22,
//		        align: 'center'
//	        },
//	    },
//	    series: [{
//	        name: '',
//	        type: 'pie',
//	        radius: ['42%', '55%'],
//	        hoverAnimation: false,
//	        color: ['#c487ee', '#deb140', '#6f81da','#00ffb4'],
//	        label: {
//	            normal: {
//	                formatter: function(params, ticket, callback) {
//	                    return params.name + '\n' + params.value + '\n' + params.percent + '%';
//	                }
//	            },
//	        },
//	        labelLine: {
//	            normal: {
//	                length: 15,
//	                length2: 10,
//	                lineStyle: {
//	                    color: '#0b5263'
//	                }
//	            }
//	        },
//	        data: model.list2
//	    }]
//	};
//	pie1.setOption(pieOption1);
	
	
	var pie2 = echarts.init(document.getElementById('prisonerpie2'));
	//指定图表的配置项和数据
	var pieOption2 = {
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
			    name: '年龄',
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
			    data: model.list3
			}]
		};
		pie2.setOption(pieOption2);
	
		
		var pie6 = echarts.init(document.getElementById('prisonerpie6'));
		//指定图表的配置项和数据
		var pieOption6 = {
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
				    name: '刑期',
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
			
			
			
		var ppNamex = [],ppArray1=[],ppArray2=[];
		for(var i=0;i<model.list4.length;i++){
			ppNamex.push(model.list4[i].name);
			ppArray1.push(model.list4[i].rs);
			ppArray2.push(model.list4[i].zg);
		}
		
		var prisonPrisoner = echarts.init(document.getElementById('prisonPrisoner'));
		var prisonPrisonerOption = {
			color : ["#3399FF","#FF6262"],
			tooltip : {
				trigger : 'axis',
				axisPointer : {type : 'shadow'}
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
		 		x:'center',
		        data : [],
		        textStyle : {color : '#fff'}
			},
			grid : {
				top:'10%',
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
				data : ppNamex
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
			series : [{
			    name : '在押',
			    type : 'bar',
			    stack : '总数',
			    label : {
			    	normal : {show : true, position : 'inside'}
			    },
			    data : ppArray1
			}, /*{
			    name : '非在押',
			    type : 'bar',
			    stack : '总数',
			    label : {
			    	normal : {show : true, position : 'inside'}
			    },
			    data : ppArray2
			}*/]
		};
		prisonPrisoner.setOption(prisonPrisonerOption);
		
		
		
		
		var cityChart = echarts.init(document.getElementById('prisonFrom'));

		var geoCoordMap = {
				'01市':[120.0,30.96],
				'02市': [120.19,30.26],
				'03市': [120.76,30.77],
				'04市': [120.58,30.01],
				'05市': [121.56,29.86],
				'06市': [122.2,30],
				'07市': [119.64,29.12],
				'08市': [118.88,28.97],
				'09市': [121.43,28.68],
				'10市': [119.92,28.45],
				'11市': [120.65,28.01]
		};
		
		var data = [
		            {name: '合肥市', value: 7650},
				            {name: '芜湖市', value: 31954},
				            {name: '蚌埠市', value: 8646},
				            {name: '淮南市', value: 14159},
				            {name: '马鞍山市', value: 15624},
				            {name: '淮北市', value: 8762},
				            {name: '铜陵市', value: 24651},
				            {name: '安庆市', value: 13564},
				            {name: '黄山市', value: 16524},
				            {name: '滁州市', value: 9646},
				            {name: '阜阳市', value: 21565}
		        ];
		
		var max = 32000,min = 3000,maxSize4Pin = 100,minSize4Pin = 20;
		
		function convertData(data) {
		    var res = [];
		    for (var i = 0; i < data.length; i++) {
		        var geoCoord = geoCoordMap[data[i].name];
		        if (geoCoord) {
		            res.push({
		            	id : data[i].id,
		                name : data[i].name,
		                value:geoCoord.concat(data[i].value)
		            });
		        }
		    }
		    return res;
		};
		
		var cityOption = {
				/*title : {
					text : '浙江省罪犯分布',
					x: 'center',
					padding : 20,
					textStyle : {fontSize : '16', color : '#1AFFFF'}
				},*/
				tooltip : {
					trigger : 'item',
					formatter:function(params){
						if(typeof(params.value)[2] == 'undefined'){
							return params.name +' : ' + params.value;
						}else{
							return params.name +' : ' + params.value[2];
						}
					}
				},
				legend: {
					show:false,
		            orient: 'vertical',
		            y: 'bottom',
		            x: 'right',
		            data: ['credit_pm2.5'],
		            textStyle: {
		                color: '#fff'
		            }
		        },
		        visualMap: {
		            show: false,
		            min: 2000,
		            max: 35000,
		            left: 'left',
		            top: 'bottom',
		            text: ['高', '低'], // 文本，默认为数值文本
		            calculable: true,
		            seriesIndex: [1],
		            inRange: {
//		                 color: ['#A6A600','#880000','#031525'] // 蓝黑
		                // color: ['#ffc0cb', '#800080'] // 红紫
		                 color: ['#00152B', '#000'] // 黑绿
//		                color: ['#313131', '#031327'] // 黑紫黑
		                // color: ['#23074d', '#cc5333'] // 紫红
//		                 color: ['#00467F', '#A5CC82'] // 蓝绿
//		                 color: ['#1488CC', '#2B32B2'] // 浅蓝
		                // color: ['#00467F', '#A5CC82'] // 蓝绿
		                // color: ['#00467F', '#A5CC82'] // 蓝绿
		                // color: ['#00467F', '#A5CC82'] // 蓝绿
		                // color: ['#00467F', '#A5CC82'] // 蓝绿

		            }
		        },
				geo : {
					map : '浙江',
					label : {
						normal : {
							show : false,
							textStyle : {color : '#ffa022'}
						},
						emphasis : {show : false}
					},
					top : '10%',
					left : '10%',
					bottom : '5%',
					roam : false,
					itemStyle : {
						normal : {
							borderColor :'#3fdaff',
							areaColor : 'transparent',
							borderWidth : 0.5
						},
						emphasis : {areaColor : '#2a333d'}
					}
				},
				series : [
					{
					    name: 'credit_pm2.5',
					    type: 'scatter',
					    coordinateSystem: 'geo',
					    data: convertData(data),
					    symbolSize: function (val) {
					        return val[2] / 1000;
					    },
					    label: {
					        normal: {
					            formatter: '{b}',
					            position: 'right',
					            show: true
					        },
					        emphasis: {
					            show: true
					        }
					    },
					    itemStyle: {
					        normal: {
					            color: '#05C3F9'
					        }
					    }
					},
					 {
					    type: 'map',
					    map : '浙江',
					    top : '10%',
						left : '10%',
						bottom : '5%',
						roam : false,
					    geoIndex: 0,
					    aspectScale: 0.75, //长宽比
					    showLegendSymbol: false, // 存在legend时显示
					    label: {
					        normal: {
					            show: false
					        },
					        emphasis: {
					            show: false,
					            textStyle: {
					                color: '#fff'
					            }
					        }
					    },
					    roam : false,
						itemStyle : {
							normal : {
								borderColor :'#3fdaff',
								areaColor : 'transparent',
								borderWidth : 0.5
							},
							emphasis : {areaColor : '#2a333d'}
						},
					    animation: false,
					    data: data
					},
					{
					    name: '点',
					    type: 'scatter',
					    coordinateSystem: 'geo',
					    symbol: 'pin',
					    symbolSize: function (val) {
					        var a = (maxSize4Pin - minSize4Pin) / (max - min);
					        var b = minSize4Pin - a*min;
					        b = maxSize4Pin - a*max;
					        return a*val[2]+b;
					    },
					    label: {
					        normal: {
					            show: true,
					            textStyle: {
					                color: '#fff',
					                fontSize: 9,
					            }
					        }
					    },
					    itemStyle: {
					        normal: {
					            color: '#F62157', //标志颜色
					        }
					    },
					    zlevel: 6,
					    data: convertData(data),
					},
					{
					    name: 'Top5',
					    type: 'effectScatter',
					    coordinateSystem: 'geo',
					    data: convertData(data.sort(function (a, b) {
					        return b.value - a.value;
					    }).slice(0, 5)),
					    symbolSize: function (val) {
					        return val[2] / 1000;
					    },
					    showEffectOn: 'render',
					    rippleEffect: {
					        brushType: 'stroke'
					    },
					    hoverAnimation: true,
					    label: {
					        normal: {
					            formatter: '{b}',
					            position: 'right',
					            show: true
					        }
					    },
					    itemStyle: {
					        normal: {
					            color: '#05C3F9',
					            shadowBlur: 10,
					            shadowColor: '#05C3F9'
					        }
					    },
					    zlevel: 1
					}      
				]
		}
		cityChart.setOption(cityOption);
		
		cityChart.on('click', function(param){
			if(param.componentType == 'series'){
				var name = param.name;
				var value = param.value;
				if(typeof(value)[2] == 'undefined'){
					value = value;
				}else{
					value = value[2];
				}
				model.msgList = [];
				model.msgList.push({'name':name,'value':value});
				for(var i=0;i<model.list2.length;i++){
					if(name == model.list2[i].type){
						model.msgList.push({'name':model.list2[i].name,'value':model.list2[i].zc});
					}
				}
			}
		});	
	
	try {
		$(window).resize(function(){
			cityChart.resize();
			
			prisonSafe.resize();
			pie2.resize();
			prisonPrisoner.resize();
		});
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});