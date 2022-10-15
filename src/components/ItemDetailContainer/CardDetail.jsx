import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import "./itemdetail.css";


function CardDetail({ curso }) {

  return (
    <div className="cardDetail">
      <div className="cardDetail_img_detail">
        <img src={curso.img} alt={curso.title} />
      </div>
      <FlexWrapper>
        <div className="cardDetail_detail">
          <h2>{curso.title}</h2>
          <h4 className="cardDetail_muteD">{curso.category}</h4>
          <h3>$ {curso.price}</h3>
          <hr />
          <p>{curso.detail}</p>
        </div>
      </FlexWrapper>
    </div>
  );
}

export default CardDetail;
