let mongoose = require("mongoose");
let Schema = mongoose.Schema;

module.exports = mongoose.model(
  "round1",
  new Schema({
    id: Number,
    question: String,
    seen: Boolean
  })
);
