// given an array of objects, return only the objects that contain the keys and values of the source

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  const sourceValues = sourceKeys.map(key => source[key]);
  return collection.filter(obj => {
    const objKeys = Object.keys(obj);
    const hasKeys = sourceKeys.every(key => objKeys.includes(key));
    const objValues = objKeys.map(key => obj[key]);
    const hasValues = sourceKeys.every(key => sourceValues.includes(obj[key]));

    if (hasKeys && hasValues) {
      return obj;
    }
  });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));


