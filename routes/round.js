// for getting data
var express = require("express");
var router = express.Router();

router.get("/:round", (req, res) => {
  let round = req.params.round;
  res.render("round" + round, { root: true });
});
router.get("/:round/ques/:qno", (req, res) => {
  let round = req.params.round;
  let qno = req.params.qno;
  Round1.find({ id: qno }, (err, ques) => {
    if (err) {
    } else {
      console.log(ques);
      res.render("round" + round, { root: false, ques: ques });
    }
  });
});

module.exports = router;
