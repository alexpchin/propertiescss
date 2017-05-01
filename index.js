const fs = require('fs');
const properties = require('./src/properties.json');
const max = 64;
const step = 0.25;
const scale = Array(max).fill().map((_,i) => (i*step).toString());
const shortPropertiesAsClasses = Object.keys(properties);

const output = shortPropertiesAsClasses.map(property => {
  const title = `/* ${property} classes */\n\n`;

  const classes = scale.map(step => {
    const selector = `.${properties[property]}--${step.replace('.', '-')}`;
    return `${selector} {\n\t${property}: ${step}rem;\n}`;
  }).join('\n\n');

  return `${title}${classes}`;
});

const dist = './dist';

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist);
}

fs.writeFile('./dist/properties.css', output, err => {
  if (err) return console.log(err);
  console.log(`Properties CSS was built!`);
});
