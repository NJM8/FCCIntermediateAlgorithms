// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str.replace(/\s/g, '-').replace(/_/g, '-').split(/(?=[A-Z])/).join('-').replace(/--/g, '-').toLowerCase();
}


console.log(spinalCase("This Is Spinal Tap"));
console.log("Expected: this-is-spinal-tap\n");

console.log(spinalCase("thisIsSpinalTap"));
console.log("Expected: this-is-spinal-tap\n");

console.log(spinalCase("The_Andy_Griffith_Show"));
console.log("Expected: the-andy-griffith-show\n");

console.log(spinalCase("Teletubbies say Eh-oh"));
console.log("Expected: teletubbies-say-eh-oh\n");

console.log(spinalCase("AllThe-small Things"));
console.log("Expected: all-the-small-things\n");


