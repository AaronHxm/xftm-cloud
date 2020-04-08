define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var table = require('frm/table');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#checkDetail',
		data:{
			checkList:{
				'total':'6',
				'rows':[{'vsi_video_prison':'第二监狱','vsi_video_type':'行为养成','vsi_dept_name':'三监区','vsi_video_desc':'民警工作认真负责','vsi_upload_time':'2017-12-12','vsi_upload_police_name':'张三','vsi_status_ch':'待分配','vsi_whether_open':'已公开'},
				        {'vsi_video_prison':'第五监狱','vsi_video_type':'罪犯管理','vsi_dept_name':'十监区','vsi_video_desc':'罪犯未按时就寝','vsi_upload_time':'2017-12-11','vsi_upload_police_name':'李四','vsi_status_ch':'待分配','vsi_whether_open':'已公开'},
				        {'vsi_video_prison':'xx监狱','vsi_video_type':'罪犯管理','vsi_dept_name':'七监区','vsi_video_desc':'罪犯在无关区域闲逛','vsi_upload_time':'2017-12-11','vsi_upload_police_name':'王五','vsi_status_ch':'待分配','vsi_whether_open':'未公开'},
				        {'vsi_video_prison':'xx监狱','vsi_video_type':'区域化管理','vsi_dept_name':'三监区','vsi_video_desc':'门损坏','vsi_upload_time':'2017-12-10','vsi_upload_police_name':'赵六','vsi_status_ch':'待分配','vsi_whether_open':'已公开'},
				        {'vsi_video_prison':'xx监狱','vsi_video_type':'区域化管理','vsi_dept_name':'二监区','vsi_video_desc':'水管漏水','vsi_upload_time':'2017-12-09','vsi_upload_police_name':'张三','vsi_status_ch':'待分配','vsi_whether_open':'未公开'},
				        {'vsi_video_prison':'xx监狱','vsi_video_type':'民警管理','vsi_dept_name':'六监区','vsi_video_desc':'工作时间打瞌睡','vsi_upload_time':'2017-12-09','vsi_upload_police_name':'李四','vsi_status_ch':'待分配','vsi_whether_open':'未公开'}]
			},
			methods:{
			}
			
		},
	});
	
	/**
	 * 加载表格
	 */
	function initTable(){
		var data =  model.checkList;
		table.init('table',{
			request: {
				params: ' ',
				url: ' '
			},
			showColumns: false,
			pageSize:10,
			pageList:[10,20,30,40,50],
			showColumns: false,
			columns: [[
				{
	                title: '监狱名称',
	                field: 'vsi_video_prison',
	                align: 'center',
	                valign: 'middle',
	                width: '120px'
	            },{
	                title: '视频类型',
	                field: 'vsi_video_type',
	                align: 'center',
	                valign: 'middle',
	                width: '120px'
	            },{
	                title: '视频部门',
	                field: 'vsi_dept_name',
	                align: 'center',
	                valign: 'middle',
	                width: '150px'
	            },{
	                title: '视频描述',
	                field: 'vsi_video_desc',
	                align: 'center',
	                valign: 'middle',
	                width: '200px'
	            },{
	                title: '上传时间',
	                field: 'vsi_upload_time',
	                align: 'center',
	                valign: 'middle',
	                width: '150px',
	                sortable: true,
	                order: 'desc'
	            },{
	                title: '上传民警',
	                field: 'vsi_upload_police_name',
	                align: 'center',
	                valign: 'middle',
	                width: '80px'
	            },{
	                title: '公开状态',
	                field: 'vsi_whether_open',
	                align: 'center',
	                valign: 'middle',
	                width: '80px'
	            },{
	                title: '处理状态',
	                field: 'vsi_status_ch',
	                align: 'center',
	                valign: 'middle',
	                width: '80px'
	            }
	         ]],
		});
		table.method('load',data);
	}
	
	
	
	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});