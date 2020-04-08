define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	
	var timeInterval = null;


	var i = 0;
	var prId = 1;

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_video_ssdm',
		data: {
			'tsjlList': {
				'total': '12',
				'rows': [
				    {
			        	'id': '01',
			        	'dmzz': 'xx省第二监狱',
			        	'dmsj': '2017-12-09 08:26:32',
			        	'dmdd': 'xx省第二监狱一号厂房',
			        	'yd': '4190',
			        	'sd': '1200',
			        	'dmmj': '王某某',
			        	'sfcg': '是',
			        	'dmfs': '视频点名',
			        	'status': '正在点名'
			         }, {
			        	'id': '02',
			        	'dmzz': 'xx省第四监狱',
			        	'dmsj': '2017-12-09 08:26:32',
			        	'dmdd': 'xx省第四监狱二号监舍楼',
			        	'yd': '4376',
			        	'sd': '3200',
			        	'dmmj': '李某某',
			        	'sfcg': '否',
			        	'dmfs': '手持机点名',
			        	'status': '正在点名'
			         }
                ]
			},
			eleAttRow: {
				'crm_prison_nums': '4190',
				'crm_predict_num': '4190',
				'crm_residue_nums': '3090',
				'crm_run_time': '15',
				'crm_police_name': '王某某'
			},
			attPrisoners: [
			    {'prisoner_id': '001', 'prisoner_name': '罪犯001'},
			    {'prisoner_id': '002', 'prisoner_name': '罪犯002'},
			    {'prisoner_id': '003', 'prisoner_name': '罪犯003'},
			    {'prisoner_id': '004', 'prisoner_name': '罪犯004'},
			    {'prisoner_id': '005', 'prisoner_name': '罪犯005'},
			    {'prisoner_id': '006', 'prisoner_name': '罪犯006'},
			    {'prisoner_id': '007', 'prisoner_name': '罪犯007'},
			    {'prisoner_id': '008', 'prisoner_name': '罪犯008'},
			    {'prisoner_id': '009', 'prisoner_name': '罪犯009'}
			],
			prs: [],
			msgHeader: {
				'a': 4190,
				'b': 4190,
				'c': 3090,
				'd': 15,
				'e': '王某某'
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
				    title: '编号',
				    field: 'id',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '单位',
				    field: 'dmzz',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '点名时间',
				    field: 'dmsj',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '点名地点',
				    field: 'dmdd',
				    align: 'center',
				    valign: 'middle'
				},{
				    title: '应点人数',
				    field: 'yd',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '已点人数',
				    field: 'sd',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '点名民警',
				    field: 'dmmj',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '是否出工',
				    field: 'sfcg',
				    align: 'center',
				    valign: 'middle'
				},{
				    title: '点名方式',
				    field: 'dmfs',
				    align: 'center',
				    valign: 'middle'
				}, {
				    title: '状态',
				    field: 'status',
				    align: 'center',
				    valign: 'middle',
				    formatter: function(value, row, index){
				    	if (value == '正在点名') {
				    		return '<span style="color:#0fec0f;">' + value + '</span>';
				    	}
				    	return '<span style="color:#FFF;">' + value + '</span>';
				    }
				}
            ]],
            onDblClickRow: function(row, $element){
            	dialog.open({targetId: 'prList', title: '实时点名名单(' + row.dmzz + ')', w: '90', h: '90', closeCallback: function(){
            		clearInterval(timeInterval);
            	}});
            	var btns = $('button');
            	$(btns[9]).remove();
            	if (prId == 1) {
            		$('#calling_img').hide();
            	}

            	timeInterval = setInterval(function() {
            		if (prId > 9) {
            			clearInterval(timeInterval);
            			model.tsjlList.rows[0].status = '点名完成';
            			table.method('load', model.tsjlList);
            		}
        			i % 2 == 0 ? $('#00' + prId).css("background-color", "#278FD3") : 
        				$('#00' + prId).css("background-color", "#000");
        			if (i == 4) {
        				$('#calling_img').show();
        				$('#00' + prId).remove();
        				$('#calling_img').attr('src', 'imgs/' + prId + '.jpg');
        				model.prs.splice(0, 0, {'prisoner_id': '00' + prId, 'prisoner_name': '罪犯00' + prId})
        				model.msgHeader.c--;
        				prId++;
        				i = 0;
        			} else {
        				i++;
        			}
        		}, 500);
            }
		});
		table.method('load', model.tsjlList);
	}

	try {
		initTable();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});