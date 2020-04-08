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
		el : '#jiaban',
		data : {
			list1 : {
				"rows" : [ {
					"rn" : 1,
					"name":"省二监狱", 
					"tape":"省二监狱指挥中心",
					"gaishu":"副指挥长",
					"danwei":"李某某",
					"time":"早班",
					"riqi":"2017-12-23",	
					"yuanyin":"外出培训调整"	
				}, {
					"rn" : 2,
					"name":"第四监狱", 
					"tape":"第四监狱指挥中心",
					"gaishu":"视频督察员",
					"danwei":"赵某某",
					"time":"中班",
					"riqi":"2017-12-24",	
					"yuanyin":"上级活动调整"
				}, {
					"rn" : 3,
					"name":"第五监狱", 
					"tape":"第五监狱指挥中心",
					"gaishu":"指挥协调员",
					"danwei":"王某某",
					"time":"前夜班",
					"riqi":"2017-12-22",	
					"yuanyin":"上级活动调整"
				}, {
					"rn" : 4,
					"name":"xx监狱", 
					"tape":"xx监狱指挥中心",
					"gaishu":"警情巡查员",
					"danwei":"金某某",
					"time":"早班",
					"riqi":"2017-12-25",	
					"yuanyin":"外出培训调整"	
				}, {
					"rn" : 5,
					"name":"第六监狱", 
					"tape":"第六监狱指挥中心",
					"gaishu":"视频督察员",
					"danwei":"唐某某",
					"time":"后夜班",
					"riqi":"2017-12-25",	
					"yuanyin":"人员调配调整"
				}, {
					"rn" : 6,
					"name":"xx监狱", 
					"tape":"xx监狱指挥中心",
					"gaishu":"副指挥长",
					"danwei":"柳某某",
					"time":"前夜班",
					"riqi":"2017-12-26",	
					"yuanyin":"外出培训调整"
				}, {
					"rn" : 7,
					"name":"省四监狱", 
					"tape":"省四监狱指挥中心",
					"gaishu":"警情巡查员",
					"danwei":"何某某",
					"time":"中班",
					"riqi":"2017-12-24",	
					"yuanyin":"人员调配调整"
				}, {
					"rn" : 8,
					"name":"省六监狱", 
					"tape":"省六监狱指挥中心",
					"gaishu":"视频督察员",
					"danwei":"谢某某",
					"time":"早班",
					"riqi":"2017-12-28",	
					"yuanyin":"人员调配调整"
				}, {
					"rn" : 9,
					"name":"第五监狱", 
					"tape":"第五监狱指挥中心",
					"gaishu":"副指挥长",
					"danwei":"刘某某",
					"time":"中班",
					"riqi":"2017-12-27",	
					"yuanyin":"上级活动调整"
				} , {
					"rn" : 10,
					"name":"第四监狱", 
					"tape":"第四监狱指挥中心",
					"gaishu":"警情巡查员",
					"danwei":"金某某",
					"time":"后夜班",
					"riqi":"2017-12-23",	
					"yuanyin":"外出培训调整"
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
				align : 'center',
				valign : 'middle',
				
			}, {
				title : '岗位',
				field : 'gaishu',
				align : 'center',
				valign : 'middle',
				
			}, {
				title : '加班民警',
				field : 'danwei',
				align : 'center',
				valign : 'middle',
				
			}, {
				title : '加班班次',
				field : 'time',
				align : 'center',
				valign : 'middle',
				
			},{
				title : '加班日期',
				field : 'riqi',
				align : 'center',
				valign : 'middle',
				
			}  ,{
				title : '加班原因',
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