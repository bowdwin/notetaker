const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// sets variables for the routes
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// set up our middleware to handle POST data
app.use(express.urlencoded({ extended: true }));

//always required
app.use(express.static("public"));

//tells it to use the following routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//listens for server request
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
