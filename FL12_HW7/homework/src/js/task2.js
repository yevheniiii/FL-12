const MIN_NUMBER = 0;
let maxNumber = 8;
const MAX_NUMBER_COEF = 4;
const PRIZE_COEF_INCREASE = 2;
let FIRST_ATTEMPT_PRIZE = 100;
let SECOND_ATTEMPT_PRIZE = 50;
let THIRD_ATTEMPT_PRIZE = 25;
let prizes = [FIRST_ATTEMPT_PRIZE, SECOND_ATTEMPT_PRIZE, THIRD_ATTEMPT_PRIZE];
let gameNumberRandom =
  Math.floor(Math.random() * (maxNumber - MIN_NUMBER + 1)) + MIN_NUMBER;
let userNumber;
const ATTEMPTS = 3;
let totalPrize = 0;
let userAttempts = 3;

let startGame = confirm('Do you want to play a game?');

if (!startGame) {
  alert('You did not become a billionaire, but can.');
} else {
  for (let i = 0; i < ATTEMPTS; i++) {
    userNumber = prompt(
      `Choose a roulette pocket number from 0 to ${maxNumber}
       Attempts left: ${userAttempts}
       Total prize: ${totalPrize}$
       Possible prize on current attempt: ${prizes[i]}$`
    );
    if (!userNumber) {
      break;
    }
    userAttempts -= 1;
    if (Number(userNumber) === gameNumberRandom) {
      totalPrize += prizes[i];
      startGame = confirm(
        `Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`
      );
      if (!startGame) {
        break;
      } else {
        i = 0 - 1;
        maxNumber = maxNumber + MAX_NUMBER_COEF;
        gameNumberRandom =
          Math.floor(Math.random() * (maxNumber - MIN_NUMBER + 1)) + MIN_NUMBER;
        userAttempts = ATTEMPTS;
        FIRST_ATTEMPT_PRIZE *= PRIZE_COEF_INCREASE;
        SECOND_ATTEMPT_PRIZE *= PRIZE_COEF_INCREASE;
        THIRD_ATTEMPT_PRIZE *= PRIZE_COEF_INCREASE;
        prizes = [
          FIRST_ATTEMPT_PRIZE * PRIZE_COEF_INCREASE,
          SECOND_ATTEMPT_PRIZE * PRIZE_COEF_INCREASE,
          THIRD_ATTEMPT_PRIZE * PRIZE_COEF_INCREASE
        ];
      }
    }
    if (i === ATTEMPTS - 1 && Number(userNumber) !== gameNumberRandom) {
      alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
      startGame = confirm('Do you want to play again?');
      if (!startGame) {
        break;
      } else {
        i = 0 - 1;
        maxNumber = maxNumber + MAX_NUMBER_COEF;
        gameNumberRandom =
          Math.floor(Math.random() * (maxNumber - MIN_NUMBER + 1)) + MIN_NUMBER;
        userAttempts = ATTEMPTS;
        FIRST_ATTEMPT_PRIZE *= PRIZE_COEF_INCREASE;
        SECOND_ATTEMPT_PRIZE *= PRIZE_COEF_INCREASE;
        THIRD_ATTEMPT_PRIZE *= PRIZE_COEF_INCREASE;
        prizes = [
          FIRST_ATTEMPT_PRIZE * PRIZE_COEF_INCREASE,
          SECOND_ATTEMPT_PRIZE * PRIZE_COEF_INCREASE,
          THIRD_ATTEMPT_PRIZE * PRIZE_COEF_INCREASE
        ];
      }
    }
  }
}
