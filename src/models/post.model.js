
import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";


const blogPost = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    title: {
        type: String,
        required: [true, 'Please enter title!'],
    },
    text: {
        type: String,
        required: [true, 'Please enter text!'],
    },
    datePosted: {
        type: Date,
        default: new Date()
    },
    image: {
        data: {
            type: Buffer,
            required: [true, 'Please enter image!']
        },
        contentType: {
            type: String,
        }
    }
});


const BlogPost = mongoose.model('blogposts', blogPost);


blogPost.plugin(mongooseUniqueValidator);


export default BlogPost;