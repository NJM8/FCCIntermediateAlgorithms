// translate the provided string to pig latin

function translatePigLatin(str) {
  let firstVowel = str.match(/[aeiou]/i).index;
  if (firstVowel === 0) {
    return `${str}way`;
  } else {
    let end = str.slice(0, firstVowel) + 'ay';
    return str.slice(firstVowel) + end;
  }
}

console.log(translatePigLatin("consonant"));
