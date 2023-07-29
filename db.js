const sqlite3 = require("sqlite3")

const db = new sqlite3.Database("banco.db")

function getRecentFiles(callback) {
    const query = "SELECT * FROM vistosRecentemente"


    db.all(query, [], (err, rows) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, rows)
        }
    })
}   

function addRecentFiles(nome, callback) {
    //Alerta de SQL Injection ksks
    const query = `INSERT INTO vistosRecentemente (nome) VALUES (?)`

    db.run(query, [nome], (err) => {
        if (err) {
            callback(err)
        }
    })
}


module.exports = {
    getRecentFiles, addRecentFiles
}