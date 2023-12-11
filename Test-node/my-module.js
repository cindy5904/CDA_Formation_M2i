const fs = require('fs');
const path = require('path');

module.exports = function filterDir(fil, ext, callback ){
    fs.readdir(fil, (err, list) => {
        if (err) {
            return callback(err);
        }
        
        const filtre = list.filter(item => path.extname(item) === `.${ext}`);
        callback(null, filtre);
    })
    }        
            
          
            
        
   
