const fs = require('fs');
const config = require('./src/properties.json');
const max = 10;
const step = 0.25;
const scale = Array(max).fill().map((_,i) => (i*step).toString());
const shorthands = Object.keys(config);

const contents = shorthands.map(property => {
  const propertiesArray = config[property];
  return scale.map(step => {
    return `.${property}${step.replace('.', '-')} {\n${propertiesArray.map(cssProperty => {
      return `\t${cssProperty}: ${step}rem;`;
    }).join('\n')}\n}`;
  }).join('\n\n');
}).join('\n\n');

const dist = './dist';

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist);
}

fs.writeFile('./dist/properties.css', contents, err => {
  if (err) return console.log(err);
  return console.log(`Properties CSS was built!`);
});
