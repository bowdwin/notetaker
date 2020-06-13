const express = require("express");
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const json = path.join(__dirname, "../db/db.json");
// router.use(express.json());
//to generate a specifi number for the notes
const { v4: uuidv4 } = require("uuid");
// example uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

console.log(json, "json console.log");
//might need these arrays
const postNotes = [];
const waitListData = [];
// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

//required for parsing the data from jsons
// router.use(express.urlencoded({ extended: true }));

// router.get("/notes", (req, res) => res.sendFile(postNotes)); //not sure on this

router.get("/notes", (req, res) => {
  let jsonParse = JSON.parse(fs.readFileSync(json));
  console.log(jsonParse, "jsonParse variable");
  res.json(postNotes);

  console.log("router.get was hit inside router.get apiRoutes.js");
});

// router.get("/notes", (req, res) => {});

//when the user hits the dave button
router.post("/notes", (req, res) => {
  console.log(req.body, "added something ");
});

module.exports = router;

// router.get("/tables", (req, res) => {
//   res.json(tableData);
// });

// router.get("/waitlist", (req, res) => {
//   res.json(waitListData);
// });

// The following API routes should be created:

// GET /api/notes - Should read the db.json file and return all saved notes as JSON.

// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

// DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
