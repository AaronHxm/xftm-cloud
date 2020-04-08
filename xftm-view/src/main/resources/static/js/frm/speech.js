/**
 * 语音播放模块
 */
define(function(require){
	var hzVC = require('frm/hz.videoclient');
	var hzEvent = require('frm/hz.event');

//	var status = false;	// 播报状态：true正在播报、false未播报
//	var timerId = null;	// 下次播报定时器
//	var count = 0;		// 记录播报次数

	/*
	 * 执行语音播报
	 * @param delay 播报间隔
	 * @param times	播报次数
	 * @param text	播报文本
	 */
	function execute (delay, times, text) {
//		if (status && text) {
//			console.log('----------发送语音播报指令（'+ (++count) +' | ' + delay + '）：' + text + '');
//			hzVC.vcSend('SPEECH001', {'speechStr':text});
//
//			if (--times > 0) {
//				timerId = setTimeout(execute, delay, delay, times, text);
//			} else {
//				$('.speech').removeClass('animation');
//			}
//		} else {
//			$('.speech').removeClass('animation');
//		}
	}


	/*
	 * 停止播报
	 */
	function stop () {
//		status && console.log('----------结束发送语音播报指令----------');
//		status = false;
//		timerId && clearTimeout(timerId);
//		timerId == null;
//		hzVC.speech.stop();
	}


	/*
	 * 执行语音播报
	 * @param text	播报文本（不能为空）
	 * @param times	播报次数（默认1次）
	 * @param delay 播报间隔（默认3秒）
	 */
	hzEvent.on('speech.play', function (text, times, delay) {
//		stop();
//		status = true;
//		count = 0;
//
//		// 设置缺省参数
//		text = text || '';
//		times = times || 1;
//
//		// 播报间隔这里根据每秒3个字来计算
//		delay = delay || Math.round((text.length / 3) * 1000);
//		delay = delay >= 1000 ? delay : 1000;
//
//		// 开始执行播报指令
//		console.log('----------开始发送语音播报指令----------');
//		execute(delay, times, text);
		hzVC.speech.play(text, times, delay, {
			'play': function () {
				$('.speech').addClass('animation');
			},
			'stop': function () {
				$('.speech').removeClass('animation');
			},
			'callback': function (data) {
				console.log('speech.callback -->' + JSON.stringify(data));
			}
		});
	});


	/*
	 * 停止播报
	 */
	hzEvent.on('speech.stop', function () {
		hzVC.speech.stop();
//		stop();
	});

	console.log('---------- 初始化语音播报模块 ----------');
});