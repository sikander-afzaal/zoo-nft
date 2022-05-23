import React from "react";
import "./NftCard.css";
function NftCard({ img, desc, name, poster }) {
  return (
    <div className="wrapper-character">
      <video
        playsInline="playsinline"
        autoPlay
        muted
        loop
        src={img}
        poster={poster}
      />
      <div className="pop-div">
        <p className="pop-text">{desc}</p>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default NftCard;
