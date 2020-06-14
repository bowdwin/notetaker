const router = require("express").Router();
const path = require("path");

const sendHtml = (res, filename) => {
  return res.sendFile(path.join(__dirname, "..", "public", filename));
};

router.get("/notes", (req, res) => {
  return sendHtml(res, "notes.html");
});

router.get("/", (req, res) => {
  return sendHtml(res, "index.html");
});

module.exports = router;
