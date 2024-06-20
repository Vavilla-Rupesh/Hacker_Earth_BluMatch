import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Header2() {
  const navi = useNavigate();
  const handleSignUpClick = (e) => {
    e.preventDefault();
    navi("/signup");
  };
  const handleLoginClick = (e) => {
    e.preventDefault();
    navi("/login");
  };
  const handleBusinessClick = (e) => {
    e.preventDefault();
    navi("/login");
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
      <Link to="/">HOME</Link>
      <Link to="/about"></Link>
      <a href="/waterplants" onClick={handleBusinessClick}>
        BUSINESSES
      </a>
      <Link to="/products">PRODUCTS</Link>
    </div>
  );
}

export default Header2;
