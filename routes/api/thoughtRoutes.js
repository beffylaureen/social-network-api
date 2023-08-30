const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getThought).post(createThought);

// /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// post reaction
router
  .route('/:thoughtID/reactions')
  .post(createReaction);


//delete reaction
router 
  .route('/:thoughtID/reactions/:reactionId')
  .delete(deleteReaction);

  
module.exports = router;
