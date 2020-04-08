define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	var datepicker = require('frm/datepicker');
	var wordexport = require('wordexport');
	var dialog_search = null;
	var index_search = null;
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#jbList',
		data:{
			infoDailyTitle: "监狱指挥中心要情日报表(常规信息)",
			infoDailyShow : {
				ifd_date : "2017-12-07",
				ifd_record_id : 1014240,
				ifd_report_police_id : 10740,
				ifd_report_police_name : "王某某",
				ifd_report_time : "2017-12-07 19:49:23",
				ifd_unit_name : "xx省第二监狱",
				rn : 6
			},
			infoDailyRltnShow:[{
				idr_record_id : 1014240,
				idr_report_content : "截至今日，监狱在册罪犯3597人，较昨日增加1人，在押3567人，较昨日增加1人，在监3561人，较昨日增加1人，保外25人，提回5人，特借0人，中心医院3人，中心医院护理0人，xx医院3人，社会医院0人，监狱医院33人，高戒备9人，隔离审查0人。",
				idr_report_type : 1,
				idr_report_type_ch : "监狱罪犯概况"
			},{
				idr_record_id : 1014246,
				idr_report_content : "今日罪犯出监0人，今日罪犯入监1人：新犯收押1人。",
				idr_report_type : 2,
				idr_report_type_ch : "罪犯进出大门情况"
			},
			{
				idr_record_id : 1014246,
				idr_report_content : "正常",
				idr_report_type : 3,
				idr_report_type_ch : "安防设施运行情况"
			},
			{
				idr_record_id : 1014246,
				idr_report_content : "正常",
				idr_report_type : 4,
				idr_report_type_ch : "报警处置情况"
			},
			{
				idr_record_id : 1014246,
				idr_report_content : "[2017-12-12 14:59:55]特警队对厂区进行巡查，情况正常。；[2017-12-12 14:44:58]特警队对生活区进行巡查，情况正常，现进入厂区进行巡查。；[2017-12-12 14:37:47]特警队对生活区进行巡查。；[2017-12-12 09:43:42]特警队对厂区进行巡查，情况正常。；[2017-12-12 09:30:58]特警队对生活区进巡查，情况正常。现进入厂区进行巡查。；[2017-12-12 09:24:32]特警队进入监内进行巡查。；[2017-12-12 09:18:51]特警队对会见室进巡查，情况正常。；",
				idr_report_type : 5,
				idr_report_type_ch : "特警巡查情况"
			},
			{
				idr_record_id : 1014246,
				idr_report_content : "[2017-12-12 17:56:45]四监区三分监区--罪犯领药后未当场服药↵；",
				idr_report_type : 6,
				idr_report_type_ch : "监控巡查情况"
			},
			{
				idr_record_id : 1014246,
				idr_report_content : "[2017-12-12 15:29:13]监内医院32名罪犯到医院门口队列训练。；[2017-12-12 14:52:14]12月11日夜班情况：前夜班胡某某、许某某，后夜班陈某某、李某某，按时到岗，其中前夜班两人20：50到岗，中班陈某某加班到23：52；未发现长时间离开岗位、打瞌睡、长时间低头等情况，后夜班相对情况要略微差一些；视频督查任务均完成，其中胡某某上传4条，李某某上传3条。；[2017-12-12 14:43:48]12月10日夜班情况：前夜班彭某某、朱某某，后夜班陈某某、许某某，按时到岗，其中后夜班两人2：51均已到岗，早班朱某某7：48到岗；未发现长时间离开岗位、打瞌睡情况，后夜班偶有长时间低头现象；视频督查任务均完成；[2017-12-12 14:23:43]12月9日夜班情况：前夜班陈某某、许某某，后夜班郑某某、李某某，按时到岗，其中前夜班20：47均已到岗，陈某某3：50下班；未发现长时间离开岗位、打瞌睡、长时间低头等情况；视频督查任务均完成；[2017-12-12 10:35:44]902分监区一名罪犯提审，过隔离网门会见通道。；[2017-12-12 01:49:54]胡某某，第二第三条记录写错单位，第四条为修正视频；",
				idr_report_type : 7,
				idr_report_type_ch : "交接班记录概况"
			}, {
				idr_record_id : 1014246,
				idr_report_content : "无",
				idr_report_type : 8,
				idr_report_type_ch : "其他需要汇报的概况"
			}],
			jbListList:[
	             {'orgName':'第二监狱','date':'2017-12-09','writeTime':'2017-12-09 09:55','writePolice':'李某某'},
	             {'orgName':'第三监狱','date':'2017-12-09','writeTime':'2017-12-09 09:56','writePolice':'赵某某'},
	             {'orgName':'第四监狱','date':'2017-12-09','writeTime':'2017-12-09 09:45','writePolice':'孙某某'},
	             {'orgName':'第五监狱','date':'2017-12-09','writeTime':'2017-12-09 09:35','writePolice':'王某某'},
	             {'orgName':'第六监狱','date':'2017-12-09','writeTime':'2017-12-09 09:25','writePolice':'高某某'},
	             {'orgName':'第二监狱','date':'2017-12-09','writeTime':'2017-12-09 09:55','writePolice':'李某某'},
	             {'orgName':'第三监狱','date':'2017-12-09','writeTime':'2017-12-09 09:56','writePolice':'赵某某'},
	             {'orgName':'第四监狱','date':'2017-12-09','writeTime':'2017-12-09 09:45','writePolice':'孙某某'},
	             {'orgName':'第五监狱','date':'2017-12-09','writeTime':'2017-12-09 09:35','writePolice':'王某某'},
	             {'orgName':'第六监狱','date':'2017-12-09','writeTime':'2017-12-09 09:25','writePolice':'高某某'}
			]
		},
		search:{
			'startdate':'',
			'enddate':'',
			'prisonName':'',
			'name':''
		},
		methods:{
			searchDb:function(){
				dialog.close();
				tip.alert("保存成功...");
			},
			searchReport:function(){
				
				dialog.close();
				tip.alert("推送成功...");
				
				}
		}
	});
	function initTable(){
		var json = {"total": model.jbListList.length, "rows": model.jbListList}
		table.init('table', {
			request : {
				params:' ',
				url:' '
			},
			data:model.jbListList,
			showColumns: false,
			pageList: [10,20,30,40,50,100],
			pageSize: 10,
			columns: [[
				{
	                title: '单位名称',
	                field: 'orgName',
	                align: 'center',
	                valign: 'middle',
	                width: '100px'
	            },
	            {
	                title: '日期',
	                field: 'date',
	                align: 'center',
	                valign: 'middle',
	                width: '150px'
	            },{
	                title: '填报时间',
	                field: 'writeTime',
	                align: 'center',
	                valign: 'middle',
	                width: '100px'
	            },{
	            	title: '填报民警',
	                field: 'writePolice',
	                align: 'center',
	                valign: 'middle',
	                width: '100px'
	            },{
	                title: '操作',
	                field: 'handle',
	                align: 'center',
	                valign: 'middle',
	                width: '30px',
	                formatter: function(value,row,index){
	                	value = '<a class="hbtn btn_primary btn_large"><i class="btn_icon icon_download" ></i><span>导出</span></a>';
	                	return value;
	                }
	            },{
	                title: '操作',
	                field: 'handle1',
	                align: 'center',
	                valign: 'middle',
	                width: '30px',
	                formatter: function(value,row,index){
	                	value = '<a class="hbtn btn_primary btn_large" ><span>审编</span></a>';
	                	return value;
	                }
	            },{
	                title: '操作',
	                field: 'handle2',
	                align: 'center',
	                valign: 'middle',
	                width: '80px',
	                formatter: function(value,row,index){
	                	value = '<a class="hbtn btn_primary btn_large" ><span>审核推送</span></a>';
	                	return value;
	                }
	            },]],
	            onClickCell:function(field,value,row,$element){
		        	 if(field == "handle"){
		        		 
		        			 vue.nextTick(function () {
			        			 var dateList = row.date.split("-");
			        			 var dateStr = dateList[0] + "" + dateList[1] + "" + dateList[2];
			        			 $("div#word_panel").wordExport("指挥中心日收日解汇总表" + dateStr);
			        		 })
		        			
		        	 	}	
		        	 if(field == "handle1"){
		        		
		        		 dialog = dialog.open({targetId:'shenbian',title:'审编',w:"100",h:"100"});
		        	 }
		        	 if(field == "handle2"){
		        		 dialog = dialog.open({targetId:'shenhe',title:'审核推送',w:"50",h:"45"});
		        	 }
		        	 
		         },
		         
	            onDblClickRow:function(row){
	            	dialog = dialog.open({targetId:'show_panel',title:'日收日解详情',w:"80",h:"80"});
				}	
			});
		table.method('load', json);
	}
	
	try {
		
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});