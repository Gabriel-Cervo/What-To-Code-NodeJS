const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();

const submitRoute = require('./routes/submit.js');

if (dotenv.error) {
    throw dotenv.error;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 3001;

app.use('/submit', submitRoute);

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
});