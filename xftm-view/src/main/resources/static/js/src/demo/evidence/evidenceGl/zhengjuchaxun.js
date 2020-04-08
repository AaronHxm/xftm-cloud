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
		el : '#zhengjuchaxun',
		data : {
			list1 : {
				"rows" : [ {
					"rn" : 1,
					"name":"执行民警脱岗", 
					"tape":"音频",
					"gaishu":"一监区二分监区一楼民警脱岗",
					"danwei":"省二监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 2,
					"name":"犯人打架", 
					"tape":"视频",
					"gaishu":"一监区一分监区监舍503发生打架",
					"danwei":"省三监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 3,
					"name":"犯人打架", 
					"tape":"图片",
					"gaishu":"二监区一分监区监舍413发生打架",
					"danwei":"省二监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 4,
					"name":"犯人集会", 
					"tape":"音频",
					"gaishu":"二监区一分监区监舍106发生集会",
					"danwei":"省二监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 5,
					"name":"犯人集会", 
					"tape":"视频",
					"gaishu":"三监区一分监区监舍212发生集会",
					"danwei":"省四监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 6,
					"name":"执行民警脱岗", 
					"tape":"视频",
					"gaishu":"五监区一分监区二楼民警脱岗",
					"danwei":"省四监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 7,
					"name":"犯人打架", 
					"tape":"图片",
					"gaishu":"二监区一分监区监舍413发生打架",
					"danwei":"省二监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 8,
					"name":"执行民警脱岗", 
					"tape":"图片",
					"gaishu":"四监区二分监区一楼民警脱岗",
					"danwei":"省七监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 9,
					"name":"犯人打架", 
					"tape":"音频",
					"gaishu":"二监区一分监区监舍516发生打架",
					"danwei":"省五监狱",
					"time":"2017:09:08",
					"person":"李明"	
				} , {
					"rn" : 10,
					"name":"犯人集会", 
					"tape":"视频",
					"gaishu":"二监区一分监区监舍203发生集会",
					"danwei":"省六监狱",
					"time":"2017:09:08",
					"person":"李明"	
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
			showColumns : true,
			pageList : [ 10, 20, 30, 40, 50 ],
			pageSize : 10,
			columns : [ [ 
			   {
				title : '证据名称',
				field : 'name',
				align : 'center',
				valign : 'middle',
				
			}, {
				title : '证据类型',
				field : 'tape',
				align : 'center',
				valign : 'middle',
				
			}, {
				title : '证据情况概述',
				field : 'gaishu',
				align : 'center',
				valign : 'middle',
				
			}, {
				title : '上传单位',
				field : 'danwei',
				align : 'center',
				valign : 'middle',
				
			}, {
				title : '上传时间',
				field : 'time',
				align : 'center',
				valign : 'middle',
				
			}, {
				title : '上传人',
				field : 'person',
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
			onDblClickRow:function(row,$element){
	        	 dialog.open({targetId: 'prisoner_panel', title: '证据详情',top:5, w: 98, h: 98});
	        	 var url = "zhengjuDtls.html";
	        	 $('div#prisoner_panel').find('iframe#contentHTML').show();
	        	 $('div#prisoner_panel').find('iframe#contentHTML').attr('src',url);
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