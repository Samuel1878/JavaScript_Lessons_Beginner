const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];
let miniSecondsTag = document.getElementsByClassName("miniSecond")[0];

let miniSeconds = 0,
  seconds = 0,
  minutes = 0,
  hours = 0;
const startTime = () => {
    miniSeconds += 5;
    if (miniSeconds === 1000){
        miniSeconds = 0;
        seconds += 1;
        if(seconds === 60){
            seconds = 0;
            minutes += 1;
            if (minutes === 60){
                minutes = 0;
                hours += 1;
            };
        };
    };
    let secondsText = seconds < 10 ? "0" + seconds.toString(): seconds;
    let minutesText = minutes < 10 ? "0" + minutes.toString(): minutes;
    let hoursText = hours < 10 ? "0" + hours.toString():hours;
    stopWatchTag.textContent = hoursText + ":" + minutesText + ":" + secondsText;
    miniSecondsTag.textContent = miniSeconds;
};
let interValId;
startButtonTag.addEventListener("click", () => {
    clearInterval(interValId);
    interValId = setInterval(startTime, 1);
});
pauseButtonTag.addEventListener("click", () => {
    clearInterval(interValId);
});
continueButtonTag.addEventListener("click", () => {
 clearInterval(interValId);
 interValId = setInterval(startTime, 1);

});
restartButtonTag.addEventListener("click", () => {
    clearInterval(interValId);
    miniSeconds = 0; seconds = 0; minutes = 0; hours = 0;
    interValId = setInterval(startTime, 1);
});



