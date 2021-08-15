const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Cashier = new Schema({
    cashier_fname: {
        type: String
      },
    cashier_lname: {
        type: String
      },
    cashier_email: {
        type: String
      },
    cashier_address: {
        type: String
      },
    cashier_phone: {
        type: String
      }
    }, {
      collection: 'cashiers'
    })

module.exports = mongoose.model('Cashier', Cashier)