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
					"name":"张三犯罪证据", 
					"tape":"刑事犯罪",
					"gaishu":"张三犯罪证据的大概情况",
					"danwei":"省二监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 2,
					"name":"张三犯罪证据", 
					"tape":"刑事犯罪",
					"gaishu":"张三犯罪证据的大概情况",
					"danwei":"省二监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 3,
					"name":"张三犯罪证据", 
					"tape":"刑事犯罪",
					"gaishu":"张三犯罪证据的大概情况",
					"danwei":"省二监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 4,
					"name":"张三犯罪证据", 
					"tape":"刑事犯罪",
					"gaishu":"张三犯罪证据的大概情况",
					"danwei":"省二监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 5,
					"name":"张三犯罪证据", 
					"tape":"刑事犯罪",
					"gaishu":"张三犯罪证据的大概情况",
					"danwei":"省二监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 6,
					"name":"张三犯罪证据", 
					"tape":"刑事犯罪",
					"gaishu":"张三犯罪证据的大概情况",
					"danwei":"省二监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 7,
					"name":"张三犯罪证据", 
					"tape":"刑事犯罪",
					"gaishu":"张三犯罪证据的大概情况",
					"danwei":"省二监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 8,
					"name":"张三犯罪证据", 
					"tape":"刑事犯罪",
					"gaishu":"张三犯罪证据的大概情况",
					"danwei":"省二监狱",
					"time":"2017:09:08",
					"person":"李明"	
				}, {
					"rn" : 9,
					"name":"张三犯罪证据", 
					"tape":"刑事犯罪",
					"gaishu":"张三犯罪证据的大概情况",
					"danwei":"省二监狱",
					"time":"2017:09:08",
					"person":"李明"	
				} , {
					"rn" : 10,
					"name":"张三犯罪证据", 
					"tape":"刑事犯罪",
					"gaishu":"张三犯罪证据的大概情况",
					"danwei":"省二监狱",
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
			showColumns : false,
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