const mongoose = require('mongoose');
//****npm install --save mongoose-unique-validator ****/
const uniqueValidator = require('mongoose-unique-validator');

//*****Mettre en place un email unique + mise en place MONGOOSE UNIQUE VALIDATOR *****************/
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);