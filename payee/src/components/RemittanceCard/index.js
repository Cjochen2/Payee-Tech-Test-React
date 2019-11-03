import React from "react";
import "./style.css";

function RemittanceCard(props) {
    return (
        <div className="remCard">

            <div className="payorName row">
                <div className="client col-7 text-center"><strong>Client:</strong> {props.payorName}</div> <div className="clientId col-5 text-center"><strong>Id:</strong> {props.id}</div>
            </div>

            <div className="payorContent">

                <div className="payorInfo">
                    <strong>InvoiceNo:</strong> {props.invoice}
                </div>

                <div className="description">
                    <p>{props.desc}</p>
                </div>

                <div className="total text-right">
                    <strong>Total:</strong> {props.amount}
                </div>

            </div>

        </div>
    );
}

export default RemittanceCard;
