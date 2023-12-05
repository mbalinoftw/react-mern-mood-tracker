const Mood = require("../models/moodModel");
const mongoose = require("mongoose");

// get all workouts
const getMoods = async (req, res) => {
  const moods = await Mood.find({}).sort({ createdAt: -1 });

  res.status(200).json(moods);
};

// get a single workout
const getMood = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such mood" });
  }

  const mood = await Mood.findById(id);

  if (!mood) {
    return res.status(404).json({ error: "No such mood" });
  }

  res.status(200).json(mood);
};

// create new workout
const createMood = async (req, res) => {
  const { title, load, reps } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "Please fill in all the fields", emptyFields });
  }

  // add doc to db
  try {
    const mood = await Mood.create({ title, load, reps });
    res.status(200).json(mood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteMood = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such mood" });
  }

  const mood = await Mood.findOneAndDelete({ _id: id });

  if (!mood) {
    return res.status(400).json({ error: "No such mood" });
  }

  res.status(200).json(mood);
};

// update a workout
const updateMood = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such mood" });
  }

  const mood = await Mood.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!mood) {
    return res.status(400).json({ error: "No such mood" });
  }

  res.status(200).json(mood);
};

module.exports = {
  getMoods,
  getMood,
  createMood,
  deleteMood,
  updateMood,
};
