define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#exterTraffRelSuperv',
		data:{
			exterTraffList:[
	             {'id':'01','record':'11:05  第一监狱  浙AB15T0进监'},
				 {'id':'02','record':'10:55  第二监狱  浙BA1530进监'},
				 {'id':'03','record':'10:35  第三监狱  浙AC1520进监'},
				 {'id':'04','record':'10:15  第一监狱  浙CT2530进监'},
				 {'id':'05','record':'10:05  第四监狱  浙EA2320进监'},
				 {'id':'06','record':'09:55  第二监狱  苏AB2513进监'},
				 {'id':'07','record':'09:35  第一监狱  鲁AC1513进监'},
				 {'id':'08','record':'09:15  第二监狱  豫AC2023进监'},
				 {'id':'09','record':'09:05  第三监狱  沪AB7023进监'},
				 {'id':'10','record':'08:58  第四监狱  川AT5063进监'},
				 {'id':'11','record':'08:52  第二监狱  豫BC3623进监'}
			],
			flowInfoList:[
			     {'id':1,'name':'基本信息验证成功！'},
			     {'id':2,'name':'责任民警刷卡成功!'},
			     {'id':3,'name':'照片验证成功!'},
			     {'id':4,'name':'人工检查通过!'},
			     {'id':5,'name':'等待指挥中心确认'}
			],
			abDutyPoliceList:[{
				'policeImg':'img/3306165.jpg',
				'policeName':'王刚'
			},{
				'policeImg':'img/3306168.jpg',
				'policeName':'李刚'
			}],
			ctrlDutyPoliceList:[{
				'policeImg':'img/3306165.jpg',
				'policeName':'王刚'
			},{
				'policeImg':'img/3306168.jpg',
				'policeName':'李刚'
			}],
			videoList: [
                 {'videoURL': '../../../../css/cmd_imgs/video/7.mp4'},
                 {'videoURL': '../../../../css/cmd_imgs/video/8.mp4'}
             ]
			
		},
		methods:{
			openAlarm: function(id){
				var exterTraffList = this.exterTraffList;
				$("#alarm_list").find("div").each(function() {
					$(this).css({'background-image':'url(../../../../css/cmd_imgs/jqlb_li2.png)','color':''});
				});
				$('#li_' + id).css({'background-image':'url(../../../../css/cmd_imgs/jqlb_li.png)','color':'#ffd343'});
			},
			cmd_hj: function(){
				$('#cmd_hj').hide();
				$('.cmd_thz, #cmd_gd').show();
			},
			cmd_gd: function(){
				$('#cmd_hj').show();
				$('.cmd_thz, #cmd_gd').hide();
			},
			cmd_fh:function(){
				
			}
		}
	});
	function initTable(){
		table.init('table', {
			request : '',
			data:model.exterTraffList,
			showColumns: false,
			pageList: [10,20,30,40,50,100],
			pageSize: 10,
			columns: [[
				{
	                title: '',
	                field: 'record',
	                align: 'center',
	                valign: 'middle',
	                width: '10%'
	            }]],	
			});
	}
	function initCheckTable(){
		var json = {"total": model.flowInfoList.length, "rows": model.flowInfoList}
		table.init('checkTable', {
			request : '',
			data:model.flowInfoList,
			showColumns: false,
			pageList: [20,30,40,50,100],
			pageSize: 10,
			columns: [[
				{
	                title: '',
	                field: 'id',
	                align: 'center',
	                valign: 'middle',
	                width: '2%'
	            },{
	                title: '',
	                field: 'name',
	                align: 'center',
	                valign: 'middle',
	                width: '8%'
	            }]],	
			});
		table.method('load',json);
	}
	try {
		$("#alarm_list").find("div:first").css({'background-image':'url(../../../../css/cmd_imgs/jqlb_li.png)','color':'#ffd343'});
		var myVideo = document.getElementsByTagName('video');
		for (var i = 0; i < myVideo.length; i++) {
			myVideo[i].play();
		}
		initTable();
		initCheckTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});