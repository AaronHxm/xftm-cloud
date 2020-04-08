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
		el : '#gzjcj',
		data : {
			list1 : {
				"rows" : [ {
					"rn" : 1,
					"name":"省二监狱", 
					"tape":"省二监狱指挥中心",
					"work":"指挥中心通过视频督察发现二监区的李某某有自杀倾向，发现后及时处理，后续表现良好",
					"time":"2017-12-23"	
				}, {
					"rn" : 2,
					"name":"第四监狱", 
					"tape":"第四监狱指挥中心",
					"work":"指挥中心通过视频监控发现三监区赵某某情绪异常，表现不正常，发现后及时进行心里辅导，逐渐恢复",
					"time":"2017-12-24"
				}, {
					"rn" : 3,
					"name":"第五监狱", 
					"tape":"第五监狱指挥中心",
					"work":"指挥中心巡查时发现三监区的唐某某和四监区的刘某某及何某某，接触较多，通过侦查发现有大群架的倾向及时制止",
					"time":"2017-12-25"
				}, {
					"rn" : 4,
					"name":"xx监狱", 
					"tape":"xx监狱指挥中心",
					"work":"指挥中心通过视频督察发现二监区的李某某有自杀倾向，发现后及时处理，后续表现良好",
					"time":"2017-12-25"
				}, {
					"rn" : 5,
					"name":"第六监狱", 
					"tape":"第六监狱指挥中心",
					"work":"指挥中心通过视频督察发现二监区的李某某有自杀倾向，发现后及时处理，后续表现良好",
					"time":"2017-12-25"
				}, {
					"rn" : 6,
					"name":"xx监狱", 
					"tape":"xx监狱指挥中心",
					"work":"指挥中心巡查时发现三监区的唐某某和四监区的刘某某及何某某，接触较多，通过侦查发现有大群架的倾向及时制止",
					"time":"2017-12-26"
				}, {
					"rn" : 7,
					"name":"省四监狱", 
					"tape":"省四监狱指挥中心",
					"work":"指挥中心通过视频监控发现三监区赵某某情绪异常，表现不正常，发现后及时进行心里辅导，逐渐恢复",
					"time":"2017-12-27"
				}, {
					"rn" : 8,
					"name":"省六监狱", 
					"tape":"省六监狱指挥中心",
					"work":"指挥中心巡查时发现三监区的唐某某和四监区的刘某某及何某某，接触较多，通过侦查发现有大群架的倾向及时制止",
					"time":"2017-12-27"
				}, {
					"rn" : 9,
					"name":"第五监狱", 
					"tape":"第五监狱指挥中心",
					"work":"指挥中心通过视频督察发现二监区的李某某有自杀倾向，发现后及时处理，后续表现良好",
					"time":"2017-12-28"
				} , {
					"rn" : 10,
					"name":"第四监狱", 
					"tape":"第四监狱指挥中心",
					"work":"指挥中心通过视频监控发现三监区赵某某情绪异常，表现不正常，发现后及时进行心里辅导，逐渐恢复",
					"time":"2017-12-13"
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
				
			},  {
				title : '工作及成绩',
				field : 'work',
				align : 'center',
				valign : 'middle',
				
			},  {
				title : '时间',
				field : 'time',
				width:  '150px',
				align : 'center',
				valign : 'middle',
				
			},] ],
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