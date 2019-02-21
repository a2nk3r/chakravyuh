// for getting data
var express = require("express");
var router = express.Router();

router.get("/score", (req, res, next) => {
  Score.update(
    {},
    {
      teama: 0,
      teamb: 0,
      teamc: 0,
      teamd: 0,
      teame: 0,
      teamf: 0
    },
    { multi: true },
    (err, scores) => {
      if (err) {
        res.json({ success: false });
      } else {
        res.json({ scores: scores, success: true });
      }
    }
  );
});

module.exports = router;
