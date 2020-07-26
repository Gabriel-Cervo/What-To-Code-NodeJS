const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const submitRoute = require('./routes/submit.js');
const mainRoute = require('./routes/main.js');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.catch(error => console.log(error));

app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.use('/submit', submitRoute);
app.use('/', mainRoute);

app.listen(port);