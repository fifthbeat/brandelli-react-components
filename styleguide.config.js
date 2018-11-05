const path = require('path');

module.exports = {
  components: 'src/components/**/index.tsx',
  // require: [
  //   // "global" setup + sass imports
  //   path.resolve(__dirname, 'styleguide/setup.ts'),
  // ],
  theme: {
    color: {
      link: 'DEEPSKYBLUE',
      linkHover: 'LIGHTSKYBLUE',
      sidebarBackground: 'WHITESMOKE',
    },
    fontFamily: {
      base: '"Source Sans Pro", "Roboto"',
    },
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
  showUsage: false,
};
