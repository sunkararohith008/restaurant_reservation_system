const express = require('express');
const app = express();
const cashierRoute = express.Router();

// Cashier model
let Cashier = require('../../model/Cashier');

// Add Cashier
cashierRoute.route('/add-cashier').post((req, res, next) => {
  Cashier.create(req.body, (error, data) => {
    if (error) {
      
    } else {
      res.json(data)
    }
  })
});

// Get all cashier
cashierRoute.route('/').get((req, res) => {
  Cashier.find((error, data) => {
    if (error) {

    } else {
      res.json(data)
    }
  })
})

// Get single cashier
cashierRoute.route('/read-cashier/:id').get((req, res) => {
  Cashier.findById(req.params.id, (error, data) => {
    if (error) {
     
    } else {
      res.json(data)
    }
  })
})


// Update cashier
cashierRoute.route('/update-cashier/:id').put((req, res, next) => {
  Cashier.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
     
      console.log(error)
    } else {
      res.json(data)
      console.log('Cashier successfully updated!')
    }
  })
})

// Delete cashier
cashierRoute.route('/delete-cashier/:id').delete((req, res, next) => {
  Cashier.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = cashierRoute;