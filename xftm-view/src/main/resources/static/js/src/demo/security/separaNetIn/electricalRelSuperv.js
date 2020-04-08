define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var table = require('frm/table');
	
	/**
	 * 创建模型
	 */
	var model = new vue({
		el:'#electricalRelSuperv',
		data:{
			wallRoundInfoList:[
				   {'patrol_time':'2017-12-08 16:46:48',closetime:'2017-12-08 15:25:10','patrol_police_name':'张某','patrol_isnormal':'维修','patrol_content':'',police_check:'城某某',check_Department:'第二监狱'},
				   {'patrol_time':'2017-12-08 16:47:44',closetime:'2017-12-08 14:54:32','patrol_police_name':'李某某','patrol_isnormal':'维修','patrol_content':'',police_check:'言某',check_Department:'第四监狱'},
				   {'patrol_time':'2017-12-08 16:56:43',closetime:'2017-12-08 15:45:10','patrol_police_name':'王某','patrol_isnormal':'处理故障','patrol_content':'',police_check:'皇某某',check_Department:'第二监狱'},
				   {'patrol_time':'2017-12-08 16:59:48',closetime:'2017-12-08 15:20:50','patrol_police_name':'赵某某','patrol_isnormal':'清理','patrol_content':'',police_check:'寿某',check_Department:'第六监狱'},
				   {'patrol_time':'2017-12-09 13:06:48',closetime:'2017-12-09 11:42:45','patrol_police_name':'宋某','patrol_isnormal':'处理故障','patrol_content':'',police_check:'绳某某',check_Department:'XX监狱'},
				   {'patrol_time':'2017-12-09 15:46:48',closetime:'2017-12-09 14:12:09','patrol_police_name':'李某','patrol_isnormal':'处理故障','patrol_content':'',police_check:'检某某',check_Department:'XX监狱'},
				   {'patrol_time':'2017-12-09 16:46:48',closetime:'2017-12-09 15:08:43','patrol_police_name':'刘某某','patrol_isnormal':'维修','patrol_content':'',police_check:'汪某某',check_Department:'XX监狱'}
				]
			},
		methods:{
			savePerimeter:function(){
			},
			opencheck:function(){
				tip.alert('已复核');
			}
		}
	})
	//周界围墙信息
	function wallRoundInfo(){
		var json = {'total':model.wallRoundInfoList.length,'rows':model.wallRoundInfoList}
		 table.init("wallRoundInfo",{
				request:'',
				showColumns:false,
				columns: [[
					{
						field: 'states',
						checkbox:true,
						align: 'center',
		                valign: 'middle',
		                width:'4%'
					},{
		                title: '关闭时间',
		                field: 'closetime',
		                align: 'center',
		                valign: 'middle'
		            },{
		                title: '开启时间',
		                field: 'patrol_time',
		                align: 'center',
		                valign: 'middle'
		            },{
		                title: '单位',
		                field: 'check_Department',
		                align: 'center',
		                valign: 'middle',
		                formatter: function(value,row,index){
		                	
		                	return 'XX监狱';
		                }
		            },{
		                title: '关闭事由',
		                field: 'patrol_isnormal',
		                align: 'center',
		                valign: 'middle'
		            },{
		                title: '审批人',
		                field: 'patrol_police_name',
		                align: 'center',
		                valign: 'middle'
		            },{
		                title: '复核人',
		                field: 'police_check',
		                align: 'center',
		                valign: 'middle'
		            }
		         ]],
		         onDblClickRow:function(row,$element){
		        	 
		         }
			});
		table.method('load',json);
	}
	try {
		wallRoundInfo();
		$("input[name='normal']").click(function(){
			var normal = $(this).val();
			if(normal == 0){
				$("div.content").val('');
				$("div.content").hide();
			}else{
				$("div.content").show();
			}
		})
	} catch (e) {
		console.log("初始化数据失败!");
	}
})