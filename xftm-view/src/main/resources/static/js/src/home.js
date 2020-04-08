define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var echarts = require('echarts');
	var zhejiang = require('map/js/province/zhejiang');
	var table = require('frm/table');
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#home',
		data:{
			list1:[
		            {name: 'xx市', value: 7650},
		            {name: 'xx市', value: 31954},
		            {name: 'xx市', value: 8646},
		            {name: 'xx市', value: 14159},
		            {name: 'xx市', value: 15624},
		            {name: 'xx市', value: 8762},
		            {name: 'xx市', value: 24651},
		            {name: 'xx市', value: 13564},
		            {name: 'xx市', value: 16524},
		            {name: 'xx市', value: 9646},
		            {name: 'xx市', value: 21565}
		        ],
		    list2:[
		           {id:3228,name:'白湖监狱',type:'xx市',zc:3590,zy:3560,bw:7,th:37,zxyy:15,shyy:1,xf:16,sf:null},
		           {id:32236,name:'九成监狱',type:'xx市',zc:3590,zy:3560,bw:41,th:5,zxyy:23,shyy:null,xf:3,sf:7},
		           {id:32237,name:'巢湖监狱',type:'巢湖市',zc:3590,zy:3560,bw:3,th:5,zxyy:31,shyy:2,xf:13,sf:9},
		           {id:32238,name:'合肥监狱',type:'合肥市',zc:3590,zy:3560,bw:25,th:5,zxyy:22,shyy:null,xf:13,sf:null},  
		           {id:322310,name:'阜阳监狱',type:'阜阳市',zc:3590,zy:3560,bw:16,th:5,zxyy:13,shyy:2,xf:3,sf:21},
		           {id:322314,name:'安庆监狱',type:'市',zc:3590,zy:3560,bw:7,th:21,zxyy:15,shyy:2,xf:3,sf:11},
		           {id:322315,name:'宿州监狱',type:'宿州市',zc:3590,zy:3560,bw:15,th:4,zxyy:7,shyy:1,xf:21,sf:11},
		           {id:322316,name:'庐江监狱',type:'庐江市',zc:3590,zy:3560,bw:25,th:15,zxyy:13,shyy:1,xf:13,sf:null},
		           {id:322317,name:'蚌埠监狱',type:'蚌埠市',zc:3590,zy:3560,bw:17,th:15,zxyy:null,shyy:3,xf:21,sf:11},
		           {id:3224,name:'蜀山监狱',type:'蜀山市',zc:3679,zy:3640,bw:31,th:9,zxyy:15,shyy:1,xf:null,sf:12},
		           {id:3225,name:'马鞍山监狱',type:'xx市',zc:3590,zy:3560,bw:null,th:25,zxyy:13,shyy:1,xf:12,sf:7},
		           {id:3226,name:'女子监狱',type:'xx市',zc:3590,zy:3560,bw:25,th:5,zxyy:3,shyy:2,xf:23,sf:4},
		           {id:32234,name:'潜川监狱',type:'xx市',zc:2590,zy:2560,bw:15,th:25,zxyy:23,shyy:null,xf:13,sf:null},
		           {id:32231,name:'青山监狱',type:'xx市',zc:5290,zy:4660,bw:5,th:25,zxyy:13,shyy:1,xf:17,sf:6},
		           {id:3227,name:'滁州监狱',type:'xx市',zc:4143,zy:3975,bw:17,th:19,zxyy:17,shyy:1,xf:null,sf:null},
		           {id:3223,name:'九龙监狱',type:'xx市',zc:3590,zy:3560,bw:25,th:5,zxyy:13,shyy:2,xf:10,sf:4}],
		    prisonIdList:[],
		    prisonNameList:[],
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
		           {"rn":16,id:3228,name:'九龙监狱',rs:471,zg:162,yj:0,cc:10,qj:5}
		        ],
		    zgList:[],
		    yjList:[],
		    ccList:[],
		    qjList:[],
		    msgList:[
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
				        ]
		    
		},
		methods:{
			
		}
	});
	
	var cityChart = echarts.init(document.getElementById('zjmap'));

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
	            {name: '01市', value: 7650},
	            {name: '02市', value: 31954},
	            {name: '03市', value: 8646},
	            {name: '04市', value: 14159},
	            {name: '05市', value: 15624},
	            {name: '06市', value: 8762},
	            {name: '07市', value: 24651},
	            {name: '08市', value: 13564},
	            {name: '09市', value: 16524},
	            {name: '10市', value: 9646},
	            {name: '11市', value: 21565}
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
			title : {
				text : '安徽省省罪犯分布',
				x: 'left',
				padding : 20,
				textStyle : {fontSize : '16', color : '#1AFFFF'}
			},
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
//	                 color: ['#A6A600','#880000','#031525'] // 蓝黑
	                // color: ['#ffc0cb', '#800080'] // 红紫
	                 color: ['#00152B', '#000'] // 黑绿
