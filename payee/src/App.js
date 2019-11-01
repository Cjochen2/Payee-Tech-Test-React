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
        <span
          key={number}
          id={number}
          onClick={this.handleClick.bind(this)}
        >
          {number}
        </span>
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
        province={client.Payee.Address.StateOrProvince}
        country={client.Payee.Address.Country}
        zip={client.Payee.Address.PostalCode}
        />
      ))}
      
      <div className="pagination">

          {renderPageNumbers}
        
      </div>
      
    </Wrapper>
  );
}
}

export default App;
