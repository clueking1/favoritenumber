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
    change: function(num) {
        
            con.query('SELECT perc from numbers where pickNum = ?',[num], (err, results) => {
                if (err) {
                    throw err
                }
                console.log(Number(results[0].perc) - 1)
            })
        
        }
        
   

}

module.exports = getdata