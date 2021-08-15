const express = require('express');
const app = express();
const reservationRoute = express.Router();

// Reservation model
let Reservation = require('../../model/Reservation');

// Add Reservation
reservationRoute.route('/add-reservation').post((req, res, next) => {
  Reservation.create(req.body, (error, data) => {
    if (error) {
      
    } else {
      res.json(data)
    }
  })
});

// Get all reservation
reservationRoute.route('/').get((req, res) => {
  Reservation.find((error, data) => {
    if (error) {

    } else {
      res.json(data)
    }
  })
})

// Get single reservation
reservationRoute.route('/read-reservation/:id').get((req, res) => {
  Reservation.findById(req.params.id, (error, data) => {
    if (error) {
     
    } else {
      res.json(data)
    }
  })
})


// Update reservation
reservationRoute.route('/update-reservation/:id').put((req, res, next) => {
  Reservation.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
     
      console.log(error)
    } else {
      res.json(data)
      console.log('Reservation successfully updated!')
    }
  })
})

// Delete reservation
reservationRoute.route('/delete-reservation/:id').delete((req, res, next) => {
  Reservation.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = reservationRoute;