define(function(require){
	var $ = require('jquery');
	var vue = require('vue');

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#cmd_alarm_ssjq',
		data: {
			'jqlbList': [
			    {'id': '01', 'text': '14:05第二监狱一号监舍楼101网络报警'},
			    {'id': '02', 'text': '13:05第五监狱一号厂房消防报警'},
			    {'id': '03', 'text': '12:05第六监狱四号监舍楼三楼网络报警'},
			    {'id': '04', 'text': '11:05第四监狱二号厂房西南智能分析报警'},
			    {'id': '05', 'text': '10:05第四监狱二号监舍楼609智能分析报警'},
			    {'id': '06', 'text': '09:05第一监狱公共区域消防报警'},
			    {'id': '07', 'text': '08:05第三监狱四号监舍楼517门禁报警'},
			    {'id': '08', 'text': '07:05十里丰监狱西厂房网络报警'},
			    {'id': '09', 'text': '06:05第二监狱三号监舍楼401网络报警'},
			    {'id': '10', 'text': '05:05第五监狱厂房消防演练报警'}
            ],
            'poList': [
   			    {'id': '01', 'name': '张某某', 'imgURL': '../../../../css/cmd_imgs/police_img.jpg'},
			    {'id': '02', 'name': '李某某', 'imgURL': '../../../../css/cmd_imgs/police_img.jpg'}
            ],
            'prList': [
      			{'id': '01', 'name': '张某某', 'imgURL': '../../../../css/cmd_imgs/prisoner_img.png'},
   			    {'id': '02', 'name': '李某某', 'imgURL': '../../../../css/cmd_imgs/prisoner_img.png'}
            ],
            'thisAlarm': {
            	'id': '',
            	'name': ''
            },
            'positionList': [
                 {'id': '01', 'text': '通知指挥中心'},
                 {'id': '02', 'text': '通知武警'},
                 {'id': '03', 'text': '成立应急小组'}
             ],
             'videoList': [
                 {'videoURL': '../../../../css/cmd_imgs/video/1.mp4'},
                 {'videoURL': '../../../../css/cmd_imgs/video/2.mp4'}
             ]
		},
		methods: {
			openAlarm: function(id){
				var jqlbList = this.jqlbList;
				for (var i = 0; i < jqlbList.length; i++) {
					if (this.jqlbList[i].id == id) {
						this.thisAlarm.name = jqlbList[i].text;
						this.thisAlarm.id = id;
						$('#bjsd_id').hide().animate({opacity: 'show'}, 2000);
						break;
					}
				}
				$("#alarm_list").find("div").each(function() {
					$(this).css({'background-image':'url(../../../../css/cmd_imgs/jqlb_li2.png)', 'color':'#FFF'});
				});
				$('#li_' + id).css({'background-image':'url(../../../../css/cmd_imgs/jqlb_li.png)', 'color':'#FFD343'});
				var video1 = sjMath(), video2 = sjMath();
				this.videoList = [
	                {'videoURL': '../../../../css/cmd_imgs/video/' + video1 + '.mp4'},
	                {'videoURL': '../../../../css/cmd_imgs/video/' + video2 + '.mp4'}
	            ]
			},
			cmd_hj: function(){
				$('#cmd_hj').hide();
				$('.cmd_thz, #cmd_gd').show();
			},
			cmd_gd: function(){
				$('#cmd_hj').show();
				$('.cmd_thz, #cmd_gd').hide();
			}
		}
	});

	function sjMath(){
		var sj = Math.round(Math.random()*7+1);
		return sj
	}
	try {
		$("#alarm_list").find("div:first").css({'background-image':'url(../../../../css/cmd_imgs/jqlb_li.png)', 'color':'#FFD343'});
		model.thisAlarm.id = model.jqlbList[0].id;
		model.thisAlarm.name = model.jqlbList[0].text;
		var myVideo = document.getElementsByTagName('video');
		for (var i = 0; i < myVideo.length; i++) {
			myVideo[i].play();
		}

		$('#bjsd_id').animate({opacity: 'show'}, 2000);
		
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});