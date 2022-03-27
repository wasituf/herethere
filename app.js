// UI
const swapBtn = document.querySelector('.swap');
const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const wonOverlay = document.querySelector('.won-overlay');
const winText = document.querySelector('.won-overlay h1');
const replayBtn = document.querySelector('.won-overlay a');

// Event Listeners
swapBtn.addEventListener('click', swapCards);
card1.addEventListener('click', () => {
  if (card1.classList.contains('original')) {
    card1.src = './img/cube3.svg';
    card1.classList.remove('original');
  } else {
    card1.src = './img/cube1.svg';
    card1.classList.add('original');
  }
});
card2.addEventListener('click', () => {
  if (card2.classList.contains('original')) {
    card2.src = './img/cube4.svg';
    card2.classList.remove('original');
  } else {
    card2.src = './img/cube2.svg';
    card2.classList.add('original');
  }
});

let swapped = false;
// Swap Cards
function swapCards(e) {
  if (swapped === false) {
    if (window.matchMedia('(max-width: 980px)').matches) {
      card1.style.top = '33vh';
      card2.style.top = '-25vh';
    } else {
      card1.style.left = '64%';
      card2.style.right = '64%';
    }
    swapped = true;
  } else {
    card1.style.top = 0;
    card1.style.left = 0;
    card2.style.right = 0;
    card2.style.top = '7.5vh';
    swapped = false;
  }

  if (
    swapped === true &&
    !card2.classList.contains('original') &&
    card1.classList.contains('original')
  ) {
    console.log('Won!');
    wonOverlay.style.top = 0;
    window.setTimeout(() => {
      winText.style.opacity = 1;
      window.setTimeout(() => (replayBtn.style.opacity = 1), 500);
    }, 700);
  }

  e.preventDefault();
}
