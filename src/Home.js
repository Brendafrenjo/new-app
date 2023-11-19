import React from "react";
import "./Home.css";
import Products from "./Products"

export default function Home() {
  return (
    <div>
      <div className="hero">
        <div class="card text-bg-dark">
          <img
            class="card-img-top img-fluid"
            src="/Images/fashion-background.jpg"
            alt="Background"
          />
          <div class="card-img-overlay">
            <h1 class="card-title">Classy. Stylish. Fabulous</h1>
              <a href="/" class="btn btn-light primary-button">
                Shop Now
              </a>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
