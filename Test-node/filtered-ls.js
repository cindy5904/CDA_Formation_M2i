const filterDir = require('./my-module');
let ext = process.argv[3];
let fil = process.argv[2];

filterDir(fil, ext, (err, list) => {
    if (err) {
        return console.log(err);
    } else {
        list.forEach(item => console.log(item));
    }
    

    
})

