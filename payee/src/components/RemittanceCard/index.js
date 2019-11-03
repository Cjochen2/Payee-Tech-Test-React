import React from "react";
import "./style.css";

function RemittanceCard(props) {
  return (
    <div className="remCard">
      <div className="payorName">
        {props.payorName}
      </div>
      <div className="content">
        <div className="payorInfo">
          <strong>Id:</strong> {props.id}  //  <strong>InvoiceNo:</strong> {props.invoice}
          </div>
         <p>{props.desc}</p>
         {props.amount}
      </div>
    </div>
  );
}

export default RemittanceCard;
