const mongoose = require('mongoose');
const departmentSchema = new mongoose.Schema({
        _id:{
            type: Number,
            required: true
        },
        name:{
            type: String,
        }
  });

const Department =mongoose.model('departments', departmentSchema) ;

module.exports = Department;