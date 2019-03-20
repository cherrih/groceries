const path = require('path');
const express = require('express');
const app = express();
const Grocery = require('./controllers.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, './../client/dist')));

app.get('/groceries', (req, res) => {
  Grocery.getGroceries()
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.status(501).send();
    })
});


app.post('/groceries', Grocery.addGrocery);

const PORT = 3001;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))


