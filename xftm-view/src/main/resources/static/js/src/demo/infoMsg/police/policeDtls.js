define(function(require){
	var $ = require('jquery');
	var db = require('frm/hz.db');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var layer = require('layer');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#policeDetail',
		data:{
			police: {"pbd_user_id":10492,"bs":"第二监狱","police_number":"3304226","police_name":"张某","police_sex":"男","police_id_number":"","depname":"一监区一分监区","adminpost":"副分监区长","adminpostnow":"副分监区长","depnamenow":"一监区一分监区","partypostname":"无","police_mobile_phone_number":"13067765667","police_work_phone_number":"617102","police_car_plate":"浙AA612C","police_native_place":"浙江嵊州","police_home_address":"","police_remark":"","police_emergency_contact":"","police_emergency_contact_phone":"","police_state":0,"party_branch":"一监区","police_rank":"三级警督","rank_date":"2015-08-01","admin_post_time":"2014-10-20","department_now_time":"2017-02-01","class_post":"副主任科员","class_post_time":"2014-10-20","police_birthday":"1983-01-26","work_time":"2004-08-02","join_party_time":"2011-05-01","politics_status":"中共党员","graduate_school":"浙江大学","police_domain":"法律","police_education":"大学","police_education_all":"在职大学","psychological_consultant":"无","profess_skill":"","passport_number":"E25877880","gangao_pass_number":"","taiwan_pass_number":"E25877880"},
			policeItem: [{"type":"1","type_name":"值班考勤","nums":145},{"type":"10","type_name":"民警奖惩","nums":2},{"type":"2","type_name":"电子点名","nums":83},{"type":"3","type_name":"教育谈话","nums":0},{"type":"4","type_name":"事件报备","nums":15},{"type":"5","type_name":"罪犯流动","nums":11},{"type":"6","type_name":"视频督查","nums":0},{"type":"7","type_name":"外来车辆","nums":19},{"type":"8","type_name":"外来人员","nums":406},{"type":"9","type_name":"工作履历","nums":0}],
			list1:{"rows":[{"rn":1,"policename":"张某","wdate":"2016-07-04","ontime":"07:41:51","work_on_normal":"TRUE","insitename":"大门考勤","outtime":"","work_out_normal":"FALSE","outsitename":"","dutydate":"2016-07-04","dutyname":"巡逻组备勤巡逻组备勤巡逻组备勤"},{"rn":2,"policename":"张某","wdate":"2016-07-04","ontime":"07:41:51","work_on_normal":"TRUE","insitename":"大门考勤","outtime":"","work_out_normal":"FALSE","outsitename":"","dutydate":"2016-07-04","dutyname":"巡逻组员24小时组员备勤"},{"rn":3,"policename":"张某","wdate":"2016-07-14","ontime":"07:10:57","work_on_normal":"TRUE","insitename":"大门考勤","outtime":"","work_out_normal":"FALSE","outsitename":"","dutydate":"2016-07-14","dutyname":"巡逻组员普通组员不用备勤"},{"rn":4,"policename":"张三","wdate":"2016-08-23","ontime":"07:40:16","work_on_normal":"TRUE","insitename":"大门考勤","outtime":"21:00:10","work_out_normal":"TRUE","outsitename":"大门考勤","dutydate":"2016-08-23","dutyname":"巡逻组员普通组员不用备勤"},{"rn":5,"policename":"张三","wdate":"2016-08-03","ontime":"07:53:21","work_on_normal":"TRUE","insitename":"大门考勤","outtime":"20:56:03","work_out_normal":"TRUE","outsitename":"大门考勤","dutydate":"2016-08-03","dutyname":"巡逻组员普通组员不用备勤"},{"rn":6,"policename":"张三","wdate":"2016-09-02","ontime":"07:44:10","work_on_normal":"TRUE","insitename":"大门考勤","outtime":"","work_out_normal":"FALSE","outsitename":"","dutydate":"2016-09-02","dutyname":"巡逻组员普通组员不用备勤"},{"rn":7,"policename":"张某","wdate":"2016-09-12","ontime":"07:31:48","work_on_normal":"TRUE","insitename":"大门考勤","outtime":"","work_out_normal":"FALSE","outsitename":"","dutydate":"2016-09-12","dutyname":"巡逻组员普通组员不用备勤"},{"rn":8,"policename":"张三","wdate":"2016-10-12","ontime":"00:20:34","work_on_normal":"TRUE","insitename":"大门考勤","outtime":"07:42:03","work_out_normal":"FALSE","outsitename":"大门考勤","dutydate":"2016-10-12","dutyname":"巡逻组备勤巡逻组备勤巡逻组备勤"},{"rn":9,"policename":"张某","wdate":"2016-09-02","ontime":"07:44:10","work_on_normal":"TRUE","insitename":"大门考勤","outtime":"","work_out_normal":"FALSE","outsitename":"","dutydate":"2016-09-02","dutyname":"巡逻组备勤巡逻组备勤巡逻组备勤"},{"rn":10,"policename":"张某","wdate":"2016-09-22","ontime":"07:32:42","work_on_normal":"TRUE","insitename":"大门考勤","outtime":"17:05:35","work_out_normal":"TRUE","outsitename":"大门考勤","dutydate":"2016-09-22","dutyname":"巡逻组备勤巡逻组备勤巡逻组备勤"}],"total":145},
			list10:{"rows":[{"rn":1,"awardproject":"2016年度优秀公务员（嘉奖）","awardtype":"嘉奖","awardreason":"","awardorg":"","awardtime":"2017-02-07","fileorigin":"浙二监【2017】16号"},{"rn":2,"awardproject":"全省监狱系统春季防范罪犯自杀专项行动","awardtype":"嘉奖","awardreason":"全省监狱系统春季防范罪犯自杀专项行动","awardorg":"浙江省监狱管理局","awardtime":"2009-07-08","fileorigin":"浙监[2009]152号"}],"total":2},
			list2:{"rows":[{"rn":1,"presentdate":"2017-07-04","batch":1,"strattime":"2017-07-04 07:41:35","endtime":"2017-07-04 07:52:26","prnum":185,"lose":0},{"rn":2,"presentdate":"2017-06-22","batch":8,"strattime":"2017-06-22 13:02:59","endtime":"2017-06-22 13:36:51","prnum":186,"lose":0},{"rn":3,"presentdate":"2017-07-07","batch":6,"strattime":"2017-07-07 19:32:46","endtime":"2017-07-07 19:37:03","prnum":184,"lose":0},{"rn":4,"presentdate":"2017-06-29","batch":15,"strattime":"2017-06-29 16:43:06","endtime":"2017-06-29 17:02:26","prnum":182,"lose":0},{"rn":5,"presentdate":"2017-06-29","batch":17,"strattime":"2017-06-29 17:13:02","endtime":"2017-06-29 17:30:55","prnum":182,"lose":0},{"rn":6,"presentdate":"2017-06-29","batch":19,"strattime":"2017-06-29 18:35:34","endtime":"2017-06-29 18:46:48","prnum":182,"lose":0},{"rn":7,"presentdate":"2017-06-25","batch":1,"strattime":"2017-06-25 07:36:39","endtime":"2017-06-25 07:48:57","prnum":186,"lose":0},{"rn":8,"presentdate":"2017-07-01","batch":16,"strattime":"2017-07-01 14:35:30","endtime":"2017-07-01 14:59:03","prnum":185,"lose":0},{"rn":9,"presentdate":"2017-06-25","batch":6,"strattime":"2017-06-25 12:36:44","endtime":"2017-06-25 12:52:57","prnum":186,"lose":0},{"rn":10,"presentdate":"2017-06-25","batch":11,"strattime":"2017-06-25 17:42:36","endtime":"2017-06-25 17:46:58","prnum":186,"lose":0}],"total":83},
			list4:{"rows":[{"rn":1,"report_time":"2017-03-16 19:17:26","report_type":"事件上报","wg_level":"","report_title":"电子点名超时","report_desc":"因分监区组织罪犯开会，期间改为集体点名，晚上19点左右电子点名超时，","cer_event_source":"网络"},{"rn":2,"report_time":"2017-02-05 10:16:29","report_type":"事件上报","wg_level":"","report_title":"事件报备","report_desc":"因早上洗澡，早上第一次人数报备超时","cer_event_source":"网络"},{"rn":3,"report_time":"2017-03-10 19:55:09","report_type":"电子点名故障上报","wg_level":"","report_title":"电子点名可能间隔超时","report_desc":"因监内集体点名教育，晚上19:00电子点名间隔可能不符合要求","cer_event_source":"网络"},{"rn":4,"report_time":"2017-02-05 10:19:39","report_type":"电子点名故障上报","wg_level":"","report_title":"电子点名故障","report_desc":"电子点名故障，延时上传，早上点名间隔时间不正常，目前10点后，电板没有电，也充不进点，电子点名不稳定","cer_event_source":"网络"},{"rn":5,"report_time":"2017-02-05 10:30:14","report_type":"电子点名故障上报","wg_level":"","report_title":"事件报备","report_desc":"电子点名器目前充不进电，暂时改为手动点名，待回复正常后，改为电子点名","cer_event_source":"网络"},{"rn":6,"report_time":"2017-04-16 09:07:13","report_type":"罪犯洗澡上报","wg_level":"","report_title":"电子点名延迟半小时","report_desc":"因分监区集体洗澡，8：45分左右一次电子点名延后半小时","cer_event_source":"网络"},{"rn":7,"report_time":"2017-05-18 20:55:25","report_type":"电子点名故障上报","wg_level":"","report_title":"电子点名器故障","report_desc":"手持机故障，无法点名，晚上末次手动点名","cer_event_source":"网络"},{"rn":8,"report_time":"2017-05-18 20:16:07","report_type":"电子点名故障上报","wg_level":"","report_title":"电子点名上传延时","report_desc":"晚上19:45点名上传延时，20:08左右完成","cer_event_source":"网络"},{"rn":9,"report_time":"2017-06-22 11:15:38","report_type":"电子点名故障上报","wg_level":"","report_title":"点名机无法登录","report_desc":"点名机无法正常登录，时好时坏","cer_event_source":"网络"},{"rn":10,"report_time":"2017-07-07 09:05:44","report_type":"电子点名故障上报","wg_level":"","report_title":"点名器无法启动","report_desc":"电子点名器无法正常登录早上8:30之后点名改为手动点名","cer_event_source":"网络"}],"total":15},
			list5:{"rows":[{"rn":1,"sb_time":"2017-01-23 08:17:48","pr_no":"3302006323","pr_name":"陈某","in_out_reason":"中心医院护理","com_out_time":"2017-01-23 08:36:41"},{"rn":2,"sb_time":"2017-01-23 08:18:42","pr_no":"3302009295","pr_name":"王某某","in_out_reason":"中心医院护理","com_out_time":"2017-01-23 08:36:39"},{"rn":3,"sb_time":"2017-01-23 08:19:48","pr_no":"3302006889","pr_name":"方某某","in_out_reason":"中心医院住院","com_out_time":"2017-01-23 10:00:26"},{"rn":4,"sb_time":"2017-02-07 12:09:35","pr_no":"3302013527","pr_name":"沈某某","in_out_reason":"监内医院住院","com_out_time":"2017-02-07 15:30:29"},{"rn":5,"sb_time":"2017-03-12 16:45:56","pr_no":"3302011177","pr_name":"陆某某","in_out_reason":"监内医院住院","com_out_time":"2017-03-12 16:49:02"},{"rn":6,"sb_time":"2017-04-14 09:45:59","pr_no":"3302013591","pr_name":"张某某","in_out_reason":"监内医院住院","com_out_time":"2017-04-14 09:53:05"},{"rn":7,"sb_time":"2017-04-11 14:26:31","pr_no":"3302010686","pr_name":"龙某某","in_out_reason":"中心医院护理","com_out_time":"2017-04-11 15:18:22"},{"rn":8,"sb_time":"2017-04-25 18:23:00","pr_no":"3302010658","pr_name":"李某某","in_out_reason":"监内医院住院","com_out_time":"2017-04-25 19:34:26"},{"rn":9,"sb_time":"2017-04-16 17:49:28","pr_no":"3302010920","pr_name":"党某某","in_out_reason":"监内医院住院","com_out_time":"2017-04-16 17:56:05"},{"rn":10,"sb_time":"2017-04-12 19:50:51","pr_no":"3302011832","pr_name":"朱某某","in_out_reason":"监内医院住院","com_out_time":"2017-04-12 19:51:19"}],"total":11},
			list7:{"rows":[{"rn":1,"in_time_date":"2015-06-06","out_time_date":"2015-06-06","car_num":"浙AG378K","vechile_type":"轻型厢式货车","person_name":"檀某某","person_id_num":"342829197112092834","in_reason":"送货","in_time":"2015-06-06 12:50:36","out_time":"2015-06-06 13:53:58","in_out_flag":"进出"},{"rn":2,"in_time_date":"2015-07-22","out_time_date":"2015-07-22","car_num":"浙AG378K","vechile_type":"轻型厢式货车","person_name":"檀某某","person_id_num":"342829197112092834","in_reason":"送货","in_time":"2015-07-22 13:08:36","out_time":"2015-07-22 14:06:38","in_out_flag":"出"},{"rn":3,"in_time_date":"2015-11-21","out_time_date":"2015-11-21","car_num":"浙AG378K","vechile_type":"轻型厢式货车","person_name":"檀某某","person_id_num":"342829197112092834","in_reason":"送出货","in_time":"2015-11-21 12:43:58","out_time":"2015-11-21 13:52:11","in_out_flag":"进"},{"rn":4,"in_time_date":"2016-01-29","out_time_date":"2016-01-29","car_num":"浙AG378K","vechile_type":"轻型厢式货车","person_name":"檀某某","person_id_num":"342829197112092834","in_reason":"送出货","in_time":"2016-01-29 13:07:31","out_time":"2016-01-29 13:56:04","in_out_flag":"进"},{"rn":5,"in_time_date":"2016-02-24","out_time_date":"2016-02-24","car_num":"浙AG378K","vechile_type":"轻型厢式货车","person_name":"檀某某","person_id_num":"342829197112092834","in_reason":"送出货","in_time":"2016-02-24 12:43:36","out_time":"2016-02-24 13:36:20","in_out_flag":"出"},{"rn":6,"in_time_date":"2016-01-27","out_time_date":"2016-01-27","car_num":"浙AG378K","vechile_type":"轻型厢式货车","person_name":"檀某某","person_id_num":"342829197112092834","in_reason":"送出货","in_time":"2016-01-27 12:59:35","out_time":"2016-01-27 14:00:23","in_out_flag":"进"},{"rn":7,"in_time_date":"2016-04-07","out_time_date":"2016-04-07","car_num":"浙AG378K","vechile_type":"轻型厢式货车","person_name":"檀某某","person_id_num":"342829197112092834","in_reason":"送货","in_time":"2016-04-07 12:54:39","out_time":"2016-04-07 13:47:34","in_out_flag":"进"},{"rn":8,"in_time_date":"2016-04-20","out_time_date":"2016-04-20","car_num":"浙AG378K","vechile_type":"轻型厢式货车","person_name":"檀某某","person_id_num":"342829197112092834","in_reason":"送货","in_time":"2016-04-20 13:39:00","out_time":"2016-04-20 14:22:53","in_out_flag":"进"},{"rn":9,"in_time_date":"2016-06-21","out_time_date":"2016-06-21","car_num":"浙AG378K","vechile_type":"轻型厢式货车","person_name":"檀某某","person_id_num":"342829197112092834","in_reason":"送货","in_time":"2016-06-21 13:10:58","out_time":"2016-06-21 14:32:01","in_out_flag":"进"},{"rn":10,"in_time_date":"2016-06-24","out_time_date":"2016-06-24","car_num":"浙AG378K","vechile_type":"轻型厢式货车","person_name":"檀某某","person_id_num":"342829197112092834","in_reason":"送货","in_time":"2016-06-24 13:20:54","out_time":"2016-06-24 14:24:07","in_out_flag":"进"}],"total":19},
			list8:{"rows":[{"rn":1,"in_time_date":"2016-07-22","out_time_date":"2016-07-22","person_name":"李某某","person_id_num":"533526199402060216","in_reason":"跟单","in_time":"2016-07-22 13:02:26","out_time":"2016-07-22 14:33:15","in_out_flag":"出"},{"rn":2,"in_time_date":"2016-07-22","out_time_date":"2016-07-22","person_name":"甘考才","person_id_num":"362525198408013337","in_reason":"跟单","in_time":"2016-07-22 13:02:29","out_time":"2016-07-22 16:26:25","in_out_flag":"出"},{"rn":3,"in_time_date":"2016-07-22","out_time_date":"2016-07-22","person_name":"孙崖英","person_id_num":"340223198512251111","in_reason":"跟单","in_time":"2016-07-22 13:02:33","out_time":"2016-07-22 16:26:30","in_out_flag":"出"},{"rn":4,"in_time_date":"2016-07-22","out_time_date":"2016-07-22","person_name":"许某某","person_id_num":"340221198511298492","in_reason":"跟单","in_time":"2016-07-22 13:02:22","out_time":"2016-07-22 16:26:33","in_out_flag":"出"},{"rn":5,"in_time_date":"2015-06-19","out_time_date":"2015-06-19","person_name":"甘某某","person_id_num":"362525198408013337","in_reason":"跟单","in_time":"2015-06-19 12:56:52","out_time":"2015-06-19 15:53:10","in_out_flag":"进"},{"rn":6,"in_time_date":"2015-06-19","out_time_date":"2015-06-19","person_name":"吴某某","person_id_num":"341022198711201313","in_reason":"跟单","in_time":"2015-06-19 12:56:55","out_time":"2015-06-19 14:20:38","in_out_flag":"进"},{"rn":7,"in_time_date":"2015-06-19","out_time_date":"2015-06-19","person_name":"夏某某","person_id_num":"36042919820624125X","in_reason":"跟单","in_time":"2015-06-19 12:56:57","out_time":"2015-06-19 15:22:55","in_out_flag":"进"},{"rn":8,"in_time_date":"2015-06-19","out_time_date":"2015-06-19","person_name":"孙某某","person_id_num":"340223198512251111","in_reason":"送出货","in_time":"2015-06-19 12:57:06","out_time":"2015-06-19 14:20:28","in_out_flag":"进"},{"rn":9,"in_time_date":"2015-06-19","out_time_date":"2015-06-19","person_name":"程某某","person_id_num":"360281198108101039","in_reason":"跟单","in_time":"2015-06-19 12:57:09","out_time":"2015-06-19 14:20:31","in_out_flag":"进"},{"rn":10,"in_time_date":"2015-06-19","out_time_date":"2015-06-19","person_name":"黄某某","person_id_num":"522628198906283836","in_reason":"跟单","in_time":"2015-06-19 12:57:13","out_time":"2015-06-19 15:53:15","in_out_flag":"进"}],"total":406}
			
		},
		methods:{
			menuMove:function(num){
				var boxWidth = $("div.top div.tabMenus div.tabBox").width();
				var menuLen = $("div.top div.tabMenus div.tabBox").find("div").length;
				var menuWidth = menuLen*120;
				var marginLeft = $("div.top div.tabMenus div.tabBox").css('margin-left');
				marginLeft = !marginLeft ? 0 : parseInt(marginLeft.replace("px",""));
				if(num == 0){
					if(boxWidth < menuWidth){
						marginLeft = (marginLeft - 120) + 'px';
						$("div.top div.tabMenus div.tabBox").animate({'margin-left': marginLeft},500);
					}
				}else{
					if(marginLeft < 0){
						boxWidth += 120;
						marginLeft = (marginLeft + 120) + 'px';
						$("div.top div.tabMenus div.tabBox").animate({'margin-left': marginLeft},500);
					}
				}
			},
			openMenu:function(index){
				index = parseInt(index);
				$("div.tabMenus div.tabBox").find("div.menu").each(function(){
					$(this).removeClass("selected");
				})
				$("div#menu_" + index).addClass("selected");
				$("div.hbox").animate({scrollTop: 0});
				if(index == 0){
					$("div#detailDiv").hide();
					$("table#baseInfo").show();
				}else{
					$("table#baseInfo").hide();
					$("div#detailDiv").empty();
					$("div#detailDiv").append('<table id="detailInfo"></table>');
					$("div#detailDiv").show();
				}
				var policeNo = model.police.police_number;
				switch (index) {
					case 1:
						qryDutyInfo(policeNo);
						break;
					case 2:
						qryCallRoll(policeNo);
						break;
					case 3:
//						qryJYTH(policeNo);
						break;
					case 4:
						qryEventReport(policeNo);
						break;
					case 5:
						qryPrisonerInoutNew(policeNo);
						break;
					case 6:
//						qryVideoReport(policeNo);
						break;
					case 7:
						qryCarInoutInfo(policeNo);
						break;
					case 8:
						qryPersonInoutInfo(policeNo);
						break;
					case 9:
//						qryPoliceWorkTrack(policeNo);
						break;
					case 10:
						qryPoliceAwardInfo(policeNo);
						break;
				}
				
			}
		}
	});
		
	/**
	 * 外来人员
	 */
	function qryPersonInoutInfo(policeNo){
		table.init("detailInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
			columns: [[
				{
		            title: '进监日期',
		            field: 'in_time_date',
		            align: 'center',
		            valign: 'middle'
		        },{
		            title: '出监日期',
		            field: 'out_time_date',
		            align: 'center',
		            valign: 'middle'
		        },{
		            title: '人员姓名',
		            field: 'person_name',
		            align: 'center',
		            valign: 'middle'
		        },{
		            title: '身份证',
		            field: 'person_id_num',
		            align: 'center',
		            valign: 'middle'
		        },{
		            title: '事由',
		            field: 'in_reason',
		            align: 'center',
		            valign: 'middle'
		        },{
		            title: '进监时间',
		            field: 'in_time',
		            align: 'center',
		            valign: 'middle'
		        },{
		            title: '出监时间',
		            field: 'out_time',
		            align: 'center',
		            valign: 'middle'
		        },{
		            title: '进出标识',
		            field: 'in_out_flag',
		            align: 'center',
		            valign: 'middle'
		        }
		     ]],
		     onDblClickRow:function(row,$element){
		     }
		});
		table.method('load',model.list8);
	}
	
	/**
	 * 外来车辆
	 */
	function qryCarInoutInfo(policeNo){
		table.init("detailInfo",{
			request: {params:' ',url:' '},
		showColumns: false,
		columns: [[
			{
	            title: '进监日期',
	            field: 'in_time_date',
	            align: 'center',
	            valign: 'middle'
	        },{
	            title: '出监日期',
	            field: 'out_time_date',
	            align: 'center',
	            valign: 'middle'
	        },{
	            title: '车牌号',
	            field: 'car_num',
	            align: 'center',
	            valign: 'middle'
	        },{
	            title: '车辆类型',
	            field: 'vechile_type',
	            align: 'center',
	            valign: 'middle'
	        },{
	            title: '驾驶员',
	            field: 'person_name',
	            align: 'center',
	            valign: 'middle'
	        },{
	            title: '身份证',
	            field: 'person_id_num',
	            align: 'center',
	            valign: 'middle'
	        },{
	            title: '事由',
	            field: 'in_reason',
	            align: 'center',
	            valign: 'middle'
	        },{
	            title: '进监时间',
	            field: 'in_time',
	            align: 'center',
	            valign: 'middle'
	        },{
	            title: '出监时间',
	            field: 'out_time',
	            align: 'center',
	            valign: 'middle'
	        },{
	            title: '进出标识',
	            field: 'in_out_flag',
	            align: 'center',
	            valign: 'middle'
	        }
	     ]],
	     onDblClickRow:function(row,$element){
	     }
	});
		table.method('load',model.list7);
	}
	
	
	/**
	 * 罪犯流动
	 */
	function qryPrisonerInoutNew(policeNo){
		table.init("detailInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
		columns: [[
			{
	            title: '上报时间',
	            field: 'sb_time',
	            align: 'center',
	            valign: 'middle'
	        },{
	            title: '罪犯编号',
	            field: 'pr_no',
	            align: 'center',
	            valign: 'middle'
	        },{
	            title: '罪犯姓名',
	            field: 'pr_name',
	            align: 'center',
	            valign: 'middle'
	        },{
	            title: '事由',
	            field: 'in_out_reason',
	            align: 'center',
	            valign: 'middle'
	        },{
	            title: '流动时间',
	            field: 'com_out_time',
	            align: 'center',
	            valign: 'middle'
	        }
	     ]],
	     onDblClickRow:function(row,$element){
	     }
	});
		table.method('load',model.list5);
	}
	
	/**
	 * 事件报备
	 */
	function qryEventReport(policeNo){
		table.init("detailInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
		columns: [[
			{
                title: '上报时间',
                field: 'report_time',
                align: 'center',
                valign: 'middle'
            },{
                title: '事件类别',
                field: 'report_type',
                align: 'center',
                valign: 'middle'
            },{
                title: '事件等级',
                field: 'wg_level',
                align: 'center',
                valign: 'middle'
            },{
                title: '事件标题',
                field: 'report_title',
                align: 'center',
                valign: 'middle'
            },{
                title: '事件描述',
                field: 'report_desc',
                align: 'center',
                valign: 'middle'
            },{
                title: '事件来源',
                field: 'cer_event_source',
                align: 'center',
                valign: 'middle'
            }
         ]],
         onDblClickRow:function(row,$element){
         }
	});
		table.method('load',model.list4);
	
	}

	
	/**
	 * 电子点名
	 */
	function qryCallRoll(policeNo){
		table.init("detailInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
			columns: [[
				{
	                title: '点名日期',
	                field: 'presentdate',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '批次',
	                field: 'batch',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '开始时间',
	                field: 'strattime',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '结束时间',
	                field: 'endtime',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '点到人数',
	                field: 'prnum',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '未点到人数',
	                field: 'lose',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]],
	         onDblClickRow:function(row,$element){
	         }
		});
		table.method('load',model.list2);
	}
	
	/**
	 * 值班考勤
	 */
	function qryDutyInfo(policeNo){
		table.init("detailInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
			columns: [[
				{
	                title: '姓名',
	                field: 'policename',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '日期',
	                field: 'wdate',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '上班打卡时间',
	                field: 'ontime',
	                align: 'center',
	                valign: 'middle',
	                formatter:function(value,row,index){
						return row.work_on_normal=='FALSE' ? "<span style='color:red;'>"+(isNull(value) ? '' : value)+"</span>" 
								   : "<span>"+(isNull(value) ? '' : value)+"</span>" ;
	                }
	            },{
	                title: '上班打卡地点',
	                field: 'insitename',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '下班打卡时间',
	                field: 'outtime',
	                align: 'center',
	                valign: 'middle',
	                formatter:function(value,row,index){
						return row.work_out_normal=='FALSE' ? "<span style='color:red;'>"+(isNull(value) ? '' : value)+"</span>" 
								   							: "<span>"+(isNull(value) ? '' : value)+"</span>" ;
					}
	            },{
	                title: '下班打卡地点',
	                field: 'outsitename',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '值班日期',
	                field: 'dutydate',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '值班内容',
	                field: 'dutyname',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]]
		});
		table.method('load',model.list1);
	}
	/**
	 * 民警奖励信息
	 */
	function qryPoliceAwardInfo(policeNo){
		table.init("detailInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
			columns: [[
				{
	                title: '表彰奖励项目',
	                field: 'awardproject',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '表彰奖励类别',
	                field: 'awardtype',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '表彰奖励事由',
	                field: 'awardreason',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '授奖单位',
	                field: 'awardorg',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '授奖时间',
	                field: 'awardtime',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '文件来源',
	                field: 'fileorigin',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]]
		});
		table.method('load',model.list10);
	}
	

	/**
	 * 判断是否为空
	 * @param obj
	 * @returns {Boolean}
	 */
	function isNull(obj){
		return obj == undefined || obj == null || obj == 'null' || obj == 'undefined' || obj =='';
	};
	
	try {
		
	} catch (e) {
		console.log("初始化民警数据失败!");
	}
	
})