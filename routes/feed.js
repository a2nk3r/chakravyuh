// for adding data
var express = require("express");
var router = express.Router();

router.post("/round", (req, res, next) => {
  const { round, qno, question } = req.body;
  if (parseInt(round) === 1) {
    let ques = new Round1({
      id: qno,
      question: question,
      seen: false
    });
    ques.save(err => {
      if (err) {
        console.log("couldn't save!");
      } else {
        console.log("saved successfully...");
      }
    });
  } else if (parseInt(round) === 2) {
    let ques = new Round2({
      id: qno,
      question: question,
      seen: false
    });
    ques.save(err => {
      if (err) {
        console.log("couldn't save!");
      } else {
        console.log("saved successfully...");
      }
    });
  } else if (parseInt(round) === 3) {
    let ques = new Round3({
      id: qno,
      question: question,
      seen: false
    });
    ques.save(err => {
      if (err) {
        console.log("couldn't save!");
      } else {
        console.log("saved successfully...");
      }
    });
  } else if (parseInt(round) === 4) {
    let ques = new Round4({
      id: qno,
      question: question,
      seen: false
    });
    ques.save(err => {
      if (err) {
        console.log("couldn't save!");
      } else {
        console.log("saved successfully...");
      }
    });
  } else if (parseInt(round) === 5) {
    let ques = new Round5({
      id: qno,
      question: question,
      seen: false
    });
    ques.save(err => {
      if (err) {
        console.log("couldn't save!");
      } else {
        console.log("saved successfully...");
      }
    });
  }
  res.send(req.body);
});

router.post("/score", (req, res, next) => {
  const { round, teama, teamb, teamc, teamd, teame, teamf } = req.body;
  Score.findOneAndReplace(
    { round: parseInt(round) },
    {
      round: parseInt(round),
      teama: parseInt(teama),
      teamb: parseInt(teamb),
      teamc: parseInt(teamc),
      teamd: parseInt(teamd),
      teame: parseInt(teame),
      teamf: parseInt(teamf)
    },
    (err, doc) => {
      if (err) {
        res.status(500).send({ error: err });
      } else {
        // res.send("successfully saved!");
        res.redirect("/scoreboard");
      }
    }
  );
});

module.exports = router;
