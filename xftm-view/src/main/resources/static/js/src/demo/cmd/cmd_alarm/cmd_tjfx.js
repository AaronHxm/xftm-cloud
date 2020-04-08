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
		el: '#cmd_alarm_tjfx',
		data: {
			prisonList: [
			    '省一监', '省二监', '省三监', '省四监', '省五监', '省六监', '女子监狱', '省七监狱', '省八监狱',
			    '省九监狱', '省十监狱', 'xxx监狱', 'xxxx监狱', 'xxxxx监狱', 'xxxx监狱', 'xxxx监狱',
			    'xx监狱', 'xxx监狱', 'xxx监狱'
			],
			prisonCount: [
			    '10', '15', '5', '9', '37', '50', '22', '48', '102','2', '0', '75', '34', '29', '72',
			    '8', '89', '102', '70'
			],
			alarm_type_list: ['电网', '网络报警器', '智能分析', '消防报警', '对讲报警'],
			alarm_type_msg: [
                {value: 335, name: '电网'},
				{value: 310, name: '网络报警器'},
				{value: 234, name: '智能分析'},
				{value: 135, name: '消防报警'},
				{value: 1548, name: '对讲报警'}
			],
			alarm_time: [
			    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
			    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
			    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
			],
			alarm_time_count: [
			    11, 22, 31, 42, 51, 62, 71, 82, 305, 302, 111, 102, 130, 141, 105, 161, 197, 180, 519,
			    20, 2, 22, 23, 40
			],
			alarmList: [
			    {
			    		'ard_record_id': '001',
			    		'ard_alert_date': '2017-12-07 10:01:20',
			    		'ard_alertor_name': '2生05A厅011',
			    		'ard_alert_addrs': '第五监狱一号厂房',
			    		'ard_alert_police': '张某某',
			    		'ard_alert_level': '一级',
			    		'ard_dvc_type': '消防报警',
			    		'ard_alert_reason': '明火',
			    		'ard_receive_alarm_police': '李某某',
			    		'ard_receive_time': '2017-12-07 10:01:23',
			    		'ard_local_case': '现场已控制',
			    		'ard_oprtr': '王某某',
			    		'ard_oprtn_time': '2017-12-07 10:20:16',
			    		'ard_oprtn_desc': '现场已得到控制',
			    		'ard_oprtn_finish_time': '2017-12-07 11:01:23',
			    		'ard_finish_sure_police': '赵某某',
			    		'ard_oprtn_stts': '处理完成',
			    		'ard_receive_stts': '正常接警',
			    		'ard_alert_police_name': '王某某',
			    		'ard_rec_police_name': '王某某'
				    }, {
			    		'ard_record_id': '002',
			    		'ard_alert_date': '2017-12-10 14:06:32',
			    		'ard_alertor_name': '4舍N-5',
			    		'ard_alert_addrs': '第四监狱三号楼',
			    		'ard_alert_police': '张某某',
			    		'ard_alert_level': '二级',
			    		'ard_dvc_type': '门禁报警',
			    		'ard_alert_reason': '撞门',
			    		'ard_receive_alarm_police': '李某某',
			    		'ard_receive_time': '2017-12-07 10:01:23',
			    		'ard_local_case': '已控制',
			    		'ard_oprtr': '王某某',
			    		'ard_oprtn_time': '2017-12-07 10:20:16',
			    		'ard_oprtn_desc': '已控制',
			    		'ard_oprtn_finish_time': '2017-12-07 11:01:23',
			    		'ard_finish_sure_police': '赵某某',
			    		'ard_oprtn_stts': '处理完成',
			    		'ard_receive_stts': '正常接警',
			    		'ard_alert_police_name': '王某某',
			    		'ard_rec_police_name': '王某某'
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
		            	rotate: -15,
		            	interval: 1
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
		            name:'报警数量',
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
		            name: '报警类型',
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
		            type: 'cross',
		            crossStyle: {
		            	color: '#6882b3'
		            }
		        }
		    },
		   /* legend: {
		        data:['报警数量'],
		        textStyle: {
		        	color: '#85cc3a'
		        },
		        left: 'left'
		    },*/
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
		            	interval: 0,
		            	rotate: -30
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
		            type:'line',
		            smooth: true,
		            data: model.alarm_time_count
		        }
		    ]
		};
	alarm_time.setOption(alarm_time_option);
	alarm_time.on('click', function(data){
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
	
	//报警处置时长统计
	var alarm_dispose = echarts.init(document.getElementById('alarm_dispose_map'));
	var alarm_dispose_option = {
		    /*title: {
		        text: '报警处置时长统计',
		        top: 5,
		        left: 10,
		        textStyle: {
		        	color: '#FFD343'
		        }
		    },*/
		    color: ['#2bca90'],
		    tooltip: {
		        trigger: 'item',
		        //backgroundColor : '#2bca90'
		    },
		    legend: {
		        type: 'scroll',
//		        bottom: 10,
		        left: 'left',
		        data: ['处置报警数'],
		        textStyle: {
		        	color: ['#2bca90']
		        },
		        orient: 'vertical'
		    },
		    radar: {
		       indicator : [
		           { name: '10分钟', max: 500},
		           { name: '20分钟', max: 500},
		           { name: '30分钟', max: 500},
		           { name: '40分钟', max: 500},
		           { name: '50分钟', max: 500},
		           { name: '60分钟', max: 500}
		        ]
		    },
		    series : {
		    	name:'报警处置',
                type: 'radar',
                symbol: 'none',
                itemStyle: {
                    normal: {
                        lineStyle: {
                          width: 1
                        }
                    },
                    emphasis: {
                        //areaStyle: {color:'#2bca90'}
                    }
                },
                areaStyle: {
                	normal: {
                		color: '#2bca90'
                	}
                },
                data: [
                    {value:['443','302','106','240','160','203'], name: '处置报警数'}
                ]
		    }
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