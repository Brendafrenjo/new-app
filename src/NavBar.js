import React from "react";

export default function NavBar() {
  return (
    <div className="NavBar">
      <nav class="navbar navbar-expand-lg bg-white navbar-light bg-light">
        <a class="navbar-brand" href="/">
          E-Commerce
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
          <a class="btn btn-outline-dark me-2" href="/">
            {" "}
            <i class="fa-solid fa-arrow-right-to-bracket me-1"></i>Login
          </a>
          <a class="btn btn-outline-dark me-2" href="/">
            <i class="fa-solid fa-user-plus me-2"></i>Register
          </a>
          <a class="btn btn-outline-dark" href="/">
            <i class="fa-solid fa-cart-shopping me-2"></i>Cart
          </a>
        </div>
      </nav>
    </div>
  );
}
