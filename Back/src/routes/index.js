const express = require("express");
const { getCharByName } = require("../controllers/getCharByName");

const router = express.Router();

router.get("/character/", (req, res) => {
  getCharByName(req, res);
});
router.get("/characters", (req, res) => {
  getCharacters(req, res);
});

module.exports = router;
