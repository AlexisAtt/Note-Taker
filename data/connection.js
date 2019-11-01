var mysql = require("mysql");

var connection;

if (process.env.note_db) {
  connection = mysql.createConnection(process.env.note_db);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", 
    password: "", 
    database: "note_db"
  });
}

connection.config.typeCast = function(field, next) {
  if (field.type == "TINY" && field.length == 1) {
    return field.string() == "1"; // 1 = true, 0 = false
  }
  return next();
};

module.exports = connection;
