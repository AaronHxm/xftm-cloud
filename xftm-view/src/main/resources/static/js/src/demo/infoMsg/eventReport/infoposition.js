define(function(require) {
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	
	var dialog1 = null;

	/**
	 * 创建模型
	 */
	var model = new vue({
		el : '#eventList',
		data : {
			
			                  flowNum : 0,
								list1 : {
						"rows" : [
								{
									"rn" : 1,
									"eri_id" : 10177037,
									"eri_data_source" : 1,
									"eri_data_source_ch" : "网络",
									"eri_report_type" : 1,
									"eri_report_type_ch" : "位置信息",
									"eri_falut_genre_id" : "",
									"eri_falut_genre_name" : "",
									"eri_title" : "法轮功罪犯林某某重点监控",
									"eri_content" : "法轮功罪犯林以华重点监控，10组进门左边第三个位置，下铺",
									"eri_report_dept_id" : 80,
									"eri_report_dept_name" : "四监区三分监区",
									"eri_report_time" : "2017-12-12 20:49:10",
									"eri_report_police_id" : 10866,
									"eri_report_police_name" : "傅欢",
									"eri_handle_dept_id" : "",
									"eri_handle_dept_name" : "",
									"eri_status" : 7,
									"eri_status_ch" : "已确认",
									"eri_whether_upgrade" : 2,
									"eri_handle_status" : 1
								},
								{
									"rn" : 2,
									"eri_id" : 10177035,
									"eri_data_source" : 1,
									"eri_data_source_ch" : "网络",
									"eri_report_type" : 10,
									"eri_report_type_ch" : "位置信息",
									"eri_falut_genre_id" : "",
									"eri_falut_genre_name" : "",
									"eri_title" : "提前睡觉报备",
									"eri_content" : "罪犯黄永因身体不适提前睡觉（11号寝室6号铺位）",
									"eri_report_dept_id" : 71,
									"eri_report_dept_name" : "二监区一分监区",
									"eri_report_time" : "2017-12-12 19:45:49",
									"eri_report_police_id" : 10770,
									"eri_report_police_name" : "潘奔龙",
									"eri_handle_dept_id" : "",
									"eri_handle_dept_name" : "",
									"eri_status" : 7,
									"eri_status_ch" : "已确认",
									"eri_whether_upgrade" : 2,
									"eri_handle_status" : 1
								},
								{
									"rn" : 3,
									"eri_id" : 10177034,
									"eri_data_source" : 1,
									"eri_data_source_ch" : "网络",
									"eri_report_type" : 4,
									"eri_report_type_ch" : "位置信息",
									"eri_falut_genre_id" : "",
									"eri_falut_genre_name" : "",
									"eri_title" : "今日点名机多次出现故障导致时间间隔不正常",
									"eri_content" : "今日点名机多次出现故障导致时间间隔不正常",
									"eri_report_dept_id" : 75,
									"eri_report_dept_name" : "五监区三分监区",
									"eri_report_time" : "2017-12-12 18:41:05",
									"eri_report_police_id" : 10364,
									"eri_report_police_name" : "陈远远",
									"eri_handle_dept_id" : "",
									"eri_handle_dept_name" : "",
									"eri_status" : 7,
									"eri_status_ch" : "已确认",
									"eri_whether_upgrade" : 2,
									"eri_handle_status" : 1
								},
								{
									"rn" : 4,
									"eri_id" : 10177033,
									"eri_data_source" : 1,
									"eri_data_source_ch" : "网络",
									"eri_report_type" : 10,
									"eri_report_type_ch" : "位置信息",
									"eri_falut_genre_id" : "",
									"eri_falut_genre_name" : "",
									"eri_title" : "值班民警未划入我分监区",
									"eri_content" : " 民警余宏图未划入我分监区，12月12日晚值班可能引起预警",
									"eri_report_dept_id" : 71,
									"eri_report_dept_name" : "二监区一分监区",
									"eri_report_time" : "2017-12-12 18:22:51",
									"eri_report_police_id" : 10557,
									"eri_report_police_name" : "杨磊",
									"eri_handle_dept_id" : "",
									"eri_handle_dept_name" : "",
									"eri_status" : 7,
									"eri_status_ch" : "已确认",
									"eri_whether_upgrade" : 2,
									"eri_handle_status" : 1
								},
								{
									"rn" : 5,
									"eri_id" : 10177032,
									"eri_data_source" : 1,
									"eri_data_source_ch" : "网络",
									"eri_report_type" : 10,
									"eri_report_type_ch" : "位置信息",
									"eri_falut_genre_id" : "",
									"eri_falut_genre_name" : "",
									"eri_title" : "监区民警顶岗",
									"eri_content" : "16点至21点监区部民警黄晓军分监区顶岗",
									"eri_report_dept_id" : 70,
									"eri_report_dept_name" : "三监区二分监区",
									"eri_report_time" : "2017-12-12 18:20:36",
									"eri_report_police_id" : 10414,
									"eri_report_police_name" : "严海彪",
									"eri_handle_dept_id" : "",
									"eri_handle_dept_name" : "",
									"eri_status" : 7,
									"eri_status_ch" : "已确认",
									"eri_whether_upgrade" : 2,
									"eri_handle_status" : 1
								},
								{
									"rn" : 6,
									"eri_id" : 10177031,
									"eri_data_source" : 1,
									"eri_data_source_ch" : "网络",
									"eri_report_type" : 10,
									"eri_report_type_ch" : "位置信息",
									"eri_falut_genre_id" : "",
									"eri_falut_genre_name" : "",
									"eri_title" : "点名延迟报备",
									"eri_content" : "医院一名病犯管金华出院，导致点名结束延迟，已报备指挥中心，点名间隔有点超时。",
									"eri_report_dept_id" : 59,
									"eri_report_dept_name" : "监狱医院",
									"eri_report_time" : "2017-12-12 17:50:34",
									"eri_report_police_id" : 10737,
									"eri_report_police_name" : "金敏强",
									"eri_handle_dept_id" : "",
									"eri_handle_dept_name" : "",
									"eri_status" : 7,
									"eri_status_ch" : "已确认",
									"eri_whether_upgrade" : 2,
									"eri_handle_status" : 1
								},
								{
									"rn" : 7,
									"eri_id" : 10177030,
									"eri_data_source" : 1,
									"eri_data_source_ch" : "网络",
									"eri_report_type" : 9,
									"eri_report_type_ch" : "位置信息",
									"eri_falut_genre_id" : "",
									"eri_falut_genre_name" : "",
									"eri_title" : "罪犯违规",
									"eri_content" : "罪犯赵伟和彭南江在昨晚熄灯后发生口角并动手，对赵伟扣30分，高度戒备管理，对彭南江扣20分，佩戴手铐脚镣和束缚衣。",
									"eri_report_dept_id" : 70,
									"eri_report_dept_name" : "三监区二分监区",
									"eri_report_time" : "2017-12-12 17:05:24",
									"eri_report_police_id" : 10817,
									"eri_report_police_name" : "吴鹏",
									"eri_handle_dept_id" : "",
									"eri_handle_dept_name" : "",
									"eri_status" : 7,
									"eri_status_ch" : "已确认",
									"eri_whether_upgrade" : 2,
									"eri_handle_status" : 1
								},
								{
									"rn" : 8,
									"eri_id" : 10177029,
									"eri_data_source" : 1,
									"eri_data_source_ch" : "网络",
									"eri_report_type" : 4,
									"eri_report_type_ch" : "位置信息",
									"eri_falut_genre_id" : "",
									"eri_falut_genre_name" : "",
									"eri_title" : "手持点名机死机，导致上传不成功，重新启动时时间超时",
									"eri_content" : "手持点名机死机，导致上传不成功，重新启动时时间超时",
									"eri_report_dept_id" : 75,
									"eri_report_dept_name" : "五监区三分监区",
									"eri_report_time" : "2017-12-12 16:21:37",
									"eri_report_police_id" : 10399,
									"eri_report_police_name" : "应大松",
									"eri_handle_dept_id" : "",
									"eri_handle_dept_name" : "",
									"eri_status" : 7,
									"eri_status_ch" : "已确认",
									"eri_whether_upgrade" : 2,
									"eri_handle_status" : 1
								},
								{
									"rn" : 9,
									"eri_id" : 10177028,
									"eri_data_source" : 1,
									"eri_data_source_ch" : "网络",
									"eri_report_type" : 10,
									"eri_report_type_ch" : "位置信息",
									"eri_falut_genre_id" : "",
									"eri_falut_genre_name" : "",
									"eri_title" : "警力预警",
									"eri_content" : "民警李从健外出到机关科室",
									"eri_report_dept_id" : 100239,
									"eri_report_dept_name" : "七监区一分监区",
									"eri_report_time" : "2017-12-12 16:17:12",
									"eri_report_police_id" : 10945,
									"eri_report_police_name" : "胡志旦",
									"eri_handle_dept_id" : "",
									"eri_handle_dept_name" : "",
									"eri_status" : 7,
									"eri_status_ch" : "已确认",
									"eri_whether_upgrade" : 2,
									"eri_handle_status" : 1
								},
								{
									"rn" : 10,
									"eri_id" : 104057,
									"eri_data_source" : 2,
									"eri_data_source_ch" : "手持机",
									"eri_report_type" : 13,
									"eri_report_type_ch" : "位置信息",
									"eri_falut_genre_id" : "",
									"eri_falut_genre_name" : "",
									"eri_title" : "三监区一分监区 罗煜定 一键报警",
									"eri_content" : "MAC:80:89:17:42:eb:60\n\r位置: ",
									"eri_report_dept_id" : 68,
									"eri_report_dept_name" : "三监区一分监区",
									"eri_report_time" : "2017-12-12 15:58:19",
									"eri_report_police_id" : 10508,
									"eri_report_police_name" : "罗煜定",
									"eri_handle_dept_id" : 68,
									"eri_handle_dept_name" : "三监区一分监区",
									"eri_status" : 4,
									"eri_status_ch" : "处理中",
									"eri_whether_upgrade" : 2,
									"eri_handle_status" : 1
								} ],
						"total" : 2430
					}
		},
		methods : {

		}
	});
	/**
	 * 统一弹出框大小*/
	function dialogOpen(el,title){
		return dialog.open({targetId: el,title: title,w:"75",h:"80"});
	}
	/**
	 * 加载表格
	 */
		table.init("table", {
			request: {params:' ',url:' '},
			rows : 10,
			showColumns : false,
			pageList : [ 10, 20, 30, 40, 50 ],
			pageSize : 10,
			columns : [ [ {
                title: '上报单位',
                field: 'eri_report_dept_name',
                align: 'center',
                valign: 'middle',
 formatter: function(value,row,index){
                	
                	return 'XX监狱';
                }
            },{
                title: '标题',
                field: 'eri_title',
                align: 'center',
                valign: 'middle'
            },{
                title: '上报类型',
                field: 'eri_report_type_ch',
                align: 'center',
                valign: 'middle'
            },{
                title: '上报时间',
                field: 'eri_report_time',
                align: 'center',
                valign: 'middle'
            }
            ] ],
			onDblClickRow : function(row, $element) {
	        	dialogOpen('show_panel','详情');
			}
		});
		table.method('load', model.list1);
		
		
		
	try {

	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});