const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moodSchema = new Schema(
  {
    score: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mood", moodSchema);
