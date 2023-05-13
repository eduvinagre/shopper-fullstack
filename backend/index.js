import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yayaquetem",
  database: "shopper",
});

app.use(express.json());

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

app.post("/shopper", (req, res) => {
  const q =
    "INSERT INTO shopper.current_products (`product_name`,`product_code`,`product_price`,`img`) VALUES (?)";
  const values = [
    req.body.product_name,
    req.body.product_code,
    req.body.product_price,
    req.body.img,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Produtos foram criados");
  });
});

app.listen(8800, () => {
  console.log("Connected to backend");
});
