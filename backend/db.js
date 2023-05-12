const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
fs.open("lovasklub.db", "w", function (err, file) {
  if (err) throw err;
  console.log("Succesful");
});

const db = new sqlite3.Database(
  "./lovasklub.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
    console.log("Connection database");
  }
);
db.run(
  "CREATE TABLE lovasok(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, age INTEGER  NOT NULL, phone TEXT NOT NULL, email TEXT UNIQUE NOT NULL )"
);
