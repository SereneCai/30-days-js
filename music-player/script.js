const musicContainer = document.querySelector('.music-container');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const audio = document.querySelector('#audio');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

const songOne = 'https://www.youtube.com/watch?v=bNOZdrFFigk';
const songTwo = "https://www.youtube.com/watch?v=60w0D7oT1So";

//song title
const songs = [songOne, songTwo];

//keep track 
let songIndex = 0

//Initiall load song info DOM

loadSong(songs[songIndex])

//update song details
function loadSong(song) {
    const picture = "https://images.unsplash.com/photo-1531668773489-559122894014?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80 "
    title.innerText = song;
    audio.src = `${song}`
    cover.src = `${picture}`;
}

function pauseSong(){
    musicContainer.classList.remove('play');

}

function playSong(){
    musicContainer.classList.add('play');
    
}

playButton.addEventListener('click', ()=> {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying){
        pauseSong();
    }
    else {
        playSong();
    }
})