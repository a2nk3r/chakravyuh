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

router.get("/round1", (req, res, next) => {
  Round1.update(
    {},
    {
      seen: false
    },
    { multi: true },
    (err, records) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json({ records: records });
      }
    }
  );
});

router.get("/round2", (req, res, next) => {
  Round2.update(
    {},
    {
      over: false,
      seen1: false,
      seen2: false
    },
    { multi: true },
    (err, records) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json({ records: records });
      }
    }
  );
});

router.get("/round3", (req, res, next) => {
  Round3.update(
    {},
    {
      seen: false
    },
    { multi: true },
    (err, records) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json({ records: records });
      }
    }
  );
});

router.get("/round4", (req, res, next) => {
  Round4.update(
    {},
    {
      seen: false
    },
    { multi: true },
    (err, records) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json({ records: records });
      }
    }
  );
});

router.get("/round5", (req, res, next) => {
  Round5.update(
    {},
    {
      seen: false
    },
    { multi: true },
    (err, records) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json({ records: records });
      }
    }
  );
});
module.exports = router;
