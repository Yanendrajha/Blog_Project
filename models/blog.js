const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is Required"],
        unique: true
    },
    content: {
        type: String,
        maxLength: 512
    },
    image: {
        type: String,
    },
    author: {
        type: String,
        maxLength: 20
    }
}
)

const blogModel = mongoose.model("blog :- ", blogSchema)

module.exports = blogModel;