define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var echarts = require('echarts');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#aqzf',
		data:{
			list1:[
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
		    prisonNameList:[],
		    list2:[{'name':'20-30岁','value':2380},
		           {'name':'30-40岁','value':4391},
		           {'name':'40-50岁','value':5394},
		           {'name':'50-60岁','value':3348},
		           {'name':'60岁以上','value':895}
		           ],
		           
		    list3:[{'name':'中学','value':980},
		           {'name':'高中','value':1591},
		           {'name':'大专','value':2994},
		           {'name':'大学','value':5348},
		           {'name':'本科','value':3395},
		           {'name':'硕士','value':895}
		           ],
		    list4:[{'name':'心理咨询','value':980},
		           {'name':'法律','value':791},
		           {'name':'资源管理','value':894},
		           {'name':'社会关系','value':548}
		           ]
		},
		methods:{
			
		}
	});
	
	model.prisonNameList = [];
	for(var i = 0;i<model.list1.length;i++){
		model.prisonNameList.push(model.list1[i].name);
	}
	
	function getRdata(type){
		var array = [];
		var data = model.list1;
		for(var i = 0;i<data.length;i++){
			switch(type){
				case 1:
					array.push(data[i].rs);
					break;
				case 2:
					array.push(data[i].zg);
					break;
				case 3:
					array.push(data[i].yj);
					break;
				case 4:
					array.push(data[i].cc);
					break;
				case 5:
					array.push(data[i].qj);
					break;
				}
		}
		return array;
	}
	
	var policePz = echarts.init(document.getElementById('policePz'));
	var policePzOption = {
			color: ["#1E8EFF","#FB7D00","#00D2D2","#8000FF","#00BF00","#FF6262"],
			tooltip : {
				trigger : 'axis',
				axisPointer: {
					type : 'shadow'
				}
			},
			title:{
				text: '',
				padding : 0,
				textStyle: {
					fontSize: '14',
					fontWeight: 'bold',
					color: '#ffd343'	
				}
			},
			legend : {
				x: "center",
				top:10,
		        data : [ '监管民警' , '机关民警' , '特警'],
		        textStyle: {
		            color: '#fff'
		        }
			},
			grid: {
				top: '15%',
				left: '2%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : {
				type : 'value',
				axisLabel:{
					show:true,
					textStyle:{
						color:'#BEBEBE'
					}
				},
				splitLine:{
					show:false
				},
				axisLine:{
					lineStyle:{
						color:'#BEBEBE',
						width:2
					}
				}
			},
			yAxis : {
				type : 'category',
				axisLabel:{
					show:true,
					textStyle:{
						color:'#BEBEBE'
					}
				},
				axisLine:{
					lineStyle:{
						color:'#BEBEBE',
						width:2
					}
				},
				data: model.prisonNameList
			},
			series : [{
			    name: '监管民警',
			    type: 'bar',
			    stack: '总数',
			    label: {
			    	normal:{
			    		show: true,
			    		position: 'inside'
			    	}
			    },
			    data: getRdata(1)
			},{
			    name: '机关民警',
			    type: 'bar',
			    stack: '总数',
			    label: {
			    	normal:{
			    		show: true,
			    		position: 'inside'
			    	}
			    },
			    data: getRdata(2)
			},{
			    name: '特警',
			    type: 'bar',
			    stack: '总数',
			    label: {
			    	normal:{
			    		show: true,
			    		position: 'inside'
			    	}
			    },
			    data: getRdata(3)
			}]
		};
	policePz.setOption(policePzOption);
	
	var policePw = echarts.init(document.getElementById('policePw'));
	var policePwOption = {
		 
		    tooltip: {
		        "trigger": "axis",
		        "axisPointer": {
		            "type": "shadow",
		            textStyle: {
		                color: "#fff"
		            }

		        },
		    },
		    legend : {
				x: "center",
				top:10,
		        data : ['点名正常', '点名异常', '教育谈话'],
		        textStyle: {
		            color: '#fff'
		        }
			},
			grid: {
				top: '15%',
				left: '2%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
		     
		    "calculable": true,
		    "xAxis": [{
		        "type": "category",
		        "axisLine": {
		            lineStyle: {
		                color: '#90979c'
		            }
		        },
		        "splitLine": {
		            "show": false
		        },
		        "axisTick": {
		            "show": false
		        },
		        "splitArea": {
		            "show": false
		        },
		        "axisLabel": {
		            "interval": 0,

		        },
		        "data": model.prisonNameList,
		    }],
		    "yAxis": [{
		        "type": "value",
		        "splitLine": {
		            "show": false
		        },
		        "axisLine": {
		            lineStyle: {
		                color: '#90979c'
		            }
		        },
		        "axisTick": {
		            "show": false
		        },
		        "axisLabel": {
		            "interval": 0,

		        },
		        "splitArea": {
		            "show": false
		        },

		    }],
		    "dataZoom": [{
		        "show": true,
		        "height": 30,
		        "xAxisIndex": [
		            0
		        ],
		        bottom: 30,
		        "start": 10,
		        "end": 80,
		        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
		        handleSize: '110%',
		        handleStyle:{
		            color:"#d3dee5",
		            
		        },
		           textStyle:{
		            color:"#fff"},
		           borderColor:"#90979c"
		        
		        
		    }, {
		        "type": "inside",
		        "show": true,
		        "height": 15,
		        "start": 1,
		        "end": 35
		    }],
		    "series": [{
		            "name": "点名正常",
		            "type": "bar",
		            "stack": "总量",
		            "barMaxWidth": 35,
		            "barGap": "10%",
		            "itemStyle": {
		                "normal": {
		                	"color": "rgba(0,191,183,1)",
		                    
		                    "label": {
		                        "show": true,
		                        "textStyle": {
		                            "color": "#fff"
		                        },
		                        "position": "insideTop",
		                        formatter: function(p) {
		                            return p.value > 0 ? (p.value) : '';
		                        }
		                    }
		                }
		            },
		            "data": getRdata(3),
		        },

		        {
		            "name": "点名异常",
		            "type": "bar",
		            "stack": "总量",
		            "itemStyle": {
		                "normal": {
		                	"color": "rgba(255,144,128,1)",
		                    "barBorderRadius": 0,
		                    "label": {
		                        "show": true,
		                        "position": "top",
		                        formatter: function(p) {
		                            return p.value > 0 ? (p.value) : '';
		                        }
		                    }
		                }
		            },
		            "data": getRdata(4)
		        }, {
		            "name": "教育谈话",
		            "type": "line",
		            "stack": "总量",
		            symbolSize:20,
		            symbol:'circle',
		            "itemStyle": {
		                "normal": {
		                    "color": "rgba(252,230,48,1)",
		                    "barBorderRadius": 0,
		                    "label": {
		                        "show": true,
		                        "position": "top",
		                        formatter: function(p) {
		                            return p.value > 0 ? (p.value) : '';
		                        }
		                    }
		                }
		            },
		            "data": getRdata(5)
		        },
		    ]
		}
	policePw.setOption(policePwOption);
	
	
	var ageNameList = [],ageArray=[];
	for(var i=0;i<model.list2.length;i++){
		ageNameList.push({"name" : model.list2[i].name, "max" : 5400});
		ageArray.push(model.list2[i].value);
	}
	
	var policeAge = echarts.init(document.getElementById('policeAge'));
	var policeAgeOption = {
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
		      indicator: ageNameList,
//		          center:['50%','55%'],
		          radius:66,
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
		          name: '年龄',
		          type: 'radar',
		          lineStyle: {
		        	  normal: {
		    	          width: 2,
		    	          opacity: 1
		    	      }
		          },
		          data: [ageArray],
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
	policeAge.setOption(policeAgeOption);
	
	
	var policeZY = echarts.init(document.getElementById('policeZY'));
	var policeZYOption = {
	    title: {
	        text:'心理咨询',
	        left:'center',
	        top:'55%',
	        textStyle:{
	            color:'#BEBEBE',
	            fontSize:12,
	            align:'center'
	        }
	    },
	    legend: {
	        selectedMode:false,
	        formatter: function(name) {
	            return 980;
	        },
	        data: [model.list4[0].name],
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
	        data: model.list4
	    }]
	};
	policeZY.setOption(policeZYOption);
	
	
	var policeXL = echarts.init(document.getElementById('policeXL'));
	var policeXLOption = {
	    title: {
	        text:'大学',
	        left:'center',
	        top:'55%',
	        textStyle:{
	            color:'#BEBEBE',
	            fontSize:12,
	            align:'center'
	        }
	    },
	    legend: {
	        selectedMode:false,
	        formatter: function(name) {
	            return 5348;
	        },
	        data: [model.list3[0].name],
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
	        color: ['#00F2F2',
		               '#0074E8',
		               '#FF5959',
		               '#F7A35C',
		               '#FF2DFF',
		               '#00BB2F',
		               '#478D8D',
		               '#7B00F7',
		               '#FF2F97',
		               '#004000',
		               '#944949',
		               '#EAEA00','#c487ee', '#deb140', '#6f81da','#00ffb4'],
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
	policeXL.setOption(policeXLOption);
	
	
	try {
		$(window).resize(function(){
			policePz.resize();
			policePw.resize();
			policeAge.resize();
			policeZY.resize();
			policeXL.resize();
		});
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});