let mongoose = require("mongoose");
let Schema = mongoose.Schema;

module.exports = mongoose.model(
  "score",
  new Schema({
    round: Number,
    teama: Number,
    teamb: Number,
    teamc: Number,
    teamd: Number,
    teame: Number,
    teamf: Number
  })
);
