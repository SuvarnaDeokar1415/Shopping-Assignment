const express = require ('express');
//const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');
//const dbConfig = require ('./Config/db.config.js');
const {mongoose} =require('./Config/db.config.js')
const proController = require ('./Controllers/employee.controller.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000,()=>console.log('Server started at port:3000'));

app.use('/Lists',proController);
//mongoose.Promise = global.Promise;

// // Connecting to the database
// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });