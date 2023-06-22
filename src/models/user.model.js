
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import mongooseUniqueValidator from "mongoose-unique-validator";


const user = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter username!'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter password!']
    }
});


// Raise 'mongoose validation error' instead of 'E11000 error' in case of non unique key value
user.plugin(mongooseUniqueValidator, {
    message: 'The {PATH} "{VALUE}" already exists!'
});


// Regular function since with arrow functions there are no bindings of "this"
user.pre('save', async function() {
    try {
        const newUser = this;
        const hash = await bcrypt.hash(newUser.password, 10);
        newUser.password = hash;
    } catch (err) {
        console.log(err);
    };
});


const User = mongoose.model('users', user);


export default User;