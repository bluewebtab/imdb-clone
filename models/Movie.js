const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Create Schema 
const MovieSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  
  movie: {
    type:String
  },
  watchlist: [
    {
      movie_id: {
        
          type:Schema.Types.ObjectId,
          ref: 'movie'
      
    },
    movie: {
      type: String
    }
  }
  ],
  ratings: [
    {
       movie_id: {
          type: Schema.Types.ObjectId,
          ref: 'movie'
      
    },
    movie: {
      type:String
    },
    rating: {
      type: String
    }
    }
  ],
  reviews: [
    {
       user: {
          type: Schema.Types.ObjectId,
          ref: 'movie'
      
    },
     headline: {
       type: String,
       required: true
     },
     text: {
       type:String,
       required: true
     },
     name: {
       type: String
     },
     avatar: {
       type:String
     }, 
     date: {
       type:Date,
       default: Date.now
     }
    }
  ]
})

module.exports = Movie = mongoose.model('movie', MovieSchema);