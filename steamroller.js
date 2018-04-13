// Flatten a nested array. You must account for varying levels of nesting.

// submitted version using new array functions

// function steamrollArray(arr){
//   return arr.every(element => !Array.isArray(element)) ? arr :
//     steamrollArray(arr.reduce((result, element) => {
//       Array.isArray(element) ? element.forEach(element => result.push(element)) : result.push(element);
//       return result;
//     }, []));
// }

// making it more efficient

function steamrollArray(arr){
  let arrL = arr.length;
  for (let i = 0; i < arrL; i++) {
    if (Array.isArray(arr[i])) {
      let newArr = [];
      for (let j = 0; j < arrL; j++) {
        if (Array.isArray(arr[j])) {
          let subArr = arr[j];
          let subArrL = subArr.length;
          for (k = 0; k < subArrL; k++) {
            newArr.push(subArr[k]);
          }
        } else {
          newArr.push(arr[j]);
        }
      }
      return steamrollArray(newArr);
    }
  }

  return arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

