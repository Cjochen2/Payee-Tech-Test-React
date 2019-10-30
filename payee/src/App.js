import React, {Component} from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import PayeeCard from './components/PayeeCard';
import payees from './payee.json';


class App extends Component {

  state = {
    payees
  };
componentDidMount(){
  console.log(payees)
}
  render(){
  return (
    <Wrapper>
      <Title>Payee Information</Title>
      {this.state.payees.map(client => (
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
      
    </Wrapper>
  );
}
}

export default App;
