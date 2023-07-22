const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];
const miniSecondsTag = document.getElementsByClassName("miniSecond")[0];
let miniSeconds = 0,
  seconds = 0,
  minutes = 0,
  hours = 0;
/* onFunction */
const startTime = () => {
    miniSeconds += 5;
    if (miniSeconds === 1000){
        miniSeconds = 0;
        seconds += 1;
        if (seconds === 60){
            seconds = 0 ;
            minutes += 1;
            if (minutes === 60){
                minutes = 0;
                hours +=1;
            };
        };
    }; 

    const secondsText = seconds < 10 ? "0" + seconds.toString(): seconds;
    const minutesText = minutes < 10 ? "0" + minutes.toString(): minutes;
    const hoursText = hours < 10 ? "0" + hours.toString(): hours;
    miniSecondsTag.textContent = miniSeconds;
    stopWatchTag.textContent = hoursText + ":" + minutesText + ":" + secondsText;
};
/* start */
let interValId;
startButtonTag.addEventListener("click", () => {
    interValId = setInterval(startTime, 1);
});
/** pause */
pauseButtonTag.addEventListener("click", () => {
    clearInterval(interValId);
});
/** continue  */
continueButtonTag.addEventListener("click",() => {
    clearInterval(interValId);
    interValId = setInterval(startTime, 1);
})
/**resetart */
restartButtonTag.addEventListener("click",() => {
    clearInterval(interValId);
    seconds = 0, minutes = 0, hours = 0;
    interValId = setInterval(startTime, 1);
})