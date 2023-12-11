// const fs = require('fs');

// const buffer = fs.readFileSync(process.argv[2]);

// const str = buffer.toString();

// const tab = str.split('\n');

// console.log(tab.length -1);
const fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
    try {
        if (!process.argv[2]) throw err;
        const str = data.toString();
        const tab = str.split('\n');
        console.log(tab.length -1);
    } catch (err)  {
        console.log(err);
    }
}
    );


