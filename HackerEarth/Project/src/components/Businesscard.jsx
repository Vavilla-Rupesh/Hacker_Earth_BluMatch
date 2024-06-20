import axios from "axios";
import React, { useEffect, useState } from "react";

function Businesscard(props) {
  return (
    <div className="business-card"  onClick={props.onClick}>
      <p className="details business_name">{props.name} </p>
      {/* <img src={props.image} alt="" /> */}
      <img src={"https://picsum.photos/200/300"} alt="Business_pic" className="pic"/>
      <p className="details">{props.location} </p>
      <p className="details">{props.qualityAssurance} </p>
      <p className="details">{props.contact} </p>
    </div>
  );
}

export default Businesscard;
