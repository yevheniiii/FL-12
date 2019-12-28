let a = prompt('Enter number for a');

let b = prompt('Enter number for b');

let c = prompt('Enter number for c');

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('Input values should be ONLY numbers');
} else if (a === '0' || b === '0' || c === '0') {
  alert('A triangle must have 3 sides with a positive definite length');
} else if (a < '0' || b < '0' || c < '0') {
  console.log('Triangle doesn’t exist');
  alert('Triangle doesn’t exist');
} else if (a === b && b === c) {
  console.log('Equalateral');
} else if (a === b || b === c || a === c) {
  console.log('Isosceles');
} else {
  console.log('Scalene!');
}
