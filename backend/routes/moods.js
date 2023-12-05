const express = require('express')
const {
  createMood,
  getMoods,
  getMood,
  deleteMood,
  updateMood
} = require('../controllers/moodController')

const router = express.Router()

// GET all moods
router.get('/', getMoods)

//GET a single mood
router.get('/:id', getMood)

// POST a new mood
router.post('/', createMood)

// DELETE a mood
router.delete('/:id', deleteMood)

// UPDATE a mood
router.patch('/:id', updateMood)


module.exports = router