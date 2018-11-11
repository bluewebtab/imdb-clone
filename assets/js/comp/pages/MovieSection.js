import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import moviesData from '../../moviesData'
import Header from './Header'

export default class MovieSection extends Component {
  constructor () {
    super()
    this.state = {
      movies: ''
     
    }
    this.hitButton = this.hitButton.bind(this)
    this.newMovies = this.newMovies.bind(this)
  }

 hitButton = async() =>{
   const query = 'Blade Runner'
  if(query){
    const search = new moviesData(query)

    await search.getResults()

    console.log(search.result)
  }
}




componentDidMount = async() => {
  const search = new moviesData()
  await search.discoverMovies()
  console.log(search.result)
  const newMovies = search.result
  this.setState({
    movies: newMovies
 })

  console.log(this.state)
}

  newMovies() {
  const newMovies = Object.values(this.state.movies)
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
      <Header/>
      <section id="movieSection">
      <section  className="row center-xs">
        <section className="search-area col-xs-12">
          <input type="text" name="search" onChange={this.props.change} />
        </section>
        </section>

        <section className="col-xs-12">
          
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

