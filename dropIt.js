// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

// The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

// Return the rest of the array, otherwise return an empty array.


function dropElements(arr, func) {
  let index = 0;
  for (let i = 0; i < arr.length; i++){
    if (!func(arr[i])){
      index += 1;
    } else {
      break;
    }
  }
  return arr.slice(index);
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
