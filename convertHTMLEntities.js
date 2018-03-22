// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

const entities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
};

function convertHTML(str) {
  const entitiesKeys = Object.keys(entities);
  entitiesKeys.forEach(key => {
    const regex = new RegExp(key, 'g');
    str = str.replace(regex, entities[key]);
  });
  return str;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Dolce & Gabbana"));
