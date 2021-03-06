var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text:{
    type: String,
    required:true,
    minlength: 1,
    trim: true,
    unique:true
     },
  completed:{
    type: Boolean
  },
  completedAt:{
    type: Number,
    default: null
  }
})

module.exports = {Todo};
