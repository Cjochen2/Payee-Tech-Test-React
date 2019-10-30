import React from "react";
import "./style.css";

function PayeeCard(props) {
  return (
    <div className="payeeCard">
      <div className="payeeName">
        {props.payeeName}
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Phone:</strong> {props.phone}  //  <strong>Fax:</strong> {props.fax}
          </li>
          <li>
            Attention: {props.attention}
          </li>
          <li>
            {props.date}
          </li>
          <li>
            {props.street}
          </li>
          <li>
            {props.city}, {props.providence}, {props.zip}
          </li>
          <li>
            {props.country}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PayeeCard;
