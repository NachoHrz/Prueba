var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Usuario",
  password: "Contraseña"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE Subtitulos", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});