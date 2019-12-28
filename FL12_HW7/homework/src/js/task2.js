let start = confirm('Do you want to play a game?');
let minNumber = 0;
let maxNumber = 8;
const DOUBLE_FIRST_ATTEMPT_PRIZE = 200;
const FIRST_ATTEMPT_PRIZE = 100;
const SECOND_ATTEMPT_PRIZE = 50;
const THIRD_ATTEMPT_PRIZE = 25;
let prizes = [FIRST_ATTEMPT_PRIZE, SECOND_ATTEMPT_PRIZE, THIRD_ATTEMPT_PRIZE];
let gameNumberRandom =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let userNumber;
const ATTEMPTS = 3;
let continueGame;
let totalPrize = 0;
let userAttempts = 3;

if (!start) {
  alert('You did not become a billionaire, but can.');
} else {
  for (let i = 0; i < ATTEMPTS; i++) {
    userNumber = prompt(
      `Choose a roulette pocket number from 0 to 8
       Attempts left: ${userAttempts}
       Total prize: ${totalPrize}$
       Possible prize on current attempt: ${prizes[i]}$`
    );
    userAttempts -= 1;
    if (Number(userNumber) === gameNumberRandom) {
      if (i === 0) {
        totalPrize = prizes[0];

        continueGame = confirm(
          `Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`
        );
        break;
      } else if (i === 1) {
        totalPrize = prizes[SECOND_ATTEMPT_PRIZE];

        continueGame = confirm(
          `Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`
        );
        break;
      } else {
        totalPrize = prizes[THIRD_ATTEMPT_PRIZE];
        continueGame = confirm(
          `Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`
        );
        break;
      }
    }
    if (i === ATTEMPTS - 1 && Number(userNumber) !== gameNumberRandom) {
      alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
      continueGame = confirm('Do you want to play again?');
    }
  }
  if (continueGame) {
    const MAX_Number = 12;
    gameNumberRandom =
      Math.floor(Math.random() * (MAX_Number - minNumber + 1)) + minNumber;
    userAttempts = ATTEMPTS;
    prizes = [
      DOUBLE_FIRST_ATTEMPT_PRIZE,
      FIRST_ATTEMPT_PRIZE,
      SECOND_ATTEMPT_PRIZE
    ];
    for (let i = 0; i < ATTEMPTS; i++) {
      userNumber = prompt(
        `Choose a roulette pocket number from 0 to 12
         Attempts left: ${userAttempts}
         Total prize: ${totalPrize}$
         Possible prize on current attempt: ${prizes[i]}$`
      );
      userAttempts -= 1;
      if (Number(userNumber) === gameNumberRandom) {
        if (i === 0) {
          totalPrize += prizes[0];
          continueGame = confirm(
            `Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`
          );
          break;
        } else if (i === 1) {
          totalPrize += prizes[1];
          continueGame = confirm(
            `Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`
          );
          break;
        } else {
          totalPrize += prizes[THIRD_ATTEMPT_PRIZE];
          continueGame = confirm(
            `Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`
          );
          break;
        }
      }
      if (i === ATTEMPTS - 1 && Number(userNumber) !== gameNumberRandom) {
        alert(
          `Thank you for your participation. Your prize is: ${totalPrize}$`
        );
        continueGame = confirm('Do you want to play again?');
      }
    }
  }
}
