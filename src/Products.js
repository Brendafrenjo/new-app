import React, { useState } from "react";

export default function Products() {
  const [productType, setProductType] = useState("all");

  function showProducts() {}

  function searchProduct() {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  return (
    <div className="Products mb-5">
      <h1 className="mt-5 mb-3">Latest Products</h1>
      <hr />
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
      <h1>{productType}</h1>
      <div>{searchProduct()}</div>
    </div>
  );
}
