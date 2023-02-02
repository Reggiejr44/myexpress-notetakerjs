const path = require("path");
const router = require('express').Router();

// GET route sending user to NOTES page
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// GET route sending user to INDEX page
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;