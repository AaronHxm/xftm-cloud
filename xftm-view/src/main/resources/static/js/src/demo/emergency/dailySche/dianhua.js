define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	//var tip = require('frm/message');
	var tree = require('frm/treeSelect');
	var treeUtil = require('frm/treeUtil');
	var dialog = require('frm/dialog');

	var zTree = require('ztree');
	
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#vDetail',
		data:{
			menuListThree:[
							 {'id':'100101','name':'李洪明','url':'15476576789'},
							 {'id':'100101','name':'一画面','url':'13467865674'},
							 {'id':'100101','name':'一画面','url':'18390875772'},
							 {'id':'100101','name':'一画面','url':'16534579976'},
							 {'id':'100101','name':'一画面','url':'16578990076'},
							 {'id':'100101','name':'一画面','url':'17643678976'},
							
				             
							 
						],
						
			thisAlarm:{
				 'id':'',
				 'name':'',
				 'phon':'',
					 'name1':''
			},			
			prsnName:[
			         {'name':'第二监狱'},
			         {'name':'长湖监狱'},
			         {'name':'临海监狱'},
			         {'name':'之江监狱'},
			         {'name':'西郊监狱'},
			         {'name':'黄湖监狱'},
			         {'name':'望春监狱'},
			         {'name':'高桥监狱'},
			         {'name':'湖州监狱'},
			         {'name':'第一监狱'},
				         ],
		    openCutObj:{
		    	id: '',
		    	dw: '',
		    	sj: ''
		    },
		    videoArea:{
		    	name:'',
		    	phon:'',
		    	name1:'',
		    },
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
		    treeData:[
                      {"tid":'1',"id":'1', "pId":'0', "name":"第二监狱","phon":"15476576789",icon:"img/prison.png"},
                      {"tid":'1','id':'11','pId':'1','name':'指挥中心',"phon":"15476576783",open:true},
                      {"tid":'1','pId':'11','name':'指挥中心大厅',"phon":"1547645622",open:true},
                      {"tid":'1','id':'12','pId':'1','name':'一监区',"phon":"15476534657",open:true},
                      {"tid":'1','pId':'12','name':'李某某',"phon":"123454466",open:true},
                      {"tid":'1','pId':'12','name':'李某某',"phon":"1444677877",open:true},
                      {"tid":'1','id':'13','pId':'1','name':'二监区',"phon":"167854322",open:true},
                      {"tid":'1','pId':'13','name':'唐某某',"phon":"1865333545",open:true},
                      {"tid":'1','pId':'13','name':'照某某',"phon":"17645454678",open:true},
                      {"tid":'1','id':'14','pId':'1','name':'三监区',"phon":"16445776888",open:true},
                      {"tid":'1','pId':'14','name':'彭某某',"phon":"1574656556",open:true},
                      {"tid":'1','pId':'14','name':'郝某某',"phon":"15476576789",open:true},
		              
		              {"tid":'2',"id":'2', "pId":'0', "name":"第四监狱","phon":"15476576789",icon:"img/prison.png"},
		              {"tid":'2','id':'21','pId':'2','name':'指挥中心',"phon":"354657686",open:true},
                      {"tid":'2','pId':'21','name':'指挥中心大厅',"phon":"78545635355",open:true},
                      {"tid":'2','id':'22','pId':'2','name':'一监区',"phon":"766854635",open:true},
                      {"tid":'2','pId':'22','name':'吴某某',"phon":"465844357",open:true},
                      {"tid":'2','pId':'22','name':'张某某',"phon":"576658754",open:true},
                      {"tid":'2','id':'23','pId':'2','name':'二监区',"phon":"4575768575",open:true},
                      {"tid":'2','pId':'23','name':'席某某',"phon":"4756885",open:true},
                      {"tid":'2','pId':'23','name':'龚某某',"phon":"57574564654",open:true},
                      {"tid":'2','id':'24','pId':'2','name':'三监区',"phon":"475768645",open:true},
                      {"tid":'2','pId':'24','name':'李某某',"phon":"1576888544",open:true},
                      {"tid":'2','pId':'24','name':'付某某',"phon":"3685636766",open:true},
		              
                      {"tid":'3','id':'3',"pId":'0','name':"第五监狱","phon":"236767954",icon:"img/prison.png"},
		              {"tid":'3','id':'31','pId':'3','name':'指挥中心',"phon":"1544644676",open:true},
                      {"tid":'3','pId':'31','name':'指挥中心大厅',"phon":"12768344",open:true},
                      {"tid":'3','id':'32','pId':'3','name':'一监区',"phon":"1657847575",open:true},
                      {"tid":'3','pId':'32','name':'朱某某',"phon":"263468764",open:true},
                      {"tid":'3','pId':'32','name':'李某某',"phon":"1234554334",open:true},
                      {"tid":'3','id':'33','pId':'3','name':'二监区',"phon":"165657545",open:true},
                      {"tid":'3','pId':'33','name':'姚某某',"phon":"19656426466",open:true},
                      {"tid":'3','pId':'33','name':'张某某',"phon":"353575665",open:true},
                      {"tid":'3','id':'34','pId':'3','name':'三监区',"phon":"12348744",open:true},
                      {"tid":'3','pId':'34','name':'章某某',"phon":"187634564",open:true},
                      {"tid":'3','pId':'34','name':'黄某某',"phon":"15476576789",open:true},
		    ],
		    
		    
		    search:{
		    	'poAreaName':''
		    },
		    time: 0
		},
		
		methods:{
			openAlarm: function(id){
			
				
				
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
							model.videoArea['name1'] ='第二监狱';
							model.videoArea['name'] = node['name'];
							model.videoArea['phon'] = node['phon'];
						}
						if(node['tid']=='2'){
							model.videoArea['name1'] ='第四监狱';
						model.videoArea['name'] = node['name'];
						model.videoArea['phon'] = node['phon'];
						//model.videoArea['name'] = node['name'];
						
						
						}
						if(node['tid']=='3'){
							model.videoArea['name1'] ='第五监狱';
							model.videoArea['name'] = node['name'];
							model.videoArea['phon'] = node['phon'];
						}
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