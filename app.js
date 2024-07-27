const express = require('express')
const app = express()
const connectionMongoDB = require('./connection')


connectionMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001,()=> {
    console.log('project Started');
})


