const fs = require('fs');
const path = require('path');
const componentGenerator = require('./component/index.js');

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.addHelper('directory', comp => `components/${comp}`);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
