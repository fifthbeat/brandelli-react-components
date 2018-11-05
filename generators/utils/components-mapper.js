const fs = require('fs');

const indexPath = 'src/index.tsx';

module.exports = componentName => {
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const componentImport = `\nimport ${componentName} from './components/${componentName}';`;
    const componentExport = `\nexport { ${componentName} }`;
    const indexFile = data + componentImport + componentExport;
    fs.open(indexPath, 'w', (err, fd) => {
      if (err) {
        console.log(err); // eslint-disable-line
      }

      fs.write(fd, indexFile, 0, indexFile.length, err => {
        if (err) {
          console.log(err); // eslint-disable-line
        }
      });
    });
  });
};
