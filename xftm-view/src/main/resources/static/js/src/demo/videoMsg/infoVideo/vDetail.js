define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var tree = require('frm/treeSelect');
	var treeUtil = require('frm/treeUtil');
	var dialog = require('frm/dialog');
	var time = '2017-12-09 08:26:32';
	var zTree = require('ztree');
	var dialog1 = null;
	var dialog2 = null;
	var dialog3 = null;
	var index1 = null;
	var index2 = null;
	var index3 = null;
	var myVar = null;
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#vDetail',
		data:{
			menuListThree:[
							 {'id':'100101','name':'一画面','url':'video/1.mp4'},
				             {'id':'100102','name':'二画面','url':'video/2.mp4'},
				             {'id':'100103','name':'三画面','url':'video/3.mp4'},
				             {'id':'100104','name':'四画面','url':'video/4.mp4'}
						],
			thisAlarm:{
				 'id':'',
				 'name':''
			},			
			prsnName:[
			         {'name':'第二监狱'},
			         {'name':'xx监狱'},
			         {'name':'xx监狱'},
			         {'name':'xx监狱'},
			         {'name':'xx监狱'},
			         {'name':'xx监狱'},
			         {'name':'xx监狱'},
			         {'name':'xx监狱'},
			         {'name':'xx监狱'},
			         {'name':'第一监狱'},
				         ],
		    openCutObj:{
		    	id: '',
		    	dw: '',
		    	sj: ''
		    },
		    videoArea:{
		    	name:'',
		    },
		    treeData:[
                      {"id":'1', "pId":'0', "name":"第二监狱",icon:"img/prison.png"},
                      {'id':'11','pId':'1','name':'指挥中心',open:true},
                      {'pId':'11','name':'指挥中心大厅',open:true},
                      {'id':'12','pId':'1','name':'一号厂房',open:true},
                      {'pId':'12','name':'生产区',open:true},
                      {'pId':'12','name':'仓库',open:true},
                      {'id':'13','pId':'1','name':'一号监舍',open:true},
                      {'pId':'13','name':'洗漱间',open:true},
                      {'pId':'13','name':'卧室',open:true},
                      {'id':'14','pId':'1','name':'监狱医院',open:true},
                      {'pId':'14','name':'1号病房',open:true},
                      {'pId':'14','name':'2号病房',open:true},
		              
		              {"id":'2', "pId":'0', "name":"第四监狱",icon:"img/prison.png"},
		              {'id':'21','pId':'2','name':'指挥中心',open:true},
                      {'pId':'21','name':'指挥中心大厅',open:true},
                      {'id':'22','pId':'2','name':'一号厂房',open:true},
                      {'pId':'22','name':'生产区',open:true},
                      {'pId':'22','name':'仓库',open:true},
                      {'id':'23','pId':'2','name':'一号监舍',open:true},
                      {'pId':'23','name':'洗漱间',open:true},
                      {'pId':'23','name':'卧室',open:true},
                      {'id':'24','pId':'2','name':'监狱医院',open:true},
                      {'pId':'24','name':'1号病房',open:true},
                      {'pId':'24','name':'2号病房',open:true},
		              
		              {'id':'3',"pId":'0','name':"第五监狱",icon:"img/prison.png"},
		              {'id':'31','pId':'3','name':'指挥中心',open:true},
                      {'pId':'31','name':'指挥中心大厅',open:true},
                      {'id':'32','pId':'3','name':'一号厂房',open:true},
                      {'pId':'32','name':'生产区',open:true},
                      {'pId':'32','name':'仓库',open:true},
                      {'id':'33','pId':'3','name':'一号监舍',open:true},
                      {'pId':'33','name':'洗漱间',open:true},
                      {'pId':'33','name':'卧室',open:true},
                      {'id':'34','pId':'3','name':'监狱医院',open:true},
                      {'pId':'34','name':'1号病房',open:true},
                      {'pId':'34','name':'2号病房',open:true},
		    ],
		    
		    
		    search:{
		    	'poAreaName':''
		    },
		    time: 0
		},
		
		methods:{
				//打开截图登记
				openCut:function(item){
					var id = item.id;
					var name = item.name;
					var url = item.url;
					model.openCutObj.id=id;
					dialog1 = dialog.open({targetId:'cut_panel',title:'截图登记',w:"600",h:"450",top:"1%"});
					if(!index1){
						index1 = dialog1.index;
					}
				},
				//打开录像登记
				openCopy:function(item){
					var id = item.id;
					var name = item.name;
					var url = item.url;
					dialog2 = dialog.open({targetId:'copy_panel',title:'录像登记',w:"700",h:"500",top:"1%"});
					if(!index2){
						index2 = dialog2.index;
					}
					myVar=setInterval(function(){model.time++},1000);
				},
				//打开录像登记详情
				openCopyItem:function(){
					clearInterval(myVar);
					dialog.close(index2);
					dialog3 = dialog.open({targetId:'copy_panel_info',title:'录像登记详情',w:"700",h:"400",top:"1%"});
					if(!index3){
						index3 = dialog3.index;
					}
				},
				//提交截图登记
				saveCutImg:function(){
					tip.alert('保存成功！');
					dialog.close(index1);
				},
				//提交录像登记
				saveVideo : function(){
					tip.alert('保存成功');
					dialog.close(index3);
				}
		}
	});
	
	function loadPrsnName(){
		        var data = model.prsnName;
				var setting={
						offSearch: true,
						key:'name',
						diyClass:'conditionslid',
						zindex: 100,
						expand:true,
						check:{
							enable:false,
						},
						path:'../../../libs/ztree/css/zTreeStyle/img/',
						data: {simpleData: {enable: false,pIdKey: "pid"}},
						callback:{
							onClick:function(e,id,node){
								model.search['poAreaName'] = node.name;
							}
						},
						view:{
							fontCss:{color:'white'}
						}
				};
				tree.init("prsnName",setting,data);
				$('#idprsnName').css({'top':'35px','position':'absolute'});
				//搜索
				var timeSearch;
				$("#prsnName").off().keyup(function(){
					var val = this.value;
					clearTimeout(timeSearch);
					timeSearch = setTimeout(function(){
						treeUtil.searchTree(setting.key,val,"reprsnName",data,setting);
					},500)
				});
	}
	
	
	function loadTree(){
		var data = model.treeData;
		var set={
				view: {dblClickExpand: false,
					   fontCss : {fontsize:38}	
				},
				data: {
					simpleData: {enable: true,idKey: "id",pIdKey: "pId"},
					key:{name:"name"}
				},
				callback: {
					onClick: function(event, treeId, node){
						console.log(node.name);
						//model.videoArea['name'] = node['name'];
						
				    	var number1 = Math.round(Math.random()*3 + 1);
				    	var number2 = Math.round(Math.random()*3 + 1);
				    	var number3 = Math.round(Math.random()*3 + 1);
				    	var number4 = Math.round(Math.random()*3 + 1);
						model.menuListThree = [
						 {'id':'100101','name':'一画面','url':'video/'+number1+'.mp4'},
			             {'id':'100102','name':'二画面','url':'video/'+number2+'.mp4'},
			             {'id':'100103','name':'三画面','url':'video/'+number3+'.mp4'},
			             {'id':'100104','name':'四画面','url':'video/'+number4+'.mp4'}
					]
					},
					/*onDblClick:function(e,id,node){
						
						if(node['td_name']=='工具类')return;
						
						var temp=node.getParentNode();
						
						modelUtil.modelData(model.tool,node);
						
						model.tool['tid']=node.tId;
						
						model.tool['pname']=temp?temp['td_name']:'';
						
						model.tool['td_parent_id']=temp?temp['td_id']:'0';
					}*/
				}
		},
		//分组树
				//data.push({'td_id':'-1','td_name':"工具类",icon:"diy/9.png",open:true});
				treeContainer=$.fn.zTree.init($("#tree"), set,data);
				//搜索树
				$("#input").keyup(function(){
					util.searchTree("td_name",this.value,"tree",data,set);
				});
	}
	
	
	
	try {
	
		model.thisAlarm.id = model.menuListThree[0].id;
		model.thisAlarm.name = model.menuListThree[0].name;
		var myVideo = document.getElementsByTagName('video');
		for(var i=0;i<myVideo.length;i++){
			myVideo[i].play();
		}
	    //loadPrsnName();
	    loadTree();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});