
const path = require('path');
const { readdir } = require('fs/promises');

async function read() {
   await readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true })
      .then(data => {
         data.forEach(element => {
            if (element.isFile()) {
               console.log(`${element.name.replace(path.extname(element.name), '')} - ${path.extname(element.name).slice(1)}`);
            }
         })

      })
}

read()