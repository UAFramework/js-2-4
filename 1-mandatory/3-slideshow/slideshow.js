// Write your code here
const items = document.querySelectorAll('img');
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
const autoNextItem = document.querySelector('.auto-next');
// const previousItem = document.querySelector('.previous');
// const previousItem = document.querySelector('.previous');
//document.querySelector('.auto-next').addEventListener("click", ShowNextItem);
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');
  if(count < items.length - 1) {
    count++;
  } else {
    count = 0;
  }
  items[count].classList.add('active');
 }

function showPreviousItem() {
  items[count].classList.remove('active');
  if(count > 0) {
    count--;
  } else {
    count = items.length - 1;
  }
  items[count].classList.add('active');
  }

  const myIntervalForward = setInterval(showNextItem, 5000);
  const myIntervalBack = setInterval(showPreviousItem, 2000);

  function myStopFunction() {
    clearInterval(myIntervalBack);
    clearInterval(myIntervalForward);
  }
// setInterval(showNextItem(), 10000);

// function autoShowNextItem() {
//   // check if an interval has already been set up
//   if (!nIntervId) {
//     nIntervId = setInterval(showNextItem(), 10000);
//   }
// }

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
myIntervalForward.addEventListener('click', showNextItem);
// previousItem.addEventListener('click', showPreviousItem);
// previousItem.addEventListener('click', autoShowNextItem);
