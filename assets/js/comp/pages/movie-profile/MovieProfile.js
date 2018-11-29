import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import MovieBackground from './MovieBackground'
import {pickedMovie} from '../../actions/movieActions'

class MovieProfile extends Component {
  constructor () {
    super()
    this.state = {
     
    }
    this.hitButton = this.hitButton.bind(this)
  }

  componentDidMount(){
    window.scrollTo(0, 0)
    this.hitButton()
  }



  hitButton(){
   
    let discoverData = this.props.movies.moviesData
    let topData = this.props.movies.topRatedData
    let moviesData = discoverData.concat(topData)
  
   console.log(moviesData)
    const newMovies = Object.values(moviesData)
    return newMovies.map((movie, index) => {
      if(movie.title === this.props.match.params.movieName){
        this.props.pickedMovie(movie)
      return (
         console.log(movie)
         
        //  <Link  key={index} to={`/movie/${movie.title}`}><li className="singleMovie">
        //   <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
          
        //  </li></Link>
        
      )
      }
    })
  
  }

  
  

  render() {
   console.log(this.props.movies.moviesData)
   const props = this.props
   const movie = this.props.movies.pickedMovie
   console.log(movie)

    return (
      
      <div id="mainMovieProfile">
       
       <MovieBackground {...props}/>
       
       <section className="movieInformation">
          
       
       </section>
       <div className="infoBlock">
       <div className=" movieTitle">
       <h6 className="movieDate">{movie.release_date}</h6>
       <h3 className="movieName">
       {movie.title}
       </h3>
      
       
      </div> 

       </div>
        
        
      </div>
    )
  }
}

MovieProfile.propTypes = {
  auth: PropTypes.object.isRequired,

  movies: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  movies:state.movies
});



export default connect(mapStateToProps, {pickedMovie})(MovieProfile);