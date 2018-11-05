const fs = require('fs');
const path = require('path');
const pageComponents = fs.readdirSync(path.join(__dirname, '../../src/components'));
const components = pageComponents;
function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;