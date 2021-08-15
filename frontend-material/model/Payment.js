const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Payment = new Schema({
    payment_number: {
        type: String
      },
    no_of_customers: {
        type: String
      },
    name_of_cashier: {
        type: String
      },
    total_amount: {
        type: String
      },
    mode_of_payment: {
        type: String
      }
    }, {
      collection: 'payments'
    })

module.exports = mongoose.model('Payment', Payment)