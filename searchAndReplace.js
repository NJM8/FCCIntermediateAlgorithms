// perform a search and replace on a string, replace the word before with the word after, maintain the original words case

function myReplace(str, before, after) {
  return before[0] === before[0].toUpperCase() ? 
    str.replace(before, after[0].toUpperCase() + after.slice(1)) : 
    str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
