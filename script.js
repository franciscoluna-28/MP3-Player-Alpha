let playButton = document.getElementById("play-circle");
var leftButton = document.getElementById("left-circle");
var rightButton = document.getElementById("right-circle");
var audioVolume = document.getElementById("main-volume");

let defaultSong = new Audio("resources/stronger.mp3")

let playStop = function(x) {
    if (defaultSong.ended || defaultSong.paused) {
        playButton.classList.toggle("fa-pause");
        defaultSong.play()
    } else {
        defaultSong.pause();
        playButton.classList.toggle("fa-pause");
    }
}

//WIP

/* var metaData = [{
        mp3: "resources/stronger.mp3",
        songName: "Stronger",
        artist: "TheFatRat",
        artwork: "resources/thefatrat-stronger-image.jpg"
    },
    {
        mp3: "resources/colors.mp3",
        songName: "Colors",
        artist: "Tobu",
        artwork: "resources/tobu-colors-image.jpg"
    }
]; */

//WIP

function changeAudioVolume(amount) {
    song.volume = amount;
}