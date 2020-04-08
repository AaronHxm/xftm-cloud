define(function(require){

	var piny = require('frm/pinyin');
	
	
	var newData = [];
	return {
		 /**
		  * key：搜索key值
		  * val：搜索key对应的 val
		  * treeId： 树的elid
		  * treeData：树的所有数据（初始化时候的保留数据）
		  * setting（每个页面可能不一样）
		  * isAll	是否开启查询全部节点，true,查询全部，false,只查询最终节点   默认false
		  */
		 searchTree:function(key,val,treeId,treeData,setting,isAll){
			 if(typeof treeId=="string"){
				 treeId='#'+treeId;
			 }
			 var me =this;
			 me.setting = setting;
			 
			 me.idKey = "id";
			 if(me.setting.data.simpleData && me.setting.data.simpleData.idKey){
				 me.idKey = me.setting.data.simpleData.idKey;
			 }
			 
			 me.pidKey = "pid";
			 if(me.setting.data.simpleData && me.setting.data.simpleData.pIdKey){
				 me.pidKey = me.setting.data.simpleData.pIdKey;
			 }

			 newData = [];
			 me.treeData = treeData;
			 
			 if(val.length==0){
				 return $.fn.zTree.init($(treeId),setting,me.treeData);
			 }

			 var searchDatas=[], newNodes = [];
			 var len = treeData?treeData.length:0;
			 var node, nodeVal;
			 for(var i=0;i<len;i++){
				 node = me.treeData[i];
				 nodeVal = node[key];
				 if (nodeVal && me.getNodeDataById(node[me.idKey])==-1 || isAll) {
					 if(nodeVal.indexOf(val) != -1 || piny.convertPinyin(nodeVal).indexOf(val) != -1 || piny.convertFirstPinyin(nodeVal).indexOf(val) != -1){
	 					searchDatas.push(node);
					 }
				 }
			 }

			 var tempSearchDatas = searchDatas;

			 if(isAll && tempSearchDatas.length > 0){
				 for(var u = 0; u < tempSearchDatas.length; u++){
					 for(var k = 0; k < len; k++){
						 var kNode = me.treeData[k];
						 if(tempSearchDatas[u].id == kNode.pid){
							 searchDatas.push(kNode);
						 }
					 }
				 }
			 }
//			 if(searchDatas.length==0){
//				 return;
//			 }

			 for(var i=0,j=searchDatas.length;i<j;i++){
				 me.isTreeRoot(searchDatas[i], newNodes);
			 }
			 return $.fn.zTree.init($(treeId), setting, newData);
		 },
		 pushNode:function(node,newNodes){
			 var me=this;
			 if($.inArray(node[me.idKey],newNodes)==-1){
				 node.open=true;
				 newNodes.push(node[me.idKey]);
				 newData.push(node);
			 }
		 },
		 isTreeRoot:function(nodeData,newNodes){
			 var me =this;
			 me.pushNode(nodeData,newNodes);
			 if(me.getNodeDataByPid(nodeData[me.pidKey])!=-1){
				 me.isTreeRoot(me.getNodeDataByPid(nodeData[me.pidKey]),newNodes);
			 }
		 },
		 getNodeDataByPid:function(pid){
			 var me =this;
			 for(var i=0,j=me.treeData.length;i<j;i++){
				 if(pid == me.treeData[i][me.idKey]){
					 return me.treeData[i];
				 }
			 }
			 return -1;
		 },
		 getNodeDataById:function(id){
			 var me =this;
			 for(var i=0,j=me.treeData.length;i<j;i++){
				 if(id == me.treeData[i][me.pidKey]){
					 return me.treeData[i];
				 }
			 }
			 return -1;
		 },
		/**
		 * 添加树节点按钮
		 * @param treeNode	树节点
		 * @param callback 	回调函数
		 * @param image		按钮图标
		 * @param title		鼠标悬浮提示
		 */
		addZtreeBtn: function (treeNode, callback,image, title) {
			var tid = treeNode.tId;
			var dom = $('#' + tid + '_a');
			var id = treeNode.id;
			var btnSpan = dom.find('#ztree_btn_' + id);
			$('.c_ztree_btn').hide();
			if (dom.find('#ztree_btn_' + id).length == 0) {
				btnSpan = $('<img id="ztree_btn_' + id + '" src="' + image + '" title="' + title + '" class="c_ztree_btn" style="margin-left:2px;" />');
				dom.append(btnSpan);
			} else {
				btnSpan.show();
			}
			$('#ztree_btn_' + id).off('click');
			$('#ztree_btn_' + id).on('click', function () {
				callback && callback();
			})
		}
	}
})