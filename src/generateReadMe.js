const fs = require('fs');
const writeFile = (readContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readme.md', readContent, err => {
            if (err) {
                reject(err);
                return;
            } else {
                resolve({
                    ok: true,
                    message: 'ReadMe Created!'
                });
            };
        });
    })
    
})

module.exports = { writeFile };