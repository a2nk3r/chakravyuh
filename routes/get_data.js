var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  // Round1.find({ qno: 2 })
  //   .then(doc => console.log(doc))
  //   .catch(err => console.log(err));

  Round1.find({}, (err, round1) => {
    res.json({ round1: round1 });
  });
});

module.exports = router;
