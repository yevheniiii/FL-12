const convert = (...args) => {
  let result = [];
  for (let x = 0; x < args.length; x++) {
    if (typeof args[x] === 'string') {
      result.push(Number(args[x]));
    } else {
      result.push(String(args[x]));
    }
  }
  return result;
};

convert('1', '2', '3', '4');

