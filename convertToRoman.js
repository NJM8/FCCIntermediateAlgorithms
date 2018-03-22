// convert any number to a roman number

const units = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
  5000: 'V',
  10000: 'X'
}

function convertToRoman(num) {
  let numArray = num.toString().split('').map(int => Number(int)).reverse();
  let results = [];
  numArray.forEach(num => results.push(''));
  let decimalLength = 1;
  let smUnit;
  let mdUnit;
  let lgUnit;

  for (let i = 0; i < numArray.length; i++) {
    switch (decimalLength) {
      case 1:
        smUnit = units[1];
        mdUnit = units[5];
        lgUnit = units[10];
        break;
      case 2:
        smUnit = units[10];
        mdUnit = units[50];
        lgUnit = units[100];
        break;
      case 3:
        smUnit = units[100];
        mdUnit = units[500];
        lgUnit = units[1000];
        break;
      case 4:
        smUnit = units[1000];
        mdUnit = units[5000];
        lgUnit = units[10000];
        break;
    }

    let thisNum = numArray[i];

    if (thisNum < 4) {
      for (let j = 0; j < thisNum; j++) {
        results[i] += smUnit;
      }
    } else if (thisNum === 4) {
      results[i] = `${smUnit}${mdUnit}`;
    } else if (thisNum === 5) {
      results[i] = `${mdUnit}`;
    } else if (thisNum > 5 && thisNum < 9) {
      results[i] += mdUnit;
      for (let j = 0; j < thisNum % 5; j++) {
        results[i] += smUnit;
      }
    } else if (thisNum = 9) {
      results[i] = `${smUnit}${lgUnit}`;
    }
    decimalLength += 1;
  }

 return results.reverse().join('');
}

console.log(convertToRoman(36));
console.log(convertToRoman(1023));
console.log(convertToRoman(99));
console.log(convertToRoman(649));

