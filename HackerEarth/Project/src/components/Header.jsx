import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../App";

function Header() {
  const { headerState, setHeaderState } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUpClick = (e) => {
    e.preventDefault();
    navigate("/contact");
  };

  const handleBusinessClick = (e) => {
    e.preventDefault();
    navigate("/business");
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleProductsClick = (e) => {
    e.preventDefault();
    navigate("/products");
  };

  return (
    <div className="header">
      <div className="ham">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="#000000"
          fill="none"
        >
          <path
            d="M4 5L20 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12L20 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 19L20 19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {headerState === "type1" ? (
        <div
          id="type1"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <a href="/contact" onClick={handleSignUpClick}>
            CONTACT
          </a>
          <a href="/login" onClick={handleLoginClick}>
            LOGIN
          </a>
        </div>
      ) : (
        <div
          id="type2"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginRight: "10px",
            gap: "10px",
          }}
        >
          <Link to="/">HOME</Link>
          <a href="/products" onClick={handleProductsClick}>
            PRODUCTS
          </a>
          <a href="/business" onClick={handleBusinessClick}>
            BUSINESSES
          </a>
          <Link to="/cart">CART</Link>
          <Link to="/about">ABOUT</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
