import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import moviesData from '../../moviesData'
import PropTypes from 'prop-types';

import Background from './Background'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import {getTrendingMovies} from '../actions/movieActions'

 class MovieSection extends Component {
  constructor () {
    super()
    this.state = {
      movies: '',
      filteredMovies: '',
      moviesData: '',
      showSearch: false
    }
    this.hitButton = this.hitButton.bind(this)
    this.newMovies = this.newMovies.bind(this)
    this.onChangeMovies = this.onChangeMovies.bind(this)
    // this.filteredData = this.filteredData.bind(this)
    this.searchMovies = this.searchMovies.bind(this)
  }

 hitButton = async() =>{
   const query = this.state.movies
   console.log(query)
   
  if(query){
    const search = new moviesData(query)

    await search.getResults()

    
    const searchMovie = search.result
    console.log(searchMovie)
   
    this.setState({
      filteredMovies: searchMovie
    })
    if(this.state.movies != '' && this.state.showSearch === false){
  
      this.setState({
        showSearch: true
      });
      }
  
  }
}

onChangeMovies(e){
  e.preventDefault()
  var name = e.target.name
  var value = e.target.value
  this.setState(
    {
      [name]: value
    },
    () => {
      console.log(this.state)
      
    }
  )
      

}

// filteredData(){
//   if(this.state.filteredMovies != undefined){
//   var newMovies = Object.values(this.state.moviesData)
//   console.log(this.state.filteredMovies.length)
   
//    newMovies = newMovies.filter(movie => {
      
//     var movieText = movie.title.split('').filter(word => word != '').map(word => word.toLowerCase()).join('');
//     var searchText = this.state.movies.split('').filter(word => word != '').map(word => word.toLowerCase()).join('')
//     var n = movieText.match(searchText)
//       if(n != null){
//         return movie
//       }
//     })
//     this.setState({
//       filteredMovies: newMovies
//     })
//   }
  
  
  
  
// }




componentDidMount = () => {
  // const search = new moviesData()
  // await search.discoverMovies()
  // console.log(search.result)
  // const goodMovies = search.result
  this.props.getTrendingMovies()
  console.log(this.props.getTrendingMovies())
  
  console.log(this.state)
  
}

  newMovies() {
    console.log(this.props.movies)
    const moviesData = this.props.movies.moviesData
  
    const newMovies = Object.values(moviesData)
    return newMovies.map((movie, index) => {
      return (
        
         <Link  key={index} to={`/movie/${movie.name}`}><li className="singleMovie">
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
          
         </li></Link>
        
      )
    })
  
  
  
    
  } 

  searchMovies(){

    const newMovies = Object.values(this.state.filteredMovies)
    
   return newMovies.map((movie, index) => {
     return (
      
        <li key={index} className="singleMovie">
         <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
         
        </li>
       
     )
   })
   
  }

 
  render () {
    return (<div>
      <Background/>
      <section id="movieSection">
      <section  className="row center-xs">
        <section className="search-area col-xs-12">
          <input type="text" name="movies" onChange={this.onChangeMovies} placeholder="Find movies here..."/>
          <a onClick={this.hitButton}><i className=" searchButton fas fa-search"></i></a>
        </section>
        </section>

        <section className="col-xs-12">
        
          {this.state.showSearch == true && 
          <div>
         <h1 className="popularTitle col-xs-3">Your Search</h1>
          <div className="row center-xs">

            <ul className="moviesArea">{this.searchMovies()}</ul>
          </div>
          </div>}
        
          <h1 className="popularTitle col-xs-3"> What's Popular Now</h1>

        <div className="row center-xs">

          <ul className="moviesArea">
          {this.newMovies()}
          </ul>
        </div>
        </section>
       
     
      </section>
      </div>
    )
  }
}

MovieSection.propTypes = {
  auth: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  movies:state.movies
})

export default connect(mapStateToProps, {getTrendingMovies})(MovieSection)