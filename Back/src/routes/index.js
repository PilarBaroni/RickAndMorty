const express = require('express');
const { getCharByName } = require('../controllers/getCharByName');

const router = express.Router();

router.get("/character/", (req,res)=>{
    getCharByName(req,res);
});

module.exports = router;