const express = require("express");
const path = require("path");
const app = express();


const apiRouter = require("./routes/api.js");


// view setting
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set api router

app.get("/", (req, res) => {
  res.sendFile(__dirname+'/views/crawler.html');
})
app.use("/api", apiRouter);

/*  use static folder   */
app.use(express.static("public"));

module.exports = app;

app.listen("8000", () => {
  console.log("app listened in port 8000")
})