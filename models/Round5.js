let mongoose = require("mongoose");
let Schema = mongoose.Schema;

module.exports = mongoose.model(
  "round5",
  new Schema({
    id: Number,
    question: String,
    seen: Boolean
  })
);
