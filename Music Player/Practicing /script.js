const audioTag = document.getElementsByClassName("audioClass")[0];
const playListContainerTag = document.getElementsByClassName("playListContainer")[0];
const currentAndTotleTimeTag = document.getElementsByClassName("currentAndTotleTime")[0];
const progressTag = document.getElementById("progressBar");
const currentProgressTag = document.getElementById("currentProgress");
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const previousButtonTag = document.getElementsByClassName("previousButton")[0];
const nextButtonTag = document.getElementsByClassName("nextButton")[0];

const tracks = [{trackId:"../MP3_files/John_Legend_All_of_Me.mp3", title:"All of me - John Legend"},
        {trackId:"../MP3_files/Ed_Sheeran_Perfect.mp3", title:"Perfect - Ed Sheeran"},
        {trackId:"../MP3_files/Adele_Make_You_Feel_My_Love_Official_Video_.mp3", title:"Make you feel my Love - Adele"},
        {trackId:"../MP3_files/Newton_Sometimes_When_We_Touch.mp3", title:"Sometime when we Touch - Newton"}
];
 
// playlist
for (let i = 0; i < tracks.length; i++) {
    const trackTag = document.createElement("div");
    trackTag.addEventListener("click", () => {
        playFunction();
    });
    trackTag.classList.add("trackItem");
    trackTag.textContent = (i + 1).toString() + ". " + tracks[i].title;;
    playListContainerTag.append(trackTag);
};
let duration;
let durationText = "00:00"
// current and loading time 
audioTag.addEventListener("loadeddata", () => {
    duration = Math.floor(audioTag.duration);
    durationText = timeCalculator(duration);
   
});
audioTag.addEventListener("timeupdate", () => {
 let currentTime = Math.floor(audioTag.currentTime);
 let currentTimeText = timeCalculator(currentTime);
 const currentAndTotleTime = currentTimeText+ " / " + durationText;
 currentAndTotleTimeTag.textContent = currentAndTotleTime;
 updateCurrentProgress(currentTime);

});
let updateCurrentProgress = (currentTime) => {
    const currentTimeProress = (500/duration) * currentTime;
    currentProgressTag.style.width = currentTimeProress.toString() + "px";
}

//Time calculator Function 
const timeCalculator = (totleTime) => {
    let minutes = Math.floor(totleTime/60);
    let seconds = totleTime % 60 ;
    let minutesText = minutes < 10 ? "0" + minutes.toString():minutes ;
    let secondsText = seconds < 10 ? "0" + seconds.toString(): seconds;
    return minutesText + ":" + secondsText;
};
// start button 
let isPlaying = false
let currentPlayingIndex = 0 ;
startButtonTag.addEventListener("click", () => {
    const currentTime = Math.floor(audioTag.currentTime);
    if (currentTime === 0){
        playFunction();}
    else{
    audioTag.play()
    isPlaying = true;
    updateButton();
    }
});
let updateButton = () => {
    if (isPlaying){
        pauseButtonTag.style.display = "inline";
        startButtonTag.style.display = "none";
    }
    else{
        pauseButtonTag.style.display = "none";
        startButtonTag.style.display = "inline";
    }
}

//pauseButton 
pauseButtonTag.addEventListener("click", () => {
    audioTag.pause();
    isPlaying = false;
    updateButton();
});
//Next Button 
nextButtonTag.addEventListener("click", () => {
    if (currentPlayingIndex === tracks.length -1){
        return;
    }
    currentPlayingIndex += 1;
    playFunction();
});
previousButtonTag.addEventListener("click", () => {
    if (currentPlayingIndex === 0){
        return;}
    currentPlayingIndex -= 1;
    playFunction();
})
const playFunction = () => {
    let trackId = tracks[currentPlayingIndex].trackId;
    audioTag.src = trackId;
    audioTag.play()
    isPlaying = true;
    updateButton();
}