/* eslint strict: ["off"] */

'use strict';
const componentsMapper = require('../utils/components-mapper');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        componentsMapper(value);
        return true;
      },
    },
  ],
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: '../src/lib/{{properCase name}}/index.tsx',
        templateFile: './component/class.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/lib/{{properCase name}}/styles.tsx',
        templateFile: './component/styles.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/lib/{{properCase name}}/README.md',
        templateFile: './component/README.md.hbs',
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
