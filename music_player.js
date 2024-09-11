const playButton = document.querySelector('.play');
const playButton2 = document.querySelector('.fa-play');
const audio = new Audio('Alibi.mp3'); 

const audioPlayer = document.getElementById('audio-player');
const volumeBar = document.getElementById('volume-bar');

const audioSource = document.getElementById('audioSource');
const audioPlayer2 = document.getElementById('audioPlayer');


const songListItems = document.querySelectorAll('.song-list ul li');

songListItems.forEach(function(song) {
  song.addEventListener('click', function() {
      const songSrc = this.getAttribute('data-src');
            audioSource.src = songSrc;
      
      audioPlayer2.load();
      
      audioPlayer2.play();
  });
});

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = '<i class="fa fa-pause"></i>';
    playButton2.innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    audio.pause();
    playButton.innerHTML = '<i class="fa fa-play"></i>';
    playButton2.innerHTML = '<i class="fa fa-play"></i>';
  }
});
playButton2.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = '<i class="fa fa-pause"></i>';
    playButton2.innerHTML = '<i class="fa fa-pause"></i>';

  } else {
    audio.pause();
    playButton.innerHTML = '<i class="fa fa-play"></i>';
    playButton2.innerHTML = '<i class="fa fa-play"></i>';
  }
});
audio.volume = volumeBar.value / 100; 

volumeBar.addEventListener('input', function() {
    audio.volume = volumeBar.value / 100; 
});

audioPlayer2.volume = volumeBar.value / 100;

volumeBar.addEventListener('input', function() {
    audioPlayer2.volume = volumeBar.value / 100;
});


songListItems.forEach((song, index) => {
    song.addEventListener('click', function() {
        currentSongIndex = index;
        playSongByIndex(currentSongIndex);
    });
});
