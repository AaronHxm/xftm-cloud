define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var echarts = require('echarts');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	var y4m2d2 = '20171209';

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#tjcx',
		data: {
			prisonList: [
			    '防撞柱', '防撞门', '摄像机', '报警器', '金属探测器', '安全门', '对讲机', '紧急按钮', '震动探测仪',
			    '红外探测仪', '其他'
			],
			prisonCount: [
			    '8456', '8789', '32567', '7813', '12789', '95398', '85915', '23578', '4791','5823', '33810'
			],
			alarm_type_list: ['防撞柱', '报警器', '对讲机', '红外探测仪', '摄像机'],
			alarm_type_list1: ['防爆头盔', '防爆手枪', '烟雾弹', '手铐', '警棍'],
			alarm_type_msg: [
                {value: 335, name: '防撞柱'},
				{value: 310, name: '报警器'},
				{value: 234, name: '对讲机'},
				{value: 135, name: '红外探测仪'},
				{value: 1548, name: '摄像机'}
			],
			renew_type:[
				{value: 65, name: '防撞柱'},
				{value: 78, name: '报警器'},
				{value: 121, name: '对讲机'},
				{value: 95, name: '红外探测仪'},
				{value: 185, name: '摄像机'}
			],
			alarm_time: [
			    '防爆头盔', '防弹衣', '警棍', '防爆盾', '防爆手枪', '防爆步枪', '烟雾弹', '手铐', '强光手电',
			    '防爆工具箱', '其他'
			],
			alarm_time_count: [
			    5634, 25634, 5634, 3214, 5634, 980, 2350, 38720, 4236, 21302, 21731
			],
			alarmList: [
			    {
			    		'ard_record_id': '001',
			    		'ard_alert_date': '安全门',
			    		'ard_alertor_name': '3456',
			    		'ard_alert_addrs': '390',
			    		'ard_alert_police': '268',
			    		'ard_alert_level': '580',
			    		'ard_dvc_type': '消防报警',
			    		'ard_alert_reason': '明火',
			    		'ard_receive_alarm_police': '李四',
			    		'ard_receive_time': '2017-12-07 10:01:23',
			    		'ard_local_case': '现场已控制',
			    		'ard_oprtr': '王五',
			    		'ard_oprtn_time': '2017-12-07 10:20:16',
			    		'ard_oprtn_desc': '现场已得到控制',
			    		'ard_oprtn_finish_time': '2017-12-07 11:01:23',
			    		'ard_finish_sure_police': '赵六',
			    		'ard_oprtn_stts': '处理完成',
			    		'ard_receive_stts': '正常接警',
			    		'ard_alert_police_name': '王明',
			    		'ard_rec_police_name': '王聪'
				    }, {
			    		'ard_record_id': '002',
			    		'ard_alert_date': '摄像头',
			    		'ard_alertor_name': '13049',
			    		'ard_alert_addrs': '865',
			    		'ard_alert_police': '568',
			    		'ard_alert_level': '1000',
			    		'ard_dvc_type': '门禁报警',
			    		'ard_alert_reason': '撞门',
			    		'ard_receive_alarm_police': '李四',
			    		'ard_receive_time': '2017-12-07 10:01:23',
			    		'ard_local_case': '已控制',
			    		'ard_oprtr': '王五',
			    		'ard_oprtn_time': '2017-12-07 10:20:16',
			    		'ard_oprtn_desc': '已控制',
			    		'ard_oprtn_finish_time': '2017-12-07 11:01:23',
			    		'ard_finish_sure_police': '赵六',
			    		'ard_oprtn_stts': '处理完成',
			    		'ard_receive_stts': '正常接警',
			    		'ard_alert_police_name': '王明',
			    		'ard_rec_police_name': '王聪'
				    }
            ],
            date: {
            	'year': y4m2d2.substr(0, 4),
            	'month': y4m2d2.substr(4, 2),
            	'day': y4m2d2.substr(6, 2)
            }
		},
		methods: {}
	});

	//报警数量统计
	var alarm_count = echarts.init(document.getElementById('alarm_count_map'));
	var alarm_count_option = {
			/*title: {
				text: '全省报警数量统计',
				textStyle: {
					color: '#FFD343'
				},
				left: 10,
				top: 5
			},*/
		    color: ['#3398DB'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    grid: {
		    	top: '5%',
		        left: '3%',
		        right: '3%',
				bottom: '2%',
		        containLabel: true
		    },
		    xAxis: [
		        {
		            type : 'category',
		            data : model.prisonList,
		            axisTick: {
		                alignWithLabel: true
		            },
		            axisLabel: {
		            	interval: 0
		            },
		            axisLine: {
		            	show: true,
		            	lineStyle: {
		            		color: '#FFF',
		            		shadowOffsetX: 10
		            	}
		            },
		            splitLine: {
		            	show: false
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine: {
		            	show: true,
		            	lineStyle: {
		            		color: '#ccc'
		            	}
		            },
		            splitLine: {
		            	show: false
		            }
		        }
		    ],
		    series : [
		        {
		            name:'设备数量',
		            type:'bar',
		            barWidth: '60%',
		            data: model.prisonCount
		        }
		    ]
		};
	alarm_count.setOption(alarm_count_option);
	alarm_count.on('click', function(data){
		var name = data.name;
		var value = data.value;
		$('#tableDiv').append('<table id="table"></table>');
		dialog.open({targetId: 'tableDiv', title: name + '-安防设备统计', w: '90', h: '90'});
		table.init('table', {
			request: ' ',
			data: model.alarmList,
			showColumns: false,
			pagination: false,
			columns:[[
			    {
				    title: '编号',
				    field: 'ard_record_id',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '设备名称',
				    field: 'ard_alert_date',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '设备数量',
				    field: 'ard_alertor_name',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '设备故障',
				    field: 'ard_alert_addrs',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '设备维护',
				    field: 'ard_alert_police',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '设备更新',
				    field: 'ard_alert_level',
				    align: 'center',
				    valign: 'middle'
				}
			]]
		});
	});
	
	//报警类型统计
	var alarm_type = echarts.init(document.getElementById('alarm_type_map'));
	var alarm_type_option = {
		   /* title : {
		        text: '全省报警类型统计',
		        x:'left',
		        textStyle: {
		        	color: '#FFD343'
		        },
		        top: 5,
		        left: 10
		    },*/
		    color: ['#e01f5c', '#ac3bc7','#b8d426', '#43becc','#29c359'],
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
//		        top: '40px',
		        data: model.alarm_type_list,
		        textStyle: {
		        	color: ['#e01f5c', '#ac3bc7','#b8d426', '#43becc','#29c359']
		        }
		    },
		    series : [
		        {
		            name: '故障类型',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data: model.alarm_type_msg,
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};
	alarm_type.setOption(alarm_type_option);
	alarm_type.on('click', function(data){
		var name = data.name;
		var value = data.value;
		$('#tableDiv').append('<table id="table"></table>');
		dialog.open({targetId: 'tableDiv', title: name + '-设备故障统计', w: '90', h: '90'});
		table.init('table', {
			request: ' ',
			data: model.alarmList,
			showColumns: false,
			pagination: false,
			columns:[[
			    {
				    title: '编号',
				    field: 'ard_record_id',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '故障时间',
				    field: 'ard_alert_date',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '报故障名称',
				    field: 'ard_alertor_name',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '故障发生地点',
				    field: 'ard_alert_addrs',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '物品负责人',
				    field: 'ard_alert_police',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '维修时间',
				    field: 'ard_receive_time',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '维修情况',
				    field: 'ard_oprtn_desc',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '处理状态',
				    field: 'ard_oprtn_stts',
				    align: 'center',
				    valign: 'middle',
				    formatter: function(value, row, index){
				    	return '<span style="color:#00f3ff;">' + value + '</span>';
				    }
				}
			]]
		});
	});
	
	//报警时间统计
	var alarm_time = echarts.init(document.getElementById('alarm_time_map'));
	var alarm_time_option = {
			/*title: {
				text: '报警时间统计',
				textStyle: {
					color: '#FFD343'
				},
				left: 10,
				top: 5
			},*/
		    color: ['#85cc3a'],
		    tooltip: {
		        trigger: 'none',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		    //    top: '40px',
		        data: model.alarm_type_list,
		        textStyle: {
		        	color: ['#e01f5c', '#ac3bc7','#b8d426', '#43becc','#29c359']
		        }
		    },
		    grid: {
		    	top: '10%',
		        left: '3%',
		        right: '3%',
				bottom: '3%',
		        containLabel: true
		    },
		    xAxis: [
		        {
		            type: 'category',
		            axisTick: {
		                alignWithLabel: false
		            },
		            axisLine: {
		                lineStyle: {
		                    color: '#FFF'
		                },
		                symbol: ['none', 'arrow']
		            },
		            axisPointer: {
		                label: {
		                    formatter: function (params) {
		                        return '100';
		                    }
		                }
		            },
		            data: model.alarm_time,
		            splitLine: {
		            	show: false
		            },
		            axisLabel: {
		            	interval: 0
		            }
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
		            axisLine: {
		                lineStyle: {
		                    color: '#FFF'
		                },
		                symbol: ['none', 'arrow']
		            },
		            splitLine: {
		            	show: false
		            }
		        }
		    ],
		    series: [
		        {
		            name:'报警数量',
		            type:'bar',
		            barWidth:'60%' ,
		            data: model.alarm_time_count
		        }
		    ]
		};
	alarm_time.setOption(alarm_time_option);
	alarm_time.on('click', function(data){
		var name = data.name;
		var value = data.value;
		$('#tableDiv').append('<table id="table"></table>');
		dialog.open({targetId: 'tableDiv', title: name + '-警用设备信息', w: '90', h: '90'});
		table.init('table', {
			request: ' ',
			data: model.alarmList,
			showColumns: false,
			pagination: false,
			columns:[[
			    {
				    title: '',
				    field: 'ard_record_id',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '报警时间',
				    field: 'ard_alert_date',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '报警器名称',
				    field: 'ard_alertor_name',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '报警地点',
				    field: 'ard_alert_addrs',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '报警人',
				    field: 'ard_alert_police',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '报警等级',
				    field: 'ard_alert_level',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '报警类型',
				    field: 'ard_dvc_type',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '接警时间',
				    field: 'ard_receive_time',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '现场情况',
				    field: 'ard_oprtn_desc',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '处理状态',
				    field: 'ard_oprtn_stts',
				    align: 'center',
				    valign: 'middle',
				    formatter: function(value, row, index){
				    	return '<span style="color:#00f3ff;">' + value + '</span>';
				    }
				}
			]]
		});
	});
	
	//报警处置时长统计
	var alarm_dispose = echarts.init(document.getElementById('alarm_dispose_map'));
	var alarm_dispose_option = {
		   /* title : {
		        text: '全省报警类型统计',
		        x:'left',
		        textStyle: {
		        	color: '#FFD343'
		        },
		        top: 5,
		        left: 10
		    },*/
		    color: ['#e01f5c', '#ac3bc7','#b8d426', '#43becc','#29c359'],
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        top: '40px',
		        data:['防爆头盔', '防爆手枪', '烟雾弹', '手铐', '警棍'],
		        textStyle: {
		        	color: ['#e01f5c', '#ac3bc7','#b8d426', '#43becc','#29c359']
		        }
		    },
		    series : [
		        {
		            name: '更新物品',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data: model.renew_type,
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};
	alarm_dispose.setOption(alarm_dispose_option);
	alarm_dispose.on('click', function(data){
		var name = data.name;
		var value = data.value;
		$('#tableDiv').append('<table id="table"></table>');
		dialog.open({targetId: 'tableDiv', title: name + '-报警信息', w: '90', h: '90'});
		table.init('table', {
			request: ' ',
			data: model.alarmList,
			showColumns: false,
			pagination: false,
			columns:[[
			    {
				    title: '编号',
				    field: 'ard_record_id',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '报警时间',
				    field: 'ard_alert_date',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '报警器名称',
				    field: 'ard_alertor_name',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '报警地点',
				    field: 'ard_alert_addrs',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '报警人',
				    field: 'ard_alert_police',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '报警等级',
				    field: 'ard_alert_level',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '报警类型',
				    field: 'ard_dvc_type',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '接警时间',
				    field: 'ard_receive_time',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '现场情况',
				    field: 'ard_oprtn_desc',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '处理状态',
				    field: 'ard_oprtn_stts',
				    align: 'center',
				    valign: 'middle',
				    formatter: function(value, row, index){
				    	return '<span style="color:#00f3ff;">' + value + '</span>';
				    }
				}
			]]
		});
	});
	
	try {
		$(window).resize(function(){
			alarm_count.resize();
			alarm_type.resize();
			alarm_time.resize();
			alarm_dispose.resize();
		});
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});