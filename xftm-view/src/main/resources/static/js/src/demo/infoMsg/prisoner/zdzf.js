define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#zdzf',
		data:{
			list1:{'total':10,'rows':[
				    {"rn":1,"pr_no":"3301008901","bs":"第二监狱","pr_name":"李某某","pr_gender":"男","pr_charge":"故意杀人","pr_term":"20年2个月","pr_termbegin":"2011-01-28","pr_termend":"2027-09-27","pr_arrival_day":"2006-08-03","pr_nationality":"畲族","pr_state":"在监","pr_area":"九监区二分监区","pr_level":"严管级"},
				    {"rn":2,"pr_no":"3301010076","bs":"第四监狱","pr_name":"罗某某","pr_gender":"男","pr_charge":"抢劫","pr_term":"无期","pr_termbegin":"2009-09-24","pr_termend":"2024-10-23","pr_arrival_day":"2010-02-03","pr_nationality":"布依族","pr_state":"在监","pr_area":"五监区三分监区","pr_level":"严管级"},
				    {"rn":3,"pr_no":"3302001307","bs":"第二监狱","pr_name":"潘某某","pr_gender":"男","pr_charge":"故意杀人","pr_term":"17年9个月","pr_termbegin":"2001-03-26","pr_termend":"2018-10-25","pr_arrival_day":"1993-07-24","pr_nationality":"汉族","pr_state":"在监","pr_area":"九监区二分监区","pr_level":"严管级"},
				    {"rn":4,"pr_no":"3302002333","bs":"第一监狱","pr_name":"陈某某","pr_gender":"男","pr_charge":"盗窃","pr_term":"19年1个月","pr_termbegin":"2015-05-27","pr_termend":"2023-04-26","pr_arrival_day":"1995-11-30","pr_nationality":"汉族","pr_state":"在监","pr_area":"四监区一分监区","pr_level":"严管级"},
				    {"rn":5,"pr_no":"3302002646","bs":"第三监狱","pr_name":"余某某","pr_gender":"男","pr_charge":"故意杀人","pr_term":"16年4个月","pr_termbegin":"1998-09-01","pr_termend":"2017-08-31","pr_arrival_day":"1992-10-15","pr_nationality":"汉族","pr_state":"在监","pr_area":"九监区二分监区","pr_level":"严管级"},
				    {"rn":6,"pr_no":"3302002901","bs":"第二监狱","pr_name":"张某某","pr_gender":"男","pr_charge":"诈骗","pr_term":"无期","pr_termbegin":"1991-10-30","pr_termend":"","pr_arrival_day":"1992-06-13","pr_nationality":"汉族","pr_state":"在监","pr_area":"七监区一分监区","pr_level":"严管级"},
				    {"rn":7,"pr_no":"3302003725","bs":"第五监狱","pr_name":"钱某某","pr_gender":"男","pr_charge":"诈骗","pr_term":"无期","pr_termbegin":"2013-03-27","pr_termend":"2018-01-26","pr_arrival_day":"1997-03-26","pr_nationality":"汉族","pr_state":"在监","pr_area":"三监区二分监区","pr_level":"严管级"},
				    {"rn":8,"pr_no":"3302004051","bs":"第六监狱","pr_name":"黄某某","pr_gender":"男","pr_charge":"盗窃故意杀人","pr_term":"18年8个月","pr_termbegin":"2013-03-05","pr_termend":"2018-01-25","pr_arrival_day":"1997-09-11","pr_nationality":"汉族","pr_state":"在监","pr_area":"四监区三分监区","pr_level":"严管级"},
				    {"rn":9,"pr_no":"3302004196","bs":"第二监狱","pr_name":"曹某某","pr_gender":"男","pr_charge":"制毒贩毒","pr_term":"13年4个月","pr_termbegin":"2000-09-26","pr_termend":"2020-06-25","pr_arrival_day":"1997-11-19","pr_nationality":"汉族","pr_state":"在监","pr_area":"九监区一分监区","pr_level":"严管级"},
				    {"rn":10,"pr_no":"3302004385","bs":"第七监狱","pr_name":"方某某","pr_gender":"男","pr_charge":"故意杀人","pr_term":"15年6个月","pr_termbegin":"2004-02-20","pr_termend":"2017-08-19","pr_arrival_day":"1998-03-24","pr_nationality":"汉族","pr_state":"在监","pr_area":"七监区二分监区","pr_level":"严管级"}
				    ]},
		prisoner: {"bs":"第二监狱","pr_no":"3301008901","pr_name":"李某某","pr_birthday":"1973-03-05","pr_gender":"男","pr_education":"初中","pr_jobcareer":"农民","pr_regaddress":"xx省 xx县","pr_address":"xx省 xx县 xx镇xxx村xxx路15号","pr_charge":"故意杀人","pr_term":"16年8月","pr_termbegin":"2011-01-28","pr_termend":"2027-09-27","pr_arrival_day":"2006-08-03","pr_level":"严管级","pr_multicrime":"团伙","pr_samecharge":"故意杀人","pr_abbr":"","pr_cause":"","pr_nationality":"畲族","pr_state":"在监","pr_area":"九监区二分监区","fh":"","sfzh":"123426197311223222","sfbm":"0","zbm":"","bqmm":"群众","hy":"未婚","hkfl":"城镇","pcs":"","csqh":"xx省  xx县","jg":"xx省  xx县","jgdzqh":"xx省  xx县","jgdzmx":"xx省  xx县xx镇xx村xx路200号","bqdwqh":"","bqdwmx":"","dbjg":"xx省  xx市 公安局","dbrq":"2005-10-28","tah":"123300中级人民法院x刑初字123400000058","ysjg":"xx省  xx市 中级人民法院","yszh":"x刑初字 123400000058","bznx":"","fj":"","qk":"0","lgf":"","lclb":"","zxdl":"","yaflb":"重大刑事犯","xaflb":"重大刑事犯","fylx":"暴力型","cyxs":"常押","jsh":"","cwh":"","jggj":"","nwfg":"","gz":"","jxcd":"一般","zydah":"","mj":"无密级","yxdah":"","cnbj":"已成年","fjjn":"","jyrq":"2005-10-28","hjzh":"","hjgw":"","ssdj":"","ss_dj":"","qsjg":"xx省  xx市 人民检察院","qszh":"x检刑诉 2006000031","ywss":"","zsqk":"核准死缓","zsjg":"xx省 高级人民法院","zszh":"x刑一复字 2006000091","sxzy":"","thrs":"2","jtqk":"","yjsdj":"","kss":"xx看守所","hg_id":"351702","xwhcd":"初中","pr_area_id":"100244","pr_state_id":"1","pr_flow_reason":"","pr_name_hypy":"ZYS"}
		},
		methods:{
			
		}
	});
	
	
	/**
	 * 加载表格
	 */
	function initTable(){
		table.init("table",{
			request: {params:' ',url:' '},
			showColumns:false,
			pageList: [10,20,30,40,50],
			pageSize: 10,
			columns: [[
				{
	                title: '所属监狱',
	                field: 'bs',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '罪犯姓名',
	                field: 'pr_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '性别',
	                field: 'pr_gender',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '所属部门',
	                field: 'pr_area',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '监管等级',
	                field: 'pr_level',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '罪名',
	                field: 'pr_charge',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '刑期',
	                field: 'pr_term',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '入监日期',
	                field: 'pr_arrival_day',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '状态',
	                field: 'pr_state',
	                align: 'center',
	                valign: 'middle',
	                formatter: function(value,row,index){
						return value == '在监' ? '<span style="color:#6AB5FF;">'+value+'</span>':'<span style="color:red;">'+value+'</span>';
					}
	            }
	         ]],
	         onDblClickRow:function(row,$element){
	        	 dialog.open({targetId: 'prisoner_panel', title: '罪犯详情',top:5, w: 96, h: 90});
	        	 //var url = "prisonDtls.html";
	        	 $('div#prisoner_panel').show();
	        	// $('div#prisoner_panel').find('iframe#contentHTML').attr('src',url);
	         }
		});
		table.method('load',model.list1);
	}
	
	
	
	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});