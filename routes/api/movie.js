//The data in Post model is received by clicking on review, add to watchlist, or ratings once you
//are redirected to the main page of a movie after clicking on it.


const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport')
const Movie = require('../../models/Movie')
const Profile = require('../../models/Profile')


//@route   GET api/movie/:id
// @desc   Tests posts route
//@access  Public
router.get('/:id', (req,res)=>{
  Movie.findById(req.params.id)
  .then(movie => res.json(movie))
  .catch(err => res.status(404).json({noInfo: 'No info for this id'}));
})




//@route   POST api/movie
// @desc   Create review
//@access  Private

router.post('/', passport.authenticate('jwt', {session:false}),
(req, res) => {
  const movie = new Movie({
    movie_id:req.body.movie_id,
    movie: req.body.movie,
    user: req.user.id

  })

  movie
    .save()
    .then(movie => {
      res.json(movie)
    })
    .catch(err => res.status(404).json(err))

  
})

router.post('/watchlist/:id', passport.authenticate('jwt', {session: false}),
(req,res) => {
  Profile.findOne({user: req.user.id})
  .then(profile =>{
  Movie.findById(req.params.id)
    .then(movie => {
     
      const newWatchlist = {
        user: req.user.id,
        movie_id: req.body.movie_id,
        movie_object: req.body.movie_object
        
      }

    
      //Add to reviews array
      movie.watchlist.unshift(newWatchlist);

      //Save
      movie.save().then(movie => res.json(movie))
    })
    .catch(err => res.status(404).json({watchlistnotfound: 'No watchlist yet'}))
  })
  })


router.post('/ratings/:id', passport.authenticate('jwt', {session: false}),
(req,res) => {
  Profile.findOne({user: req.user.id})
  .then(profile =>{
  Movie.findById(req.params.id)
    .then(movie => {
     
      const newRatings = {
        user: req.user.id,
        movie_id: req.body.movie_id,
        rating: req.body.rating
        
      }

    
      //Add to reviews array
      movie.ratings.unshift(newRatings);

      //Save
      movie.save().then(movie => res.json(movie))
    })
    .catch(err => res.status(404).json({ratingnotfound: 'No ratings yet'}))

  })
  })

router.post('/review/:id', passport.authenticate('jwt', {session: false}),
(req,res) => {
  Profile.findOne({user: req.user.id})
  .then(profile =>{
  Movie.findById(req.params.id)
    .then(movie => {
      // if(movie.reviews.length > 0){
      //   return res.status(400).json({alreadyReviewed:'You already reviewed this movie!'})

      // }
      const newReview = {
        user: req.user.id,
        movie_id: req.body.movie_id,
        headline: req.body.headline,
        text:req.body.text,
        name: req.body.name,
        avatar: req.body.avatar
        
      }

    
      //Add to reviews array
      movie.reviews.unshift(newReview);

      //Save
      movie.save().then(movie => res.json(movie))
    })
    .catch(err => res.status(404).json({reviewnotfound: 'No reviews yet'}))
  })
  })
module.exports = router;
