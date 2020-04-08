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
		el : '#policeCarMng',
		data : {
			list1 : {
				"rows" : [ {
					"rn" : 1,
					"bs":"第一监狱",
					"carCount" : "3",
					"largeCar" : "xx街道xx号",
					"roadlouse" : "2017-12-23 12:35:00",
					"hasthe" : "警车",
					"notso" : "提解重审",
					"fangshi":'1845675434',
					"danwei":'第二监狱'
				}, {
					"rn" : 1,
					"bs":"第二监狱",
					"carCount" : "2",
					"largeCar" : "xx路xx号",
					"roadlouse" : "2017-12-24 10:33:00",
					"hasthe" : "大型车",
					"notso" : "罪犯流动",
					"fangshi":'19564765321',
					"danwei":'第三监狱'
				},{
					"rn" : 1,
					"bs":"第三监狱",
					"carCount" : "6",
					"largeCar" : "xx街道xx号",
					"roadlouse" : "2017-12-25 16:35:00",
					"hasthe" : "小型车",
					"notso" : "提解重审",
					"fangshi":'1385775357',
					"danwei":'第一监狱'
				},{
					"rn" : 1,
					"bs":"第四监狱",
					"carCount" : "7",
					"largeCar" : "xx市xx路xx号",
					"roadlouse" : "2017-12-25 14:55:00",
					"hasthe" : "特警车",
					"notso" : "外出就医",
					"fangshi":'1593457675365',
					"danwei":'第八监狱'
				},{
					"rn" : 1,
					"bs":"第五监狱",
					"carCount" : "3",
					"largeCar" : "xx区xx街道",
					"roadlouse" : "2017-12-26 8:36:00",
					"hasthe" : "防暴车",
					"notso" : "罪犯流动",
					"fangshi":'16583534565',
					"danwei":'第七监狱'
				},{
					"rn" : 1,
					"bs":"第六监狱",
					"carCount" : "4",
					"largeCar" : "xx市xx郊区",
					"roadlouse" : "2017-12-26 9:22:00",
					"hasthe" : "运输车",
					"notso" : "罪犯流动",
					"fangshi":'1954365753',
					"danwei":'第十二监狱'
				},{
					"rn" : 1,
					"bs":"第七监狱",
					"carCount" : "8",
					"largeCar" : "xx法院",
					"roadlouse" : "2017-12-27 13:44:00",
					"hasthe" : "巡逻车",
					"notso" : "提解重审",
					"fangshi":'12768467543',
					"danwei":'第九监狱'
				},{
					"rn" : 1,
					"bs":"第八监狱",
					"carCount" : "2",
					"largeCar" : "xx市xx法院",
					"roadlouse" : "2017-12-27 15:11:00",
					"hasthe" : "囚车",
					"notso" : "提解重审",
					"fangshi":'184676943554',
					"danwei":'第二监狱'
				},{
					"rn" : 1,
					"bs":"第九监狱",
					"carCount" : "8",
					"largeCar" : "xx市xx医院",
					"roadlouse" : "2017-12-28 10:45:00",
					"hasthe" : "救治车",
					"notso" : "外出就医",
					"fangshi":'15635743765',
					"danwei":'第一监狱'
				},{
					"rn" : 1,
					"bs":"第十监狱",
					"carCount" : "5",
					"largeCar" : "xx区xx街道",
					"roadlouse" : "2017-12-29 11:45:00",
					"hasthe" : "防爆车",
					"notso" : "罪犯流动",
					"fangshi":'13124546474',
					"danwei":'第三监狱'
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
			request : '',
			rows : 10,
			showColumns : false,
			pageList : [ 10, 20, 30, 40, 50 ],
			pageSize : 10,
			columns : [ [ {
				title : '车辆类型',
				field : 'hasthe',
				align : 'center',
				valign : 'middle',
				width : '9%'
			}, {
				title : '出警车辆数',
				field : 'carCount',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}, {
				title : '出警地点',
				field : 'largeCar',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}, {
				title : '出发时间',
				field : 'roadlouse',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}, {
				title : '调配单位',
				field : 'bs',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}, {
				title : '调度原因',
				field : 'notso',
				align : 'center',
				valign : 'middle',
				width : '10%'
			} , {
				title : '联系方式',
				field : 'fangshi',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}, {
				title : '调度单位',
				field : 'danwei',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}] ]
			
		});
		table.method('load', model.list1);
	}

	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});