import React from 'react';
import Table from './Table.jsx';
import '../styles/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contacts: []};
    this.getAllContacts = this.getAllContacts.bind(this);
  }

  getAllContacts() {
    fetch('/contacts')
    .then(response => {
      return response.json();
    })
    .then(contacts => {
      this.setState({contacts});
    })
  }

  componentDidMount() {
    this.getAllContacts();
  }

  render() {
    console.log(this.state.contacts)
    return (
      <Table contacts={this.state.contacts}/>
    );
  }
}

export default App;