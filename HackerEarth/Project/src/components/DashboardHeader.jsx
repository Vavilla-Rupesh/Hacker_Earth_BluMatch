import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../App";

function DashboardHeader() {


  return(
    <div className="dashboard-header">
      <Link  to="/Dashboard" >Dashboard</Link>
      <Link  to="/Business-products" >products</Link>
      <Link  to="/Add-products" >Add Products</Link>
      <Link  to="/" >logout</Link>
    </div>
  );
}

export default DashboardHeader;
