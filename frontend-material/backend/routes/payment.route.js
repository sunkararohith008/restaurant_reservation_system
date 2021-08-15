const express = require('express');
const app = express();
const paymentRoute = express.Router();

// Payment model
let Payment = require('../../model/Payment');

// Add Payment
paymentRoute.route('/add-payment').post((req, res, next) => {
  Payment.create(req.body, (error, data) => {
    if (error) {
      
    } else {
      res.json(data)
    }
  })
});

// Get all payment
paymentRoute.route('/').get((req, res) => {
  Payment.find((error, data) => {
    if (error) {

    } else {
      res.json(data)
    }
  })
})

// Get single payment
paymentRoute.route('/read-payment/:id').get((req, res) => {
  Payment.findById(req.params.id, (error, data) => {
    if (error) {
     
    } else {
      res.json(data)
    }
  })
})


// Update payment
paymentRoute.route('/update-payment/:id').put((req, res, next) => {
  Payment.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
     
      console.log(error)
    } else {
      res.json(data)
      console.log('Payment successfully updated!')
    }
  })
})

// Delete payment
paymentRoute.route('/delete-payment/:id').delete((req, res, next) => {
  Payment.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = paymentRoute;