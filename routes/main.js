const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const ideaController = require('../controllers/ideas.js');

router.get('/', (req, res) => {
    // console.log(req.query[0]);
    
    ideaController.getIdeas(req, res, function(error, idea){
        if(error) {
            console.log("ih deu merda");
        } else {
            res.send(idea);
        }
    })
})

module.exports = router;