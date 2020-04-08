define(function(require) {
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	var echarts = require('echarts');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el : '#wallRoundStatisAnalysis',
		data : {
			wallRoundTimeSprade:[
			      {'prisonName':'XX监狱','count':3},               
	              {'prisonName':'XX监狱','count':3},
			      {'prisonName':'XX监狱','count':5},
			      {'prisonName':'XX监狱','count':5},
			      {'prisonName':'XX监狱','count':2},
			      {'prisonName':'XX监狱','count':2},
			      {'prisonName':'XX监狱','count':3},
			      {'prisonName':'XX监狱','count':10},
			      {'prisonName':'XX监狱','count':8},
			      {'prisonName':'XX监狱','count':6},
			      {'prisonName':'XX监狱','count':2},
			      {'prisonName':'XX监狱','count':7}
			],
			wallRoundInfoList : [ {
				'id' : '10001',
				'name' : 'XX监狱',
				'total' : '3',
				'detail' : [ {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '李某',
					'inNomalInfo' : '隔离网损坏'
				}, {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '张某',
					'inNomalInfo' : '隔离网损坏'
				}, {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '王某',
					'inNomalInfo' : '隔离网损坏'
				} ]
			}, {
				'id' : '10002',
				'name' : 'XX监狱',
				'total' : '5',
				'detail' : [ {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '李某',
					'inNomalInfo' : '隔离网损坏'
				}, {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '张某',
					'inNomalInfo' : '隔离网损坏'
				}, {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '王某',
					'inNomalInfo' : '隔离网损坏'
				}, {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '赵某',
					'inNomalInfo' : '隔离网损坏'
				}, {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '李某',
					'inNomalInfo' : '隔离网损坏'
				} ]
			}, {
				'id' : '10003',
				'name' : 'XX监狱',
				'total' : '5',
				'detail' : [ {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '李某',
					'inNomalInfo' : '隔离网损坏'
				}, {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '张某',
					'inNomalInfo' : '隔离网损坏'
				}, {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '王某',
					'inNomalInfo' : '隔离网损坏'
				}, {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '赵某',
					'inNomalInfo' : '隔离网损坏'
				}, {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '李某某',
					'inNomalInfo' : '隔离网损坏'
				} ]
			}, {
				'id' : '10004',
				'name' : 'XX监狱',
				'total' : '2',
				'detail' : [ {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '李某',
					'inNomalInfo' : '隔离网损坏'
				}, {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '张某',
					'inNomalInfo' : '隔离网损坏'
				}]
			},{
				'id' : '10005',
				'name' : 'XX监狱',
				'total' : '2',
				'detail' : [ {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '李四',
					'inNomalInfo' : '隔离网损坏'
				}, {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '张某',
					'inNomalInfo' : '隔离网损坏'
				}]
			},
			{
				'id' : '10006',
				'name' : '宁波监狱',
				'total' : '3',
				'detail' : [ {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '李某某',
					'inNomalInfo' : '隔离网损坏'
				}, {
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '张某',
					'inNomalInfo' : '隔离网损坏'
				},{
					'date' : '2017-12-09',
					'prisonName' : 'XX监狱',
					'checkPoliceName' : '赵某',
					'inNomalInfo' : '隔离网损坏'
				}]
			} ],
			wallRoundInfoShow : {}
		},
		methods : {

		}
	})
	function loadInNomalSpread(){
		getInNomalSpread();
		var namex = [];
		var array1 = [];
		var list0 = model.wallRoundTimeSprade;
		for ( var m in list0) {
			namex.push(list0[m].prisonName);
			array1.push(list0[m].count);
		}
		inNomalSpread.setOption({
			yAxis : {
				data : namex
			},
			series : [ {
				name : '异常次数',
				data : array1
			} ]
		});
		inNomalSpread.on('click', function(param) {
			model.wallRoundInfoShow = model.wallRoundInfoList[0];
			dialog.open({
				targetId : 'show_panel',
				title : '详情',
				w : "80",
				h : "80"
			});
		});
	}
	function getInNomalSpread() {
		inNomalSpread = echarts.init(document.getElementById('inNomalSpread'));
		inNomalSpreadOption = {
				title : {
					text : '',
					subtext : '',
					x : 'center',
					textStyle : {
						fontWeight : 'normal',
						color : '#06FFFF',
						fontSize : 16
					}
				},
				grid : {
					top:'5%',
					left : '2%',
					right : '10%',
					bottom : '15%',
					containLabel : true
				},
				tooltip : {
					trigger : 'axis',
					axisPointer : { // 坐标轴指示器，坐标轴触发有效
						type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				calculable : true,
				xAxis : [ {
					type : 'value',
					axisLine : {
						lineStyle : {
							color : '#fff',
							width : 0.3
						}
					},
					splitLine : {
						show : false
					}
				
				} ],
				yAxis : [ {
					type : 'category',
					data : [],
					axisLine : {
						lineStyle : {
							color : '#fff',
							width : 0.3
						}
					}
				} ],
				series : [ {
					name : '异常次数',
					type : 'bar',
					itemStyle : {
						normal : {
							color : '#FF0000',
							label : {
								show : true,
								position : 'insideRight'
							},
							opacity : 0.7
						}
					},
					data : []
				}

				]	
		};
		inNomalSpread.setOption(inNomalSpreadOption);
	}

	function initTable() {
		var json = {
			'total' : model.wallRoundInfoList.length,
			'rows' : model.wallRoundInfoList
		};
		table.init('table', {
			request : '',
			data : model.wallRoundInfoList,
			showColumns : false,
			pageList : [ 20, 30, 40, 50, 100 ],
			pageSize : 20,
			columns : [ [ {
				title : '监狱名称',
				field : 'name',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}, {
				title : '异常次数',
				field : 'total',
				align : 'center',
				valign : 'middle',
				width : '10%'
			} ] ],
			onDblClickRow : function(row) {
				model.wallRoundInfoShow = row;
				dialog.open({
					targetId : 'show_panel',
					title : '详情',
					w : "80",
					h : "80"
				});
			}
		});
		table.method('load', json);
	}

	try {
		loadInNomalSpread();
		initTable();
	} catch (e) {
		console.error(e);
	}
})
