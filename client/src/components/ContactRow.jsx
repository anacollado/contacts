import React from 'react';

const ContactRow = (props) => {
  const { contact } = props;
  return (
    <div>
      <div>{contact.name}</div>
      <div>{contact.totalValue}</div>
      <div>{contact.location}</div>
      <div>{contact.deals}</div>
      <div>{contact.tags.join(', ')}</div>
    </div>
  );
}

export default ContactRow;