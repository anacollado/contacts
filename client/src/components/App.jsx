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
      console.log(contacts);
      this.setState({contacts});
    })
  }

  componentDidMount() {
    this.getAllContacts();
  }

  render() {
    return (
      <Table contacts={[]}/>
    );
  }
}

export default App;