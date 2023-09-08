function setAlarm() {
  const input = document.getElementById("alarmSet");
  let timeRemaining = document.getElementById("timeRemaining");
  let time = input.value;
  input.value = "";

  const interval = setInterval(function () {
    if(time < 10) {
      timeRemaining.textContent = `Time Remaining: 00:0${time}`;
    } else {
      timeRemaining.textContent = `Time Remaining: 00:${time}`;
    }
    
    if (time == 0) {
      playAlarm();
      clearInterval(interval);
    }
    time--;
  }, 1000); 
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
