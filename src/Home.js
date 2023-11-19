import React from "react";
import "./Home.css";
import Products from "./Products"

export default function Home() {
  return (
    <div className="Home">
      <div className="hero">
        <div class="card">
          <img
            class="card-img-top img-fluid"
            src="/Images/background-image.jpg"
            alt="Background"
          />
          <div class="card-img-overlay">
            <h1 class="card-title">Classy. Stylish. Fabulous</h1>
            <p class="card-text">
              <a href="/" class="btn btn-primary">
                Shop Now!
              </a>
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
