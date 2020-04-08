define(function(require){
	var $ = require('jquery');
	var vue = require('vue');
	var message = require('frm/message');
	var webuploader = require('webuploader');
	
	var $list = $("#thelist");
	var thumbnailWidth = 100;  
	var thumbnailHeight = 100;
	var uploader = webuploader.create({
		swf: 'Uploader.swf',
		pick: {
			id: '#filePicker',
			multiple: true
		},
		accept: {
			title: 'Images',
			extensions: 'gif,jpg,jpeg,bmp,png',
			mineTypes: 'image/*'
		}
	});
	
	uploader.on('fileQueued', function(file){
		var $li = $('<div style="float:left;margin-left:5px;" id="' + file.id + '" class="file-item thumbnail"><img width="' + thumbnailWidth
				+ '" height="' + thumbnailHeight + '"><div class="info">' + file.name + '</div></div>'),
			$img = $li.find('img');
		$list.append($li);
		uploader.makeThumb(file, function(error, src){
			if (error) {
				$img.replaceWith('<span>不可预览</span>');
				return ;
			}
			$img.attr('src', src);
		}, thumbnailWidth, thumbnailHeight);
	});
	
	uploader.on('error', function(){
		message.alert('请选择图片上传');
	});

	/**
	 * 创建模型
	 */
	var model = new vue({
		el: '#jjb',
		data: {
			'jbs': [
			    {'id': '01', 'text': '一、值班值宿人员必须准时到岗，坚守岗位。不准迟到、早退、漏岗。因故不能如期到岗值班者应提前请假，由秘书科负责调换人员。'},
			    {'id': '02', 'text': '二、值班值宿人员要按时交接-班，在岗时间不准擅离岗位，不准进行麻将、扑克等娱乐活动。不准让非值班人员代替值班。要认真做好电话记录，保证不丢不漏．遇到问题及时处理。并视情况逐级报告。'},
			    {'id': '03', 'text': '三、值班值宿人员在岗期间不准饮酒，不准将非本机关人员带国土到机关，更不准收留住宿。'},
			    {'id': '04', 'text': '四、值班值宿协助做好安全保卫工作，发现可疑现象和遇到紧急情况，要采取果断措施，并向有关领导同志汇报。'},
			    {'id': '05', 'text': '五、值班值宿人员要认真清扫值班室，爱护值班室内的公共物品和设备，造成物品和设备丢失或非正常损坏要追查当值人员的责任。'},
			    {'id': '01', 'text': '六、要节约用电、用水，负责一楼楼前、走廊和厕所电灯的开关，做到天黑开灯，天明关灯。'},
			    {'id': '02', 'text': '七、值班值宿人员要做好交接-班工作，把当值期间遇到的情况及收到的信件、电话、文件、报纸等向接-班人员交待清楚后，方可离开。'}
			]
		},
		methods: {}
	});

	try {
		
	} catch (e) {
		console.error("初始化模块失败!", e);
	}
});