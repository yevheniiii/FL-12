const FIRST_VALUE_TEST = 2;
const SECOND_VALUE_TEST = 3;
const THIRD_VALUE_TEST = 5;
const FOURTH_VALUE_TEST = 8;
const FIFTH_VALUE_TEST = 58;
const SIXTH_VALUE_TEST = 14;
const SEVENTH_VALUE_TEST = 48;
const YEAR_VALUE_TEST = 2019;
const MILLISECS_IN_DAY = 86400000;

let convert = (...args) => {
  let result = [];
  for (let x = 0; x < args.length; x++) {
    if (typeof args[x] === 'string') {
      result.push(parseInt(args[x]));
    } else {
      result.push(`${args[x]}`);
    }
  }
  return result;
};

convert('1', '2', '3', '4');

let executeforEach = (arr, func) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
};

executeforEach([1, FIRST_VALUE_TEST, SECOND_VALUE_TEST], function(el) {
  console.log(el * FIRST_VALUE_TEST);
});

let mapArray = (arr, func) => {
  return executeforEach(arr, func);
};

mapArray([FIRST_VALUE_TEST, '5', SECOND_VALUE_TEST], function(el) {
  return parseInt(el) + SECOND_VALUE_TEST;
});

let filterArray = (arr, func) => {
  let result = [];

  executeforEach(arr, function(el) {
    if (func(el)) {
      result.push(el);
    }
  });

  return result;
};

filterArray([FIRST_VALUE_TEST, THIRD_VALUE_TEST, FOURTH_VALUE_TEST], function(el) {
  return el % FIRST_VALUE_TEST === 0;
});

let flipOver = str => {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

flipOver('hey world');

let makeListFromRange = arr => {
  let result = [];
  let minNumber = 0;
  let maxNumber = 1;
  for (let i = 0; i < arr.length; i++) {
    if (minNumber < maxNumber) {
      minNumber = arr[i];
    } else {
      maxNumber = arr[i];
    }
  }

  for (let i = minNumber; i <= maxNumber; i++) {
    result.push(i);
  }
  return result;
};

makeListFromRange([FIRST_VALUE_TEST, FOURTH_VALUE_TEST]);

const actors = [
  {name: 'tommy', age: 36},
  {name: 'lee', age: 28}
];

let getArrayOfKeys = (actors, key) => {
  let names = [];
  executeforEach(actors, function(el) {
    names.push(el[key]);
  });
  return names;
};

getArrayOfKeys(actors, 'name');

let substitute = arr => {
  let result = [];

  mapArray(arr, function(el) {
    if (el < SIXTH_VALUE_TEST) {
      result.push('*');
    } else {
      result.push(el);
    }
  });
  return result;
};

substitute([FIFTH_VALUE_TEST, SIXTH_VALUE_TEST, SEVENTH_VALUE_TEST, FIRST_VALUE_TEST]);

const date = new Date(YEAR_VALUE_TEST, 0, FIRST_VALUE_TEST);

let getPastDay = (date, day) => {
  let dayConversion = day * MILLISECS_IN_DAY;
  let result = new Date(date.getTime() - dayConversion);
  return result.getDate();
};

getPastDay(date, 1);

let formatDate = date => {
  function addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  let yy = date.getFullYear();
  let hours = addZero(date.getHours());
  let min = addZero(date.getMinutes());

  let myDateString = yy + '/' + mm + '/' + dd + ' ' + hours + ':' + min;

  return myDateString;
};

formatDate(new Date('6/15/2018 09:15:00'));
