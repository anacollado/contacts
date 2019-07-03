import React from 'react';
import {extractInitials, formatMoney} from '../utilities/formatters.js'


const ContactRow = (props) => {
  const { contact } = props;
  return (
    <div className="table-row">
      <div className="table-cell name-cell">
        <div className="initials-circle abs-position-v-center">
          <div className="initials abs-position-v-center">{extractInitials(contact.name)}</div>
        </div>
        <div className="name-text abs-position-v-center">{contact.name}</div>
      </div>
      <div className="table-cell">{formatMoney(contact.totalValue)}</div>
      <div className="table-cell">{contact.location}</div>
      <div className="table-cell deals-cell">{contact.deals}</div>
      <div className="table-cell">{contact.tags.join(', ')}</div>
    </div>
  );
}

export default ContactRow;