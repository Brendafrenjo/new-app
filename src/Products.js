import React, { useState, useEffect } from "react";

export default function Products() {
  const [productType, setProductType] = useState("all");
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  async function getProducts() {
    setLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products`);
    if (componentMounted) {
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
    return () => {
      componentMounted = false;
    };
  }, []);

  function filterProduct(category) {
    const updatedList = data.filter((x) => x.category === category);
    setFilter(updatedList);
  }

  function showProducts() {
    return (
      <div>
        <button
          onClick={() => setFilter(data)}
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
        {filter.map((product, index) => {
          <div className="col-md-3 mb-4" key={index}>
            <div className="card">
              <img
                class="card-img-top"
                src={product.image}
                alt={product.title}
              />
              <div class="card-body">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text">
                  {product.price}
                </p>
                <a href="#" class="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>;
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
