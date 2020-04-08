define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var echarts = require('echarts');
	var china = require('map/js/china');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#prisonQsgk',
		data:{
			list1:[{'name':'北京','value':1000},
			       {'name':'天津','value':595},
			       {'name':'上海','value':4364},
			       {'name':'重庆','value':595},
			       {'name':'河北','value':595},
			       {'name':'河南','value':6542},
			       {'name':'云南','value':2531},
			       {'name':'辽宁','value':595},
			       {'name':'黑龙江','value':1595},
			       {'name':'湖南','value':5462},
			       {'name':'安徽','value':7658},
			       {'name':'山东','value':2544},
			       {'name':'新疆','value':1365},
			       {'name':'浙江','value':13522},
			       {'name':'江西','value':595},
			       {'name':'湖北','value':3500},
			       {'name':'广西','value':595},
			       {'name':'甘肃','value':595},
			       {'name':'山西','value':1600},
			       {'name':'内蒙古','value':595},
			       {'name':'陕西','value':1450},
			       {'name':'吉林','value':300},
			       {'name':'江苏','value':4683},
			       {'name':'福建','value':3452},
			       {'name':'贵州','value':1200},
			       {'name':'广东','value':1595},
			       {'name':'青海','value':300},
			       {'name':'西藏','value':1350},
			       {'name':'四川','value':3655},
			       {'name':'宁夏','value':191},
			       {'name':'海南','value':200},
			       {'name':'台湾','value':638},
			       {'name':'香港','value':476},
			       {'name':'南海诸岛','value':200},
			       {'name':'澳门','value':595}
			 ],
			 list2:[{'name':'中心医院','value':865},
			        {'name':'社会医院','value':674},
			        {'name':'监狱医院','value':1451},
			        {'name':'xx医院','value':195}
			 ],
	         list3:[{'name':'危险犯','value':1465},
			        {'name':'邪教异能','value':674},
			        {'name':'普管犯','value':3451}
			 ],
			 list4:[
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
		           {"rn":16,id:3228,name:'九龙监狱',rs:471,zg:162,yj:0,cc:10,qj:5}
			  ],
			  list5:[]
			       
		},
		methods:{
			
		}
	});
	
	var geoCoordMap = {
		      '安徽': [117.17, 31.52],
		      '北京': [116.24, 39.55],
		      '重庆': [106.54, 29.59],
		      '福建': [119.18, 26.05],
		      '甘肃': [103.51, 36.04],
		      '广东': [113.14, 23.08],
		      '广西': [108.19, 22.48],
		      '贵州': [106.42, 26.35],
		      '海南': [110.20, 20.02],
		      '河北': [114.30, 38.02],
		      '河南': [113.40, 34.46],
		      '黑龙江': [128.36, 45.44],
		      '湖北': [112.27, 30.15],
		      '湖南': [112.59, 28.12],
		      '吉林': [125.19, 43.54],
		      '江苏': [118.46, 32.03],
		      '江西': [115.55, 28.40],
		      '辽宁': [123.25, 41.48],
		      '内蒙古': [108.41, 40.48],
		      '宁夏': [106.16, 38.27],
		      '青海': [101.48, 36.38],
		      '山东': [118.00, 36.40],
		      '山西': [112.33, 37.54],
		      '陕西': [108.57, 34.17],
		      '上海': [121.29, 31.14],
		      '海南': [108.77, 19.10],
		      '四川': [104.04, 30.40],
		      '天津': [117.12, 39.02],
		      '西藏': [91.08, 29.39],
		      '新疆': [87.36, 43.45],
		      '云南': [102.42, 25.04],
		      '浙江': [120.10, 30.16],
		      '澳门': [115.07, 21.33],
		      '台湾': [121.21, 23.53]
		  };
	
