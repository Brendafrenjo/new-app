import React, { useState, useEffect } from "react";

export default function Products() {
  const [productType, setProductType] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [productType]);

  function showProducts() {
    return (
      <div>
        <button
          onClick={() => setProductType("all")}
          className="btn btn-outline-success me-2 mt-2"
        >
          All
        </button>
        <button
          onClick={() => setProductType("men's clothing")}
          className="btn btn-outline-success me-2 mt-2"
        >
          Men's Clothing
        </button>
        <button
          onClick={() => setProductType("women's clothing")}
          className="btn btn-outline-success me-2 mt-2"
        >
          Women's Clothing
        </button>
        <button
          onClick={() => setProductType("jewelery")}
          className="btn btn-outline-success me-2 mt-2"
        >
          Jewelery
        </button>
        <button
          onClick={() => setProductType("electronics")}
          className="btn btn-outline-success mt-2"
        >
          Electronics
        </button>
      </div>
    );
  }

  return (
    <div className="Products mb-5">
      <h1 className="mt-5 mb-3">Latest Products</h1>
      <hr />
      <div>{showProducts()}</div>
      <h1>{productType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}
