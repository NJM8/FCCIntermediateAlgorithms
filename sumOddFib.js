// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.


function sumFibs(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  let fibArray = [1, 1];
  let fib;
  let sum = 2;

  for (let i = 0; i < num; i++) {
    fib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    fibArray.push(fib);
    if (fib > num) {
      break;
    }
    if (fib % 2 === 1) {
      sum += fib;
    }
  }

  return sum;
}

console.log(sumFibs(75025));

