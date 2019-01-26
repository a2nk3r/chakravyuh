let express = require("express");
const favicon = require("express-favicon");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let app = express();
let initDb = require("./config/mongoInit").initDb;
initDb();

let add_data = require("./routes/add_data");
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
app.use("/add_data", add_data);
var get_data = require("./routes/get_data.js");

app.get("/", (req, res) => {
  res.render("home", { rounds: rounds });
});

app.post("/form_post", (req, res) => {
  //const username = req.body.username;
  //res.render("form");

  res.send(req.body);
});
app.get("/carousel", (req, res) => {
  res.render("carousel", { rounds: rounds });
});

app.get("/form", (req, res) => {
  res.render("form", { rounds: rounds });
});

app.get("/round:round", (req, res) => {
  let round = req.params.round;
  res.render("round" + round, { rounds: rounds, round: round });
});

app.get("/thankyou", (req, res) => {
  res.render("thankyou", { rounds: rounds });
});

// concerned with app_data route
app.use("/add_data", add_data);
app.use("/get_data", get_data);

app.use((req, res, next) => {
  res.status(404).render("404", { title: "404 error" });
});

app.listen(5000, () => {
  console.log("Live at port 5000");
});
