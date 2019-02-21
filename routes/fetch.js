// for getting data
var express = require("express");
var router = express.Router();

router.get("/score", (req, res, next) => {
  Score.find({}, (err, scores) => {
    console.log(scores);
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ scores: scores, success: true });
    }
  });
});

module.exports = router;
