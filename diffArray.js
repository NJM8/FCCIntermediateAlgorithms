function diffArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((newArr, item) => {
    if (arr1.includes(item) && arr2.includes(item)) {
      return newArr;
    } else {
      newArr.push(item);
      return newArr;
    }
  }, []);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));