const fs = require('fs');
const path = require('path');
let ext = process.argv[3];
let fil = process.argv[2];
fs.readdir(fil, (err, list) => {
        try {
            
            const tab = list.filter(item => path.extname(item) === '.' + ext);
            tab.forEach(item => console.log(item));
        } catch (err)  {
            console.log(err);
        }
    }
);