const display = document.querySelector('#timeRemaining');
const secondsInput = document.querySelector('#alarmSet');
const setButton = document.getElementById("set");
const stopButton = document.getElementById('stop');

let countdown;
let totalSeconds;

function setAlarm() {
  // Get the total number of seconds
  totalSeconds = parseInt(secondsInput.value);
  // Clear any existing timers
  clearInterval(countdown);
  // Update the display with the initial time
  displayTime(totalSeconds);

  countdown = setInterval(() => {
    totalSeconds--;
    displayTime(totalSeconds);
    if (totalSeconds === 0) {
      clearInterval(countdown);
      playAlarm();
    }
  }, 1000);
  
}

function displayTime(seconds) {
  // Calculate the number of minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  // Add leading zeros to single digit numbers
  const displayMinutes = `${minutes < 10 ? '0' : ''}${minutes}`;
  const displaySeconds = `${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  display.textContent = `Time Remaining: ${displayMinutes}:${displaySeconds}`;
  
}
setButton.addEventListener('click', setAlarm);

function playAlarm() {
  let audio = new Audio("alarmsound.mp3");
  audio.play();
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
