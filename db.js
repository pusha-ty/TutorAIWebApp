const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/tutoraidb.sqlite');

let sql = `SELECT * FROM USER WHERE username=? and password=?`;


function getRow(sql, values){
    return new Promise((resolve,reject) =>{  // inputs here are functions
        db.get(sql, ['tyjmr','1234'], (err, row) => {
            if (err) {
              reject(err);
            }else{
              resolve(row);
            }
        });
    })
}

async function getRowTest(){
    let row = await getRow(sql, ['tyjmr', '1234'])
    console.log(row)  // now, this row will only execute when there is a value for row. No pending.
}

getRowTest().then(()=>console.log('Query complete.'))

  // close the database connection
  // db.close();

  module.exports = {getRow}