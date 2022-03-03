const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "react_quiz_db",
});

// Membuat akun player baru
app.post("/create", (req, res) => {
  const name = req.body.name;

  db.query(
    "INSERT INTO player (name) VALUES (?)",
    [name],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data berhasil ditambahkan");
      }
    }
  );
});

app.get("/player", (req, res) => {
  db.query("SELECT * FROM player", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.put("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  db.query(
    "UPDATE player SET name = ? WHERE id = ?",
    [name, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data berhasil diubah");
      }
    }
  );
});

app.delete("/delete", (req, res) => {
  const id = req.body.id;
  db.query("DELETE FROM player WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Data berhasil dihapus");
    }
  });
});

app.listen(3001, () => {
  console.log("Server run at 3001");
});
