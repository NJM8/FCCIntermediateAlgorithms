// you are given a first element of each pair in a dna strand, return the proper pairs as a 2d array "A" - "T" and "G" - "C"


function pairElement(str) {
  return str.split('').map(letter => {
    switch (letter) {
      case 'G':
        return ['G', 'C'];
      case 'C':
        return ['C', 'G'];
      case 'A':
        return ['A', 'T'];
      case 'T':
        return ['T', 'A'];
    }
  });
}

console.log(pairElement("GCG"));
