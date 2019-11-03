import React from "react";
import "./style.css";

function PaymentCard(props) {
    return (
        <div className="paymentCard">

            <div className="cardTitle">Card Information</div>

            <div className="cardNumber">
                <strong>PAN:</strong> {props.pan}
            </div>

            <div className="cardValidation row">
                <div className="col-6 text-center"><strong>Exp:</strong> {props.exp}</div>   <div className="col-6 text-center"><strong>CVV:</strong> {props.cvv}</div>
            </div>

        </div>
    );
}

export default PaymentCard;
