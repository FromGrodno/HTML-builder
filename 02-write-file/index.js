const fs = require('fs');
const path = require('path');
const { stdout, stdin } = process;

const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Привет, запишите в блокнот\n');
stdin.on('data', data => {
    fs.appendFile(
        path.join(__dirname, 'text.txt'),
        data,
        err => {
            if (err) throw err;
            if (data.toString().trim() == 'exit') {
                process.exit()
            }

        }
    );

});
process.on('SIGINT', () => {
    stdout.write('Удачи в изучении Node.js!')
    process.exit()
});
process.on('exit', () => {
    stdout.write('Удачи в изучении Node.js!')
});
