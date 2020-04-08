define(function(require) {
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var dialog = require('frm/dialog');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el : '#policeZB',
		data : {
			list1 : {
				"rows" : [ {
					"rn" : 1,
					"pbd_user_id" : 10341,
					"bs":"第二监狱",
					"police_number" : "3304072",
					"police_name" : "杨某某",
					"pbd_sex" : 2,
					"police_sex" : "男",
					"party_post_name" : "无",
					"police_depart_id_now" : 65,
					"police_mobile_phone_number" : "13805751645",
					"police_work_phone_number" : "617304",
					"police_car_plate" : "浙AQ9876",
					"police_native_place" : "浙江杭州",
					"police_home_address" : "",
					"police_remark" : "",
					"police_emergency_contact" : "",
					"police_emergency_contact_phone" : "",
					"depart_name" : "一监区一分监区",
					"police_state" : 0,
					"party_branch" : "管教",
					"police_rank" : "一级警督",
					"rank_date" : "2011-09-01",
					"admin_post" : "副分监区长",
					"admin_post_time" : "",
					"department_now_time" : "2013-11-01",
					"general_post" : "主任科员",
					"general_post_time" : "2010-09-01",
					"class_post" : "主任科员",
					"class_post_time" : "2010-09-01",
					"police_party_post_id" : -1,
					"police_birthday" : "1972-12-20",
					"work_time" : "1990-08-14",
					"join_party_time" : "",
					"politics_status" : "党员",
					"graduate_school" : "浙江大学光华法学院",
					"police_domain" : "法律",
					"police_education" : 10,
					"police_education_all" : "在职硕士",
					"psychological_consultant" : "三级心理咨询师",
					"profess_skill" : "",
					"passport_number" : "",
					"gangao_pass_number" : "",
					"taiwan_pass_number" : "",
					"police_depart_id" : 65,
					"old_name" : "一监区一分监区",
						"police_pbrs" : 15,
						"police_dgrs" :13,
						"police_jyrs" :15
				}, {
					"rn" : 2,
					"pbd_user_id" : 10349,
					"bs":"长湖监狱",
					"police_number" : "3304082",
					"police_name" : "郑某",
					"pbd_sex" : 2,
					"police_sex" : "男",
					"party_post_name" : "无",
					"police_depart_id_now" : 65,
					"police_mobile_phone_number" : "13429665210",
					"police_work_phone_number" : "616361",
					"police_car_plate" : "浙AUE570",
					"police_native_place" : "浙江杭州",
					"police_home_address" : "",
					"police_remark" : "",
					"police_emergency_contact" : "",
					"police_emergency_contact_phone" : "",
					"depart_name" : "一监区三分监区",
					"police_state" : 0,
					"party_branch" : "一监区",
					"police_rank" : "二级警司",
					"rank_date" : "2015-08-29",
					"admin_post" : "副分监区长",
					"admin_post_time" : "2015-04-10",
					"department_now_time" : "2015-04-10",
					"general_post" : "科员",
					"general_post_time" : "2015-04-10",
					"class_post" : "科员",
					"class_post_time" : "2015-04-10",
					"police_party_post_id" : -1,
					"police_birthday" : "1988-10-29",
					"work_time" : "2011-08-29",
					"join_party_time" : "",
					"politics_status" : "共青团",
					"graduate_school" : "浙江理工大学",
					"police_domain" : "服装设计与工程",
					"police_education" : 20,
					"police_education_all" : "大学",
					"psychological_consultant" : "无",
					"profess_skill" : "助理工程师",
					"passport_number" : "E31713541",
					"gangao_pass_number" : "",
					"taiwan_pass_number" : "E31713541",
					"police_depart_id" : 65,
					"old_name" : "一监区一分监区",
					"police_pbrs" : 27,
					"police_dgrs" :26,
					"police_jyrs" :25
				}, {
					"rn" : 3,
					"pbd_user_id" : 10421,
					"bs":"临海监狱",
					"police_number" : "3304154",
					"police_name" : "毛某某",
					"pbd_sex" : 2,
					"police_sex" : "男",
					"party_post_name" : "无",
					"police_depart_id_now" : 65,
					"police_mobile_phone_number" : "13968169749",
					"police_work_phone_number" : "617077",
					"police_car_plate" : "浙A232HR",
					"police_native_place" : "浙江富阳",
					"police_home_address" : "",
					"police_remark" : "",
					"police_emergency_contact" : "",
					"police_emergency_contact_phone" : "",
					"depart_name" : "一监区一分监区",
					"police_state" : 0,
					"party_branch" : "一监区",
					"police_rank" : "二级警督",
					"rank_date" : "2015-08-03",
					"admin_post" : "",
					"admin_post_time" : "",
					"department_now_time" : "2015-10-01",
					"general_post" : "主任科员",
					"general_post_time" : "2016-11-25",
					"class_post" : "主任科员",
					"class_post_time" : "2016-11-25",
					"police_party_post_id" : -1,
					"police_birthday" : "1977-04-20",
					"work_time" : "2000-08-07",
					"join_party_time" : "2007-03-01",
					"politics_status" : "中共党员",
					"graduate_school" : "东南大学",
					"police_domain" : "法学",
					"police_education" : 20,
					"police_education_all" : "在职大学",
					"psychological_consultant" : "无",
					"profess_skill" : "",
					"passport_number" : "G41732247",
					"gangao_pass_number" : "",
					"taiwan_pass_number" : "G41732247",
					"police_depart_id" : 65,
					"old_name" : "一监区一分监区",
						"police_pbrs" : 21,
						"police_dgrs" :20,
						"police_jyrs" :25
				}, {
					"rn" : 4,
					"pbd_user_id" : 10438,
					"bs":"之江监狱",
					"police_number" : "3304172",
					"police_name" : "黄某",
					"pbd_sex" : 2,
					"police_sex" : "男",
					"party_post_name" : "无",
					"police_depart_id_now" : 65,
					"police_mobile_phone_number" : "18626893828",
					"police_work_phone_number" : "616013",
					"police_car_plate" : "",
					"police_native_place" : "浙江金华",
					"police_home_address" : "",
					"police_remark" : "",
					"police_emergency_contact" : "",
					"police_emergency_contact_phone" : "",
					"depart_name" : "一监区一分监区",
					"police_state" : 0,
					"party_branch" : "一监区",
					"police_rank" : "三级警司",
					"rank_date" : "2014-09-10",
					"admin_post" : "",
					"admin_post_time" : "",
					"department_now_time" : "2014-09-10",
					"general_post" : "科员",
					"general_post_time" : "2014-09-10",
					"class_post" : "科员",
					"class_post_time" : "2014-09-10",
					"police_party_post_id" : -1,
					"police_birthday" : "1986-12-03",
					"work_time" : "2013-09-10",
					"join_party_time" : "2010-05-01",
					"politics_status" : "中共党员",
					"graduate_school" : "嘉兴学院服装与艺术设计学院",
					"police_domain" : "服装设计与工程",
					"police_education" : 20,
					"police_education_all" : "大学",
					"psychological_consultant" : "三级心理咨询师",
					"profess_skill" : "助理工程师",
					"passport_number" : "E39557140",
					"gangao_pass_number" : "",
					"taiwan_pass_number" : "E39557140",
					"police_depart_id" : 65,
					"old_name" : "一监区一分监区",
						"police_pbrs" : 14,
						"police_dgrs" :14,
						"police_jyrs" :15
				}, {
					"rn" : 5,
					"pbd_user_id" : 10469,
					"bs":"西郊监狱",
					"police_number" : "3304203",
					"police_name" : "丁某",
					"pbd_sex" : 2,
					"police_sex" : "男",
					"party_post_name" : "无",
					"police_depart_id_now" : 65,
					"police_mobile_phone_number" : "18058803180",
					"police_work_phone_number" : "617019",
					"police_car_plate" : "",
					"police_native_place" : "浙江衢州",
					"police_home_address" : "",
					"police_remark" : "",
					"police_emergency_contact" : "",
					"police_emergency_contact_phone" : "",
					"depart_name" : "一监区一分监区",
					"police_state" : 0,
					"party_branch" : "一监区",
					"police_rank" : "三级警督",
					"rank_date" : "2014-08-01",
					"admin_post" : "",
					"admin_post_time" : "",
					"department_now_time" : "2014-06-01",
					"general_post" : "副主任科员",
					"general_post_time" : "2013-10-09",
					"class_post" : "副主任科员",
					"class_post_time" : "2013-10-09",
					"police_party_post_id" : -1,
					"police_birthday" : "1982-09-06",
					"work_time" : "2003-08-07",
					"join_party_time" : "",
					"politics_status" : "群众",
					"graduate_school" : "浙警院",
					"police_domain" : "监企管理",
					"police_education" : 30,
					"police_education_all" : "大专",
					"psychological_consultant" : "三级心理咨询师",
					"profess_skill" : "",
					"passport_number" : "",
					"gangao_pass_number" : "",
					"taiwan_pass_number" : "",
					"police_depart_id" : 65,
					"old_name" : "一监区一分监区",
						"police_pbrs" : 23,
						"police_dgrs" :23,
						"police_jyrs" :20
				}, {
					"rn" : 6,
					"pbd_user_id" : 10492,
					"bs":"黄湖监狱",
					"police_number" : "3304226",
					"police_name" : "张某某",
					"pbd_sex" : 2,
					"police_sex" : "男",
					"party_post_name" : "无",
					"police_depart_id_now" : 65,
					"police_mobile_phone_number" : "13067765667",
					"police_work_phone_number" : "617102",
					"police_car_plate" : "浙AA612C",
					"police_native_place" : "浙江嵊州",
					"police_home_address" : "",
					"police_remark" : "",
					"police_emergency_contact" : "",
					"police_emergency_contact_phone" : "",
					"depart_name" : "一监区一分监区",
					"police_state" : 0,
					"party_branch" : "一监区",
					"police_rank" : "三级警督",
					"rank_date" : "2015-08-01",
					"admin_post" : "副分监区长",
					"admin_post_time" : "2014-10-20",
					"department_now_time" : "2017-02-01",
					"general_post" : "副主任科员",
					"general_post_time" : "2014-10-20",
					"class_post" : "副主任科员",
					"class_post_time" : "2014-10-20",
					"police_party_post_id" : -1,
					"police_birthday" : "1983-01-26",
					"work_time" : "2004-08-02",
					"join_party_time" : "2011-05-01",
					"politics_status" : "中共党员",
					"graduate_school" : "浙江大学",
					"police_domain" : "法律",
					"police_education" : 20,
					"police_education_all" : "在职大学",
					"psychological_consultant" : "无",
					"profess_skill" : "",
					"passport_number" : "E25877880",
					"gangao_pass_number" : "",
					"taiwan_pass_number" : "E25877880",
					"police_depart_id" : 65,
					"old_name" : "一监区一分监区",
					"police_pbrs" : 22,
					"police_dgrs" :20,
					"police_jyrs" :25
				}, {
					"rn" : 7,
					"bs":"望春监狱",
					"pbd_user_id" : 10522,
					"police_number" : "3304259",
					"police_name" : "吴某",
					"pbd_sex" : 2,
					"police_sex" : "男",
					"party_post_name" : "无",
					"police_depart_id_now" : 65,
					"police_mobile_phone_number" : "18814886657",
					"police_work_phone_number" : "617213",
					"police_car_plate" : "",
					"police_native_place" : "浙江金华",
					"police_home_address" : "",
					"police_remark" : "",
					"police_emergency_contact" : "",
					"police_emergency_contact_phone" : "",
					"depart_name" : "指挥中心",
					"police_state" : 0,
					"party_branch" : "指挥中心",
					"police_rank" : "三级警司",
					"rank_date" : "2015-08-26",
					"admin_post" : "",
					"admin_post_time" : "",
					"department_now_time" : "2015-08-01",
					"general_post" : "科员",
					"general_post_time" : "2015-08-01",
					"class_post" : "科员",
					"class_post_time" : "2015-08-01",
					"police_party_post_id" : -1,
					"police_birthday" : "1993-04-07",
					"work_time" : "2014-08-01",
					"join_party_time" : "",
					"politics_status" : "共青团",
					"graduate_school" : "浙江警官职业学院",
					"police_domain" : "刑事执行",
					"police_education" : 30,
					"police_education_all" : "大专",
					"psychological_consultant" : "无",
					"profess_skill" : "",
					"passport_number" : "",
					"gangao_pass_number" : "",
					"taiwan_pass_number" : "",
					"police_depart_id" : 65,
					"old_name" : "一监区一分监区",
					"police_pbrs" : 16,
					"police_dgrs" :16,
					"police_jyrs" :15
				}, {
					"rn" : 8,
					"pbd_user_id" : 10269,
					"bs":"高桥监狱",
					"police_number" : "3304285",
					"police_name" : "王某",
					"pbd_sex" : 2,
					"police_sex" : "男",
					"party_post_name" : "无",
					"police_depart_id_now" : 65,
					"police_mobile_phone_number" : "15158000229",
					"police_work_phone_number" : "617790",
					"police_car_plate" : "",
					"police_native_place" : "浙江余杭",
					"police_home_address" : "",
					"police_remark" : "",
					"police_emergency_contact" : "",
					"police_emergency_contact_phone" : "",
					"depart_name" : "一监区一分监区",
					"police_state" : 0,
					"party_branch" : "一监区",
					"police_rank" : "",
					"rank_date" : "",
					"admin_post" : "",
					"admin_post_time" : "",
					"department_now_time" : "2016-10-01",
					"general_post" : "科员",
					"general_post_time" : "2016-09-01",
					"class_post" : "科员",
					"class_post_time" : "2016-09-01",
					"police_party_post_id" : -1,
					"police_birthday" : "1991-06-04",
					"work_time" : "2015-09-01",
					"join_party_time" : "",
					"politics_status" : "共青团",
					"graduate_school" : "杭州师范大学",
					"police_domain" : "会计学",
					"police_education" : 20,
					"police_education_all" : "大学",
					"psychological_consultant" : "无",
					"profess_skill" : "",
					"passport_number" : "",
					"gangao_pass_number" : "",
					"taiwan_pass_number" : "",
					"police_depart_id" : 65,
					"old_name" : "一监区一分监区",
						"police_pbrs" : 18,
						"police_dgrs" :17,
						"police_jyrs" :20
				}, {
					"rn" : 9,
					"pbd_user_id" : 10685,
					"bs":"湖州监狱",
					"police_number" : "3304316",
					"police_name" : "李某某",
					"pbd_sex" : 2,
					"police_sex" : "男",
					"party_post_name" : "无",
					"police_depart_id_now" : 65,
					"police_mobile_phone_number" : "18867152532",
					"police_work_phone_number" : "617152",
					"police_car_plate" : "",
					"police_native_place" : "浙江杭州",
					"police_home_address" : "",
					"police_remark" : "",
					"police_emergency_contact" : "",
					"police_emergency_contact_phone" : "",
					"depart_name" : "组织人事科",
					"police_state" : 0,
					"party_branch" : "组织人事科",
					"police_rank" : "一级警司",
					"rank_date" : "2016-01-29",
					"admin_post" : "",
					"admin_post_time" : "",
					"department_now_time" : "2014-09-01",
					"general_post" : "科员",
					"general_post_time" : "2011-06-01",
					"class_post" : "科员",
					"class_post_time" : "2011-06-01",
					"police_party_post_id" : -1,
					"police_birthday" : "1981-08-11",
					"work_time" : "2010-06-01",
					"join_party_time" : "",
					"politics_status" : "群众",
					"graduate_school" : "杭州师范大学",
					"police_domain" : "物理学",
					"police_education" : 20,
					"police_education_all" : "大学",
					"psychological_consultant" : "无",
					"profess_skill" : "",
					"passport_number" : "",
					"gangao_pass_number" : "",
					"taiwan_pass_number" : "",
					"police_depart_id" : 65,
					"old_name" : "一监区一分监区",
					"police_pbrs" : 23,
					"police_dgrs" :23,
					"police_jyrs" :25
				}, {
					"rn" : 10,
					"bs":"第四监狱",
					"pbd_user_id" : 10694,
					"police_number" : "3304326",
					"police_name" : "杨某某",
					"pbd_sex" : 2,
					"police_sex" : "男",
					"party_post_name" : "无",
					"police_depart_id_now" : 65,
					"police_mobile_phone_number" : "18767162027",
					"police_work_phone_number" : "616226",
					"police_car_plate" : "",
					"police_native_place" : "浙江萧山",
					"police_home_address" : "",
					"police_remark" : "",
					"police_emergency_contact" : "",
					"police_emergency_contact_phone" : "",
					"depart_name" : "一监区一分监区",
					"police_state" : 0,
					"party_branch" : "一监区",
					"police_rank" : "三级警司",
					"rank_date" : "2014-09-10",
					"admin_post" : "",
					"admin_post_time" : "",
					"department_now_time" : "2014-09-10",
					"general_post" : "科员",
					"general_post_time" : "2014-09-10",
					"class_post" : "科员",
					"class_post_time" : "2014-09-10",
					"police_party_post_id" : -1,
					"police_birthday" : "1991-03-20",
					"work_time" : "2013-09-10",
					"join_party_time" : "",
					"politics_status" : "共青团",
					"graduate_school" : "浙江警官职业学院",
					"police_domain" : "司法警务",
					"police_education" : 30,
					"police_education_all" : "大专",
					"psychological_consultant" : "三级心理咨询师",
					"profess_skill" : "",
					"passport_number" : "",
					"gangao_pass_number" : "",
					"taiwan_pass_number" : "",
					"police_depart_id" : 65,
					"old_name" : "一监区一分监区",
					"police_pbrs" : 21,
					"police_dgrs" :20,
					"police_jyrs" :25
				}],
				"total" : 10
			}
		},
		methods : {

		}
	});

	/**
	 * 加载表格
	 */
	function initTable() {
		table.init("table", {
			request: {params:' ',url:' '},
			rows : 10,
			showColumns : false,
			pageList : [ 10, 20, 30, 40, 50 ],
			pageSize : 10,
			columns : [ [ {
				title : '所属监狱',
				field : 'bs',
				align : 'center',
				valign : 'middle',
				width : '15%',
				 formatter: function(value,row,index){
	                	
	                	return 'XX监狱';
	                }
			}, {
				title : '值班领导',
				field : 'police_name',
				align : 'center',
				valign : 'middle',
				width : '15%'
			}, {
				title : '联系方式',
				field : 'police_mobile_phone_number',
				align : 'center',
				valign : 'middle',
				width : '25%'
			}, {
				title : '排班执勤人数',
				field : 'police_pbrs',
				align : 'center',
				valign : 'middle',
				width : '15%'
			}, {
				title : '到岗执勤人数',
				field : 'police_dgrs',
				align : 'center',
				valign : 'middle',
				width : '15%'
			}, {
				title : '建议配置人数',
				field : 'police_jyrs',
				align : 'center',
				valign : 'middle',
				width : '15%'
			}] ],
			onDblClickRow : function(row, $element) {
				dialog.open({
					targetId : 'police_panel',
					title : '民警详情',
					top : 5,
					w : 96,
					h : 90
				});
				var url = "policeDtls.html";
				$('div#police_panel').find('iframe#contentHTML').show();
				$('div#police_panel').find('iframe#contentHTML').attr('src',
						url);
			}
		});
		table.method('load', model.list1);
	}

	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});