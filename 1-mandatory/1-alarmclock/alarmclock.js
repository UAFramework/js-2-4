const title = document.getElementById('timeRemaining');

function updateTitle(alarmTime) {
  const minutes = Math.floor(alarmTime / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (alarmTime % 60).toString().padStart(2, "0");
  title.textContent = `Time Remaining: ${minutes}:${seconds}`;
}

function setAlarm() {
  var alarmTime = +document.getElementById('alarmSet').value;
  updateTitle(alarmTime);
  alarmTime--;
  intervalId = setInterval(() => {
    updateTitle(alarmTime);
    alarmTime--;
    if (alarmTime === 0) {
      clearInterval(intervalId);
      playAlarm();
    }
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
