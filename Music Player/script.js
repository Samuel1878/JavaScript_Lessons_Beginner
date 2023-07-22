// music Player //
// var //
const playListContainerTag = document.getElementsByClassName("playListContainer")[0];
const audioTag = document.getElementsByClassName("audioClass")[0];
const currentAndTotleTimeTag = document.getElementsByClassName("currentAndTotleTime")[0];
const progressTag = document.getElementById("currentProgress");
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const previousButtonTag = document.getElementsByClassName("previousButton")[0];
const nextButtonTag = document.getElementsByClassName("nextButton")[0];

// tracklist //
const tracks = [
    {trackId:"MP3_files/Ed_Sheeran_Perfect.mp3", title:"Perfect- Ed Sheeran"},
    {trackId:"MP3_files/John_Legend_All_of_Me.mp3", title:"All of me -John Legend"},
    {trackId:"MP3_files/Adele_Make_You_Feel_My_Love_Official_Video_.mp3", title:"Make you feel my love - Adele"},
    {trackId:"MP3_files/Newton_Sometimes_When_We_Touch.mp3", title:"Sometime when we touch - Newton"}
];
// for loop function //
for (let i = 0; i < tracks.length; i++) {
    const trackTag = document.createElement("div");
    // click Function //
    trackTag.addEventListener("click", () =>{
        const trackId = tracks[i].trackId;
        audioTag.src = trackId;
        audioTag.play();
        isPlaying = true;
        updatePlayAndPause();
        currentPlayingIndex = i;
    });
    trackTag.classList.add("trackItem");
    const title = (i + 1).toString() + ". " + tracks[i].title;
    trackTag.textContent = title;
    playListContainerTag.append(trackTag);
    
};
// Global scope var //
let durationText = "00:00";
let duration = 0;

//   origin duration //
audioTag.addEventListener("loadeddata",() => {
    duration = Math.floor(audioTag.duration);
    durationText = createMinuteAndSecondText(duration);
});
// Current time and timeupdate //
audioTag.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(audioTag.currentTime);
    const currentTimeText = createMinuteAndSecondText(currentTime);
    const currentTimeTextAndDuration = currentTimeText + " / " + durationText;
    currentAndTotleTimeTag.textContent = currentTimeTextAndDuration;
    updateCurrentProgress(currentTime);
    
});
//progress function//
const updateCurrentProgress = (currentTime) => {
    let currentProgressWidth = (500/duration) * currentTime;
    progressTag.style.width = currentProgressWidth.toString() + "px";
};
// getting time function for all events // 
const createMinuteAndSecondText = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60; 
    const minutesText = minutes < 10 ? "0" + minutes.toString(): minutes;
    const secondsText = seconds < 10 ? "0" + seconds.toString(): seconds;
    return minutesText + ":" + secondsText;
};
// start and pause button //

let currentPlayingIndex = 0 ;
let isPlaying = false;
// start event //
startButtonTag.addEventListener("click", () =>{
    const currentTime = Math.floor(audioTag.currentTime);
    isPlaying = true;
    if (currentTime === 0){
    const playingSong = tracks[currentPlayingIndex].trackId;
    audioTag.src = playingSong;
    audioTag.play();
    // dry 
    // playSong();
    updatePlayAndPause();
    }else{
        audioTag.play();
        updatePlayAndPause()
    };

});
//pause event //
pauseButtonTag.addEventListener("click", () => {
    isPlaying = false;
    audioTag.pause();
    updatePlayAndPause();
})


// previous 
previousButtonTag.addEventListener("click", () => {
    if (currentPlayingIndex === 0){
        return;
    };
    currentPlayingIndex -= 1;
    const playingSong = tracks[currentPlayingIndex].trackId;
    audioTag.src = playingSong;
    audioTag.play();
    // dry 
    // playSong();
});
// Next 
nextButtonTag.addEventListener("click", () => {
    if (currentPlayingIndex === tracks.length - 1){
        return;
    }
    currentPlayingIndex += 1;
    const playingSong = tracks[currentPlayingIndex].trackId;
    audioTag.src = playingSong;
    audioTag.play();
    // dry 
    // playSong(); 
});

// play and pause 
const updatePlayAndPause = () => {
    if (isPlaying){
        startButtonTag.style.display = "none";
        pauseButtonTag.style.display = "inline";
    } else {
        startButtonTag.style.display = "inline";
        pauseButtonTag.style.display = "none";
    }
};

// dry 
// const playSong = () => {
//  const playingSong = tracks[currentPlayingIndex].trackId;
//  audioTag.src = playingSong;
// audioTag.play(); };

