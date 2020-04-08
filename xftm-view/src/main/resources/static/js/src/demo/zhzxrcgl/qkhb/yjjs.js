define(function(require) {
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	var dialog2=null;

	/**
	 * 创建模型
	 */
	var model = new vue({
		el : '#yjjs',
		data : {
			list1 : {
				"rows" : [ {
					"rn" : 1,
					"name":"省二监狱", 
					"tape":"省二监狱指挥中心",
					"gaishu":"1",
					"danwei":"1",
					"time":"2",
					"riqi":"8",	
					"yuanyin":"1"	
				}, {
					"rn" : 2,
					"name":"第四监狱", 
					"tape":"第四监狱指挥中心",
					"gaishu":"1",
					"danwei":"1",
					"time":"2",
					"riqi":"10",	
					"yuanyin":"1"
				}, {
					"rn" : 3,
					"name":"第五监狱", 
					"tape":"第五监狱指挥中心",
					"gaishu":"1",
					"danwei":"1",
					"time":"2",
					"riqi":"11",	
					"yuanyin":"1"
				}, {
					"rn" : 4,
					"name":"xx监狱", 
					"tape":"xx监狱指挥中心",
					"gaishu":"1",
					"danwei":"1",
					"time":"2",
					"riqi":"10",	
					"yuanyin":"1"	
				}, {
					"rn" : 5,
					"name":"第六监狱", 
					"tape":"第六监狱指挥中心",
					"gaishu":"1",
					"danwei":"1",
					"time":"2",
					"riqi":"12",	
					"yuanyin":"1"
				}, {
					"rn" : 6,
					"name":"xx监狱", 
					"tape":"xx监狱指挥中心",
					"gaishu":"1",
					"danwei":"1",
					"time":"2",
					"riqi":"11",	
					"yuanyin":"1"
				}, {
					"rn" : 7,
					"name":"省四监狱", 
					"tape":"省四监狱指挥中心",
					"gaishu":"1",
					"danwei":"1",
					"time":"2",
					"riqi":"9",	
					"yuanyin":"1"
				}, {
					"rn" : 8,
					"name":"省六监狱", 
					"tape":"省六监狱指挥中心",
					"gaishu":"1",
					"danwei":"1",
					"time":"2",
					"riqi":"8",	
					"yuanyin":"1"
				}, {
					"rn" : 9,
					"name":"第五监狱", 
					"tape":"第五监狱指挥中心",
					"gaishu":"1",
					"danwei":"1",
					"time":"2",
					"riqi":"10",	
					"yuanyin":"1"
				} , {
					"rn" : 10,
					"name":"第四监狱", 
					"tape":"第四监狱指挥中心",
					"gaishu":"1",
					"danwei":"1",
					"time":"2",
					"riqi":"9",	
					"yuanyin":"1"
				}],
				"total" : 10
			}
		},
		methods : {
			openSearchPanel:function(){
									
				dialog2 = dialog.open({targetId:'search_panel',title:'证据查询',w:"420",h:"180"});
				
			},
			searchReport:function(){
				tip.alert("正在查询中...");
				dialog2.close();
				
				table.method("refresh");
				tip.close();
				}
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
			columns : [ [ 
			  /* {
				title : '所属监狱',
				field : 'name',
				align : 'center',
				valign : 'middle',
				
			},*/ {
				title : '所属部门',
				field : 'tape',
				width:  '250px',
				align : 'center',
				valign : 'middle',
				
			}, {
				title : '大屏',
				field : 'gaishu',
				align : 'center',
				valign : 'middle',
				
			}, {
				title : '对讲主机',
				field : 'danwei',
				align : 'center',
				valign : 'middle',
				
			}, {
				title : '视频监控',
				field : 'time',
				align : 'center',
				valign : 'middle',
				
			},{
				title : '电脑',
				field : 'riqi',
				align : 'center',
				valign : 'middle',
				
			}  ,{
				title : '广播话筒',
				field : 'yuanyin',
				align : 'center',
				valign : 'middle',
				
			} ] ],
			/*onDblClickRow : function(row, $element) {
				dialog.open({
					targetId : 'prisoner_panel',
					title : '证据详情',
					top : 5,
					w : 96,
					h : 90
				});
				var url = "zhengjuDtls.html";
				$('div#police_panel').find('iframe#contentHTML').show();
				$('div#police_panel').find('iframe#contentHTML').attr('src',
						url);
			}*/
			/*onDblClickRow:function(row,$element){
	        	 dialog.open({targetId: 'prisoner_panel', title: '证据详情',top:5, w: 98, h: 98});
	        	 var url = "zhengjuDtls.html";
	        	 $('div#prisoner_panel').find('iframe#contentHTML').show();
	        	 $('div#prisoner_panel').find('iframe#contentHTML').attr('src',url);
	         }*/
		});
		table.method('load', model.list1);
	}

	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});