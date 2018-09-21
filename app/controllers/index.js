$.index.open();

$.videoPlayer.addEventListener('complete', function(e){
	console.log('complete', e);
	console.log('currentPlaybacktime', $.videoPlayer.currentPlaybackTime);
	console.log('endPlaybacktime', $.videoPlayer.endPlaybackTime);
});

$.videoPlayer.addEventListener('playbackstate', function(e){
	console.warn('playbackstate', e);
	console.warn('currentPlaybacktime', $.videoPlayer.currentPlaybackTime);
	console.warn('endPlaybacktime', $.videoPlayer.endPlaybackTime);

	getStopTime();
});


$.videoPlayer.addEventListener('preload', function(e){
	console.error('preload', e);
	console.error('currentPlaybacktime', $.videoPlayer.currentPlaybackTime);
	console.error('endPlaybacktime', $.videoPlayer.endPlaybackTime);

	getLength();
});



$.videoPlayer.url = '/sample.mp4';

console.warn('currentPlaybacktime', $.videoPlayer.currentPlaybackTime);
console.warn('endPlaybacktime', $.videoPlayer.endPlaybackTime);

getStopTime();
getLength();

function getStopTime(){
	var t = $.videoPlayer.currentPlaybackTime;

	//android reports in ms
	if(OS_ANDROID) {
		t = t / 1000;
	}
	$.stopTime.text = "Amount Played: " + t + ' secs';
}

function getLength() {
	$.length.text = 'Length: ' + ($.videoPlayer.endPlaybackTime / 1000) + ' secs';

}