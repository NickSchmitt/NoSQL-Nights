const mongoose = require('mongoose')

// make a schema, a blueprint of what fielsds a user is made of

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  meta: {
    age: Number,
    website: String,
  },
  website: String,
})

// give a name and a schema mongoose.model() method
const User = mongoose.model('User', userSchema)

module.exports = User
