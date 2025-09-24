const { Schema, model, Error } = require('mongoose');
const { schema } = require('./user.model');

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    coverImageURL: {
        type: String,
        default: "/images/defaultUser.jpg"
    },
    createdBy: {
        type: Schema.Types.ObjectId, 
        ref: "user", 
        required: true,
    }
},
    {
        timestamps: true,
    });



const Blog = model('blog', blogSchema);
module.exports = Blog;     