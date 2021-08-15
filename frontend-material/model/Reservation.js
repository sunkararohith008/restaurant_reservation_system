const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Reservation = new Schema({
    customer_fullname: {
        type: String
      },
    customer_address: {
        type: String
      },
    reservation_event: {
        type: String
      },
    customer_phone: {
        type: String
      },
    No_of_persons: {
        type: String
      },
    reservation_time: {
        type: String
      }
    }, {
      collection: 'reservations'
    })

module.exports = mongoose.model('Reservation', Reservation)