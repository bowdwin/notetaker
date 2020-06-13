const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");
const db = path.join(__dirname, "../db/db.json");

router.get("/notes", (req, res) => {
  fs.readFile(db, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    res.json(JSON.parse(data)); //return all notes to user
    console.log("/api/notes GET called");
  });
});

module.exports = router;
