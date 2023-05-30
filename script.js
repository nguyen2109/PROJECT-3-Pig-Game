'use strict';

const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');

const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');

const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');

const diceElement = document.querySelector('.dice');

diceElement.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
const btnRoll = document
  .querySelector('.btn--roll')
  .addEventListener('click', function () {
    let dice = Math.trunc(Math.random() * 6 + 1);
    diceElement.src = `dice-${dice}.png`;
    diceElement.classList.remove('hidden');

    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player1El.classList.toggle('player--active');
      player2El.classList.toggle('player--active');
    }

    console.log(dice);
  });
