import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    const navbar = document.querySelector(".navbar");

    if (window.innerWidth >= 992) {
      navbar.classList.add("fixed-top");
    } else {
      navbar.classList.remove("fixed-top");
    }
  }

  function handleSize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <div className="NavBar">
      <div>{windowWidth}</div>
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
