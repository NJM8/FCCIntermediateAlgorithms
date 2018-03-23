// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  return arr.every(element => !Array.isArray(element)) ? arr :
    steamrollArray(arr.reduce((result, element) => {
      Array.isArray(element) ? element.forEach(element => result.push(element)) : result.push(element);
      return result;
    }, []));
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

