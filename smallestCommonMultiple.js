// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.


function smallestCommons(arr) {
  let numArray = (arr[0] > arr[1]) ? [arr[1], arr[0]] : [arr[0], arr[1]];
  for (let i = numArray[0] + 1; i < numArray[1]; i++) {
    numArray.push(i);
  }
  numArray.sort();
  let multiples = Array.from(numArray);

  while (!multiples.every(val => val === multiples[0])){
      let smallestIndex = multiples.indexOf(Math.min(...multiples));
      multiples[smallestIndex] += numArray[smallestIndex];
    }
    
    return multiples[0];
  }


console.log(smallestCommons([1,5]));
console.log(smallestCommons([5,1]));
console.log(smallestCommons([1,13]));
console.log(smallestCommons([23,18]));
