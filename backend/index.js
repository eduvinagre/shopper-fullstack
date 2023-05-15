import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yayaquetem",
  database: "shopper",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.get("/shopper", (req, res) => {
  const q = "SELECT * FROM shopper.products, shopper.packs;";
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
    "INSERT INTO shopper.products (`product_code`,`name`,`cost_price`,`sales_price`, `new_price`) VALUES (?)";
  const values = [
    req.body.code,
    req.body.name,
    req.body.cost_price,
    req.body.sales_price,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Produtos foram criados");
  });
});

app.post("/shopper", (req, res) => {
  const q =
    "INSERT INTO shopper.packs (`id`,`pack_id`,`product_id`,`qty`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.pack_id,
    req.body.product_id,
    req.body.qty,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Packs foram criados");
  });
});

app.listen(8800, () => {
  console.log("Connected to backend");
});
