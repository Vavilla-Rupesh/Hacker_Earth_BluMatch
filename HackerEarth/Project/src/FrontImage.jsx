import React from "react";
import ScrollMore from "./components/ScrollMore";
function FrontImage() {
  return (
    <div className="cover-image-div">
      <div className="cover-image"><img className="fish" src="/fishes.png" alt="" /> <img className="swirl" src="/faded.png" alt="" /></div>
      <div className="information">
        <h1>BLUMATCH</h1>
        <span className="tag-line">Connecting You to <span>Clean Water</span>   </span>
      </div>
      <ScrollMore />
    </div>
  );
}

export default FrontImage;
