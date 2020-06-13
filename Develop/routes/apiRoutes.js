const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");
const db = path.join(__dirname, "../db/db.json");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
  fs.readFile(db, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    res.json(JSON.parse(data)); //return all notes to user
    console.log("/api/notes GET called");
  });
});

router.post("/notes", (req, res) => {
  // place what the user entered into new note { title: 'keith', text: 'jon' }
  let newNote = req.body;
  let dbArray = []; //create an array to store things in

  //read the json file
  fs.readFile(db, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    //parse the array
    dbArray = JSON.parse(data);
    //assign a unique id example 9b20063c-8ecf-4f20-ad2b-a0eb6916aa4b
    newNote.id = uuidv4();
    //push it to db array
    dbArray.push(newNote);

    //overwrite the db.json file
    fs.writeFile(db, JSON.stringify(dbArray), (err) => {
      if (err) {
        throw err;
      }
      console.log("Successfully overwrote db.json file");
    });
  });
  res.json(newNote); //newNote returned to user
});

module.exports = router;
