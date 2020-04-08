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
	var model = new vue({
		el:'#znSearch',
		data:{
			list1:[{"num":"3302013155","prisonname":"李兴发","birth":"1983-03-13","sex":"男","education":"高中","jiguan":"河北省 广宗县","address":"河北省 广宗县 北塘疃乡前旧店村5队395号","zuiming":"合同诈骗","xingqi":"10年4月","xingqiqiri":"2013-04-02","xingqizhiri":"2023-08-01","rujianriqi":"2014-11-04","jianguan":"预进级","shishi":"","minzu":"汉族","zhuangtai":"在监","jianqu":"三监区一分监区","multicrime":"主犯"}],
			list2:[{"key":"1","name":"社会关系","objcount":57},{"key":"2","name":"警囚关系","objcount":1902},{"key":"3","name":"囚囚关系","objcount":3},{"key":"4","name":"健康状况","objcount":0},{"key":"5","name":"购物消费","objcount":39}],
			list3:[{"po_name":"严海彪","objcount":1},{"po_name":"严海彪","objcount":21},{"po_name":"严海彪","objcount":1},{"po_name":"任辉","objcount":17},{"po_name":"任辉","objcount":4},{"po_name":"何冲","objcount":187},{"po_name":"何冲","objcount":1},{"po_name":"何瑜沁","objcount":1},{"po_name":"余赟杰","objcount":12},{"po_name":"俞群","objcount":1},{"po_name":"俞群","objcount":2},{"po_name":"倪佳伟","objcount":185},{"po_name":"刘国均","objcount":2},{"po_name":"吴前进","objcount":169},{"po_name":"吴前进","objcount":18},{"po_name":"康琦","objcount":1},{"po_name":"张佳铭","objcount":101},{"po_name":"方卫","objcount":79},{"po_name":"方卫","objcount":2},{"po_name":"方卫平","objcount":155},{"po_name":"施培建","objcount":1},{"po_name":"施培建","objcount":1},{"po_name":"杨国鹏","objcount":89},{"po_name":"杨家楼","objcount":145},{"po_name":"杨家楼","objcount":4},{"po_name":"杨淇凯","objcount":167},{"po_name":"杨淇凯","objcount":17},{"po_name":"杨淇凯","objcount":3},{"po_name":"汪骁男","objcount":2},{"po_name":"沈卿","objcount":181},{"po_name":"沈卿","objcount":4},{"po_name":"祝华彪","objcount":6},{"po_name":"罗煜定","objcount":96},{"po_name":"邵江伟","objcount":115},{"po_name":"郑建锋","objcount":1},{"po_name":"郑涛","objcount":1},{"po_name":"郑科峰","objcount":1},{"po_name":"郑科峰","objcount":10},{"po_name":"金跃","objcount":1},{"po_name":"陈坚","objcount":3},{"po_name":"陈坚","objcount":1},{"po_name":"陈坚","objcount":92},{"po_name":"麻利滨","objcount":1}],
			list4:[{"person_relation":"妻子","objcount":39},{"person_relation":"爸爸","objcount":18}],
			list5:[{"involve_name":"李兴发","objcount":3}],
			list6:[{"good_type":"零食小吃","objcount":10},{"good_type":"调味品","objcount":6},{"good_type":"清洁护理品","objcount":6},{"good_type":"面及制品","objcount":4},{"good_type":"饮料","objcount":3},{"good_type":"真空包装食品","objcount":3},{"good_type":"早餐冲调","objcount":2},{"good_type":"饼干","objcount":2},{"good_type":"生活用纸","objcount":1},{"good_type":"茶叶咖啡冲调","objcount":1},{"good_type":"家居小用品","objcount":1}],
			
			list7:[{"pr_name":"李兴发","area_sub_name":"三监区一分监区","person_name":"李保臣","person_relation":"爸爸","phone_numver":"018633456803","start_time":"2017-12-03 08:46:16","end_time":"2017-12-03 08:51:15","time_long":"299"},{"pr_name":"李兴发","area_sub_name":"三监区一分监区","person_name":"李保臣","person_relation":"爸爸","phone_numver":"018633456803","start_time":"2017-11-05 10:13:28","end_time":"2017-11-05 10:18:13","time_long":"285"},{"pr_name":"李兴发","area_sub_name":"三监区一分监区","person_name":"李保臣","person_relation":"爸爸","phone_numver":"018633456803","start_time":"2017-09-03 20:18:58","end_time":"2017-09-03 20:23:56","time_long":"298"},{"pr_name":"李兴发","area_sub_name":"三监区一分监区","person_name":"李保臣","person_relation":"爸爸","phone_numver":"018633456803","start_time":"2017-08-20 14:00:02","end_time":"2017-08-20 14:05:01","time_long":"299"},{"pr_name":"李兴发","area_sub_name":"三监区一分监区","person_name":"李保臣","person_relation":"爸爸","phone_numver":"018633456803","start_time":"2017-08-06 12:39:45","end_time":"2017-08-06 12:44:44","time_long":"299"},{"pr_name":"李兴发","area_sub_name":"三监区一分监区","person_name":"邢玲玲","person_relation":"妻子","phone_numver":"015631164620","start_time":"2015-10-01 10:40:22","end_time":"2015-10-01 10:45:21","time_long":"299"},{"pr_name":"李兴发","area_sub_name":"三监区一分监区","person_name":"邢玲玲","person_relation":"妻子","phone_numver":"015631164620","start_time":"2015-10-01 10:39:16","end_time":"2015-10-01 10:39:58","time_long":"42"},{"pr_name":"李兴发","area_sub_name":"三监区一分监区","person_name":"邢玲玲","person_relation":"妻子","phone_numver":"015631164620","start_time":"2015-09-03 15:18:11","end_time":"2015-09-03 15:23:10","time_long":"299"},{"pr_name":"李兴发","area_sub_name":"三监区一分监区","person_name":"邢玲玲","person_relation":"妻子","phone_numver":"015631164620","start_time":"2015-09-03 15:17:22","end_time":"2015-09-03 15:17:25","time_long":"3"},{"pr_name":"李兴发","area_sub_name":"三监区一分监区","person_name":"邢玲玲","person_relation":"妻子","phone_numver":"015631164620","start_time":"2015-06-20 10:18:44","end_time":"2015-06-20 10:23:43","time_long":"299"},{"pr_name":"李兴发","area_sub_name":"三监区一分监区","person_name":"邢玲玲","person_relation":"妻子","phone_numver":"015631164620","start_time":"2015-05-01 11:40:24","end_time":"2015-05-01 11:45:22","time_long":"298"},{"pr_name":"李兴发","area_sub_name":"三监区一分监区","person_name":"邢玲玲","person_relation":"妻子","phone_numver":"015631164620","start_time":"2015-03-08 08:51:09","end_time":"2015-03-08 08:56:09","time_long":"300"}],
			list8:[{"pr_name":"李兴发","update_time":"2017-05-05 20:11:09","account_type":"A汇款账户","good_name":"088祖名香逗卷","good_type":"零食小吃","shopping_num":5,"good_sale_price":"4.9000","shopping_state":"已确认"},{"pr_name":"李兴发","update_time":"2017-05-05 20:11:09","account_type":"A汇款账户","good_name":"104金锣 特级王中王","good_type":"零食小吃","shopping_num":3,"good_sale_price":"14.2000","shopping_state":"已确认"},{"pr_name":"李兴发","update_time":"2017-05-05 20:11:09","account_type":"A汇款账户","good_name":"130乌江三榨鲜榨菜丝","good_type":"零食小吃","shopping_num":5,"good_sale_price":"2.5000","shopping_state":"已确认"},{"pr_name":"李兴发","update_time":"2017-05-05 20:11:09","account_type":"A汇款账户","good_name":"156老爸豆腐干（多口味）","good_type":"零食小吃","shopping_num":5,"good_sale_price":"5.3000","shopping_state":"已确认"},{"pr_name":"李兴发","update_time":"2017-03-06 19:43:33","account_type":"A汇款账户","good_name":"136绍兴特大咸鸭蛋","good_type":"零食小吃","shopping_num":20,"good_sale_price":"1.8000","shopping_state":"已退回"},{"pr_name":"李兴发","update_time":"2017-03-06 19:43:33","account_type":"A汇款账户","good_name":"042阿香婆豆香锅巴麻辣味","good_type":"零食小吃","shopping_num":5,"good_sale_price":"3.6000","shopping_state":"已退回"},{"pr_name":"李兴发","update_time":"2017-03-06 19:43:33","account_type":"A汇款账户","good_name":"130乌江三榨鲜榨菜丝","good_type":"零食小吃","shopping_num":5,"good_sale_price":"2.5000","shopping_state":"已退回"},{"pr_name":"李兴发","update_time":"2016-12-21 18:59:22","account_type":"A汇款账户","good_name":"042阿香婆豆香锅巴麻辣味","good_type":"零食小吃","shopping_num":5,"good_sale_price":"3.6000","shopping_state":"已退回"},{"pr_name":"李兴发","update_time":"2016-12-21 18:59:22","account_type":"B津贴账户","good_name":"156老爸豆腐干（多口味）","good_type":"零食小吃","shopping_num":5,"good_sale_price":"5.3000","shopping_state":"已退回"},{"pr_name":"李兴发","update_time":"2016-12-21 18:59:22","account_type":"B津贴账户","good_name":"091华味亨 煮瓜子","good_type":"零食小吃","shopping_num":3,"good_sale_price":"7.9000","shopping_state":"已退回"}],
			list9:[{"create_time":"2017-05-23 19:48:28","po_name":"杨淇凯","pr_name":"李兴发","area_name":"三监区一分监区","info_desc":"分监区（监区）应引起注意的问题；罪犯讨论的热点话题、提出的合理化意见及建议","info_degree":"正常","node_name":"完毕","involve_name":"李兴发"},{"create_time":"2017-04-29 08:22:09","po_name":"杨淇凯","pr_name":"李兴发","area_name":"三监区一分监区","info_desc":"本监舍（生产线）罪犯遵规守纪情况（包括学习、劳动、休息期间的表现）；违规被教育、处理后的表现情况","info_degree":"正常","node_name":"完毕","involve_name":"李兴发"},{"create_time":"2017-04-29 07:58:29","po_name":"杨淇凯","pr_name":"李兴发","area_name":"三监区一分监区","info_desc":"本监舍（生产线）罪犯遵规守纪情况（包括学习、劳动、休息期间的表现）；违规被教育、处理后的表现情况","info_degree":"正常","node_name":"完毕","involve_name":"李兴发"}],
			list10 : [ {
						"name" : "严海彪",
						"value" : 23,
						'type': '电子点名'
					}, {
						"name" : "任辉",
						"value" : 21,
						'type': '谈话教育'
					}, {
						"name" : "何冲",
						"value" : 188,
						'type': '电子点名'
					}, {
						"name" : "倪佳伟",
						"value" : 185,
						'type': '电子点名'
					}, {
						"name" : "吴前进",
						"value" : 187,
						'type': '电子点名'
					}, {
						"name" : "康琦",
						"value" : 1,
						'type': '就医陪同'
					}, {
						"name" : "张佳铭",
						"value" : 101,
						'type': '谈话教育'
					}, {
						"name" : "方卫",
						"value" : 81,
						'type': '谈话教育'
					}, {
						"name" : "方卫平",
						"value" : 155,
						'type': '电子点名'
					}, {
						"name" : "施培建",
						"value" : 2,
						'type': '就医陪同'
					}, {
						"name" : "杨国鹏",
						"value" : 89,
						'type': '罪犯汇报'
					}, {
						"name" : "杨家楼",
						"value" : 149,
						'type': '电子点名'
					}, {
						"name" : "杨淇凯",
						"value" : 187,
						'type': '罪犯汇报'
					}]
	
	
		},
		methods:{
			searchPrison:function(){
				var key = $("#inputKey").val();
				if(key){
					searchPrisoner(key);
				}else{
					layer.msg('请输入罪犯编号或者罪犯姓名！');
				}
			}
		}
	})
	var mainChart = null;
	var mainChartOption = {};
	var prisonPie = null;
	var prisonPieOption = {};
	var loadId = 0;

	//查询罪犯信息
	function searchPrisoner(key){
		var data = model.list1;
		loadPrisoner(data[0]);
	}

	//加载对象所关联的记录
	function loadPrisoner(data){
		if(!data){
			layer.msg("查无此罪犯信息！");
			return;
		}
		var prImg = document.getElementById('prImg');
		prImg.src = '../img/3302013155.jpg';
		loadBaseInfo(data);
		searchRecord(data.num,data.prisonname);
	}
	

	//搜索罪犯记录
	function searchRecord(id,name){
		var data = model.list2;
		loadPrisonGraph(data,name,id);
		loadPrisonerPie(data,name,id);
	}
	
	
	//加载罪犯记录PIE
	function loadPrisonerPie(data,prName,prNo){
		getPrisonPie();
		var array = new Array();
		var array1 = new Array();
		var namex = new Array();
		for(var i =0;i<data.length;i++){
			if(data[i].objcount > 0){
				namex.push(data[i].name)
				array1.push(data[i].key);
				array.push({"name":data[i].name,"value": data[i].objcount});
			}
		}
		prisonPie.setOption({
			title : {
				text : prName,
				subtext : '分析研判'
			},
			legend : {
				data : namex
			},
			series : [{
				data : array
			}]
		});
	}

	//罪犯基础信息
	function loadBaseInfo(data){
		$("#prisonerTitle").empty();
		var titles = new Array();
		titles.push('<tr><th colspan="2"><span>',data.prisonname,'</span> 基础信息</th></tr>');
		$("#prisonerTitle").append(titles.join(''));
		var array = new Array();
		array.push({'name':'罪犯编号','value':data.num});
		array.push({'name':'罪犯姓名','value':data.prisonname});
		array.push({'name':'所属单位','value':data.jianqu});
		array.push({'name':'民族','value':data.minzu});
		array.push({'name':'性别','value':data.sex});
		array.push({'name':'出生日期','value':data.birth});
		array.push({'name':'籍贯','value':data.jiguan});
		array.push({'name':'所犯罪名','value':data.zuiming});
		array.push({'name':'监管等级','value':data.jianguan});
		array.push({'name':'刑期','value':data.xingqi});
		baseInfoTab(array);
	}
	
	function baseInfoTab(data){
		$('#prisonerBase').empty();
		$('#prisonerBase').append('<table id="table"></table>');
		table.init("table",{
			request: {params:' ',url:' '},
			showColumns: false,
			pagination :false,
			data:data,
			columns: [[
				{
	                title: '标题',
	                field: 'name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '内容',
	                field: 'value',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]]
		});
	}


	//加载罪犯关系图数据
	function loadPrisonGraph(data,prName,prNo){
		getMainChart();
		var keys = new Array();
		var namex = new Array();
		var categories = new Array();
		var datas = new Array();
		var prImg = document.getElementById('prImg').src;
		datas.push({'name': prName,'symbol': 'image://'+prImg,'symbolSize': [90,120]});
		var links = new Array();
		var n = 0;
		for (var i =0;i<data.length;i++){
			if(data[i].objcount > 0){
				keys.push(data[i].key);
				namex.push(data[i].name);
				categories.push({'name': data[i].name,'itemStyle': {'normal': { 'color': colors[n]}}});
				datas.push({'name': data[i].name,'category': n,'draggable': true,'value':data[i].objcount,'itemStyle': {'normal': {'label': {'formatter': '{c}'}}}});
				links.push({'source': prName,'target': data[i].name,'value': data[i].name,'lineStyle': {'normal': {'color': colors[n],'curveness': 0}},'label': {'normal': {'formatter': '{c}','textStyle': {'color': colors[n]}}}});
				n++;
			}
		}
		mainChart.setOption({
			legend : {data : namex},
			
			series : [ {
				categories : categories,
				data : datas,
				links : links
				
			}
		]
		});
		mainChart.on('click',function(param){
			var name = param.name;
			var num = keys[param.dataIndex-1];
			if(!num){
				num = 0;
			}
			chooseNum(parseInt(num),prNo,prName,name);
		});
	}

	//罪犯记录关系图点击事件
	function chooseNum(num,prNo,prName,title){
		switch(num){
		case 0:
			dialog.open({targetId: 'prisoner_panel', title: '罪犯详情',top:5, w: 96, h: 90});
       	 	var url = "../prisoner/prisonDtls.html";
       	 	$('div#prisoner_panel').find('iframe#contentHTML').show();
       	 	$('div#prisoner_panel').find('iframe#contentHTML').attr('src',url);
       	 
			break;
		case 1://社会关系 
	
			qryPhoneList(prNo,prName,title,num);
			break;
		case 2://警囚关系
		
			qryPrisonPoliceList(prNo,prName,title,num);
			break;
		case 3://囚囚关系
		
			qryPrisonPrisonList(prNo,prName,title,num);
			break;
		case 4://健康状况
			break;
		case 5://购物消费
		
			qryShoppingList(prNo,prName,title,num);
			break;
		}
	}
	
	
	var colors = ['#009800','#4592FF','#FF4444','#9E9E9E','#A64DFF','#C46200','#FF55AA','#C6C600','#1D928C','#004800','#A5B54A','#730039'];

	//mainChart图表模型
	function getMainChart(){
		mainChart = echarts.init(document.getElementById('mainChart'));
		mainChartOption = {
		    tooltip: {
		        show: false
		    },
		    legend: {
		        x: "center",
		        data: [],
		        textStyle: {
		            color: '#fff'
		        }
		    },
		    animation: false,
		    series: [{
		        categories: [],
		        type: 'graph',
		        layout: 'force',
		        symbol: "circle",
		        symbolSize: 50,
		        roam: true, //禁止用鼠标滚轮缩小放大效果
		        edgeSymbol: ['circle', 'arrow'],
		        edgeSymbolSize: [0, 10],
		        // 连接线上的文字
		        focusNodeAdjacency: true, //划过只显示对应关系
		        edgeLabel: {
		            normal: {
		                show: true,
		                textStyle: {
		                    fontSize: 20
		                },
		                formatter: "{c}"
		            }
		        },
		        lineStyle: {
		            normal: {
		                opacity: 1,
		                width: 2,
		                curveness: 2
		            }
		        },
		        // 圆圈内的文字
		        label: {
		            normal: {
		                show: true
		            }
		        },
		        force: {
		            repulsion: 5000
		        },
		        data: [],
		        links: []
		    }]
		};
		mainChart.setOption(mainChartOption);
	}


	function getPrisonPie(){
		prisonPie = echarts.init(document.getElementById('prisonPie'));

		//指定图表的配置项和数据
		prisonPieOption = {
				color: ['#c487ee', '#deb140', '#6f81da','#00ffb4',
						'#009800',
		                '#4592FF',
		                '#FF4444',
		                '#9E9E9E',
		                '#A64DFF',
		                '#DECF18',
		                '#FF55AA',
		                '#7B00F7',
		                '#FF2F97',
		                '#004000',
		                '#944949',
		                '#EAEA00'
		                ],
		    title:{
		    	text:'',
		    	x:'center',
		    	y:'center',
		    	subtext:'',
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
			legend : {
				show:false,
				orient: 'vertical',
		   		x: 'right',
		   		align:'left',
		   		itemWidth:12,
		   		itemHight:12,
		   		data : [],
		   		textStyle: {
		       	color: '#fff'
		   		}
			},
			series : [{
			    name: '记录搜索',
			    type: 'pie',
			    radius: ['50%', '80%'],
//	 		    center: ['35%','50%'],
			    avoidLabelOverlab: false,
			    label: {
			    	normal:{
			    		position : 'inner',
			    		formatter:function(param){
			    			if(param.percent > 2){
			    				return param.name;
			    			}else{
			    				return '';
			    			}
			    		},
			    		textStyle:{
			    			color:'#fff',
			    			fontSize:12
			    		}
			    	}
			    },
			    labelLine: {
			    	normal: {
			    		show:false
			    	}
			    },
			    data: []
			}]
		};
		prisonPie.setOption(prisonPieOption);
	}

	/**
	 * 公共圆饼分析图
	 * @param namex 
	 * @param arrayKey 
	 * @param arrayDate
	 * @param prNo
	 * @param prName
	 * @param title
	 */
	function recordPies(namex,arrayKey,arrayDate,prNo,prName,title,type){
		getPrisonPie();
		prisonPie.setOption({
			title : {
				text : prName,
				subtext : title
			},
			legend : {
				data : namex
			},
			series : [ {
				data : arrayDate
			}]
		});
	
	}

	
	function unionData(array){
		array = array || [];
		var tmp = {};
		for(var i = 0;i <array.length;i++){
			var obj = array[i];
			if(obj.po_name in tmp){
				tmp[obj.po_name].objcount += obj.objcount;
			}else{
				tmp[obj.po_name] = obj;
			}
		}
		
		var result = [];
		for(var key in tmp){
			result.push(tmp[key]);
		}
		
		return result;
	}
	
	
	/**
	*警囚关系分析
	*/
	function qryPrisonPoliceList(prNo,prName,title,type){
		var data = model.list3
		var newData = unionData(data);
		var arrayDate = new Array();
		var arrayKey = new Array();
		var namex = new Array();
		for(var i =0;i<newData.length;i++){
			if(newData[i].po_name){
				namex.push(newData[i].po_name);
				arrayKey.push(newData[i].po_name);
				arrayDate.push({"name":newData[i].po_name,"value": newData[i].objcount});
			}
			
		}
		recordPies(namex,arrayKey,arrayDate,prNo,prName,title,type);
		
		console.log(JSON.stringify(arrayDate));
		
		$("#prisonerTitle").empty();
		var titles = new Array();
		titles.push('<tr><th colspan="2"><span>',prName,' </span>',title,'信息</th></tr>');
		$("#prisonerTitle").append(titles.join(''));
		tab4();
	}


	function tab4(){
		$('#prisonerBase').empty();
		$('#prisonerBase').append('<table id="table"></table>');
		table.init("table",{
			request: {params:' ',url:' '},
			showColumns: false,
			pagination :false,
			data:model.list10,
			columns: [[
				{
	                title: '类型',
	                field: 'type',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '姓名',
	                field: 'name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '次数',
	                field: 'value',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]]
		});
	}
	


	/**
	 * 社会关系分析
	 */
	function qryPhoneList(prNo,prName,title,type){
		var data = model.list4;
		var list = new Array();
		var arrayDate = new Array();
		var arrayKey = new Array();
		var namex = new Array();
		for(var i =0;i<data.length;i++){
			namex.push(data[i].person_relation);
			arrayKey.push(data[i].person_relation);
			arrayDate.push({"name":data[i].person_relation,"value": data[i].objcount});
		}
		recordPies(namex,arrayKey,arrayDate,prNo,prName,title,type);
		
		$("#prisonerTitle").empty();
		var titles = new Array();
		titles.push('<tr><th colspan="2"><span>',prName,' </span>',title,'信息</th></tr>');
		$("#prisonerTitle").append(titles.join(''));
		
		tab1();
	
	}
	
	function tab1(){
		$('#prisonerBase').empty();
		$('#prisonerBase').append('<table id="table"></table>');
		table.init("table",{
			request: {params:' ',url:' '},
			showColumns: false,
			pagination :false,
			data:model.list7,
			columns: [[
				{
	                title: '关系',
	                field: 'person_relation',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '姓名',
	                field: 'person_name',
	                align: 'center',
	                valign: 'middle'
	            },{
	                title: '时间',
	                field: 'start_time',
	                align: 'center',
	                valign: 'middle'
	            }
	         ]]
		});
	}
	
	
	/**
	* 囚囚关系分析
	*/
	function qryPrisonPrisonList(prNo,prName,title,type){
		var data = model.list5;
		var arrayDate = new Array();
		var arrayKey = new Array();
		var namex = new Array();
		for(var i =0;i<data.length;i++){
			namex.push(data[i].involve_name);
			arrayKey.push(data[i].involve_name);
			arrayDate.push({"name":data[i].involve_name,"value": data[i].objcount});
		}
		recordPies(namex,arrayKey,arrayDate,prNo,prName,title,type);
		
		$("#prisonerTitle").empty();
		var titles = new Array();
		titles.push('<tr><th colspan="2"><span>',prName,' </span>',title,'信息</th></tr>');
		titles.push('<tr><th>汇报罪犯</th><th>汇报次数</th></tr>');
		$("#prisonerTitle").append(titles.join(''));
		
		tab2();
	}

	function tab2(){
		$('#prisonerBase').empty();
		$('#prisonerBase').append('<table id="table"></table>');
		table.init("table",{
			request: {params:' ',url:' '},
			showColumns: false,
			pagination :false,
			data:model.list9,
			columns: [[
				{
	                title: '内容',
	                field: 'info_desc',
	                align: 'center',
	                valign: 'middle',
	                width:'60%'
	            },{
	                title: '时间',
	                field: 'create_time',
	                align: 'center',
	                valign: 'middle',
	                width:'40%'
	            }
	         ]]
		});
	}
	
	
	/**
	*罪犯购物分析
	*/
	function qryShoppingList(prNo,prName,title,type){
		var data = model.list6;
		var arrayDate = new Array();
		var arrayKey = new Array();
		var namex = new Array();
		for(var i =0;i<data.length;i++){
			namex.push(data[i].good_type);
			arrayKey.push(data[i].good_type);
			arrayDate.push({"name":data[i].good_type,"value": data[i].objcount});
		}
		recordPies(namex,arrayKey,arrayDate,prNo,prName,title,type);

		$("#prisonerTitle").empty();
		var titles = new Array();
		titles.push('<tr><th colspan="2"><span>',prName,' </span>',title,'信息</th></tr>');
		$("#prisonerTitle").append(titles.join(''));
		
		tab3();
	}
	
	
	function tab3(){
		$('#prisonerBase').empty();
		$('#prisonerBase').append('<table id="table"></table>');
		table.init("table",{
			request: {params:' ',url:' '},
			showColumns: false,
			pagination :false,
			data:model.list8,
			columns: [[
				{
	                title: '物品名称',
	                field: 'good_name',
	                align: 'center',
	                valign: 'middle',
	                width:'60%'
	            },{
	                title: '类型',
	                field: 'good_type',
	                align: 'center',
	                valign: 'middle',
	                width:'30%'
	            },{
	                title: '数量',
	                field: 'shopping_num',
	                align: 'center',
	                valign: 'middle',
	                width:'10%'
	            }
	         ]]
		});
	}
	
	try {
		searchPrisoner('3302013155');
		$(window).resize(function(){
			mainChart.resize();
			prisonPie.resize();
		});
	} catch (e) {
		console.log("初始化数据失败!");
	}
})