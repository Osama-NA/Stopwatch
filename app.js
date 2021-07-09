//VARIABLES

const time = document.querySelector("#time");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
var hour = 0,
  minute = 0,
  second = 0;
var timeString = "";
var stopper;
var secondAttempt = true;

//EVENT LISTENERS

reset.addEventListener("click", resetTimer);
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);

//FUNCTIONS

//Starts Timer By Incrementing Timer Values Every 1000s Interval
function startTimer() {
  if (secondAttempt) {
    secondAttempt = false;
    if (second == 0) {
      time.innerText = "0" + hour + ":0" + minute + ":0" + second++;
    }
    stopper = setInterval(() => {
      if (hour < 10) {
        if (minute < 10) {
          if (second < 10)
            time.innerText = "0" + hour + ":0" + minute + ":0" + second++;
          else
            time.innerText = "0" + hour + ":0" + minute + ":" + second++;
          checker();
        } else {
          if (second < 10)
            time.innerText = "0" + hour + ":" + minute + ":0" + second++;
          else 
            time.innerText = "0" + hour + ":" + minute + ":" + second++;
          checker();
        }
      } else {
        if (minute < 10) {
          if (second < 10) 
            time.innerText = hour + ":0" + minute + ":0" + second++;
          else 
            time.innerText = hour + ":0" + minute + ":" + second++;
          checker();
        } else {
          if (second < 10) 
            time.innerText = hour + ":" + minute + ":0" + second++;
          else 
            time.innerText = hour + ":" + minute + ":" + second++;
          checker();
        }
      }
    }, 1000);
  }
}

//Stops Timer And Resets Values
function resetTimer() {
  stopTimer();
  time.innerText = "00:00:00";
  hour = minute = second = 0;
}

//Stops The Timer
function stopTimer() {
  clearInterval(stopper);
  secondAttempt = true;
}

//Resets and Increments Timer Values
function checker() {
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
}
