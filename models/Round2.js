let mongoose = require("mongoose");
let Schema = mongoose.Schema;

module.exports = mongoose.model(
  "round2",
  new Schema({
    id: Number,
    slot: String,
    over: Boolean,
    ques1: String,
    seen1: Boolean,
    ques2: String,
    seen2: Boolean
  })
);
