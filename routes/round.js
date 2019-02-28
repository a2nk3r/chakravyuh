// for getting data
var express = require("express");
var router = express.Router();

router.get("/:round", (req, res) => {
  let round = req.params.round;
  res.render("round" + round, { root: true });
});

// round 1

router.get("/1/ques", (req, res) => {
  let round = 1;
  let qno;
  Round1.find({ seen: false }, (err, ques) => {
    if (err) {
    } else {
      if (ques.length) {
        qno = ques[0].id;
        res.render("round" + round, {
          root: false,
          question: ques[0].question,
          timeroff: 0
        });
        Round1.findOneAndUpdate(
          { id: qno },
          { seen: true },
          (err, affected, resp) => {
            if (err) {
              console.log("error in updating");
            } else {
            }
          }
        );
      } else {
        res.render("round" + round, {
          root: false,
          question: "Round over!",
          timeroff: 1
        });
      }
    }
  });
});

// round 2

router.get("/2/choose", (req, res) => {
  Round2.find({ over: false }, (err, slots) => {
    if (err) {
    } else {
      res.render("choose", { slots: slots });
    }
  });
});
router.get("/2/chosen/:id", (req, res) => {
  let id = req.params.id;
  let seen1;
  let seen2;
  Round2.find({ id: id, over: false }, (err, ques) => {
    seen1 = ques[0].seen1;
    seen2 = ques[0].seen2;
    if (err) {
    } else {
      if (ques[0].seen1) {
        seen2 = true;
        res.render("chosen", { question: ques[0].ques2 });
      } else {
        seen1 = true;
        res.render("chosen", { question: ques[0].ques1 });
      }
      if (seen1) {
        Round2.findOneAndUpdate(
          { id: id },
          { seen1: true },
          (err, affected, resp) => {
            if (err) {
              console.log("error in updating");
            } else {
            }
          }
        );
      }
      if (seen2) {
        Round2.findOneAndUpdate(
          { id: id },
          { seen2: true },
          (err, affected, resp) => {
            if (err) {
              console.log("error in updating");
            } else {
            }
          }
        );
      }
      if (seen1 && seen2) {
        Round2.findOneAndUpdate(
          { id: id },
          { over: true },
          (err, affected, resp) => {
            if (err) {
              console.log("error in updating");
            } else {
            }
          }
        );
      }
    }
  });
});

// round 3

router.get("/3/ques", (req, res) => {
  let round = 3;
  let qno;
  Round3.find({ seen: false }, (err, ques) => {
    if (err) {
    } else {
      if (ques.length) {
        qno = ques[0].id;
        res.render("round" + round, {
          root: false,
          question: ques[0].question,
          timeroff: 0
        });
        Round3.findOneAndUpdate(
          { id: qno },
          { seen: true },
          (err, affected, resp) => {
            if (err) {
              console.log("error in updating");
            } else {
            }
          }
        );
      } else {
        res.render("round" + round, {
          root: false,
          question: "Round over!",
          timeroff: 1
        });
      }
    }
  });
});

// round 4

router.get("/4/ques", (req, res) => {
  let round = 4;
  let qno;
  Round4.find({ seen: false }, (err, ques) => {
    if (err) {
    } else {
      if (ques.length) {
        qno = ques[0].id;
        res.render("round" + round, {
          root: false,
          question: ques[0].question,
          timeroff: 0
        });
        Round4.findOneAndUpdate(
          { id: qno },
          { seen: true },
          (err, affected, resp) => {
            if (err) {
              console.log("error in updating");
            } else {
            }
          }
        );
      } else {
        res.render("round" + round, {
          root: false,
          question: "Round over!",
          timeroff: 1
        });
      }
    }
  });
});

// round 5

router.get("/5/ques", (req, res) => {
  let round = 5;
  let qno;
  Round5.find({ seen: false }, (err, ques) => {
    if (err) {
    } else {
      if (ques.length) {
        qno = ques[0].id;
        res.render("round" + round, {
          root: false,
          question: ques[0].question,
          timeroff: 0
        });
        Round5.findOneAndUpdate(
          { id: qno },
          { seen: true },
          (err, affected, resp) => {
            if (err) {
              console.log("error in updating");
            } else {
            }
          }
        );
      } else {
        res.render("round" + round, {
          root: false,
          question: "Round over!",
          timeroff: 1
        });
      }
    }
  });
});

module.exports = router;
