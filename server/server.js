const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const dummyData = [{contact: 'Peever Beever', totalValue: 400, location: 'Chicago', deals: 2, tags: ['customer', 'canada']}];

app.use('/', express.static(__dirname + '/../client/dist'));

var getAllContacts = () => {
  return axios('https://lamppoststudios.api-us1.com/api/3/contacts?include=geoIps,contactTags,contactDeals', {
    method: 'GET',
    headers: {
      'Api-Token' : '0f7e5c9167768f6bb0a6e09e335ce464da7cb5e7008b989f0057266c26342424a4d8d3e5'
    }
  })
    .then(req => req.data);
}

app.get('/contacts', function (req, res) {
  getAllContacts()
  .then(data => res.send(data).status(200));
})


app.listen(port, () => console.log(`Listening on port ${port}!`));

