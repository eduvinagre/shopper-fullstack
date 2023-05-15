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
      <h1>Shopper</h1>
      <h2>Produtos Shopper</h2>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.code}>
            <h2>{product.name}</h2>
            <p>Código do Produto: {product.product_code}</p>
            <p>Preço de Custo: R$ {product.cost_price}</p>
            <p>Preço de Venda: R$ {product.sales_price}</p>
            <p>Novo Preço: R$ {product.new_price}</p>
          </div>
        ))}
      </div>
      <div className="btnAdd">
        <button>
          <Link to="/add">Adicionar Novo Preço</Link>
        </button>
      </div>
    </div>
  );
};

export default Products;
