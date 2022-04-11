import mongoose, {Schema } from 'mongoose';

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    },
    password:{
        type: String,
        required: true,
        match: /(?=.*[a-zA-Z])(?=.*[0-9]+).*/,
        minlength: 8

    }
})

const User = mongoose.model('user', userSchema);
export default User;