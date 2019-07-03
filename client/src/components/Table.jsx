import React from 'react';
import ContactRow from './ContactRow.jsx'

const Table = (props) => {
  const { contacts } = props;
  return (
    <div>
      <div>
        <div>Contact</div>
        <div>Total Value</div>
        <div>Location</div>
        <div>Deals</div>
        <div>Tags</div>
      </div>
      {contacts.map(contact => <ContactRow contact={contact} key={contact.id} />)}
    </div>
  );
}

export default Table;