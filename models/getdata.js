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
        return new Promise(function(resolve, reject) {
            con.query('SELECT perc from numbers where pickNum = ?',[num], (err, results) => {
                if (err) {
                    reject(err)
                }
                resolve(Number(results[0].perc) - 1)
            })
        })
        
    },

    update: function(update, num) {
            if (update <= 0) {
                update = 0
            }
            con.query('UPDATE numbers SET perc = ? WHERE pickNum = ?', [update, num], (err, result) => {
                if (err) {
                    throw err
                }
            })
        
        
    }

}

module.exports = getdata


