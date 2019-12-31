function addOne(x) {
  return x + 1;
}

const _pipe = (x, y) => arg => y(x(arg));

const pipe = (...ops) => ops.reduce(_pipe);

const finalResult = pipe(addOne, addOne, addOne);

finalResult(5);
