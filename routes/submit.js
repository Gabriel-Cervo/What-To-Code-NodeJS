const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const ideaController = require('../controllers/ideas.js');

router.post('/', (req, res) => {
    ideaController.saveIdea(req, res, function(error){
        if(error) {
            res.sendStatus(400);
          } else {
            res.sendStatus(200);
        }
        mongoose.connection.close();
    })
})

module.exports = router;