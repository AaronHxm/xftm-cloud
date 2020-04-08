define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var table = require('frm/table');
	var table2 = require('frm/table');
	var dialog = require('frm/dialog');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#infoCB',
		data:{
			checkList:{
				'total':'12',
				'rows':[{'vsi_video_prison':'第二监狱','vsi_video_type':'张三罪犯重点监控','vsi_dept_name':'夜间重点监控罪犯','vsi_video_desc':'2017-12-12','vsi_upload_time':'张三','vsi_upload_police_name':'待分配'},
				        {'vsi_video_prison':'第五监狱','vsi_video_type':'提前睡觉报备','vsi_dept_name':'事件上报','vsi_video_desc':'2017-12-12','vsi_upload_time':'李四','vsi_upload_police_name':'待分配'},
				        {'vsi_video_prison':'长湖监狱','vsi_video_type':'点名多次出现故障导致时间不正常','vsi_dept_name':'点名报备','vsi_video_desc':'2017-12-12','vsi_upload_time':'王五','vsi_upload_police_name':'待分配'},
				        {'vsi_video_prison':'xx监狱','vsi_video_type':'值班民警未到岗','vsi_dept_name':'事件上报','vsi_video_desc':'2017-12-12','vsi_upload_time':'赵六','vsi_upload_police_name':'待分配'},
				        {'vsi_video_prison':'xx监狱','vsi_video_type':'罪犯违规','vsi_dept_name':'事件上报','vsi_video_desc':'2017-12-12','vsi_upload_time':'李四','vsi_upload_police_name':'待分配'},
				        {'vsi_video_prison':'xx监狱','vsi_video_type':'值班定岗','vsi_dept_name':'事件上报','vsi_video_desc':'2017-12-12','vsi_upload_time':'王五','vsi_upload_police_name':'待分配'}]
			},
			
			check2:{'a':'第二监狱','b':'张三罪犯重点监控','c':'夜间重点监控罪犯','d':'2017-12-12','e':'张三','f':'待分配'}
		},
		methods:{
		}
		
		
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
	                title: '上报监狱',
	                field: 'vsi_video_prison',
	                align: 'center',
	                valign: 'middle',
	                width: '120px'
	            },{
	                title: '标题',
	                field: 'vsi_video_type',
	                align: 'center',
	                valign: 'middle',
	                width: '120px'
	            },{
	                title: '上报类型',
	                field: 'vsi_dept_name',
	                align: 'center',
	                valign: 'middle',
	                width: '150px'
	            },{
	                title: '上报时间',
	                field: 'vsi_video_desc',
	                align: 'center',
	                valign: 'middle',
	                width: '200px'
	            },{
	                title: '上报民警',
	                field: 'vsi_upload_time',
	                align: 'center',
	                valign: 'middle',
	                width: '150px',
	                sortable: true,
	                order: 'desc'
	            },{
	                title: '状态',
	                field: 'vsi_upload_police_name',
	                align: 'center',
	                valign: 'middle',
	                width: '80px'
	            },{
	                title: '操作',
	                field: 'handle',
	                align: 'center',
	                valign: 'middle',
	                width: '80px',
            	 formatter : function(value,row,index){
                		return '<a class="hbtn btn_primary btn_large"><i class="btn_icon icon_save"></i><span>审核</span></a>';
                }
	            }
	         ]],
	         onClickCell : function(field, value, row, $element){
		        	 if (field == 'handle') {
		        		 dialog.open({targetId:'show_check_info',title:'反馈详情',h:"400",w:'900'});
		        		 initTable2();
			        }
		         }
	         
		});
		table.method('load',data);
	}
	
	/**
	 * 加载表格
	 */
	function initTable2(){
		var checkData =  model.check2;
		table2.init('checkTable',{
			request: {
				params: ' ',
				url: ' '
			},
			showColumns: false,
			pagination:false,//去掉总行数总页数
			columns: [
				{
	                title: '上报监狱',
	                field: 'a',
	                align: 'center',
	                valign: 'middle',
	            },{
	                title: '标题',
	                field: 'b',
	                align: 'center',
	                valign: 'middle',
	            },{
	                title: '上报类型',
	                field: 'c',
	                align: 'center',
	                valign: 'middle',
	            },{
	                title: '上报时间',
	                field: 'd',
	                align: 'center',
	                valign: 'middle',
	            },{
	                title: '上报民警',
	                field: 'e',
	                align: 'center',
	                valign: 'middle',
	            },{
	                title: '状态',
	                field: 'f',
	                align: 'center',
	                valign: 'middle',
	            }
	         ]
	         
		});
		table2.method('append', checkData);
	}
	
	try {
		initTable();
//		initTable2();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});