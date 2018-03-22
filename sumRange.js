// You will be passed an array of two numbers, return the sum of these numbers plus all the numbers inbetween.

function sumAll(arr) {
  return arr.reduce((sum, element, index) => {
    if (index === 0) {
      if (element > arr[1]) {
        for (let i = element; i > arr[index + 1]; i--) {
          sum += i;
        }
        return sum;
      } else {
        for (let j = element; j < arr[index + 1]; j++) {
          sum += j;
        }
        return sum;
      }
    } else {
      sum += element;
      return sum;
    }
  }, 0);
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));