var express = require("express");
var router = express.Router();

router.post("/form_post", (req, res, next) => {
  // let body = req.body;
  // let round = new Round1({
  //   id: body.id,
  //   question: body.question,
  //   seen: false
  // });
  const { round, qno, question } = req.body;
  let round1 = new Round1({
    id: qno,
    question: question,
    seen: false
  });
  round1.save(err => {
    if (err) {
      console.log("couldn't save!");
    } else {
      console.log("saved successfully...");
    }
  });
  res.send(req.body);
});

module.exports = router;
