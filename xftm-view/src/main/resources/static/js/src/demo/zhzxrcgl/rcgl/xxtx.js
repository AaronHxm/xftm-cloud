define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var table = require('frm/table');
	var date = new Date();
	var y=date.getFullYear();
	var M=date.getMonth()+1;
	var d=date.getDate();
	var h=date.getHours();
	var m=date.getMinutes();
	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#xxtx',
		data: {
			'tsjlList': {
				'total': '12',
				'rows': [
     			    {'id': '1001', 'date': y+"-"+M+"-"+d+" "+h+":"+m, 'text': '25分钟之后教育谈话任务开始,请相关民警做好谈话准备,并做好相关记录'},
    			    {'id': '1002', 'date': y+"-"+M+"-"+d+" "+h+":"+m, 'text': '15分钟之后点名任务开始,请相关民警做好点名准备'},
    			    {'id': '1003', 'date': y+"-"+M+"-"+d+" "+h+":"+m, 'text': '该任务已完成'}
                ]
			}
		},
		methods: {}
	});

	function initTable(){
		table.init('table', {
			request: {
				params: ' ',
				url: ' '
			},
			showColumns: false,
			pagination: false,
			columns: [[
				{
				    title: '序号',
				    field: 'id',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '提醒时间',
				    field: 'date',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '提醒内容',
				    field: 'text',
				    align: 'center',
				    valign: 'middle',
				    width: '50%'
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