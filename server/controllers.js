const db = require('./../db/');

const getGroceries = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM groceries;`, (err, results) => {
      console.log('we got to getGrocery')
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  });
  
}

const addGrocery = (req, res) => {
  const query = 'INSERT INTO groceries (name, quantity) VALUES (?, ?);';
  const grocery = req.body;
  const params = [grocery.name, grocery.quantity]
  db.query(query, params, (err, results) => {
    console.log('we got to addGrocery');
    if (err) {
      res.status(501).send();
    } else {
      res.status(201).send();
    }
  })
}

module.exports = {
  getGroceries,
  addGrocery,
};