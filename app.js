const express = require('express')
const app = express()
const connectionMongoDB = require('./connection')
const blogRoutes = require("./routes/blog")
require('dotenv').config();

connectionMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/blog', blogRoutes)


app.listen(1000,()=> {
    console.log('project Started');
})


