/* eslint strict: ["off"] */

'use strict';
const componentsMapper = require('../utils/components-mapper');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'React.Component',
      choices: () => ['Stateless Function', 'React.Component'],
    },
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
    // Generate index.js and index.test.js
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './component/stateless.ts.hbs';
        break;
      }
      default: {
        componentTemplate = './component/class.ts.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../src/lib/{{properCase name}}/index.tsx',
        templateFile: componentTemplate,
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
