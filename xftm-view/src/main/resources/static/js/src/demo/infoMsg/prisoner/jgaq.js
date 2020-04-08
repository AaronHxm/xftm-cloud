define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var echarts = require('echarts');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	
	var dialog1 = null;

	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#jgaq',
		data:{
			flowList:[
		              {'name':'监外执行','value':124},
		              {'name':'押回再审','value':64},
		              {'name':'特勤借用','value':44},
		              {'name':'监狱医院','value':114},
		              {'name':'中心医院','value':74},
		              {'name':'社会医院','value':154},
		              {'name':'新犯收押','value':84},
		              {'name':'释放','value':76}
		     ],
		     list1:[
			           {"rn":1,id:3223,name:'第一监狱',rs:862,zg:371,yj:27,cc:17,qj:5,'ld':16254,'xf':-7953},                    
			           {"rn":2,id:32236,name:'第二监狱',rs:497,zg:256,yj:17,cc:3,qj:0,'ld':19254,'xf':-6553},  
			           {"rn":3,id:32237,name:'第三监狱',rs:950,zg:316,yj:38,cc:31,qj:12,'ld':15254,'xf':-8553},  
			           {"rn":4,id:32238,name:'第四监狱',rs:570,zg:262,yj:22,cc:37,qj:6,'ld':17254,'xf':-9953},  
			           {"rn":5,id:322310,name:'第五监狱',rs:542,zg:196,yj:19,cc:10,qj:15,'ld':14254,'xf':-6953},  
			           {"rn":6,id:322314,name:'第六监狱',rs:490,zg:131,yj:25,cc:17,qj:10,'ld':15254,'xf':-8853},  
			           {"rn":7,id:322315,name:'第七监狱',rs:760,zg:297,yj:20,cc:15,qj:6,'ld':21254,'xf':-10553},  
			           {"rn":8,id:322316,name:'xx监狱',rs:390,zg:121,yj:34,cc:15,qj:7,'ld':13254,'xf':-6953},  
			           {"rn":9,id:322317,name:'第八监狱',rs:790,zg:361,yj:26,cc:15,qj:5,'ld':17254,'xf':-5953},  
			           {"rn":10,id:3224,name:'xx监狱',rs:847,zg:314,yj:17,cc:8,qj:4,'ld':19554,'xf':-7953},  
			           {"rn":11,id:3225,name:'第九监狱',rs:776,zg:275,yj:19,cc:10,qj:3,'ld':16254,'xf':-4453},  
			           {"rn":12,id:3226,name:'xx监狱',rs:681,zg:191,yj:15,cc:10,qj:6,'ld':19954,'xf':-8883},  
			           {"rn":13,id:32234,name:'第十监狱',rs:689,zg:300,yj:26,cc:15,qj:5,'ld':14254,'xf':-3953},  
			           {"rn":14,id:32231,name:'xx监狱',rs:1192,zg:495,yj:30,cc:20,qj:10,'ld':12254,'xf':-5953},  
			           {"rn":15,id:3227,name:'xx监狱',rs:793,zg:214,yj:15,cc:10,qj:5,'ld':9254,'xf':-2953},  
			           {"rn":16,id:3228,name:'xx监狱',rs:471,zg:162,yj:20,cc:10,qj:5,'ld':8254,'xf':-3953}
			 ],
		     list3:[{'name':'自杀倾向','value':267},
		            {'name':'抑郁倾向','value':467},
			        {'name':'暴力倾向','value':351},
			 
			        {'name':'情绪不稳定','value':667},
			        {'name':'轻微','value':1092}
			 ]
		},
		methods:{
			
		}
	});
	
	var nameX = [],array1=[];
	for(var i=0;i<model.flowList.length;i++){
		nameX.push({"name" : model.flowList[i].name, "max" : 150});
		array1.push(model.flowList[i].value);
	}
	
	var prisonFlow = echarts.init(document.getElementById('prisonFlow'));
	var prisonFlowOption = {
		  title: {
		      text: '',
		      padding:5,
				textStyle: {
					fontSize: '14',
					color: '#1AFFFF'	
				}
		  	},
		  	tooltip:{
		  		trigger : 'axis',
				axisPointer: {
					type : 'shadow'
				}
		  	},
		  radar: {
		      indicator: nameX,
//		          center:['50%','55%'],
		          radius:70,
		          shape: 'circle',
		          splitNumber: 5,
		          name: {
		        	  	textStyle: {
		        		  color: 'rgb(238, 197, 102)',
		        		  fontSize:'14px'
		        	  		}
		          	},
		          splitLine: {
		        	  lineStyle: {
		        		  color: [
		        		          'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
		        		          'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
		        		          'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
		        		          ].reverse()
		        	  }
		          },
		  splitArea: {
		      show: false
		  },
		  axisLine: {
		      lineStyle: {
		          color: 'rgba(238, 197, 102, 0.15)'
		          }
		      }
		  },
		  series: [
		      {
		          name: '流动',
		          type: 'radar',
		          lineStyle: {
		        	  normal: {
		    	          width: 2,
		    	          opacity: 1
		    	      }
		          },
		          data: [array1],
		          symbol: 'none',
		          itemStyle: {
		        	  normal: {
		        		  color: '#B3E4A1',
		        		  fontSize:'16px'
		        	  }
		          },
		          areaStyle: {
		        	  normal: {
		        		  opacity: 0.5
		        	  }
		          }
		      }]
	};
	prisonFlow.setOption(prisonFlowOption);
	
	prisonFlow.on('click', function(param){
		dialog1 = dialog.open({targetId:'flow_panel',title:'流动信息',w: 40, h: 70});
		qryFlowInfo();
	});
	
	function qryFlowInfo(){
		table.init("flowInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
			data:model.flowList,
			pagination :false,
			columns: [[
				{
	                title: '罪犯流动事由',
	                field: 'name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '罪犯人数',
	                field: 'value',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]]
		});
	}
	
	
	var prisonerpie = echarts.init(document.getElementById('prisonerpie'));
	//指定图表的配置项和数据
	var prisonerpieOption = {
			color: [
					   '#FF5959',
					   '#c487ee',
					   '#deb140',
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
	prisonerpie.setOption(prisonerpieOption);
		
	
	var psNameX = [];
	var arrayJC1 = [],arrayJC2 = [],arrayXF1 = [],arrayXF2 = [];
	for(var i=0;i<model.list1.length;i++){
		psNameX.push(model.list1[i].name);
		arrayJC1.push(model.list1[i].yj);
		arrayJC2.push(model.list1[i].cc);
		arrayXF1.push(model.list1[i].ld);
		arrayXF2.push(model.list1[i].xf);
	}
	
	
	var prisonerJC = echarts.init(document.getElementById('prisonerJC'));
	var prisonerJCOption = {
		    title: {
		        text: '',
		        textStyle: {
		            fontWeight: 'normal',
		            fontSize: 16,
		            color: '#F1F1F3'
		        },
		        left: '6%'
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            lineStyle: {
		                color: '#57617B'
		            }
		        }
		    },
		    legend: {
		        icon: 'rect',
		        itemWidth: 14,
		        itemHeight: 5,
		        itemGap: 13,
		        data: ['奖励', '惩罚'],
		        right: '4%',
		        textStyle: {
		            fontSize: 12,
		            color: '#fff'
		        }
		    },
		    grid : {
				top:'5%',
				left : '2%',
				right : '3%',
				bottom : '2%',
				containLabel : true
			},
		    xAxis: [{
		        type: 'category',
		        boundaryGap: false,
		        interval : 0,
				rotate : 10,
		        axisLine: {
		            lineStyle: {
		                color: '#BEBEBE'
		            }
		        },
		        data: psNameX
		    }],
		    yAxis: [{
		        type: 'value',
		        name: '单位（次数）',
		        axisTick: {
		            show: false
		        },
		        axisLine: {
		            lineStyle: {
		                color: '#BEBEBE'
		            }
		        },
		        axisLabel: {
		            margin: 10,
		            textStyle: {
		                fontSize: 14
		            }
		        },
		        splitLine: {
		        	show:false,
		            lineStyle: {
		                color: '#BEBEBE'
		            }
		        }
		    }],
		    series: [{
		        name: '奖励',
		        type: 'line',
		        smooth: true,
		        symbol: 'circle',
		        symbolSize: 5,
		        showSymbol: false,
		        lineStyle: {
		            normal: {
		                width: 3
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                    offset: 0,
		                    color: 'rgba(16,97,204, 0.3)'
		                }, {
		                    offset: 0.8,
		                    color: 'rgba(17,235,210, 0)'
		                }], false),
		                shadowColor: 'rgba(0, 0, 0, 0.1)',
		                shadowBlur: 10
		            }
		        },
		        itemStyle: {
		            normal: {

		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                    offset: 0,
		                    color: 'rgba(16,97,204,1)'
		                }, {
		                    offset: 1,
		                    color: 'rgba(17,235,210,1)'
		                }])
		            },
		            emphasis: {
		                color: 'rgb(0,196,132)',
		                borderColor: 'rgba(0,196,132,0.2)',
		                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
		                borderWidth: 10
		            }
		        },
		        data: arrayJC1
		    }, {
		        name: '惩罚',
		        type: 'line',
		        smooth: true,
		        symbol: 'circle',
		        symbolSize: 5,
		        showSymbol: false,
		        lineStyle: {
		            normal: {
		                width: 3
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                    offset: 0,
		                    color: 'rgba(205,52,42, 0.5)'
		                }, {
		                    offset: 0.8,
		                    color: 'rgba(235,235,21, 0)'
		                }], false),
		                shadowColor: 'rgba(0, 0, 0, 0.1)',
		                shadowBlur: 10
		            },
		        },
		        itemStyle: {
		            normal: {

		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                    offset: 0,
		                    color: 'rgba(205,52,42,1)'
		                }, {
		                    offset: 1,
		                    color: 'rgba(235,235,21,1)'
		                }])
		            },
		            emphasis: {
		                color: 'rgb(99,250,235)',
		                borderColor: 'rgba(99,250,235,0.2)',
		                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
		                borderWidth: 10
		            }
		        },
		        data: arrayJC2
		    }]
		};
	
	prisonerJC.setOption(prisonerJCOption);
		
	
	
	
	var prisonXf = echarts.init(document.getElementById('prisonXf'));
	var prisonXfOption = {
		color : ["#55AA00","#C487EE"],
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
	 		itemWidth: 14,
	        itemHeight: 5,
	        itemGap: 13,
	        right: '4%',
	        data : ['劳动收入', '购物支出'],
	        textStyle : {color : '#fff'}
		},
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
			data : psNameX
		},
		yAxis : {
			type : 'value',
			name: '单位（元）',
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
		    name : '劳动收入',
		    type : 'bar',
		    stack : '总数',
		    label : {
		    	normal : {show : true, position : 'inside'}
		    },
		    data : arrayXF1
		}, {
		    name : '购物支出',
		    type : 'bar',
		    stack : '总数',
		    label : {
		    	normal : {show : true, position : 'inside'}
		    },
		    data : arrayXF2
		}]
	};
	prisonXf.setOption(prisonXfOption);
	
	
	try {
		$(window).resize(function(){
			prisonFlow.resize();
			prisonerpie.resize();
			prisonXf.resize();
			prisonerJC.resize();
		});
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});