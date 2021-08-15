const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
    employee_fname: {
        type: String
      },
    employee_lname: {
        type: String
      },
    employee_position: {
        type: String
      },
    employee_address: {
        type: String
      },
    employee_salary: {
        type: String
      }
    }, {
      collection: 'employees'
    })

module.exports = mongoose.model('Employee', Employee)