const mongoose = require('mongoose');
const commonSchema = new mongoose.Schema({
        _id:{
            type: Number,
            required: true
        },
        name:{
            type: String,
        },
       departments_id:{
        type:Number,
        }
  });

module.exports = mongoose.model('commons', commonSchema);