//	                color: ['#313131', '#031327'] // 黑紫黑
	                // color: ['#23074d', '#cc5333'] // 紫红
//	                 color: ['#00467F', '#A5CC82'] // 蓝绿
//	                 color: ['#1488CC', '#2B32B2'] // 浅蓝
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
	
	table.init("table",{
		request: {params:'',url:''},
		data:model.list3,
		showColumns: false,
		pagination :false,
		columns: [[
			{
                title: '单位',
                field: 'name',
                align: 'center',
                valign: 'middle'
            },{
                title: '人数',
                field: 'rs',
                align: 'center',
                valign: 'middle'
            },{
                title: '在岗',
                field: 'zg',
                align: 'center',
                valign: 'middle'
            },{
                title: '押解',
                field: 'yj',
                align: 'center',
                valign: 'middle'
            },{
                title: '出差',
                field: 'cc',
                align: 'center',
                valign: 'middle'
            },{
                title: '请假',
                field: 'qj',
                align: 'center',
                valign: 'middle'
            }
         ]]
	});
	
	
	var data1 = model.list2;
	for(var i = 0;i<data1.length;i++){
		model.prisonIdList.push(data1[i].id);
		model.prisonNameList.push(data1[i].name);
	}
	
	function getRdata(type){
		var array = [];
		var data = model.list2;
		for(var i = 0;i<data.length;i++){
			switch(type){
				case 1:
					array.push(data[i].zc);
					break;
				case 2:
					array.push(data[i].zy);
					break;
				case 3:
					array.push(data[i].bw);
					break;
				case 4:
					array.push(data[i].th);
					break;
				case 5:
					array.push(data[i].zxyy);
					break;
				case 6:
					array.push(data[i].shyy);
					break;
				case 7:
					array.push(data[i].xf);
					break;
				case 8:
					array.push(data[i].sf);
					break;
				}
		}
		return array;
	}
	
	var prisonRank = echarts.init(document.getElementById('prisoner_column'));
	var prisonRankOption = {
			color: ["#0082BF","#CE6700","#6f81da","#009F9F","#368F0C","#c487ee","#009F9F"],
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
		        data : [ '监外执行' , '提回再审' , '中心医院' , '社会医院' , '新犯收押' , '今日释放' ],
		        textStyle: {
		            color: '#BEBEBE'
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
			    name: '监外执行',
			    type: 'bar',
			    stack: '总数',
			    label: {
			    	normal:{
			    		show: true,
			    		position: 'inside'
			    	}
			    },
			    data: getRdata(3)
			},{
			    name: '提回再审',
			    type: 'bar',
			    stack: '总数',
			    label: {
			    	normal:{
			    		show: true,
			    		position: 'inside'
			    	}
			    },
			    data: getRdata(4)
			},{
			    name: '中心医院',
			    type: 'bar',
			    stack: '总数',
			    label: {
			    	normal:{
			    		show: true,
			    		position: 'inside'
			    	}
			    },
			    data: getRdata(5)
			},{
			    name: '社会医院',
			    type: 'bar',
			    stack: '总数',
			    label: {
			    	normal:{
			    		show: true,
			    		position: 'inside'
			    	}
			    },
			    data: getRdata(6)
			},{
			    name: '新犯收押',
			    type: 'bar',
			    stack: '总数',
			    label: {
			    	normal:{
			    		show: true,
			    		position: 'inside'
			    	}
			    },
			    data: getRdata(7)
			},{
			    name: '今日释放',
			    type: 'bar',
			    stack: '总数',
			    label: {
			    	normal:{
			    		show: true,
			    		position: 'inside'
			    	}
			    },
			    data: getRdata(8)
			}]
		};
	prisonRank.setOption(prisonRankOption);
	
	
	prisonRank.on('click', function(param){
		var id = model.prisonIdList[param.dataIndex];
//		alert(id);	
	});
	
	
	
	
	

	var zgTotal = 0;
	var yjTotal = 0;
	var ccList = 0;
	var qjList = 0;
	var scale = 1;
	var poNumList = new Array();
	for(var i=0;i<model.list3.length;i++){
		model.zgList.push({'id':model.list3[i].id,'name':model.list3[i].name,'value':model.list3[i].zg});
		model.yjList.push({'id':model.list3[i].id,'name':model.list3[i].name,'value':model.list3[i].yj});
		model.ccList.push({'id':model.list3[i].id,'name':model.list3[i].name,'value':model.list3[i].cc});
		model.qjList.push({'id':model.list3[i].id,'name':model.list3[i].name,'value':model.list3[i].qj});
		zgTotal += model.list3[i].zg;
		yjTotal += model.list3[i].yj;
		ccList += model.list3[i].cc;
		qjList += model.list3[i].qj;
	}
	
	poNumList.push({'name':'押解','value':yjTotal});
	poNumList.push({'name':'出差','value':ccList});
	poNumList.push({'name':'请假','value':qjList});
	poNumList.push({'name':'在岗','value':zgTotal});
	
	var echartData = poNumList;
	var rich = {
	    yellow: {
	        color: "#ffc72b",
	        fontSize: 30 * scale,
	        padding: [5, 4],
	        align: 'center'
	    },
	    total: {
	        color: "#ffc72b",
	        fontSize: 40 * scale,
	        align: 'center'
	    },
	    white: {
	        color: "#fff",
	        align: 'center',
	        fontSize: 14 * scale,
	        padding: [21, 0]
	    },
	    blue: {
	        color: '#49dff0',
	        fontSize: 16 * scale,
	        align: 'center'
	    },
	    hr: {
	        borderColor: '#0b5263',
	        width: '100%',
	        borderWidth: 1,
	        height: 0,
	    }
	}
	var policePie = echarts.init(document.getElementById('police_pie'));
	var policePieOption = {
	    title: {
	        text:'在岗数',
	        left:'center',
	        top:'55%',
	        textStyle:{
	            color:'#0FFF0F',
	            fontSize:14*scale,
	            align:'center'
	        }
	    },
	    legend: {
	        selectedMode:false,
	        formatter: function(name) {
	            return zgTotal;
	        },
	        data: [echartData[0].name],
	        left: 'center',
	        top: 'center',
	        icon: 'none',
	        align:'center',
	        textStyle: {
	            color: "#00ffb4",
		        fontSize: 24 * scale,
		        align: 'center'
	        },
	    },
	    series: [{
	        name: '在岗数量',
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
	                length: 15 * scale,
	                length2: 10,
	                lineStyle: {
	                    color: '#0b5263'
	                }
	            }
	        },
	        data: echartData
	    }]
	};
	
	policePie.setOption(policePieOption);
	
	
	try {

		$(window).resize(function(){
			cityChart.resize();
			prisonRank.resize();
			policePie.resize();
		});
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});