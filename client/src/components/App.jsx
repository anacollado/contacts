import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getAllContacts = this.getAllContacts.bind(this);
  }

  getAllContacts() {
    fetch('/contacts')
    .then(response => {
      return response.json();
    })
    .then(contacts => {
      console.log(contacts);
    })
  }

  componentDidMount() {
    this.getAllContacts();
  }

  render() {
    return (
      <h1>Hello world</h1>
    )
  }
}

export default App;