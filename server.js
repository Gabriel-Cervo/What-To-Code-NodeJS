const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const dotenv = require('dotenv').config();
if (dotenv.error) {
    throw dotenv.error;
}

app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
});