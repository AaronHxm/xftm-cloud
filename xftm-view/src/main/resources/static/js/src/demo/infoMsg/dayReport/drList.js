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
		el : '#drList',
		data : {
			
			list1:{'total':16,'rows':[
		           {"rn":1,id:3223,name:'第二监狱','title':'第二监狱要情日汇报','time':'2017-12-09 08:09:34','police':'张xx','datetime':'2017-12-09'},                    
		           {"rn":2,id:32236,name:'xx监狱','title':'xx监狱要情日汇报','time':'2017-12-09 08:09:34','police':'李xx','datetime':'2017-12-09'},
		           {"rn":3,id:32237,name:'xx监狱','title':'xx监狱要情日汇报','time':'2017-12-09 08:09:34','police':'赵x','datetime':'2017-12-09'},
		           {"rn":4,id:32238,name:'xx监狱','title':'xx监狱要情日汇报','time':'2017-12-09 08:09:34','police':'张xx','datetime':'2017-12-09'}, 
		           {"rn":5,id:322310,name:'xxx监狱','title':'xxx监狱要情日汇报','time':'2017-12-09 08:09:34','police':'曲xx','datetime':'2017-12-09'},
		           {"rn":6,id:322314,name:'xxxx监狱','title':'xxxx监狱要情日汇报','time':'2017-12-09 08:09:34','police':'金xx','datetime':'2017-12-09'},
		           {"rn":7,id:322315,name:'xx监狱','title':'xx监狱要情日汇报','time':'2017-12-09 08:09:34','police':'唐xx','datetime':'2017-12-09'},
		           {"rn":8,id:322316,name:'xxxx监狱','title':'xxxx监狱要情日汇报','time':'2017-12-09 08:09:34','police':'郝xx','datetime':'2017-12-09'},
		           {"rn":9,id:322317,name:'xx监狱','title':'xx监狱要情日汇报','time':'2017-12-09 08:09:34','police':'柳xx','datetime':'2017-12-09'},
		           {"rn":10,id:3224,name:'第四监狱','title':'第四监狱要情日汇报','time':'2017-12-09 08:09:34','police':'刘xx','datetime':'2017-12-09'},
		           {"rn":11,id:3225,name:'第一监狱','title':'第一监狱要情日汇报','time':'2017-12-09 08:09:34','police':'张x','datetime':'2017-12-09'},
		           {"rn":12,id:3226,name:'第三监狱','title':'第三监狱要情日汇报','time':'2017-12-09 08:09:34','police':'唐xx','datetime':'2017-12-09'},
		           {"rn":13,id:32234,name:'xxxx监狱','title':'xxxx监狱要情日汇报','time':'2017-12-09 08:09:34','police':'王xx','datetime':'2017-12-09'},
		           {"rn":14,id:32231,name:'xx监狱','title':'xx监狱要情日汇报','time':'2017-12-09 08:09:34','police':'周xx','datetime':'2017-12-09'},
		           {"rn":15,id:3227,name:'第五监狱','title':'第五监狱要情日汇报','time':'2017-12-09 08:09:34','police':'郑x','datetime':'2017-12-09'},
		           {"rn":16,id:3228,name:'第六监狱','title':'第六监狱要情日汇报','time':'2017-12-09 08:09:34','police':'张x','datetime':'2017-12-09'}
		    ]}
		},
		methods : {

		}
	});

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
				title : '日期',
				field : 'datetime',
				align : 'center',
				valign : 'middle',
				width : '9%'
			}, {
				title : '单位',
				field : 'name',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}, {
				title : '标题',
				field : 'title',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}, {
				title : '填报时间',
				field : 'time',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}, {
				title : '填报人',
				field : 'police',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}] ],
			onDblClickRow : function(row, $element) {
				$('div#overflow').animate({scrollTop: 0});
	        	 dialog1 = dialog.open({targetId:'show_panel',title:'日汇报详情信息',w:96,h:90});
			}
		});
		table.method('load', model.list1);

	try {

	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});