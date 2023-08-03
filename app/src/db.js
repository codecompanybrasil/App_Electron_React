const Database = require("better-sqlite3");
const path = require("path");
// const sqlite3 = require("sqlite3");

// let dbPath;
// if (process.env.NODE_ENV === "development") {
//     dbPath = path.join(__dirname, "..", "build", "banco.db");
// } else {
//     const userDataPath = app.getPath("userData");
//     dbPath = path.join(userDataPath, "banco.db");
// }
let dbPath = "banco.db";

const db = new Database(dbPath);

//const db = new Database(path.join(__dirname, "..", "build", "banco.db"))
// const db = new sqlite3.Database("build/banco.db");

function getRecentFiles() {
    const query = "SELECT * FROM vistosRecentemente";

    // console.log("uu\n")
    // console.log(userDataPath)
    // console.log("uu\n")

    const rows = db.prepare(query).all();
    return rows;

    // return new Promise((res, rej) => {
    //     db.all(query, [], (err, rows) => {
    //         if (err) {
    //             rej(err);
    //         } else {
    //             res(rows)
    //         }
    //     });
    // })
}

function addRecentFiles(nome) {
    //Alerta de SQL Injection ksks
    const query = `INSERT INTO vistosRecentemente (nome) VALUES (?)`;

    db.prepare(query).run(nome);

    // db.run(query, [nome]);
}

// // getRecentFiles()
// //     .then((res) => {
// //         console.log(res)
// //     })

// console.log(getRecentFiles())

module.exports = {
    getRecentFiles,
    addRecentFiles,
};
