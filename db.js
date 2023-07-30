const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("banco.db");

function getRecentFiles() {
    const query = "SELECT * FROM vistosRecentemente";

    return new Promise((res, rej) => {
        db.all(query, [], (err, rows) => {
            if (err) {
                rej(err);
            } else {
                res(rows)
            }
        });
    })
}

function addRecentFiles(nome) {
  //Alerta de SQL Injection ksks
    const query = `INSERT INTO vistosRecentemente (nome) VALUES (?)`;

    db.run(query, [nome]);
}

module.exports = {
    getRecentFiles, addRecentFiles
}