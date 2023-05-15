import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [packs, setPacks] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/shopper");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  useEffect(() => {
    const fetchAllPacks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/shopper");
        setPacks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPacks();
  }, []);

  return (
    <div>
      <h1>Produtos Shopper</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.code}>
            <h2>{product.name}</h2>
            <p>{product.product_code}</p>
            <p>R$ {product.cost_price}</p>
            <p>R$ {product.sales_price}</p>
            <p>R$ {product.new_price}</p>
          </div>
        ))}
      </div>
      <h1>Packs Shopper</h1>
      <div className="packs">
        {packs.map((pack) => (
          <div className="pack" key={pack.id}>
            <h2>{pack.id}</h2>
            <p>{pack.pack_id}</p>
            <p>{pack.product_id}</p>
            <p>{pack.qty}</p>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Adicionar Novo Preço</Link>
      </button>
    </div>
  );
};

export default Products;
