import React, { useState, useEffect } from "react";


export default function Products() {
  const [productType, setProductType] = useState("all");
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [productType]);

  function filterProduct() {
    
  }

  function showProducts() {
    return (
      <div>
        <button
          onClick={() => filter(data)}
          className="btn btn-outline-success me-2 mt-2"
        >
          All
        </button>
        <button
          onClick={() => filterProduct("men's clothing")}
          className="btn btn-outline-success me-2 mt-2"
        >
          Men's Clothing
        </button>
        <button
          onClick={() => filterProduct("women's clothing")}
          className="btn btn-outline-success me-2 mt-2"
        >
          Women's Clothing
        </button>
        <button
          onClick={() => filterProduct("jewelery")}
          className="btn btn-outline-success me-2 mt-2"
        >
          Jewelery
        </button>
        <button
          onClick={() => filterProduct("electronics")}
          className="btn btn-outline-success mt-2"
        >
          Electronics
        </button>
        <h1>{productType}</h1>
        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </div>
    );
  }

  return (
    <div className="Products mb-5">
      <div className="container">
        <h1 className="mt-5 mb-3">Latest Products</h1>
        <hr />
        <div>{showProducts()}</div>
      </div>
    </div>
  );
}
