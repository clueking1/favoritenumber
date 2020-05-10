const con = require('../config/config');

const getdata = {
    numbers: function() {
        return new Promise(function(resolve, reject) {
            con.query('SELECT * from numbers', (err, results) => {
                if (err) {
                    reject(err)
                }
                resolve(results)
            })
        
        })
        
    },

}

module.exports = getdata