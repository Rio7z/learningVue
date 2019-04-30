// code.model.js

const express = require('express');
const codeRoutes = express.Router();

// Require Code model in our routes module
let Code = require('./code.model');

// Defined store route
codeRoutes.route('/add').post((req, res) => {
  let code = new Code(req.prize);
  code.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
codeRoutes.route('/').get((req, res) => {
    Code.find((err, codes) => {
    if(err){
      res.json(err);
    }
    else {
      res.json(codes);
    }
  });
});


module.exports = codeRoutes;