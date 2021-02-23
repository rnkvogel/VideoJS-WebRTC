audioTrackList.addEventListener('change', function() {
let player = document.getElementsByTagName('video')[0];
let audioTrackList = player.audioTracks()


  // Log the currently enabled AudioTrack label.
  for (var i = 0; i < audioTrackList.length; i++) {
    var track = audioTrackList[i];

    if (track.enabled) {
      videojs.log(track.label);
      return;
    }
  }
})
