define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var tree = require('frm/treeSelect');
	var treeUtil = require('frm/treeUtil');
	
	var zTree = require('ztree');
	
	
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#duijiangji',
		data:{
			

									
			xunH5 : [ {
				'name' : '监舍201',
			}, {
				'name' : '监舍202',
			}, {
				'name' : '监舍203',
			},

			],

			xunH4 : [ {
				'name' : '生产区',
			}, {
				'name' : '仓库',
			}, 

			],

			xunH3 : [ {
				'name' : '1号病房',
			}, {
				'name' : '2号病房',
			},

			],
			xunH2 : [ {
				'name' : '指挥中心大厅',
			},],
			                  
		   
		    videoArea:{
		    	name:'',
		    	name1:'',
		    	name2:'',
		    	//'name':'',
		    	
		    },
		    treeData:[
						{"id":'1', "pId":'0', "name":"第二监狱",icon:"img/prison.png"},
						{"tid":'2','id':'11','pId':'1','name':'指挥中心',open:true},
						{"tid":'1','pId':'11','name':'指挥中心大厅',open:true},
						{"tid":'3','id':'12','pId':'1','name':'一号厂房',open:true},
						{"tid":'1','pId':'12','name':'生产区',open:true},
						{"tid":'1','pId':'12','name':'仓库',open:true},
						{"tid":'4','id':'13','pId':'1','name':'一号监舍',open:true},
						{"tid":'1','pId':'13','name':'监舍201',open:true},
						{"tid":'1','pId':'13','name':'监舍202',open:true},
						{"tid":'1','pId':'13','name':'监舍203',open:true},
						{"tid":'5','id':'14','pId':'1','name':'监狱医院',open:true},
						{"tid":'1','pId':'14','name':'1号病房',open:true},
						{"tid":'1','pId':'14','name':'2号病房',open:true},
						
						{"id":'2', "pId":'0', "name":"第四监狱",icon:"img/prison.png"},
						{"tid":'2','id':'21','pId':'2','name':'指挥中心',open:true},
						{"tid":'1','pId':'21','name':'指挥中心大厅',open:true},
						{"tid":'3','id':'22','pId':'2','name':'一号厂房',open:true},
						{"tid":'1','pId':'22','name':'生产区',open:true},
						{"tid":'1','pId':'22','name':'仓库',open:true},
						{"tid":'4','id':'23','pId':'2','name':'一号监舍',open:true},
						{"tid":'1','pId':'23','name':'监舍201',open:true},
						{"tid":'1','pId':'23','name':'监舍202',open:true},
						{"tid":'1','pId':'23','name':'监舍203',open:true},
						{"tid":'5','id':'24','pId':'2','name':'监狱医院',open:true},
						{"tid":'1','pId':'24','name':'1号病房',open:true},
						{"tid":'1','pId':'24','name':'2号病房',open:true},
						
						{'id':'3',"pId":'0','name':"第五监狱",icon:"img/prison.png"},
						{"tid":'2','id':'31','pId':'3','name':'指挥中心',open:true},
						{"tid":'1','pId':'31','name':'指挥中心大厅',open:true},
						{"tid":'3','id':'32','pId':'3','name':'一号厂房',open:true},
						{"tid":'1','pId':'32','name':'生产区',open:true},
						{"tid":'1','pId':'32','name':'仓库',open:true},
						{"tid":'4','id':'33','pId':'3','name':'一号监舍',open:true},
						{"tid":'1','pId':'33','name':'监舍201',open:true},
						{"tid":'1','pId':'33','name':'监舍202',open:true},
						{"tid":'1','pId':'33','name':'监舍203',open:true},
						{"tid":'5','id':'34','pId':'3','name':'监狱医院',open:true},
						{"tid":'1','pId':'34','name':'1号病房',open:true},
						{"tid":'1','pId':'34','name':'2号病房',open:true},
		    ],
		    
		    
		    search:{
		    	'poAreaName':''
		    },
		    time: 0
		},
		
		methods:{
			
			openSearchPanel:function(){
				//tip.alert("保存成功...");
				var d = document.getElementById("l1");
				if(d.style.background=="green"){
					d.style.background = "black";
					    
				}else{
					d.style.background ="green";
				}
				
			},
			openSearchPanel1:function(){
			//tip.alert("保存成功...");
				var d = document.getElementById("l2");
				if(d.style.background=="green"){
					d.style.background = "black";
					
				}else{
					d.style.background ="green";
				}
				
			},
			openSearchPanel2:function(){
				//tip.alert("保存成功...");
				var d = document.getElementById("l3");
				if(d.style.background=="green"){
					d.style.background = "black";
					
				}else{
					d.style.background ="green";
				}
				
			},
	  }
	});
	
	
	
	
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
						//console.log(node.name);
						if(node['tid']=='1'){
							
							model.videoArea['name'] = node['name'];
							model.videoArea['name1'] = '';
							model.videoArea['name2'] = '';
							
							
						}
						else if(node['tid']=='2'){
							
						//var videoArea=model.xunH2;
						model.videoArea['name'] = "指挥中心大厅";
						
						model.videoArea['name1'] = '';
						model.videoArea['name2'] = '';
						
						}
						else if(node['tid']=='5'){
							//var videoArea=model.xunH3;
							model.videoArea['name'] = "一号病房";
							model.videoArea['name1'] = "二号病房";
							model.videoArea['name2'] = '';
						}
						else if(node['tid']=='3'){
							//var videoArea=model.xunH4;
							model.videoArea['name'] = "生产区";
							model.videoArea['name1'] = "仓库";
							model.videoArea['name2'] = '';
						}
						else if(node['tid']=='4'){
							//var videoArea=model.xunH5;
							model.videoArea['name'] = "监舍201";
							model.videoArea['name1'] = "监舍202";
							model.videoArea['name2'] = "监舍203";
						}
						/*if(node['tid']=='1'){
							model.videoArea['name1'] ='第二监狱';
							model.videoArea['name'] = node['name'];
							model.videoArea['phon'] = node['phon'];
						}
						if(node['tid']=='2'){
							model.videoArea['name1'] ='第四监狱';
						model.videoArea['name'] = node['name'];
						model.videoArea['phon'] = node['phon'];
						
						
						
						}
						if(node['tid']=='3'){
							model.videoArea['name1'] ='第五监狱';
							model.videoArea['name'] = node['name'];
							model.videoArea['phon'] = node['phon'];
						}
						*/
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
	
		/*model.thisAlarm.id = model.treeData[0].pid;
		model.thisAlarm.name = model.treeData[0].name;
		model.thisAlarm.phon = model.treeData[0].phon;*/
		
	   // loadPrsnName();
	    loadTree();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});