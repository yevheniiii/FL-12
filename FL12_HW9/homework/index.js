const convert = (...args) => {
  let result = [];
  for (let x = 0; x < args.length; x++) {
    if (typeof args[x] === 'string') {
      result.push(parseInt(args[x]));
    } else {
      result.push(String(args[x]));
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

executeforEach([1, 2, 3], function(el) {
  console.log(el * 2);
});

let mapArray = (arr, func) => {
  return executeforEach(arr, func);
};

mapArray([2, '5', 8], function(el) {
  return parseInt(el) + 3;
});

////
////
////

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

makeListFromRange([2, 7]);

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
