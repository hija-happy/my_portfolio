const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = requre('nodemailer');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// Create a route to handle form submissions
app.post('/contact', (req,res) => {
const { name, email, message} = req.body;


// Configure Nodemailer

const transporter = nodemailer.createTransport

})