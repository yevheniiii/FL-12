const makeNumber = string => {
  return string
    .split('')
    .filter(x => !isNaN(x))
    .join('');
};

makeNumber();
