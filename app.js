let express = require("express");
const favicon = require("express-favicon");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let app = express();
let initDb = require("./config/mongoInit").initDb;
initDb();

let indexRouter = require("./routes/index");
let roundRouter = require("./routes/round");
let feedRouter = require("./routes/feed");
let fetchRouter = require("./routes/fetch");
let resetRouter = require("./routes/reset");

// rounds array (test only)
const rounds = ["round1", "round2", "round3", "round4", "round5"];

// set the view engine to ejs
app.set("view engine", "ejs");
// using bootstrap/css installed with npm
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
// using jquery installed with npm
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(__dirname + "/public/favicon.png"));
// require routes
app.use("/", indexRouter);
app.use("/round", roundRouter);
app.use("/feed", feedRouter);
app.use("/fetch", fetchRouter);
app.use("/reset", resetRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { title: "404 error" });
});

app.listen(5000, () => {
  console.log("Live at port 5000");
});
