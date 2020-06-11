const router = require("express").Router();
const path = require("path");
const fs = require("fs");

const postNotes = [];
const waitListData = [];

router.get("/tables", (req, res) => {
  res.json(tableData);
});

router.get("/waitlist", (req, res) => {
  res.json(waitListData);
});

// The following API routes should be created:

// GET /api/notes - Should read the db.json file and return all saved notes as JSON.

// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

// DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.