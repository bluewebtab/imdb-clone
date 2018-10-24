//The data in Post model is received by clicking on review, add to watchlist, or ratings once you
//are redirected to the main page of a movie after clicking on it.


const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport')
const Movie = require('../../models/Movie')

//@route   GET api/movie/test
// @desc   Tests posts route
//@access  Public
router.get('/test', (req, res) => res.json({msg: "Movie Works"}))

//@route   POST api/movie
// @desc   Create review
//@access  Private

router.post('/', passport.authenticate('jwt', {session:false}),
(req, res) => {
  
})

router.post('/review/:id', passport.authenticate('jwt', {session: false}),
(req,res) => {

  Movie.findById(req.params.id)
    .then(movie => {
      const newReview = {
        headline: req.body.headline,
        text:req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
        
      }
      //Add to reviews array
      movie.reviews.unshift(newReview);

      //Save
      movie.save().then(movie => res.json(movie))
    })
    .catch(err => res.status(404).json({reviewnotfound: 'No reviews yet'}))
})
module.exports = router;
