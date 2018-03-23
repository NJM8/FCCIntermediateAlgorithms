// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  return collection.every(data => {
    if (data.hasOwnProperty(pre)){
      if (data[pre] == false || data[pre] == null || data[pre] == undefined || Number.isNaN(data[pre])) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  });
}

console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));
