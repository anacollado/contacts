import React from 'react';
import ContactRow from './ContactRow.jsx'

const Table = (props) => {
  const { contacts } = props;
  return (
    <div className="table">
      <div className="table-header">
        <div className="table-row">
          <div className="table-cell">Contact</div>
          <div className="table-cell">Total Value</div>
          <div className="table-cell">Location</div>
          <div className="table-cell">Deals</div>
          <div className="table-cell">Tags</div>
        </div>
      </div>
      <div className="table-row-group">
        {contacts.map(contact => <ContactRow contact={contact} key={contact.id} />)}
      </div>
    </div>
  );
}

export default Table;