define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#prisonDtls',
		data:{
			prisoner: {"bs":"第二监狱","pr_no":"3301008901","pr_name":"李某某","pr_birthday":"1973-03-05","pr_gender":"男","pr_education":"初中","pr_jobcareer":"农民","pr_regaddress":"xx省 xx县","pr_address":"xx省 xx县 xx镇xxx村xxx路15号","pr_charge":"故意杀人","pr_term":"16年8月","pr_termbegin":"2011-01-28","pr_termend":"2027-09-27","pr_arrival_day":"2006-08-03","pr_level":"普管级","pr_multicrime":"团伙","pr_samecharge":"故意杀人","pr_abbr":"","pr_cause":"","pr_nationality":"畲族","pr_state":"在监","pr_area":"九监区二分监区","fh":"","sfzh":"123426197311223222","sfbm":"0","zbm":"","bqmm":"群众","hy":"未婚","hkfl":"城镇","pcs":"","csqh":"xx省  xx县","jg":"xx省  xx县","jgdzqh":"xx省  xxx县","jgdzmx":"xx省  xxx县 xxx镇xxx村xxx路200号","bqdwqh":"","bqdwmx":"","dbjg":"xx省  xx市 公安局","dbrq":"2005-10-28","tah":"1123400中级人民法院x刑初字123600000058","ysjg":"xx省  xx市 中级人民法院","yszh":"x刑初字 123600000058","bznx":"","fj":"","qk":"0","lgf":"","lclb":"","zxdl":"","yaflb":"重大刑事犯","xaflb":"重大刑事犯","fylx":"暴力型","cyxs":"常押","jsh":"","cwh":"","jggj":"","nwfg":"","gz":"","jxcd":"一般","zydah":"","mj":"无密级","yxdah":"","cnbj":"已成年","fjjn":"","jyrq":"2005-10-28","hjzh":"","hjgw":"","ssdj":"","ss_dj":"","qsjg":"xx省  xxx市 人民检察院","qszh":"x检刑诉 1236000031","ywss":"","zsqk":"核准死缓","zsjg":"xx省 高级人民法院","zszh":"x刑一复字 1236000091","sxzy":"","thrs":"2","jtqk":"","yjsdj":"","kss":"xx看守所","hg_id":"351702","xwhcd":"初中","pr_area_id":"100244","pr_state_id":"1","pr_flow_reason":"","pr_name_hypy":"ZYS"},
			prisonerItem: [{"key":"1","name":"点名记录","objcount":0},{"key":"10","name":"考核奖惩","objcount":10},{"key":"11","name":"医疗信息","objcount":11},{"key":"2","name":"个人谈话","objcount":57},{"key":"3","name":"罪犯流动","objcount":0},{"key":"4","name":"罪犯购物","objcount":33},{"key":"5","name":"亲情会见","objcount":15},{"key":"6","name":"亲情电话","objcount":67},{"key":"7","name":"信件登记","objcount":38},{"key":"8","name":"罪犯汇报","objcount":5},{"key":"9","name":"跟踪处置","objcount":1}],
			list1 : {"rows":[{"rn":1,"infotime":"2017-07-30 15:18:46","po_name":"章某某","pr_name":"李某某","prisonername":"九监区","indfdesc":"个别教育.月度谈","infodegree":"正常"},{"rn":2,"infotime":"2017-07-22 20:15:03","po_name":"章某某","pr_name":"李某某","prisonername":"九监区","indfdesc":"个别教育.十必谈","infodegree":"一般异常"},{"rn":3,"infotime":"2017-07-06 19:41:11","po_name":"章某某","pr_name":"李某某","prisonername":"九监区","indfdesc":"个别教育.月度谈","infodegree":"正常"},{"rn":4,"infotime":"2017-06-24 08:08:04","po_name":"姜勇","pr_name":"李某某","prisonername":"九监区","indfdesc":"个别教育.月度谈","infodegree":"正常"},{"rn":5,"infotime":"2017-05-28 18:53:09","po_name":"章某某","pr_name":"李某某","prisonername":"九监区","indfdesc":"个别教育.月度谈","infodegree":"正常"},{"rn":6,"infotime":"2017-04-30 18:47:33","po_name":"章某某","pr_name":"李某某","prisonername":"九监区","indfdesc":"个别教育.月度谈","infodegree":"正常"},{"rn":7,"infotime":"2017-04-24 15:46:46","po_name":"周某某","pr_name":"李某某","prisonername":"九监区","indfdesc":"个别教育.月度谈","infodegree":"正常"},{"rn":8,"infotime":"2017-04-18 20:32:18","po_name":"章某某","pr_name":"李某某","prisonername":"九监区","indfdesc":"个别教育.月度谈","infodegree":"正常"},{"rn":9,"infotime":"2017-02-27 18:39:46","po_name":"章某","pr_name":"李某某","prisonername":"九监区","indfdesc":"个别教育.月度谈","infodegree":"正常"},{"rn":10,"infotime":"2017-02-25 18:18:54","po_name":"章某","pr_name":"李某某","prisonername":"九监区","indfdesc":"个别教育.月度谈","infodegree":"正常"}],"total":57},
			list2 : {"rows":[{"rn":1,"pr_name":"李某某","update_time":"2017-06-04 07:33:14","account_type":"A汇款账户","good_name":"004光明 莫斯利安酸奶","good_type":"饮料","shopping_num":1,"good_sale_price":"62.3000","shopping_state":"已提交"},{"rn":2,"pr_name":"李某某","update_time":"2017-06-04 07:33:14","account_type":"A汇款账户","good_name":"055长鼻王鸡蛋糕","good_type":"饼干","shopping_num":5,"good_sale_price":"7.4000","shopping_state":"已提交"},{"rn":3,"pr_name":"李某某","update_time":"2017-06-04 07:33:14","account_type":"A汇款账户","good_name":"051好丽友 蛋黄派","good_type":"饼干","shopping_num":2,"good_sale_price":"21.1000","shopping_state":"已提交"},{"rn":4,"pr_name":"李某某","update_time":"2017-06-04 07:33:14","account_type":"A汇款账户","good_name":"054康师傅 蛋酥卷","good_type":"饼干","shopping_num":5,"good_sale_price":"7.7000","shopping_state":"已提交"},{"rn":5,"pr_name":"李某某","update_time":"2017-06-04 07:33:14","account_type":"A汇款账户","good_name":"057米老头 农夫小舍麦通","good_type":"饼干","shopping_num":1,"good_sale_price":"13.6000","shopping_state":"已提交"},{"rn":6,"pr_name":"李某某","update_time":"2017-06-04 07:33:14","account_type":"A汇款账户","good_name":"232豪丰 617多用香皂盒","good_type":"家居小用品","shopping_num":1,"good_sale_price":"4.4000","shopping_state":"已提交"},{"rn":7,"pr_name":"李某某","update_time":"2017-06-04 07:33:13","account_type":"A汇款账户","good_name":"032康师傅 面霸精炖牛肉","good_type":"面及制品","shopping_num":1,"good_sale_price":"17.2000","shopping_state":"已提交"},{"rn":8,"pr_name":"李某某","update_time":"2017-06-04 07:33:13","account_type":"A汇款账户","good_name":"149鹏飞叫花鸡","good_type":"真空包装食品","shopping_num":5,"good_sale_price":"12.5000","shopping_state":"已提交"},{"rn":9,"pr_name":"李某某","update_time":"2017-06-04 07:33:13","account_type":"A汇款账户","good_name":"084美可台湾凤梨酥","good_type":"零食小吃","shopping_num":2,"good_sale_price":"12.5000","shopping_state":"已提交"},{"rn":10,"pr_name":"李某某","update_time":"2017-06-04 07:33:13","account_type":"A汇款账户","good_name":"033康师傅 黑胡椒牛排面","good_type":"面及制品","shopping_num":1,"good_sale_price":"15.0000","shopping_state":"已提交"}],"total":33},
			list3 : {
				"rows" : [ {
					"rn" : 1,
					"pr_name" : "李某某",
					"visitor_info" : "许某某(女儿)；李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 3,
					"state" : "超时结束",
					"startdate" : "2017-08-22 10:20:52",
					"enddate" : "2017-08-22 10:50:52"
				}, {
					"rn" : 2,
					"pr_name" : "李某某",
					"visitor_info" : "许某某(女儿)；李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 1,
					"state" : "超时结束",
					"startdate" : "2016-06-21 13:56:19",
					"enddate" : "2016-06-21 14:26:18"
				}, {
					"rn" : 3,
					"pr_name" : "李某某",
					"visitor_info" : "钟某某(表妹,)；章某某(,表妹夫,)",
					"visittype" : "普见",
					"prenum" : 3,
					"state" : "超时结束",
					"startdate" : "2016-05-17 14:33:21",
					"enddate" : "2016-05-17 15:03:21"
				}, {
					"rn" : 4,
					"pr_name" : "李某某",
					"visitor_info" : "李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 2,
					"state" : "超时结束",
					"startdate" : "2015-06-23 14:27:25",
					"enddate" : "2015-06-23 14:57:25"
				}, {
					"rn" : 5,
					"pr_name" : "李某某",
					"visitor_info" : "李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 1,
					"state" : "超时结束",
					"startdate" : "2015-02-10 09:39:30",
					"enddate" : "2015-02-10 10:09:29"
				}, {
					"rn" : 6,
					"pr_name" : "李某某",
					"visitor_info" : "李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 1,
					"state" : "超时结束",
					"startdate" : "2014-07-22 08:50:25",
					"enddate" : "2014-07-22 09:20:25"
				}, {
					"rn" : 7,
					"pr_name" : "李某某",
					"visitor_info" : "李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 2,
					"state" : "超时结束",
					"startdate" : "2014-05-20 08:38:35",
					"enddate" : "2014-05-20 09:08:35"
				}, {
					"rn" : 8,
					"pr_name" : "李某某",
					"visitor_info" : "许美德(女)",
					"visittype" : "普见",
					"prenum" : 2,
					"state" : "挂机结束",
					"startdate" : "2014-03-18 08:53:18",
					"enddate" : "2014-03-18 09:22:44"
				}, {
					"rn" : 9,
					"pr_name" : "李某某",
					"visitor_info" : "李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 1,
					"state" : "超时结束",
					"startdate" : "2014-02-18 09:12:40",
					"enddate" : "2014-02-18 09:42:40"
				}, {
					"rn" : 10,
					"pr_name" : "李某某",
					"visitor_info" : "李某某(老婆)",
					"visittype" : "普见",
					"prenum" : 2,
					"state" : "超时结束",
					"startdate" : "2014-01-21 09:28:02",
					"enddate" : "2014-01-21 09:58:02"
				} ],
				"total" : 15
			},
	
			list4 : {"rows":[{"rn":1,"pr_name":"李某某","area_sub_name":"九监区二分监区","person_name":"钟某某","person_relation":"母亲","phone_numver":"013958921126","start_time":"2017-11-20 19:24:09","end_time":"2017-11-20 19:29:08","time_long":"299"},{"rn":2,"pr_name":"李某某","area_sub_name":"九监区二分监区","person_name":"钟某某","person_relation":"女儿","phone_numver":"015258717179","start_time":"2017-11-18 18:12:51","end_time":"2017-11-18 18:14:45","time_long":"114"},{"rn":3,"pr_name":"李某某","area_sub_name":"九监区二分监区","person_name":"钟某某","person_relation":"母亲","phone_numver":"013958921126","start_time":"2017-11-06 11:29:22","end_time":"2017-11-06 11:34:20","time_long":"298"},{"rn":4,"pr_name":"李某某","area_sub_name":"九监区二分监区","person_name":"钟某某","person_relation":"母亲","phone_numver":"013958921126","start_time":"2017-10-13 19:14:26","end_time":"2017-10-13 19:19:25","time_long":"299"},{"rn":5,"pr_name":"李某某","area_sub_name":"老残监区","person_name":"钟某某","person_relation":"母亲","phone_numver":"013958921126","start_time":"2017-09-16 19:24:05","end_time":"2017-09-16 19:28:43","time_long":"278"},{"rn":6,"pr_name":"李某某","area_sub_name":"老残监区","person_name":"许某某","person_relation":"三叔","phone_numver":"013706639130","start_time":"2017-09-08 13:52:48","end_time":"2017-09-08 13:57:46","time_long":"298"},{"rn":7,"pr_name":"李某某","area_sub_name":"老残监区","person_name":"钟某某","person_relation":"女儿","phone_numver":"015258717179","start_time":"2017-07-28 18:45:41","end_time":"2017-07-28 18:50:40","time_long":"299"},{"rn":8,"pr_name":"李某某","area_sub_name":"老残监区","person_name":"钟某某","person_relation":"母亲","phone_numver":"013958921126","start_time":"2017-07-09 14:43:01","end_time":"2017-07-09 14:48:00","time_long":"299"},{"rn":9,"pr_name":"李某某","area_sub_name":"老残监区","person_name":"钟某某","person_relation":"母亲","phone_numver":"013958921126","start_time":"2017-05-21 18:41:04","end_time":"2017-05-21 18:46:03","time_long":"299"},{"rn":10,"pr_name":"李某某","area_sub_name":"老残监区","person_name":"钟某某","person_relation":"母亲","phone_numver":"013958921126","start_time":"2017-04-29 12:31:52","end_time":"2017-04-29 12:36:51","time_long":"299"}],"total":67},
			list5 : {"rows":[{"rn":1,"create_time":"2017-07-26 12:46:03","channel_detail_memo":"xx省平xx县xx镇xx路200号","po_name":"姜某","pr_name":"李某某","area_name":"九监区","info_desc":"正常信件","node_name":"完毕"},{"rn":2,"create_time":"2017-04-24 15:55:01","channel_detail_memo":"xxx城xxx区4幢10号5楼","po_name":"胡某某","pr_name":"李某某","area_name":"九监区","info_desc":"正常信件","node_name":"完毕"},{"rn":3,"create_time":"2017-03-13 07:11:41","channel_detail_memo":"xxx公安局","po_name":"胡某某","pr_name":"李某某","area_name":"九监区","info_desc":"正常信件","node_name":"完毕"},{"rn":4,"create_time":"2017-02-09 15:30:59","channel_detail_memo":"xx省xx县xx镇xx路7号","po_name":"胡某某","pr_name":"李某某","area_name":"九监区","info_desc":"正常信件","node_name":"完毕"},{"rn":5,"create_time":"2016-11-21 12:07:18","channel_detail_memo":"xx省xx县xx镇xx路200号","po_name":"胡某某","pr_name":"李某某","area_name":"九监区","info_desc":"正常信件","node_name":"完毕"},{"rn":6,"create_time":"2016-09-07 13:02:09","channel_detail_memo":"xx县xx镇xx路200号石鼓岩","po_name":"胡某某","pr_name":"李某某","area_name":"九监区","info_desc":"正常信件","node_name":"完毕"},{"rn":7,"create_time":"2016-08-22 14:48:53","channel_detail_memo":"xx省xx县xx镇xx路200号","po_name":"章某某","pr_name":"李某某","area_name":"九监区","info_desc":"正常信件","node_name":"完毕"},{"rn":8,"create_time":"2016-06-08 14:27:56","channel_detail_memo":"xx县xx镇xx路200号石鼓岩","po_name":"胡某某","pr_name":"李某某","area_name":"九监区","info_desc":"涉及妻儿","node_name":"跟踪"},{"rn":9,"create_time":"2016-05-12 12:48:04","channel_detail_memo":"xx省xxx县xx镇xx路166号","po_name":"邱某某","pr_name":"李某某","area_name":"九监区","info_desc":"正常信件","node_name":"完毕"},{"rn":10,"create_time":"2016-04-12 13:08:55","channel_detail_memo":"xx县xx镇xxx路200号石鼓岩","po_name":"章某某","pr_name":"李某某","area_name":"九监区","info_desc":"正常信件","node_name":"完毕"}],"total":38},
			list6 : {"rows":[{"rn":1,"create_time":"2017-04-29 14:17:38","po_name":"胡某某","pr_name":"李某某","area_name":"九监区","info_desc":"罪犯身体不好、胃口不好、睡眠不好、劳动表现不好（态度不端正、无故不完成任务等）等罪犯的情况","info_degree":"正常","node_name":"完毕","involve_name":"梁某某"},{"rn":2,"create_time":"2015-07-05 17:54:18","po_name":"章某","pr_name":"李某某","area_name":"九监区","info_desc":"当日值班民警","info_degree":"正常","node_name":"完毕","involve_name":""},{"rn":3,"create_time":"2015-06-25 14:01:01","po_name":"章某","pr_name":"李某某","area_name":"九监区","info_desc":"当日值班民警","info_degree":"正常","node_name":"完毕","involve_name":""},{"rn":4,"create_time":"2015-03-19 08:24:07","po_name":"章某某","pr_name":"李某某","area_name":"九监区","info_desc":"当日值班民警","info_degree":"正常","node_name":"完毕","involve_name":"赵某某"},{"rn":5,"create_time":"2015-03-16 14:16:25","po_name":"章某某","pr_name":"李某某","area_name":"九监区","info_desc":"当日值班民警","info_degree":"正常","node_name":"完毕","involve_name":"邬某某"}],"total":5},
			list7 : {"rows":[{"rn":1,"pr_name":"李某某","gz_time":"2017-07-27 15:37:31","warning_level":"正常","po_name_gz":"章某某","area_name":"九监区","state":"跟踪结束"}],"total":1},
			list8 :{"rows":[{"rn":1,"pr_name":"李某某","jc_time":"2017-07-27","jcyy":"劳动表现良好","jcnr":"减刑一天","area_name":"九监区"},
				{"rn":2,"pr_name":"李某某","jc_time":"2016-06-07","jcyy":"劳动表现良好","jcnr":"减刑一天","area_name":"九监区"},
				{"rn":3,"pr_name":"李某某","jc_time":"2016-08-10","jcyy":"乐于助人","jcnr":"减刑一天","area_name":"九监区"},
				{"rn":4,"pr_name":"李某某","jc_time":"2016-09-27","jcyy":"遵守纪律","jcnr":"减刑半天","area_name":"九监区"},
				{"rn":5,"pr_name":"李某某","jc_time":"2016-11-12","jcyy":"劳动表现良好","jcnr":"减刑一天","area_name":"九监区"},
				{"rn":6,"pr_name":"李某某","jc_time":"2016-12-24","jcyy":"表现良好","jcnr":"减刑一天","area_name":"九监区"},
				{"rn":7,"pr_name":"李某某","jc_time":"2017-01-08","jcyy":"劳动表现良好","jcnr":"减刑一天","area_name":"九监区"},
				{"rn":8,"pr_name":"李某某","jc_time":"2017-03-18","jcyy":"乐于助人","jcnr":"减刑一天","area_name":"九监区"},
				{"rn":9,"pr_name":"李某某","jc_time":"2017-05-17","jcyy":"劳动表现良好","jcnr":"减刑一天","area_name":"九监区"},
				{"rn":10,"pr_name":"李某某","jc_time":"2017-07-27","jcyy":"表现良好","jcnr":"减刑一天","area_name":"九监区"}],"total":10},
			list9 :{"rows":[{"rn":1,"pr_name":"李某某","jy_time":"2017-04-27 14:21:30","jyyy":"感冒","zbmj":"章某某","hj_time":"2017-04-28 09:15:25","area_name":"九监区"},
				{"rn":2,"pr_name":"李某某","jy_time":"2017-05-26 14:21:30","jyyy":"阑尾炎","zbmj":"章某某","hj_time":"2017-06-18 15:15:25","area_name":"九监区"},
				{"rn":3,"pr_name":"李某某","jy_time":"2017-06-27 14:21:30","jyyy":"发烧","zbmj":"章某某","hj_time":"2017-06-28 09:15:25","area_name":"九监区"},
				{"rn":4,"pr_name":"李某某","jy_time":"2017-07-07 09:21:30","jyyy":"拉肚子","zbmj":"张某某","hj_time":"2017-07-07 19:15:25","area_name":"九监区"},
				{"rn":5,"pr_name":"李某某","jy_time":"2017-08-01 08:21:30","jyyy":"咳嗽","zbmj":"章某某","hj_time":"2017-08-01 12:15:25","area_name":"九监区"},
				{"rn":6,"pr_name":"李某某","jy_time":"2017-08-27 17:21:30","jyyy":"感冒","zbmj":"章某某","hj_time":"2017-08-27 22:15:25","area_name":"九监区"},
				{"rn":7,"pr_name":"李某某","jy_time":"2017-09-17 14:21:30","jyyy":"拉肚子","zbmj":"李某某","hj_time":"2017-09-17 18:15:25","area_name":"九监区"},
				{"rn":8,"pr_name":"李某某","jy_time":"2017-10-07 13:21:30","jyyy":"感冒","zbmj":"章某某","hj_time":"2017-10-07 09:15:25","area_name":"九监区"},
				{"rn":9,"pr_name":"李某某","jy_time":"2017-10-30 14:21:30","jyyy":"过敏","zbmj":"章某某","hj_time":"2017-10-31 09:15:25","area_name":"九监区"},
				{"rn":10,"pr_name":"李某某","jy_time":"2017-11-07 10:21:30","jyyy":"发烧","zbmj":"汪某某","hj_time":"2017-11-07 14:15:25","area_name":"九监区"}],"total":11}

		},
		methods:{
			menuMove:function(num){
				var boxWidth = $("div.top div.tabMenus div.tabBox").width();
				var menuLen = $("div.top div.tabMenus div.tabBox").find("div").length;
				var menuWidth = menuLen*120;
				var marginLeft = $("div.top div.tabMenus div.tabBox").css('margin-left');
				marginLeft = !marginLeft ? 0 : parseInt(marginLeft.replace("px",""));
				if(num == 1){
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
				var prisonerNo = model.prisoner.pr_no;
				var prisonerName = model.prisoner.pr_name;
				switch (index) {
					case 1:
			
						break;
					case 2:
						qryTalkDetail(prisonerNo);
						break;
					case 3:
				
						break;
					case 4:
						qryShoppingDetail(prisonerNo,prisonerName);
						break;
					case 5:
						qryMeetingDetail(prisonerNo);
						break;
					case 6:
						qryPhoneDetail(prisonerNo);
						break;
					case 7:
						qryLetterDetail(prisonerNo);
						break;
					case 8:
						qryReportDetail(prisonerNo);
						break;
					case 9:
						qryWarningDetail(prisonerNo);
						break;
					case 10:
						qryRewardsDetail(prisonerNo);
						break;
					case 11:
						qryMedicalDetail(prisonerNo);
						break;
				}
				
			}
		}
	})


	
	
	/**
	 * 个人谈话详情
	 */
	function qryTalkDetail(prisonerNo){
		table.init("detailInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
			columns: [[
				{
	                title: '谈话民警',
	                field: 'po_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '谈话时间',
	                field: 'infotime',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '被谈罪犯',
	                field: 'pr_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '谈话部门',
	                field: 'prisonername',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '谈话类型',
	                field: 'indfdesc',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '谈话结果',
	                field: 'infodegree',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]]
		});
		table.method('load',model.list1);
	}
	
	/**
	 * 罪犯购物详情
	 */
	function qryShoppingDetail(prisonerNo,prisonerName){
	
		table.init("detailInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
			columns: [[
				{
	                title: '罪犯姓名',
	                field: 'pr_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '购物时间',
	                field: 'update_time',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '账号类型',
	                field: 'account_type',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '商品类型',
	                field: 'good_type',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '商品名称',
	                field: 'good_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '商品数量',
	                field: 'shopping_num',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '单价',
	                field: 'good_sale_price',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '购物状态',
	                field: 'shopping_state',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]]
		});
		table.method('load',model.list2);
	}
	/**
	 * 亲情会见详情
	 */
	function qryMeetingDetail(prisonerNo){
	
		table.init("detailInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
			columns: [[
				{
	                title: '罪犯姓名',
	                field: 'pr_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '会见类型',
	                field: 'visittype',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '会见人信息',
	                field: 'visitor_info',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '会见人数',
	                field: 'prenum',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '开始时间',
	                field: 'startdate',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '结束时间',
	                field: 'enddate',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '会见状态',
	                field: 'state',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]]
		});
		table.method('load',model.list3);
	}
	/**
	 * 亲情电话详情
	 */
	function qryPhoneDetail(prisonerNo){
		table.init("detailInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
			columns: [[
				{
	                title: '罪犯姓名',
	                field: 'pr_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '部门',
	                field: 'area_sub_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '通话人',
	                field: 'person_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '关系',
	                field: 'person_relation',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '拨打号码',
	                field: 'phone_numver',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '开始时间',
	                field: 'start_time',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '结束时间',
	                field: 'end_time',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '通话时长（秒）',
	                field: 'time_long',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]]
		});
		table.method('load',model.list4);
	}
	/**
	 * 信件登记详情
	 */
	function qryLetterDetail(prisonerNo){

		table.init("detailInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
			columns: [[
				{
	                title: '罪犯姓名',
	                field: 'pr_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '部门',
	                field: 'area_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '信件类型',
	                field: 'info_desc',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '信件时间',
	                field: 'create_time',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '地址',
	                field: 'channel_detail_memo',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '登记民警',
	                field: 'po_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '处置状态',
	                field: 'node_name',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]]
		});
		table.method('load',model.list5);
	}
	/**
	 * 罪犯汇报详情
	 */
	function qryReportDetail(prisonerNo){
	
		table.init("detailInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
			columns: [[
				{
	                title: '罪犯姓名',
	                field: 'pr_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '部门',
	                field: 'area_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '汇报时间',
	                field: 'create_time',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '汇报内容',
	                field: 'info_desc',
	                align: 'center',
	                valign: 'middle',
	                width:'30%'
	            },{
	                title: '问题罪犯',
	                field: 'involve_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '汇报情况',
	                field: 'info_degree',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '值班民警',
	                field: 'po_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '处置状态',
	                field: 'node_name',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]]
		});
		table.method('load',model.list6);
	}
	/**
	 * 跟踪处置详情
	 */
	function qryWarningDetail(prisonerNo){

		table.init("detailInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
			columns: [[
							{
	                title: '罪犯姓名',
	                field: 'pr_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '部门',
	                field: 'area_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '跟踪民警',
	                field: 'po_name_gz',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '跟踪情况',
	                field: 'warning_level',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '跟踪时间',
	                field: 'gz_time',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '跟踪状态',
	                field: 'state',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]]
		});
		table.method('load',model.list7);
	}
	
	/**
	 * 考核奖惩
	 */
	function qryRewardsDetail(prisonerNo){

		table.init("detailInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
			columns: [[
				{
	                title: '罪犯姓名',
	                field: 'pr_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '部门',
	                field: 'area_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '奖惩时间',
	                field: 'jc_time',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '奖惩原因',
	                field: 'jcyy',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '奖惩内容',
	                field: 'jcnr',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]]
		});
		table.method('load',model.list8);
	}
	
	/**
	 * 医疗信息
	 */
	function qryMedicalDetail(prisonerNo){

		table.init("detailInfo",{
			request: {params:' ',url:' '},
			showColumns: false,
			columns: [[
				{
	                title: '罪犯姓名',
	                field: 'pr_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '部门',
	                field: 'area_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '就医时间',
	                field: 'jy_time',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '就医原因',
	                field: 'jyyy',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '值班民警',
	                field: 'zbmj',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '回监时间',
	                field: 'hj_time',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]]
		});
		table.method('load',model.list9);
	}
	
	try {
		
	} catch (e) {
		console.log("初始化数据失败!");
	}
})