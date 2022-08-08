console.log("Welcome to spotify");
//Initialize the Variable
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"));
let flag=0;

let song = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "song/2.mp3", coverPath: "covers/6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "song/2.mp3", coverPath: "covers/7.jpg" },
    { songName: "Bhula Dena - Salam-e-Ishq", filePath: "song/2.mp3", coverPath: "covers/8.jpg" },

]
// song
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})
// audioElement.play();
//Handle Play / Pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //Update Seek bar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration) / 100)
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songitemPlay")).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        
        if (audioElement.paused){
            // element.classList.remove('fa-pause-circle');
            // element.classList.add('fa-play-circle');
            // e.target.classList.remove('fa-play-circle');
            // e.target.classList.add('fa-pause-circle');
        }
        else{
            // element.classList.add('fa-pause-circle');
            // element.classList.remove('fa-play-circle');
            // e.target.classList.remove('fa-play-circle');
            // e.target.classList.add('fa-pause-circle');
        }
        
    })
}
Array.from(document.getElementsByClassName("songitemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        if (flag==0){
            element.classList.add('fa-pause-circle');
            element.classList.remove('fa-play-circle');
        }
        else{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
            flag--;
        }
        audioElement.src = 'song/' + (songIndex + 1) + '.mp3';
        masterSong.innerText=song[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = 'song/' + (songIndex + 1) + '.mp3';
    masterSong.innerText=song[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = 'song/' + (songIndex + 1) + '.mp3';
    masterSong.innerText=song[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})