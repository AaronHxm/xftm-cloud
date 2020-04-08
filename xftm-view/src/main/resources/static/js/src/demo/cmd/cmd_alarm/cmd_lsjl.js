define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_alarm_lsjl',
		data: {
			'jqlbList': {
				'total': '6',
				'rows': [
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
			    		'ard_oprtn_stts': '处理中',
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
			    		'ard_oprtn_stts': '已处理',
			    		'ard_receive_stts': '正常接警',
			    		'ard_alert_police_name': '王某某',
			    		'ard_rec_police_name': '王某某'
				    }
                ]
			}
		},
		methods: {}
	});

	function initTable(){
		table.init('cmd_alarm_lsjl_table', {
			request: {
				params: ' ',
				url: ' '
			},
			showColumns: false,
			pageSize:10,
			pageList:[10,20,30,40,50],
			columns: [[
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
            ]],
            onDblClickRow: function(row, $element){
            	dialog.open({targetId: 'show_panel', title: '报警详情', w: '90', h: '90'});
            	$('div#collapseCar').collapse('show');
	       		 $('div#collapseDriver').collapse('show');
	       		 $('div#collapseCheckPolice').collapse('show');
	       		 $('div#overflow').animate({scrollTop: 0});
            }
		});
		table.method('load', model.jqlbList);
	}
	
	try {
		initTable();
		$('button[type="button"]').css({'background-color':'#2966a3', 'border':'0'});
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});