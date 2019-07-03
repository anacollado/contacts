const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/../client/dist'));



const getAllContacts = () => {
  return axios('https://lamppoststudios.api-us1.com/api/3/contacts?include=geoIps.geoAddress,contactTags.tag,deals,contactData', {
    method: 'GET',
    headers: {
      //in production, would use environment var
      'Api-Token' : '0f7e5c9167768f6bb0a6e09e335ce464da7cb5e7008b989f0057266c26342424a4d8d3e5'
    }
  })
    .then(req => req.data);
}

const getDealTotalsByContactId = deals => {
  return deals.reduce((acc, currentDeal) => {
    if (acc.hasOwnProperty(currentDeal.contact)) {
      acc[currentDeal.contact] += parseInt(currentDeal.value);
    } else {
      acc[currentDeal.contact] = parseInt(currentDeal.value);
    }
    return acc;
  }, {});
}

const getContactFields = (data) => {
  const dealTotalsByContactId = getDealTotalsByContactId(data.deals);

  const tagsById = data.tags.reduce((acc, curr) => {
    acc[curr.id] = curr.tag;
    return acc;
  }, {});

  const contactTagsById = data.contactTags.reduce((acc, curr) => {
    acc[curr.id] = tagsById[curr.tag];
    return acc;
  }, {});

  const locationStrByContactId = data.contactData.reduce((acc, curr) => {
    acc[curr.contact] = [curr.geoCity, curr.geoState, curr.geo_country].filter(x => !!x).join(', ');;
    return acc;
  }, {});

  return data.contacts.map(contact => {
    return {
      tags: contact.contactTags.map(ctId => {
        const tagName = contactTagsById[ctId];
        return tagName;
      }),
      locationStr: locationStrByContactId[contact.id] || null,
      totalValue: dealTotalsByContactId[contact.id] || 0,
      firstName: contact.firstName,
      lastName: contact.lastName,
      deals: contact.deals.length,
      id: contact.id
    }
  }
  )
}


app.get('/contacts', function (req, res) {
  getAllContacts()
    .then(data => res.send(getContactFields(data)).status(200));
})


app.listen(port, () => console.log(`Listening on port ${port}!`));

