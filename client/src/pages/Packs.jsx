import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Packs = () => {
  const [packs, setPacks] = useState([]);

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
        <Link to="/add">Adicionar Novo Produto</Link>
      </button>
    </div>
  );
};

export default Packs;
