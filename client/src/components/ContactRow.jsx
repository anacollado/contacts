import React from 'react';
import {extractInitials, formatMoney} from '../utilities/formatters.js'

const getNameDisplayStr = (contact) => {
  return contact.firstName === '' && contact.lastName === '' ? '-' : contact.firstName + ' ' + contact.lastName;
}

const getTagsDisplay = (tags) => {
  return tags.length === 0 ? '-' : tags.join(', ');
}

const ContactRow = (props) => {
  const { contact } = props;
  return (
    <div className="table-row">
      <div className="table-cell name-cell">
        <div className="initials-circle abs-position-v-center">
          <div className="initials abs-position-v-center">{extractInitials(contact.firstName, contact.lastName)}</div>
        </div>
        <div className="name-text abs-position-v-center">{getNameDisplayStr(contact)}</div>
      </div>
      <div className="table-cell">{formatMoney(contact.totalValue)}</div>
      <div className="table-cell">{contact.locationStr === null ? '-' : contact.locationStr}</div>
      <div className="table-cell deals-cell">{contact.deals}</div>
      <div className="table-cell">{getTagsDisplay(contact.tags)}</div>
    </div>
  );
}

export default ContactRow;