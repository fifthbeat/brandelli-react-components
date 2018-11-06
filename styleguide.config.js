const fs = require('fs');
const path = require('path');

const brc = name => path.resolve(__dirname, `src/lib/${name}/index.tsx`);

const brcComponents = fs.readdirSync(path.resolve(__dirname, 'src/lib')).map(brc);

module.exports = {
  components: 'src/lib/**/index.tsx',
  styleguideDir: 'docs',
  styles: {
    body: {
      fontFamily: '"Source Sans Pro", "Roboto"',
    },
  },
  theme: {
    color: {
      link: 'DEEPSKYBLUE',
      linkHover: 'LIGHTSKYBLUE',
      sidebarBackground: 'WHITESMOKE',
    },
    fontFamily: {
      base: '"Source Sans Pro", "Roboto"',
      monospace: ['Consolas', '"Liberation Mono"', 'Menlo', 'monospace'],
    },
    sidebarWidth: 320,
    buttonTextTransform: 'uppercase',
    fontSize: {
      base: 16,
      h1: 48,
      h2: 36,
      h3: 24,
      h4: 18,
      h5: 16,
      h6: 16,
    },
    borderRadius: 2,
  },
  propsParser: require('react-docgen-typescript').parse,
  title: 'Brandelli',
  exampleMode: 'expand',
  usageMode: 'expand',
  pagePerSection: true,
  sections: [
    {
      name: 'Components',
      components: () => brcComponents,
    },
  ],
};
