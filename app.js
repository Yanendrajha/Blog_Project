const express = require('express')
const app = express()
const connectionMongoDB = require('./connection')
require('dotenv').config();

connectionMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5045,()=> {
    console.log('project Started');
})


