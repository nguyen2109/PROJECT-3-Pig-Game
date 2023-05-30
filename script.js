'use strict';

const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');

const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');

const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');

const diceElement = document.querySelector('.dice');
const btnHold = document.querySelector('.btn--hold');
let currentScore, activePlayer, playing, scores;
const init = function () {
  player1El.classList.add('player--active');
  player2El.classList.remove('player--active');

  player1El.classList.remove('player--winner');
  player2El.classList.remove('player--winner');
  diceElement.classList.add('hidden');
  current1.textContent = 0;
  current2.textContent = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1El.classList.toggle('player--active');
  player2El.classList.toggle('player--active');
};
const btnRoll = document
  .querySelector('.btn--roll')
  .addEventListener('click', function () {
    if (playing) {
      let dice = Math.trunc(Math.random() * 6 + 1);
      diceElement.src = `dice-${dice}.png`;
      diceElement.classList.remove('hidden');

      if (dice !== 1) {
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
      } else {
        switchPlayer();
      }
    }
  });

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1 . Add số điểm hiện tại vào người chơi
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2 nếu hơn 100 điểm thì thắng
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.querySelector
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      switchPlayer();
    }
  } else {
    diceElement.classList.add('hidden');
  }
});

const btnNew = document
  .querySelector('.btn--new')
  .addEventListener('click', init);
