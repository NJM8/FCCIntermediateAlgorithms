// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
  if (arguments) {
    let args = Array.from(arguments);
    for (let i = 0; i < args.length; i++) {
      if (!Number.isInteger(args[i])) {
        return undefined;
      }
    }
    if (arguments.length === 2){
      return args[0] + args[1];
    } else {
      return function(num){
        if (!Number.isInteger(num)){
          return undefined;
        }
        return args[0] + num;
      }
    }
  } 
  return undefined;
}

console.log(addTogether(2)([3]));

// var sumTwoAnd = addTogether(2);

// console.log(sumTwoAnd);
// console.log(sumTwoAnd(3));