//	var convertData = function(data) {
//	      var res = [];
//	      for (var i = 0; i < data.length; i++) {
//	          var dataItem = data[i];
//	          var fromCoord = geoCoordMap[dataItem[0].name];
//	          var toCoord = geoCoordMap[dataItem[1].name];
//	          if (fromCoord && toCoord) {
//	              res.push({
//	                  fromName: dataItem[0].name,
//	                  toName: dataItem[1].name,
//	                  coords: [fromCoord, toCoord]
//	              });
//	          }
//	      }
//	      return res;
//	  };
	  
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
		
	  function array_cintain(obj){
		  var array = ['黑龙江','新疆','西藏','云南','内蒙古','澳门','台湾','浙江']
			for(var i =0;i<array.length;i++){
				if(array[i] == obj){
					return true;
				}
			}
			return false;
	  }
	  
	  model.list5 = [];
	  for (var i = 0; i < model.list1.length; i++) {
			var name = model.list1[i].name;
			var value = model.list1[i].value;
			if(array_cintain(name)){
				var a = [];
				a.push({"name" : name, "value" : value});
				a.push({"name" : "浙江"});
				model.list5.push(a);
			}
		}

	var prisonFrom = echarts.init(document.getElementById('prisonFrom'));
	var prisonFromOption = {
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

        visualMap: {
            show: false,
            min: 0,
            max: 10000,
            left: 'left',
            top: 'bottom',
            seriesIndex: [1],
            text: ['高', '低'], // 文本，默认为数值文本
//            color: ['#FFFF2F','#CE4300','#379B4B','#217BB1'], // 蓝黑
            color : ['#00274F', '#006AD5', '#9DCEFF'],
            calculable: true
        },
        geo : {
			map : 'china',
			zoom:1.5,
			roam : false,
//			label: {
//		        normal: {
//		            show: false
//		        },
//		        emphasis: {
//		            show: false,
//		            textStyle: {
//		                color: '#fff'
//		            }
//		        }
//		    },
//			itemStyle : {
//				normal : {
////					borderColor :'#3fdaff',
//					borderColor :'#404a59',
//					areaColor : '#000002',
//					borderWidth : 0.5
//				},
//				emphasis : {areaColor : '#2a333d'}
//			}
		},
		series : [{
		    name: '罪犯来源',
		    type: 'scatter',
		    coordinateSystem: 'geo',
		    data: convertData(model.list1),
		    symbolSize: function (val) {
		        return val[1] / 4;
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
		            color: '#000'
		        }
		    }
		},{
            name : '罪犯来源',
            type : 'map',
            zoom:1.5,
            mapType : 'china',
            roam : false,
            label : {
                normal : {show : false},
                emphasis : {show : false}
            },
           	itemStyle : {
            	normal : {
                    label : {show : false},
                    borderColor : '#fff'
                },
                emphasis : {label : {show : false}}
            },
            data : model.list1
	    }]
//        series : [{
//	        name : model.list5[0].name,
//	        type : 'lines',
//	        zlevel : 1.5,
//	        effect : {
//	            show : true,
//	            period : 6,
//	            trailLength : 0.6,
//	            color: '#fff',
//	            symbolSize: 2.5
//	        },
//	        lineStyle: {
//	            normal: {
//	            	color: '#fff',
//	                width: 0,
//	                curveness: 0.2
//	            }
//	        },
//	        data: convertData(model.list5)
//		}, {
//	        name: model.list5[0].name,
//	        type: 'lines',
//	        zlevel: 2,
//	        effect: {
//	            show: true,
//	            period: 6,
//	            trailLength: 0,
//	            symbolSize: 3
//	        },
//	        lineStyle: {
//	            normal: {
//	                color: '#FFFF84',
//	                width: 1,
//	                opacity: 0.4,
//	                curveness: 0.2
//	            }
//	        },
//	        data: convertData(model.list5)
//		}, {
//	        name: model.list5[0].name,
//	        type: 'effectScatter',
//	          coordinateSystem: 'geo',
//	          zlevel: 6,
//	          rippleEffect: {
//	              brushType: 'stroke'
//	          },
//	          label: {
//	              normal: {
//	                  show: true,
//	                  position: 'right',
//	                  formatter: '{b}'
//	              }
//	          },
//	          symbolSize: function(val) {
//	              return (val[2] > 5000) ? (val[2]/1000) : (val[2] / 100);
//	          },
//	          itemStyle: {
//	        	  normal: {
//		            	color:function(param){
//		            		var color ='#FFFF00';
//	            			if(param.name == '浙江'){
//	            				color = '#ff8102';
//	            			}
//	            			return color;
//	            		}
//		            }
//	          },
//	          data: model.list5.map(function(dataItem) {
//	              return {
//	                  name: dataItem[0].name,
//	                  value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
//	              };
//	          })
//	    }]
	};
	prisonFrom.setOption(prisonFromOption);
	
	
	var pie1 = echarts.init(document.getElementById('prisonerpie1'));
	var pieOption1 = {
	    title: {
	        text:'就医数',
	        left:'center',
	        top:'56%',
	        textStyle:{
	            color:'#BEBEBE',
	            fontSize:12,
	            align:'center'
	        }
	    },
	    legend: {
	        selectedMode:false,
	        formatter: function(name) {
	            return 2465;
	        },
	        data: [model.list2[0].name],
	        left: 'center',
	        top: 'center',
	        icon: 'none',
	        align:'center',
	        textStyle: {
	            color: "#5BFFFF",
		        fontSize: 22,
		        align: 'center'
	        },
	    },
	    series: [{
	        name: '',
	        type: 'pie',
	        radius: ['42%', '55%'],
	        hoverAnimation: false,
	        color: ['#c487ee', '#deb140', '#6f81da','#00ffb4'],
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
	        data: model.list2
	    }]
	};
	pie1.setOption(pieOption1);
	
	
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
			    name: '罪犯类型',
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
		        data : ['在押', '非在押'],
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
			}, {
			    name : '非在押',
			    type : 'bar',
			    stack : '总数',
			    label : {
			    	normal : {show : true, position : 'inside'}
			    },
			    data : ppArray2
			}]
		};
		prisonPrisoner.setOption(prisonPrisonerOption);
		
	
	try {
		$(window).resize(function(){
			prisonFrom.resize();
			pie1.resize();
			pie2.resize();
			prisonPrisoner.resize();
		});
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});