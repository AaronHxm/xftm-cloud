define(function(require) {
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	var echarts = require('echarts');
	var dangerRecType = null,dangerRecTypeOption = {};
	var dangerResHappTime = null,dangerResHappTimeOption = {};
	var dangerResRec = null,dangerResRecOption = {};
	var dangerResInPrisonMonthPei = null,dangerResInPrisonMonthPeiOption = {};
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#dangerResAnalysis',
		data:{
			dangerResInfolist :[ 
		         {'type':'监控设备','name':'摄像头','number':2,'applyer':'李某','dept':'第二监狱','time':'2017-12-08 13:05','reason':'摄像头损坏'},
	             {'type':'监控设备','name':'摄像头','number':1,'applyer':'王某','dept':'第三监狱','time':'2017-12-08 14:05','reason':'摄像头损坏'},
	             {'type':'监控设备','name':'摄像头','number':1,'applyer':'赵某','dept':'第四监狱','time':'2017-12-09 12:03','reason':'摄像头损坏'},
	             {'type':'监控设备','name':'摄像头','number':1,'applyer':'王某','dept':'第五监狱','time':'2017-12-09 15:05','reason':'摄像头损坏'},
	             {'type':'监控设备','name':'摄像头','number':1,'applyer':'李某','dept':'第六监狱','time':'2017-12-09 18:05','reason':'摄像头损坏'}
		     ],
		     dangerRecAreaData:[
                  {'time':'00:00~3:00','count':0},
  			      {'time':'3:00~6:00','count':0},
			      {'time':'6:00~9:00','count':0},
			      {'time':'9:00~12:00','count':0},
			      {'time':'12:00~15:00','count':3},
			      {'time':'15:00~18:00','count':1},
			      {'time':'18:00~21:00','count':1},
			      {'time':'21:00~24:00','count':0}
		     ],
		     dangerTimeSprade:[
                  {'prisonName':'第二监狱','count':3},
			      {'prisonName':'第三监狱','count':4},
			      {'prisonName':'第四监狱','count':1},
			      {'prisonName':'第五监狱','count':2},
			      {'prisonName':'第六监狱','count':5},
			      {'prisonName':'XX监狱','count':2},
			      {'prisonName':'XX监狱','count':2},
			      {'prisonName':'XX监狱','count':4}
			  ],
			  dangerPei: [
	              {'name':'监控设备','value':6},
			      {'name':'网络设备','value':1},
			      {'name':'辅助设备','value':3},
			      {'name':'语音设备','value':1}
			  ],
			  dangerMonthPei: [
			              {'name':'摄像机','value':24},
					      {'name':'监视器','value':6},
					      {'name':'对讲机','value':16},
					      {'name':'服务器等网络设备','value':2},
					      {'name':'其他工具','value':14}
					      ]
		},
		methods:{
			
		}
	})
	
	function loadDangerResInPrisonMonthPei(){
		getDangerResInPrisonMonthPei();
		var namex = [];
		var array1 = [];
		var list0 = model.dangerMonthPei;
		for ( var m in list0) {
			namex.push(list0[m].name);
			array1.push(list0[m]);
		}
		dangerResInPrisonMonthPei.setOption({
			legend : {
				data : namex
			},
			series : [ {
				name : '数量',
				data : array1
			} ]
		});
		dangerResInPrisonMonthPei.on('click', function(param) {
			list = model.dangerResInfolist;
			var list1 = new Array();
			var name = param.name;
			for (var i = 0; i < list.length; i++) {
				if (list[i].type == name) {
					list1.push(list[i]);
				}
			}
			dialog.open({
				targetId : 'danger_panel',
				title : '设备维修统计',
				w : 90,
				h : 90
			});
			qryDangerResInfo(list1);
		});
	}
	/**
	 * 危险品进监月分析
	 */
	function getDangerResInPrisonMonthPei(){
		//基于准备好的dom，初始化echarts实例
		dangerResInPrisonMonthPei = echarts.init(document.getElementById('dangerResInPrisonMonthPei'));
		//指定图表的配置项和数据
		dangerResInPrisonMonthPeiOption = {
				title:{
					text: '',
					textStyle: {
		    			fontSize: '14',
		    			fontWeight: 'bold',
		    			color: '#fff'	
		    		}
				},
			color: [
					   '#00F2F2',
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
		               '#EAEA00'
		               ],
			tooltip : {
				trigger : 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			grid : {
				top:'5%',
				left : '7%',
				right : '7%',
				bottom : '25%',
				containLabel : true
			},
			legend : {
				show:true,
				orient: 'vertical',
				x: 'left',
				left: 'right',
				data : [],
				textStyle: {
					color: '#fff'
				}
			},
			series : [{
			    name: '数量',
			    type: 'pie',
			    radius: ['30%','60%'],
//			    center: ['45%','60%'],
			    avoidLabelOverlab: false,
			    label: {
			    	normal:{
			    		position : 'inner',
			    		formatter:function(param){
			    			if(param.percent > 2){
			    				return param.name + '\n'+param.percent+'%';
			    			}else{
			    				return '';
			    			}
			    		},
			    		textStyle:{
			    			color:'#fff',
			    			fontSize:12
			    			
			    		}
			    	}
			    },
			    labelLine: {
			    	normal: {
			    		show:false
			    	}
			    },
			    data: []
			}]
		};
		dangerResInPrisonMonthPei.setOption(dangerResInPrisonMonthPeiOption);
	}
	
	/**
	 * 危险品进出趋势图
	 */
	function loadDangerRecArea(){
		getDangerRecArea();
		var namex = [];
		var array1 = [];
		var list0 = model.dangerRecAreaData;
		for (var m in list0) {
			namex.push(list0[m].time);
			array1.push(list0[m].count);
		}
		dangerResRec.setOption({
			xAxis : {data : namex},
			series : [{
				name : '设备维护',
				data : array1
			}]
		});
		dangerResRec.on('click', function(param){
			list = model.dangerResInfolist;
			var list1 = new Array();
			var times = param.name.split("~");
			for(var i =0;i<list.length;i++){
				var datetime = new Date(list[i].time);
				console.log(parseInt(times[1]));
				if(parseInt(datetime.getHours()) < parseInt(times[1]) 
						&& parseInt(datetime.getHours()) >= parseInt(times[0])){
					list1.push(list[i]);
				}
			}
			dialog.open({targetId:'danger_panel',title:'设备维修统计',w: 90, h: 90});
			qryDangerResInfo(list1);
		});
	}
	function getDangerRecArea(){
		dangerResRec = echarts.init(document.getElementById('dangerResRec'));
		dangerResRecOption = {
			title : {
				text : '',
				subtext : '',
				x : 'center',
				textStyle : {
					fontWeight : 'normal',
					color : '#06FFFF',
					fontSize : 16
				}
			},
			grid : {
				top:'5%',
				left : '7%',
				right : '7%',
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
					rotate:15,
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
				max:5,
				axisLine : {
					lineStyle : {
						color : '#fff',
						width : 0.5
					}
				},
				splitLine:{show:false}
			},
			series : [ {
				name : '设备维护',
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
			} ]

		};
		dangerResRec.setOption(dangerResRecOption);
	}
	/**
	 * 危险品进监记录
	 */
	function qryDangerResInfo(list){
		var json = {'total':list.length,'rows':list};
		$('#dangerDiv').empty();
		$('#dangerDiv').append('<table id="dangerTb"></table>');
		table.init("dangerTb", {
			request: '',
			data:list,
			showColumns: false,
			columns: [
				{
	                title: '维修种类',
	                field: 'type',
	                align: 'center',
	                valign: 'middle'
	            }, {
	                title: '型号',
	                field: 'name',
	                align: 'center',
	                valign: 'middle'
	            }, {
	                title: '数量',
	                field: 'number',
	                align: 'center',
	                valign: 'middle'
	            }, {
	                title: '审批人',
	                field: 'applyer',
	                align: 'center',
	                valign: 'middle'
	            }, {
	                title: '记录单位',
	                field: 'dept',
	                align: 'center',
	                valign: 'middle',
	                formatter: function(value,row,index){
	                	
	                	return 'XX监狱';
	                }
	            }, {
	                title: '时间',
	                field: 'time',
	                align: 'center',
	                valign: 'middle'
	            }, {
	                title: '原因',
	                field: 'reason',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]
		});
		table.method('load',json);
	}
	function loadDangerRecHappTimeSpread(){
		getDangerRecHappTimeSpread();
		var namex = [];
		var array1 = [];
		var list0 = model.dangerTimeSprade;
		for ( var m in list0) {
			namex.push(list0[m].prisonName);
			array1.push(list0[m].count);
		}
		dangerResHappTime.setOption({
			xAxis : {
				data : namex
			},
			series : [ {
				name : '次数',
				data : array1
			} ]
		});
		dangerResHappTime.on('click', function(param) {
			list = model.dangerResInfolist;
			var list1 = new Array();
			var prisonName = param.name;
			for (var i = 0; i < list.length; i++) {
				if (list[i].dept == prisonName) {
					list1.push(list[i]);
				}
			}
			dialog.open({
				targetId : 'danger_panel',
				title : '设备维修统计',
				w : 90,
				h : 90
			});
			qryDangerResInfo(list1);
		});
	}
	
	/**
	 * 各监发生次数分布
	 */
	function getDangerRecHappTimeSpread(){
		dangerResHappTime = echarts.init(document.getElementById('dangerResHappTime'));
		dangerResHappTimeOption = {
			title : {
				text : '',
				subtext : '',
				x : 'center',
				textStyle : {
					fontWeight : 'normal',
					color : '#06FFFF',
					fontSize : 16
				}
			},
			grid : {
				top:'5%',
				left : '7%',
				right : '7%',
				bottom : '25%',
				containLabel : true
			},
			tooltip : {
				trigger : 'axis',
				axisPointer : { // 坐标轴指示器，坐标轴触发有效
					type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			calculable : true,
			yAxis : [ {
				type : 'value',
				axisLine : {
					lineStyle : {
						color : '#fff',
						width : 0.3
					}
				},
				splitLine : {
					show : false
				},
				max:5
			} ],
			xAxis : [ {
				type : 'category',
				axisLabel : {
					show : true,
					interval : 0,
					rotate : 15,
					textStyle : {
						color : '#fff',
						fontSize : '8'
					}
				},
				axisLine : {
					lineStyle : {
						color : '#fff',
						width : 0.3
					}
				},
				data : []
			} ],
			series : {
				name : '次数',
				type : 'bar',
				itemStyle : {
					normal : {
						color : '#0074E8',
						label : {
							show : true,
							position : 'insideRight'
						},
						opacity : 0.7
					}
				},
				data : []
			}
		};
		dangerResHappTime.setOption(dangerResHappTimeOption);
	}
	
	function loadDangerRecTypePie(){
		getDangerRecTypePie();
		var namex = [];
		var array1 = [];
		var list0 = model.dangerPei;
		for ( var m in list0) {
			namex.push(list0[m].name);
			array1.push(list0[m]);
		}
		dangerRecType.setOption({
			legend : {
				data : namex
			},
			series : [ {
				name : '数量',
				data : array1
			} ]
		});
		dangerRecType.on('click', function(param) {
			list = model.dangerResInfolist;
			var list1 = new Array();
			var name = param.name;
			for (var i = 0; i < list.length; i++) {
				if (list[i].type == name) {
					list1.push(list[i]);
				}
			}
			dialog.open({
				targetId : 'danger_panel',
				title : '设备维修统计',
				w : 90,
				h : 90
			});
			qryDangerResInfo(list1);
		});
	}
	/**
	 * 危险品种类分析
	 */
	function getDangerRecTypePie(){
		dangerRecType = echarts.init(document.getElementById('dangerRecType'));
		dangerRecTypeOption = {
			title : {
				text : '',
				subtext : '',
				textStyle : {
					fontWeight : 'normal',
					color : '#06FFFF',
					fontSize : 16
				}
			},
			legend : {
				data : [],
				orient: 'vertical',
				left:'left',
				textStyle : {
					color : '#fff'
				}
			},
			tooltip : {
				trigger : 'item',
				formatter : "{a} <br/>{b}: {c} ({d}%)"
			},
			series : {
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

			}
		};
		dangerRecType.setOption(dangerRecTypeOption);
	}
	try {
		loadDangerRecTypePie();
		loadDangerRecHappTimeSpread();
		loadDangerRecArea();
		loadDangerResInPrisonMonthPei();
		$(window).resize(function(){
			dangerRecType.resize();
			dangerResHappTime.resize();
			dangerResRec.resize();
			dangerResInPrisonMonthPei.resize();
		});
	} catch (e) {
		console.error(e);
	}
})
