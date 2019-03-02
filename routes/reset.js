// for getting data
var express = require("express");
var router = express.Router();

router.get("/score", (req, res, next) => {
  Score.updateMany(
    {},
    {
      teama: 0,
      teamb: 0,
      teamc: 0,
      teamd: 0,
      teame: 0,
      teamf: 0
    },

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
  Round1.updateMany(
    {},
    {
      seen: false
    },

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
  Round2.updateMany(
    {},
    {
      over: false,
      seen1: false,
      seen2: false
    },

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
  Round3.updateMany(
    {},
    {
      seen: false
    },

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
  Round4.updateMany(
    {},
    {
      seen: false
    },

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
  Round5.updateMany(
    {},
    {
      seen: false
    },

    (err, records) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json({ records: records });
      }
    }
  );
});

router.get("/all", (req, res, next) => {
  var success = false;
  Score.updateMany(
    {},
    {
      teama: 0,
      teamb: 0,
      teamc: 0,
      teamd: 0,
      teame: 0,
      teamf: 0
    },

    (err, scores) => {
      if (err) {
        success = false;
      } else {
        success = true;
      }
    }
  );
  Round1.updateMany(
    {},
    {
      seen: false
    },

    (err, records) => {
      if (err) {
        success = false;
      } else {
        success = true;
      }
    }
  );
  Round2.updateMany(
    {},
    {
      over: false,
      seen1: false,
      seen2: false
    },

    (err, records) => {
      if (err) {
        success = false;
      } else {
        success = true;
      }
    }
  );
  Round3.updateMany(
    {},
    {
      seen: false
    },

    (err, records) => {
      if (err) {
        success = false;
      } else {
        success = true;
      }
    }
  );
  Round4.updateMany(
    {},
    {
      seen: false
    },

    (err, records) => {
      if (err) {
        success = false;
      } else {
        success = true;
      }
    }
  );
  Round5.updateMany(
    {},
    {
      seen: false
    },

    (err, records) => {
      if (err) {
        success = false;
      } else {
        success = true;
      }
    }
  );
  if (success) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});
module.exports = router;
