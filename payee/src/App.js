import React, {Component} from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import PayeeCard from './components/PayeeCard';
import payees from './payee.json';


class App extends Component {

  state = {
    payees,
    currentPage: 1,
    payeesPerPage: 2
  };

handleClick(event) {
  this.setState({
    currentPage: Number(event.target.id)
  })
}  

  render(){
    const {payees, currentPage, payeesPerPage} = this.state;

    const indexOfLastPayee = currentPage * payeesPerPage;
    const indexOfFirstPayee = indexOfLastPayee - payeesPerPage;
    const currentPayees = payees.slice(indexOfFirstPayee, indexOfLastPayee);

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(payees.length / payeesPerPage); i++) {
      pageNumbers.push(i);
    };

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <p
          key={number}
          id={number}
          onClick={this.handleClick.bind(this)}
        >
          {number}
        </p>
      );
    });
  
  return (
    <Wrapper>
      <Title>Payee Information</Title>
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
        providence={client.Payee.StateOrProvidence}
        country={client.Payee.Address.Country}
        zip={client.Payee.Address.PostalCode}
        />
      ))}
      <div>
        <ul id='pageNumbers'>
          {renderPageNumbers}
        </ul>
      </div>
      
    </Wrapper>
  );
}
}

export default App;
