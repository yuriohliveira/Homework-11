const path = require("path"); 
const express = require("express"); 
const router = express.Router(); 

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../home.html"));
});
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../notes.html"));
});

module.exports = router; 