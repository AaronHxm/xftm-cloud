define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var tip = require('frm/message');
	var bootstrp = require('bootstrap');
	var bootstrptree = require('bootstraptree');
	var tip = require('frm/datepicker');
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#dailySche',
		data:{
			tempInfo:[
						  {'titleInfo':'常用信息一',"content":"常用信息一的短信内容常用信息一的短信内容常用信息一的短信内容"},
						  {'titleInfo':'常用信息二',"content":"常用信息二的短信内容常用信息一的短信内容常用信息一的短信内容"},
						  {'titleInfo':'常用信息三',"content":"常用信息三的短信内容常用信息一的短信内容常用信息一的短信内容"},
						  {'titleInfo':'常用信息四',"content":"常用信息四的短信内容常用信息一的短信内容常用信息一的短信内容"}
			],
			groupInfo:[
			  {'groupName':'一监组'},
			  {'groupName':'二监组'},
			  {'groupName':'三监组'},
			  {'groupName':'四监组'},
			  {'groupName':'五监组'},
			  {'groupName':'六监组'},
			  {'groupName':'应急组'}
			],
			tree:[
			  {
			  text: "省第一监狱",
			  href: "#node-1",
			  state: {
			    expanded: false,
			    selected: true
			  },
			 
			    nodes: [
			      {
			    	  text: "李明",
			    	  tags: ['拨号','值班领导']
			      },
			      {
			    	  text: "张耀",
			    	  tags: ['拨号']
			      },
			      {
			    	  text: "林泉",
			    	  tags: ['拨号']
			      },
			      {
			        text: "指挥中心",
			        nodes: [
			          {
			            text: "李明",
			 			tags: ['拨号']
			          },
			          {
			            text: "张耀",
						tags: ['拨号']
			          }
			        ]
			      },
			      {
			        text: "一监区",
					nodes: [
					   {
					       text: "李明",
						   tags: ['拨号']
					   },
					   {
					      text: "张耀",
						  tags: ['拨号']
					   }
					]
			      }
			    ]
			  },
			 {
				    text: "省第二监狱",
				    nodes: [
				      {
				    	  text: "李明",
				    	  tags: ['拨号']
				      },
				      {
				    	  text: "张耀",
				    	  tags: ['拨号','值班领导']
				      },
				      {
				    	  text: "林泉",
				    	  tags: ['拨号']
				      },
				      {
				        text: "指挥中心",
				        nodes: [
				          {
				            text: "李明",
							tags: ['拨号']
				          },
				          {
				            text: "张耀",
							tags: ['拨号']
				          }
				        ]
				      },
				      {
				        text: "一监区",
						nodes: [
						   {
						       text: "李明",	
							   tags: ['拨号']
						   },
						   {
						       text: "张耀",
						 		tags: ['拨号']
						   }
						]
				      }
				    ]
				  },
			 {
				    text: "省第三监狱",
				    nodes: [
				      {
				    	  text: "李明",
				    	  tags: ['拨号','值班领导']
				      },
				      {
				    	  text: "张耀",
				    	  tags: ['拨号']
				      },
				      {
				    	  text: "林泉",
				    	  tags: ['拨号']
				      },
				      {
				        text: "指挥中心",
				        nodes: [
				          {
				            text: "李明",
							tags: ['拨号']
				          },
				          {
				            text: "张耀",
							tags: ['拨号']
				          }
				        ]
				      },
				      {
				        text: "一监区",
						nodes: [
						   {
						       text: "李明",
								tags: ['拨号']
						   },
						   {
						       text: "张耀",
								tags: ['拨号']
						   }
						]
				      }
				    ]
				  },
			 {
				    text: "省第四监狱",
				    nodes: [
				      {
				    	  text: "李明",
				    	  tags: ['拨号','值班领导']
				      },
				      {
				    	  text: "张耀",
				    	  tags: ['拨号']
				      },
				      {
				    	  text: "林泉",
				    	  tags: ['拨号']
				      },
				      {
				        text: "指挥中心",
				        nodes: [
				          {
				            text: "李明",
							tags: ['拨号']
				          },
				          {
				            text: "张耀",
							tags: ['拨号']
				          }
				        ]
				      },
				      {
				        text: "一监区",
						nodes: [
						   {
						       text: "李明",
							   tags: ['拨号']
						   },
						   {
						       text: "张耀",
								tags: ['拨号']
						   }
						]
				      }
				    ]
				  },
			  {
					    text: "省第五监狱",
					    nodes: [
					      {
					    	  text: "李明",
					    	  tags: ['拨号']
					      },
					      {
					    	  text: "张耀",
					    	  tags: ['拨号','值班领导']
					      },
					      {
					    	  text: "林泉",
					    	  tags: ['拨号']
					      },
					      {
					        text: "指挥中心",
					        nodes: [
					          {
					            text: "李明",
								tags: ['拨号']
					          },
					          {
					            text: "张耀",
								tags: ['拨号']
					          }
					        ]
					      },
					      {
					        text: "一监区",
							nodes: [
							   {
							       text: "李明",
								   tags: ['拨号']
							   },
							   {
							       text: "张耀",
									tags: ['拨号']
							   }
							]
					      }
					    ]
					  },
					{
						    text: "省第六监狱",
						    nodes: [
						      {
						    	  text: "李明",
						    	  tags: ['拨号','值班领导']
						      },
						      {
						    	  text: "张耀",
						    	  tags: ['拨号']
						      },
						      {
						    	  text: "林泉",
						    	  tags: ['拨号']
						      },
						      {
						        text: "指挥中心",
						        nodes: [
						          {
						            text: "李明",
									tags: ['拨号']
						          },
						          {
						            text: "张耀",
									tags: ['拨号']
						          }
						        ]
						      },
						      {
						        text: "一监区",
								nodes: [
								   {
								       text: "李明",
										tags: ['拨号']
								   },
								   {
								       text: "张耀",
										tags: ['拨号']
								   }
								]
						      }
						    ]
						  },
						{
							    text: "省第七监狱",
							    nodes: [
							      {
							    	  text: "李明",
							    	  tags: ['拨号']
							      },
							      {
							    	  text: "张耀",
							    	  tags: ['拨号']
							      },
							      {
							    	  text: "林泉",
							    	  tags: ['拨号','值班领导']
							      },
							      {
							        text: "指挥中心",
							        nodes: [
							          {
							            text: "李明",
										tags: ['拨号']
							          },
							          {
							            text: "张耀",
										tags: ['拨号']
							          }
							        ]
							      },
							      {
							        text: "一监区",
									nodes: [
									   {
									       text: "李明",
											tags: ['拨号']
									   },
									   {
									       text: "张耀",
											tags: ['拨号']
									   }
									]
							      }
							    ]
							  },
							{
								    text: "省第八监狱",
								    nodes: [
								      {
								    	  text: "李明",
								    	  tags: ['拨号','值班领导']
								      },
								      {
								    	  text: "张耀",
								    	  tags: ['拨号']
								      },
								      {
								    	  text: "林泉",
								    	  tags: ['拨号']
								      },
								      {
								        text: "指挥中心",
								        nodes: [
								          {
								            text: "李明",
											tags: ['拨号']
								          },
								          {
								            text: "张耀",
											tags: ['拨号']
								          }
								        ]
								      },
								      {
								        text: "一监区",
										nodes: [
										   {
										       text: "李明",
												tags: ['拨号']
										   },
										   {
										       text: "张耀",
												tags: ['拨号']
										   }
										]
								      }
								    ]
								  }
			]              
		},
		methods:{
			openMenuTwo:function(item){
				var url = item.url;
				if(url == ''){
					url = '../../../error.html'
				}
				$("#msgWin").attr("src",url);
			},
			useTemp:function(info){
				$("#msgText").val(info);
			}
		}
	});

	try {
		$('#tree').treeview({data: model.tree,
							 levels: 1,
							 expandIcon:'glyphicon glyphicon-menu-down',
							 selectedBackColor:'none',
							 showCheckbox:'true',
							 onhoverColor:'#74645C',
							 backColor:'none',
							 showTags:'true'});    
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});