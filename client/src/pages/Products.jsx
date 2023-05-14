import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div>
      <h1>Produtos Shopper</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            {product.img && <img src={product.img} alt="" />}
            <h2>{product.product_name}</h2>
            <p>{product.product_code}</p>
            <span>{product.product_price}</span>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Adicionar Novo Produto</Link>
      </button>
    </div>
  );
};

export default Products;
