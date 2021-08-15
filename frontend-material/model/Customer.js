const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Customer = new Schema({
    customer_fname: {
        type: String
      },
    customer_lname: {
        type: String
      },
    customer_gender: {
        type: String
      },
    customer_address: {
        type: String
      },
    customer_phone: {
        type: String
      }
    }, {
      collection: 'customers'
    })

module.exports = mongoose.model('Customer', Customer)