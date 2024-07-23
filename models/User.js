// User model (models/User.js)
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  numberOfChildren: { type: Number, required: true },
  children: [{ name: String, age: Number }] // Add this field
});

module.exports = mongoose.model('User', UserSchema);
