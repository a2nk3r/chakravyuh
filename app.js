let express = require("express");

const rounds = ["round1", "round2", "round3", "round4", "round5"];

let app = express();

// set the view engine to ejs
app.set("view engine", "ejs");
// using bootstrap/css installed with npm
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
// using jquery installed with npm
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));
app.use("/typed", express.static(__dirname + ""));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home", { rounds: rounds });
});

app.get("/carousel", (req, res) => {
  res.render("carousel", { rounds: rounds });
});

app.get("/round:round", (req, res) => {
  let round = req.params.round;

  res.render("round" + round, { rounds: rounds, round: round });
});

app.get("/thankyou", (req, res) => {
  res.render("thankyou", { rounds: rounds });
});

app.use(function(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  // res.send(404, 'not found!'); // deprecated
  res.status(404).send("not found!");
});

app.listen(3000, () => {
  console.log("Live at port 3000");
});
