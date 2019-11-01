import React from "react";
import "./style.css";

function PayeeCard(props) {
  return (
    <div className="payeeCard">
      <div className="payeeName">
        {props.payeeName}
      </div>
      <div className="content">
        <div className="phoneInfo">
          <strong>Phone:</strong> {props.phone}  //  <strong>Fax:</strong> {props.fax}
          </div>
        <address>
         <strong>Attention:</strong> {props.attention}      <strong>Date:</strong> {props.date}<br></br>
         {props.street}<br></br>
         {props.city}, {props.province}, {props.zip}<br></br>
         {props.country}<br></br>

         </address>   
      </div>
    </div>
  );
}

export default PayeeCard;
