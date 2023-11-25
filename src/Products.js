import React, { useState, useEffect } from "react";
import { Rings } from "react-loader-spinner";
import "./Products.css";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  function Loading() {
    return (
      <div>
        <Rings
          height="80"
          width="80"
          color="#4fa94d"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </div>
    );
  }

  function filterProduct(cat) {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }

  function ShowProducts() {
    return (
      <div>
        <div className="buttons flex-container">
          <div className="box">
            <div className="buttons-wrapper">
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
            </div>
          </div>
        </div>
        {filter.map((product, index) => (
          <div className="col-md-3 mb-4 product-card" key={index}>
            <div className="card">
              <img
                className="card-img-top product-image"
                src={product.image}
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text lead fw-bold product-price">
                  {product.price}
                </p>
                <a href="#" className="btn btn-outline-dark">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="Products mb-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5 mb-3">Latest Products</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="row justify-content-center mb-5 pb-5">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}
