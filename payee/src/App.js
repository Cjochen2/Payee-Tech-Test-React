import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import PayeeCard from './components/PayeeCard';
import payees from './payee.json';
import PaymentCard from './components/PaymentCard';
import RemittanceCard from './components/RemittanceCard';



class App extends Component {

  state = {
    payees,
    currentPage: 1,
    payeesPerPage: 2
  };
  //updates the current page based on what pagination number is clicked
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  render() {

    // Logic for displaying payee cards
    const { payees, currentPage, payeesPerPage } = this.state;

    const indexOfLastPayee = currentPage * payeesPerPage;
    const indexOfFirstPayee = indexOfLastPayee - payeesPerPage;
    const currentPayees = payees.slice(indexOfFirstPayee, indexOfLastPayee);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(payees.length / payeesPerPage); i++) {
      pageNumbers.push(i);
    };

    // Logic for displaying page numbers
    const renderPageNumbers = pageNumbers.map(number => {
      let classes = this.state.currentPage === number ? 'active' : '';

      return (
        <span
          key={number}
          id={number}
          className={classes}
          onClick={this.handleClick.bind(this)}
        >
          {number}
        </span>
      );
    });

    return (
      <React.Fragment>
        <Title>Payee Information</Title>
        <Wrapper>
          <div className='row'>

            {currentPayees.map(client => (
              <PayeeCard
                payeeName={client.Payee.Name}
                attention={client.Payee.Attention}
                date={client.Payee.SubmissionDate}
                fax={client.Payee.Fax}
                phone={client.Payee.Phone}
                street={client.Payee.Address.Address1}
                street2={client.Payee.Address.Address2}
                city={client.Payee.Address.City}
                province={client.Payee.Address.StateOrProvince}
                country={client.Payee.Address.Country}
                zip={client.Payee.Address.PostalCode}
              >
                <PaymentCard
                  pan={client.Payment.PAN}
                  cvv={client.Payment.CVV}
                  exp={client.Payment.Exp}
                />
                <div className="remittance">Payor(s) Information</div>
                {client.Remittance.map(payor => (
                  <RemittanceCard
                    payorName={payor.PayorName}
                    id={payor.PayorId}
                    invoice={payor.InvoiceNo}
                    desc={payor.Description}
                    amount={payor.Amount}
                  />
                ))}

              </PayeeCard>
            ))}

          </div>
          <div className="row">
            <div className="pagination justify-content-center">
              {renderPageNumbers}
            </div>
          </div>

        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
