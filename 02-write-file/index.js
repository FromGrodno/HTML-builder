const fs = require('fs');
const path = require('path');
/*
fs.writeFile(
    path.join(__dirname, 'note.txt'),
    'Hello world',
    (err) => {
        if (err) throw err;
        console.log('Файл был создан');
    }
);
*/
const { stdin, stdout } = process;
//stdin.on('data', data => stdout.write(data));
process.on('data', () => stdout.write('Удачи в изучении Node.js!'));