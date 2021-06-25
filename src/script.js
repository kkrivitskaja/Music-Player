const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const songTitle = document.getElementById('title');;
const cover = document.getElementById('cover');


console.log(songTitle);

const songs = ['slam', 'play'];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
    songTitle.innerText = song;
    audio.src = `./music/${song}.mp3`;
    cover.src = `./images/${song}.jpg`;
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        payseSong()
    } else {
        playSong()
    }
})