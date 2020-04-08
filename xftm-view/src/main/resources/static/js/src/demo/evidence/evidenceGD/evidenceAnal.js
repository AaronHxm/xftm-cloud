define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var echarts = require('echarts');
	var table = require('frm/table');
	var dialog = require('frm/dialog');
	/**
	 * 创建模型
	 */
	var evidenceBar=null;
	//证据数量统计柱形图
	function getEvidenceBar(){
		evidenceBar = echarts.init(document.getElementById('evidenceBar'));
		evidenceBarOption = {
		    title : {
		        text: '',
		        subtext: '',
		        x:'center',
		        textStyle:{
		    		fontWeight:'normal',
		    		color: '#06FFFF',
		    		fontSize:22
		    	}
		    },
		    tooltip : {
		    	trigger : 'axis',
				axisPointer : {type : 'shadow'}
		      
		    },
		    legend: {
		        data:[],
		        show:false
		    },
		    calculable : false,
		    xAxis : [
		    	{
		            type : 'category',
		            data : ['二监','四监','五监','六监','七监'],
		            axisLine:{
		            	lineStyle: {
			                opacity: 1,
			                color: 'white',
			                width: 1,
			                curveness: 2
		            	}
		            }
    		        }
    		    ],
    		    yAxis : [
    		        {
    		            type : 'value',
    		            axisLabel : {
        					show : true,
        					textStyle : {color : '#BEBEBE'}
        				},
        				splitLine : {show : false},
        				
    		        }
    		    ],
    		    series : [
    		        {
    		            name:'监区',
    		            type:'bar',
    		            data:[7,10,5,9,12],
    		            itemStyle: {
    		            	normal: {
    		            		color:'#4592FF'
    		            	}
    		            },
    		            label : {
    				    	normal : {show : true, position : 'inside'}
    				    },
    		        },
    		    ]
		};
		evidenceBar.setOption(evidenceBarOption);
	}
	//柱状图点击事件
	function clickEvent(){
		getEvidenceBar();
		evidenceBar.on('click',function(param){
			if(param.name=="二监"||param.name=="四监"||param.name=="五监"||param.name=="六监"||param.name=="七监"){
				dialog.open({
					targetId : 'evidence_panel',
					title : '证据数量分析',
					top : 5,
					w : 96,
					h : 90
				});
				var url = "evidenceDtls.html";
				$('div#evidence_panel').find('iframe#contentHTML').show();
				$('div#evidence_panel').find('iframe#contentHTML').attr('src',url);
			}
		});
		
	}
	//证据数量统计饼状图
	function getEvidencePie(){
		echarts.init(document.getElementById('evidencePie')).setOption({
			color: [
				'#009800',
                '#4592FF',
                '#FF4444'
                ],
		    title : {
		        text: '',
		        subtext: '',
		        x:'center',
		        textStyle:{
		    		fontWeight:'normal',
		    		color: '#06FFFF',
		    		fontSize:22
		    	}
		    },
		    tooltip : {
		    	trigger : 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		    	show: false,
		    	orient: 'vertical',
		    	x:'left',
		        data:['视频','音频','图片'],
		        textStyle:{
		    		fontWeight:'normal',
		    		color: 'white',
		    		fontSize:12
		    	}
		    },
		    calculable : true,
    		    series : [
    		        {
    		            name:'证据类型',
    		            type:'pie',
    		            radius: '55%',
    		            center: ['50%','60%'],
    		            data:[
    		            {value: '98',name: '视频'},
    		            {value:'105',name: '音频'},
    		            {value: '65',name: '图片'}
    		            ],
    		            label: {
    			            normal: {
    			                formatter: function(params, ticket, callback) {
    			                    return params.name + '\n' + params.value + '\n' + params.percent + '%';
    			                }
    			            },
    			        }
    		        },
    		    ]
		})
	}
	
	/*
	 * 创建模型
	 * */
	var model = new vue({
		el:'#evidenceTab',
		data:{
			list:{
				"rows":[{"evidenceLX" :"视频","evidencename" :"执行民警脱岗","depart" :"二监","uploadTime" :"2017-12-10"},
					{"evidenceLX" :"音频","evidencename" :"犯人集会","depart" :"四监","uploadTime" :"2017-12-9"},
					{"evidenceLX" :"图片","evidencename" :"犯人打架","depart" :"五监","uploadTime" :"2017-12-9"},
					{"evidenceLX" :"音频","evidencename" :"执行民警脱岗","depart" :"六监","uploadTime" :"2017-12-9"},
					{"evidenceLX" :"视频","evidencename" :"犯人集会","depart" :"七监","uploadTime" :"2017-12-8"},
					{"evidenceLX" :"图片","evidencename" :"执行民警脱岗","depart" :"二监","uploadTime" :"2017-12-8"},
					{"evidenceLX" :"图片","evidencename" :"犯人集会","depart" :"四监","uploadTime" :"2017-12-7"},
					{"evidenceLX" :"视频","evidencename" :"犯人打架","depart" :"五监","uploadTime" :"2017-12-7"},
					{"evidenceLX" :"图片","evidencename" :"执行民警脱岗","depart" :"六监","uploadTime" :"2017-12-6"},
					{"evidenceLX" :"音频","evidencename" :"犯人集会","depart" :"七监","uploadTime" :"2017-12-6"},
					{"evidenceLX" :"图片","evidencename" :"执行民警脱岗","depart" :"二监","uploadTime" :"2017-12-6"},
					{"evidenceLX" :"音频","evidencename" :"犯人集会","depart" :"四监","uploadTime" :"2017-12-5"},
					{"evidenceLX" :"视频","evidencename" :"犯人打架","depart" :"五监","uploadTime" :"2017-12-5"},
					{"evidenceLX" :"图片","evidencename" :"执行民警脱岗","depart" :"六监","uploadTime" :"2017-12-4"},
					{"evidenceLX" :"音频","evidencename" :"犯人集会","depart" :"七监","uploadTime" :"2017-12-4"}],
					"total" : '15'
				}
		},
		methods : {

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
			pageList : [ 20, 40, 60, 80, 100 ],
			pageSize : 20,
			columns : [ [ {
				title : '证据类型',
				field : 'evidenceLX',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}, {
				title : '证据名称',
				field : 'evidencename',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}, {
				title : '所属单位',
				field : 'depart',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}, {
				title : '上传时间',
				field : 'uploadTime',
				align : 'center',
				valign : 'middle',
				width : '10%'
			}] ],
			onDblClickRow : function(row, $element) {
				dialog.open({
					targetId : 'evidence_panel',
					title : '证据详情',
					top : 5,
					w : 96,
					h : 90
				});
				var url = "evidence_xq.html";
				$('div#evidence_panel').find('iframe#contentHTML').show();
				$('div#evidence_panel').find('iframe#contentHTML').attr('src',
						url);
			}
		});
		table.method('load', model.list);
	}


	
	try{
		getEvidenceBar();
		getEvidencePie();
		initTable();
		clickEvent();
	}catch(e){
		console.log('加载失败');
	}
})