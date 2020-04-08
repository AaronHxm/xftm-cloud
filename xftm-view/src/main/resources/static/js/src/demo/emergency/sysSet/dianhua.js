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
	var tId = null;
	var treeContainer;
	var treeContainer1;
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#vDetail',
		data:{
						role:{
							'id':'',
							'tid':'',
							'pid':'',
							'name':'',
							'use':'',
							'seq':'',
							'group':'',
							'rbd_id':'',
							'rbd_crte_user_id':'',
							'rbd_updt_user_id':'',
							
						},
			thisAlarm:{
				 'id':'',
				 'name':'',
					 'name1':''
			},			
		    openCutObj:{
		    	id: '',
		    	dw: '',
		    	sj: ''
		    },
		    videoArea:{
		    	name:'',
		    	phon:'',
		    },
		    treeData:[
                      {"id":'1', "pId":'0', "name":"第二监狱","phon":"15476576789",icon:"img/prison.png",nocheck:false},
                      {'id':'11','pId':'1','name':'指挥中心',"phon":"15476576783",open:true,nocheck:false},
                      {'pId':'11','name':'指挥中心领导',"phon":"1547645622",open:true,nocheck:false},
                      {'pId':'11','name':'指挥中心警员',"phon":"1547645622",open:true,nocheck:false},
                      {'id':'12','pId':'1','name':'狱政部门',"phon":"15476576789",open:true,nocheck:false},
                      {'pId':'12','name':'狱政部门领导',"phon":"15476576789",open:true,nocheck:false},
                      {'pId':'12','name':'狱政部门警员',"phon":"15476576789",open:true,nocheck:false},
                      {'id':'13','pId':'1','name':'特警队',"phon":"15476576789",open:true,nocheck:false},
                      {'pId':'13','name':'特警队领导',"phon":"15476576789",open:true,nocheck:false},
                      {'pId':'13','name':'特警队警员',"phon":"15476576789",open:true,nocheck:false},
                      {'id':'14','pId':'1','name':'大数据管理部门',"phon":"15476576789",open:true,nocheck:false},
                      {'pId':'14','name':'大数据管理员',"phon":"15476576789",open:true,nocheck:false},
                      {'pId':'14','name':'大数据维护人员',"phon":"15476576789",open:true,nocheck:false},
		              
		              {"id":'2', "pId":'0', "name":"第四监狱","phon":"15476576789",icon:"img/prison.png"},
		              {'id':'21','pId':'2','name':'指挥中心',"phon":"15476576789",open:true},
                      {'pId':'21','name':'指挥中心领导',"phon":"15476576789",open:true},
                      {'pId':'21','name':'指挥中心警员',"phon":"1547645622",open:true},
                      {'id':'22','pId':'2','name':'狱政部门',"phon":"15476576789",open:true},
                      {'pId':'22','name':'狱政部门领导',"phon":"15476576789",open:true},
                      {'pId':'22','name':'狱政部门警员',"phon":"15476576789",open:true},
                      {'id':'23','pId':'2','name':'特警队',"phon":"15476576789",open:true},
                      {'pId':'23','name':'特警队领导',"phon":"15476576789",open:true},
                      {'pId':'23','name':'特警队警员',"phon":"15476576789",open:true},
                      {'id':'24','pId':'2','name':'大数据管理部门',"phon":"15476576789",open:true},
                      {'pId':'24','name':'大数据管理员',"phon":"15476576789",open:true},
                      {'pId':'24','name':'大数据维护人员',"phon":"15476576789",open:true},
		              
		              {'id':'3',"pId":'0','name':"第五监狱","phon":"15476576789",icon:"img/prison.png"},
		              {'id':'31','pId':'3','name':'指挥中心',"phon":"15476576789",open:true},
                      {'pId':'31','name':'指挥中心领导',"phon":"15476576789",open:true},
                      {'pId':'31','name':'指挥中心警员',"phon":"1547645622",open:true},
                      {'id':'32','pId':'3','name':'狱政部门',"phon":"15476576789",open:true},
                      {'pId':'32','name':'狱政部门领导',"phon":"15476576789",open:true},
                      {'pId':'32','name':'狱政部门警员',"phon":"15476576789",open:true},
                      {'id':'33','pId':'3','name':'特警队',"phon":"15476576789",open:true},
                      {'pId':'33','name':'特警队领导',"phon":"15476576789",open:true},
                      {'pId':'33','name':'特警队警员',"phon":"15476576789",open:true},
                      {'id':'34','pId':'3','name':'大数据管理部门',"phon":"15476576789",open:true},
                      {'pId':'34','name':'大数据管理员',"phon":"15476576789",open:true},
                      {'pId':'34','name':'大数据维护人员',"phon":"15476576789",open:true},
		    ], 
		    treeData1:[
                {"id":'1', "pId":'0', "name":"信息管理","phon":"15476576789",icon:"img/prison.png",nocheck:false},
                {'id':'11','pId':'1','name':'信息概览',"phon":"15476576783",open:true,nocheck:false},
                {'id':'12','pId':'1','name':'要情日报',"phon":"15476576789",open:true,nocheck:false},
                {'id':'13','pId':'1','name':'信息报备',"phon":"15476576789",open:true,nocheck:false},
                {'id':'14','pId':'1','name':'罪犯信息',"phon":"15476576789",open:true,nocheck:false},
                {'id':'15','pId':'1','name':'民警信息',"phon":"15476576789",open:true,nocheck:false},
                {'id':'16','pId':'1','name':'信息简报',"phon":"15476576789",open:true,nocheck:false},
                {'id':'17','pId':'1','name':'物防信息',"phon":"15476576789",open:true,nocheck:false},
                {'id':'18','pId':'1','name':'联勤信息',"phon":"15476576789",open:true,nocheck:false},
	              
	            {"id":'2', "pId":'0', "name":"指挥协调","phon":"15476576789",icon:"img/prison.png"},
	            {'id':'21','pId':'2','name':'接警处警',"phon":"15476576789",open:true},
                {'id':'22','pId':'2','name':'消息推送',"phon":"15476576789",open:true},
                {'id':'23','pId':'2','name':'视频点名',"phon":"15476576789",open:true},
                {'id':'24','pId':'2','name':'安全零报告',"phon":"15476576789",open:true},
                {'id':'25','pId':'2','name':'日常管理',"phon":"15476576789",open:true},
                {'id':'26','pId':'2','name':'资产运维',"phon":"15476576789",open:true},
	              
	              {'id':'3',"pId":'0','name':"视频督查","phon":"15476576789",icon:"img/prison.png"},
	              {'id':'31','pId':'3','name':'督查登记',"phon":"15476576789",open:true},
                {'id':'32','pId':'3','name':'督查审核',"phon":"15476576789",open:true},
                {'id':'33','pId':'3','name':'督查反馈',"phon":"15476576789",open:true},
                {'id':'34','pId':'3','name':'督查跟踪',"phon":"15476576789",open:true},
                
                {"id":'4', "pId":'0', "name":"安全复核","phon":"15476576789",icon:"img/prison.png",nocheck:false},
                {'id':'41','pId':'4','name':'大门进出',"phon":"15476576783",open:true,nocheck:false},
                {'id':'42','pId':'4','name':'围墙周界',"phon":"15476576789",open:true,nocheck:false},
                {'id':'43','pId':'4','name':'其他信息',"phon":"15476576789",open:true,nocheck:false},
                {'id':'44','pId':'4','name':'危品进监',"phon":"15476576789",open:true,nocheck:false},
                {'id':'45','pId':'4','name':'关押信息',"phon":"15476576789",open:true,nocheck:false},
                {'id':'46','pId':'4','name':'门体信息',"phon":"15476576789",open:true,nocheck:false},
                {'id':'47','pId':'4','name':'审批管理',"phon":"15476576789",open:true,nocheck:false},
                
                {"id":'5', "pId":'0', "name":"证据固定","phon":"15476576789",icon:"img/prison.png",nocheck:false},
                {'id':'51','pId':'5','name':'证据固定',"phon":"15476576783",open:true,nocheck:false},
                
                {"id":'6', "pId":'0', "name":"应急冲突","phon":"15476576789",icon:"img/prison.png",nocheck:false},
                {'id':'61','pId':'6','name':'电子地图',"phon":"15476576783",open:true,nocheck:false},
                {'id':'62','pId':'6','name':'日常调度',"phon":"15476576789",open:true,nocheck:false},
                {'id':'63','pId':'6','name':'预案管理',"phon":"15476576789",open:true,nocheck:false},
                {'id':'64','pId':'6','name':'预案执行',"phon":"15476576789",open:true,nocheck:false},
                {'id':'65','pId':'6','name':'预案演练',"phon":"15476576789",open:true,nocheck:false},
                {'id':'66','pId':'6','name':'应急组管理',"phon":"15476576789",open:true,nocheck:false},
                {'id':'67','pId':'6','name':'警车管理',"phon":"15476576789",open:true,nocheck:false},
                {'id':'68','pId':'6','name':'系统设置',"phon":"15476576789",open:true,nocheck:false},
                
                {'id':'7',"pId":'0','name':"指挥中心日常管理","phon":"15476576789",icon:"img/prison.png"},
	              {'id':'71','pId':'7','name':'情况汇报',"phon":"15476576789",open:true},
              {'id':'72','pId':'7','name':'日常管理',"phon":"15476576789",open:true},
              {'id':'73','pId':'7','name':'资产运维',"phon":"15476576789",open:true}
	    ],
		    
		    
		    search:{
		    },
		    time: 0
		},
		
		methods:{
			openAlarm: function(id){
			
				
				
			},
			saveset:function(){
				saveset();
			},
		}
	});
	
	
	
	
	function loadTree(){
		var set={
				view: {dblClickExpand: false,
					   fontCss : {fontsize:38}	
				},
				data: {
					simpleData: {enable: true,idKey: "id",pIdKey: "pId"},
					key:{name:"name"}
				},
				check:{chkStyle:'checkbox',enable:true},
				callback: {
					onDblClick:function(e,ztree,node){
						console.log(JSON.stringify(node));
					},
					onClick:function(e,ztree,node){
						model.role['group']=node.name;
					}
				}
				
				
		};
		treeContainer=$.fn.zTree.init($("#tree"), set,model.treeData);
				
	}
	function saveset(){
		tip.alert('已保存');
	}
	function loadTree1(){
		var set={
				view: {dblClickExpand: false,
					   fontCss : {fontsize:38}	
				},
				data: {
					simpleData: {enable: true,idKey: "id",pIdKey: "pId"},
					key:{name:"name"}
				},
				check:{chkStyle:'checkbox',enable:true},
				callback: {
					
				}
				
				
		};
		treeContainer1=$.fn.zTree.init($("#tree1"), set,model.treeData1);
				
	}
	
	
	
	
	try {
	
	    loadTree();
	    loadTree1();
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});