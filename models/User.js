const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userType: { type: String, required: true, enum: ['Customer', 'Service Provider'] },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    phoneNo: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });

module.exports = mongoose.model('User', UserSchema);