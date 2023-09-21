// Write your code here
const items = document.querySelectorAll('img');
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');

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

  function plusSlides(n) {
    showNextItem(items[count] += n);
    id = setTimeout(plusSlides, 1000)
  }

  function minesSlides(n) {
    showPreviousItem(items[count] -= n);
    id = setTimeout(minesSlides, 2000);
  }
  
  function myStopFunction(){
     clearTimeout(id);
   }

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);

