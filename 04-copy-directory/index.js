
const path = require('path');
const { readdir, mkdir, copyFile } = require('fs/promises');

async function createCopy() {
   await mkdir(path.join(__dirname, 'files-copy'), { recursive: true });
   await readdir(path.join(__dirname, 'files'))
      .then(data => {
         data.forEach(element => {
            copyFile(path.join(__dirname, 'files', element), path.join(__dirname, 'files-copy', element))

         });
      })
}

createCopy()

