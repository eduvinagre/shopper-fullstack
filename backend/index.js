import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yayaquetem",
  database: "shopper",
});

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.get("/shopper", (req, res) => {
  const q = "SELECT * FROM shopper.current_products;";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend");
});
