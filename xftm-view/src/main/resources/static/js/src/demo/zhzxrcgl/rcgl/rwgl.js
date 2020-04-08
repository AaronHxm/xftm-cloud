define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var table = require('frm/table');
	var tip = require('frm/message');
	var dialog = require('frm/dialog');
	var datepicker = require('frm/datepicker');
	var dialog1 = null;
	var index1 = null;
	var date = new Date();
	var y=date.getFullYear();
	var M=date.getMonth()+1;
	var d=date.getDate();
	var h=date.getHours();
	var m=date.getMinutes();
	/**
	 * 创建模型
	 * ("0"+(m-50)).slice(-2)
	 */
	var model = new vue({
		el: '#rwgl',
		data: {
			'tsjlList': {
				'total': '12',
				'rows': [
     			    {'id': '201801001', 'mc': '教育谈话', 'nr': '监区内月度谈话任务', 'date': y+"-"+M+"-"+d+" "+h+":"+m, 'dx': '第二监狱', 'yxq': (y+1)+"-"+M+"-"+d+" "+h+":"+m, 'zxpl':'每天','wcqk': '100%'},
     			    {'id': '201801002', 'mc': '教育谈话', 'nr': '监区内月度谈话任务', 'date': y+"-"+M+"-"+d+" "+h+":"+m, 'dx': '第三监狱', 'yxq': (y+1)+"-"+M+"-"+d+" "+h+":"+m, 'zxpl':'每天','wcqk': '96%'},
     			    {'id': '201801003', 'mc': '教育谈话', 'nr': '监区内月度谈话任务', 'date': y+"-"+M+"-"+d+" "+h+":"+m, 'dx': '第四监狱', 'yxq': (y+1)+"-"+M+"-"+d+" "+h+":"+m, 'zxpl':'每天','wcqk': '100%'},
     			    {'id': '201801004', 'mc': '教育谈话', 'nr': '监区内月度谈话任务', 'date': y+"-"+M+"-"+d+" "+h+":"+m, 'dx': '第六监狱', 'yxq': (y+1)+"-"+M+"-"+d+" "+h+":"+m, 'zxpl':'每天','wcqk': '99%'},
     			    {'id': '201801005', 'mc': '教育谈话', 'nr': '监区内月度谈话任务', 'date': y+"-"+M+"-"+d+" "+h+":"+m, 'dx': '第九监狱', 'yxq': (y+1)+"-"+M+"-"+d+" "+h+":"+m, 'zxpl':'每天','wcqk': '96%'},
    			    {'id': '201801006', 'mc': '电子点名', 'nr': '监区内电子点名任务', 'date': y+"-"+M+"-"+d+" "+h+":"+m, 'dx': '第四监狱', 'yxq': (y+1)+"-"+M+"-"+d+" "+h+":"+m,'zxpl':'每天', 'wcqk': '100%'},
    			    {'id': '201801007', 'mc': '电子点名', 'nr': '监区内电子点名任务', 'date': y+"-"+M+"-"+d+" "+h+":"+m, 'dx': '第一监狱', 'yxq': (y+1)+"-"+M+"-"+d+" "+h+":"+m,'zxpl':'每天', 'wcqk': '99%'},
    			    {'id': '201801008', 'mc': '电子点名', 'nr': '监区内电子点名任务', 'date': y+"-"+M+"-"+d+" "+h+":"+m, 'dx': '第七监狱', 'yxq': (y+1)+"-"+M+"-"+d+" "+h+":"+m,'zxpl':'每天', 'wcqk': '98%'},
    			    {'id': '201801009', 'mc': '电子点名', 'nr': '监区内电子点名任务', 'date': y+"-"+M+"-"+d+" "+h+":"+m, 'dx': '第六监狱', 'yxq': (y+1)+"-"+M+"-"+d+" "+h+":"+m,'zxpl':'每天', 'wcqk': '100%'},
    			    {'id': '201801010', 'mc': '电子点名', 'nr': '监区内电子点名任务', 'date': y+"-"+M+"-"+d+" "+h+":"+m, 'dx': '第八监狱', 'yxq': (y+1)+"-"+M+"-"+d+" "+h+":"+m,'zxpl':'每天', 'wcqk': '97%'},
    			    {'id': '201801011', 'mc': '视频监控', 'nr': '监区内视频监控任务', 'date': y+"-"+M+"-"+d+" "+h+":"+m, 'dx': '第五监狱', 'yxq': (y+1)+"-"+M+"-"+d+" "+h+":"+m,'zxpl':'每天', 'wcqk': '99%'},
    			    {'id': '201801012', 'mc': '监督检查', 'nr': '监狱内监督检查任务', 'date': y+"-"+M+"-"+d+" "+h+":"+m, 'dx': '第三监狱', 'yxq': (y+1)+"-"+M+"-"+d+" "+h+":"+m,'zxpl':'每天', 'wcqk': '100%'}
                ]
			}
		},
		methods: {
			openSearchPanel:function(){
				dialog1 = dialog.open({targetId:'search_panel',title:'查询',w:'35',h:'30',top:'0%'});
				if(!index1){
					index1 = dialog1.index;
				}
			},
			searchDb:function(){
				tip.alert("正在查询中");
				dialog.close(index1);
			}
		}
	});

	function initTable(){
		table.init('table', {
			request: {
				params: ' ',
				url: ' '
			},
			showColumns: false,
			columns: [[
				{
				    title: '任务编号',
				    field: 'id',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '任务名称',
				    field: 'mc',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '任务内容',
				    field: 'nr',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '执行对象',
				    field: 'dx',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '任务开始时间',
				    field: 'date',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '任务结束时间',
				    field: 'yxq',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '执行频率',
				    field: 'zxpl',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '任务完成情况',
				    field: 'wcqk',
				    align: 'center',
				    valign: 'middle'
				}
            ]]
		});
		table.method('load', model.tsjlList);
	}
	
	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});