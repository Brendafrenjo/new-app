import React from "react";

export default function Products() {
  return (
    <div className="Products mb-5">
      <h1 className="mt-5 mb-3">Latest Products</h1>
      <hr />
      <a href="/" class="btn btn-outline-dark me-2 mt-2">
        All
      </a>
      <a href="/" class="btn btn-outline-dark me-2 mt-2">
        Men's Clothing
      </a>
      <a href="/" class="btn btn-outline-dark me-2 mt-2">
        Women's Clothing
      </a>
      <a href="/" class="btn btn-outline-dark me-2 mt-2">
        Jewelery
      </a>
      <a href="/" class="btn btn-outline-dark mt-2">
        Electronics
      </a>
    </div>
  );
}
