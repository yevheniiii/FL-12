let a = prompt('Enter number for a');
if (isNaN(a)) {
  console.log('Invalid input data');
}
let b = prompt('Enter number for b');
if (isNaN(b)) {
  console.log('Invalid input data');
}
let c = prompt('Enter number for c');
if (isNaN(c)) {
  console.log('Invalid input data');
}

if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
  let corePart = b * b - 4 * a * c;
  let denominator = 2 * a;

  if (a === '0') {
    console.log('x =', a);
  }
  if (a !== '0') {
    if (corePart == 0) {
      let answer = -b / denominator;
      console.log('x = ' + answer);
    } else if (corePart > 0) {
      let x1 = (-b + Math.sqrt(corePart)) / denominator;
      let x2 = (-b - Math.sqrt(corePart)) / denominator;
      console.log('x1 = ' + x1);
      console.log('x2 = ' + x2);
    } else {
      console.log('no solution');
    }
  }
}
//     if (part1 === 0 || part2 === 0) {
//       console.log('x = 0');
//     }
//     // if (part1 < 0 || part2 < 0) {
//     //   console.log('no solution');
//     // }
//     else {
//       console.log('x1 = ' + part1);
//       console.log('x2 = ' + part2);
//     }
//   } else {
//     console.log('no solution');
//   }
// }
