var mongoose = require('mongoose');

var User = mongoose.model('Users',{
  email:{
    required: true,
    type: String,
    trim: true,
    minlength: 1
  }
})
module.exports = {User}
