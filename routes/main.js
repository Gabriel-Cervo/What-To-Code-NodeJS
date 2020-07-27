const express = require('express');
const router = express.Router();
const ideaController = require('../controllers/ideas.js');

router.get('/', (req, res) => {    
    ideaController.getIdeas(req, res, function(error, idea){
        if(error) {
            console.log("ih deu merda");
        } else {
            res.send(idea);
        }
    })
})

router.put('/', (req, res) => {
    ideaController.incrementLike(req, res);
})
module.exports = router;