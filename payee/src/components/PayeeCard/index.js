import React from "react";
import "./style.css";

function PayeeCard(props) {
  return (

    <div className="payeeCard col-md-5 col-12">

      <div className="payeeName">
        {props.payeeName}
      </div>

      <div className="content">
        <div className="companyContact">
          <div className="row">
          <div className="attention col-md-8">
          <strong>Attention:</strong> {props.attention}
          </div>

          <div className="attention-date col-md-4">
          <strong>Date:</strong> {props.date}
          </div>
          </div>

          <div className="address">
          {props.street}<br></br>
          {props.city}, {props.province}, {props.zip}<br></br>
          {props.country}<br></br>
          </div>
          </div>
          <div className="phoneInfo">
            <strong>Phone:</strong> {props.phone}  //  <strong>Fax:</strong> {props.fax}
          </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default PayeeCard;
