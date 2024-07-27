const mongoose = require('mongoose')
const url = "mongodb+srv://yanendrajha37:Xmv945XiyyYgJtVY@cluster0.ayi7fwq.mongodb.net/blogs"


async function connectionMongoDB() {
    return mongoose.connect(url).then(() => {
        console.log("Connected to MongoDB")
    })
}


module.exports = connectionMongoDB;