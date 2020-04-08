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
			timeperiodList: [
			    '17-12-16', '17-12-17', '17-12-18', '17-12-19', '17-12-20', '17-12-21', '17-12-22', '17-12-23', '17-12-24',
			    '17-12-25', '17-12-26'
			],
			spCount: [
			    '126', '389', '267', '113', '289', '198', '315', '278', '191','323', '310'
			],
			spingCount: [
					    '54', '175', '153', '62', '107', '121', '98', '153', '78','167', '90'
					],
			spedCount: [
							    '72', '232', '114', '51', '182', '77', '217', '125', '113','156', '220'
							],
			spList: ['通过','审批中','已提交审批'],
			sp_time_list: ['0-2小时', '2-4小时', '4-6小时', '6-8小时', '一天以上'],
			sp_method_list: ['纸质表格审批','电子签章','短信审批'],
			sp_catogary_list: ['狱政审批', '办公审批', '减假审批', '其他审批'],
			alarm_type_list: ['防爆头盔', '防爆手枪', '烟雾弹', '手铐', '警棍'],
			sp_time_msg: [
                {value: 135, name: '0-2小时'},
				{value: 110, name: '2-4小时'},
				{value: 94, name: '4-6小时'},
				{value: 135, name: '6-8小时'},
				{value: 75, name: '一天以上'}
			],
			sp_md_type:[
				{value: 143, name: '纸质表格审批'},
				{value: 260, name: '电子签章'},
				{value: 89, name: '短信审批'}
			],
			alarm_time: [
			    '防爆头盔', '防弹衣', '警棍', '防爆盾', '防爆手枪', '防爆步枪', '烟雾弹', '手铐', '强光手电',
			    '防爆工具箱', '其他'
			],
			spdaliy_count: [
			    268, 186, 72, 98
			],
			alarmList: [
			    {
			    		'sp_states': '001',
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
//			 title: {
//				text: '审批情况统计',
//				textStyle: {
//					color: '#FFD343'
//				},
//				left: 10,
//				top: 5
//			},
		    legend :{
		    	top:'top',
		    	textStyle: {
		        	color: ['#e01f5c', '#ac3bc7','#b8d426', '#43becc','#29c359']
		        },
		        data: model.spList
		    },
	 color: ['#e01f5c', '#ac3bc7','#b8d426', '#43becc','#29c359'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'cross',
		            snap: 'true',
		            crossStyle:{
		            	color:'#FFFFFF'
		            }
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
		            data : model.timeperiodList,
		            axisTick: {
		                alignWithLabel: true
		            },
		            axisLabel: {
		            	interval: 0,
		            	rotation:-20
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
		            name:'已提交审批',
		            type:'line',
		            data: model.spCount
		        },
		        {
		            name:'通过',
		            type:'line',
		            data: model.spedCount
		        },
		        {
		            name:'审批中',
		            type:'line',
		            data: model.spingCount
		        }
		    ]
		};
	alarm_count.setOption(alarm_count_option);
	
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
		        data: model.sp_time_list,
		        textStyle: {
		        	color: ['#e01f5c', '#ac3bc7','#b8d426', '#43becc','#29c359']
		        }
		    },
		    series : [
		        {
		            name: '审批时间',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data: model.sp_time_msg,
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
		        data: model.sp_catogary_list,
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
		            data: model.sp_catogary_list,
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
		            name:'审批数量',
		            type:'bar',
		            barWidth:'60%' ,
		            data: model.spdaliy_count
		        }
		    ]
		};
	alarm_time.setOption(alarm_time_option);
	
	
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
//			        top: '40px',
			        data: ['纸质表格审批','电子签章','短信审批'],
			        textStyle: {
			        	color: ['#e01f5c', '#ac3bc7','#b8d426', '#43becc','#29c359']
			        }
			    },
			    series : [
			        {
			            name: '审批时间',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data: [
			   				{value:143,name:'纸质表格审批'},
							{value:260,name:'电子签章'},
							{value:89,name:'短信审批'}
						],
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