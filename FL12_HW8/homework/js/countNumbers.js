const makeNumber = string => {
  return string
    .split('')
    .filter(x => !isNaN(x))
    .join('');
};

const countNumbers = makeNumber => {
  let numbersObject = {};
  for (let i = 0; i < makeNumber.length; i++) {
    if (makeNumber[i] in numbersObject) {
      numbersObject[makeNumber[i]] += 1;
    } else {
      numbersObject[makeNumber[i]] = 1;
    }
  }
  return numbersObject;
};

countNumbers(makeNumber('333844444666888123'));
