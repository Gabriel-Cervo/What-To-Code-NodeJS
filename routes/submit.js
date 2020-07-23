const express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    console.log('ok');
    res.send(200);
})

module.exports = router;