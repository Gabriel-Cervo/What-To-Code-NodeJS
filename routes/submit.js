const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const ideaController = require('../controllers/ideas.js');

router.post('/', (req, res) => {
    ideaController.saveIdea(req, res, function(error, idea){
        if(error) {
            console.log('erro');
          } else {
            res.send(idea);
        }
    })
})

module.exports = router;