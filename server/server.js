const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const dummyData = [
  {id: '1', name: 'Peever Beever', totalValue: 40010, location: 'Chicago IL, USA', deals: 1, tags: ['customer', 'canada']},
  {id: '2', name: 'Hankus Pankus', totalValue: 80055, location: 'Albany NY, USA', deals: 4, tags: ['customer', 'america']},
  {id: '3', name: 'Penny Lenny', totalValue: 70330, location: 'London, UK', deals: 2, tags: ['retailer', 'europe']}
];



app.use('/', express.static(__dirname + '/../client/dist'));

const getAllContacts =  () => {
  return Promise.resolve(dummyData);
}

// const getAllContacts = () => {
//   return axios('https://lamppoststudios.api-us1.com/api/3/contacts?include=geoIps,contactTags,contactDeals', {
//     method: 'GET',
//     headers: {
//       'Api-Token' : '0f7e5c9167768f6bb0a6e09e335ce464da7cb5e7008b989f0057266c26342424a4d8d3e5'
//     }
//   })
//     .then(req => req.data);
// }

app.get('/contacts', function (req, res) {
  getAllContacts()
  .then(data => res.send(data).status(200));
})


app.listen(port, () => console.log(`Listening on port ${port}!`));

