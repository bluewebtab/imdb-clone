import React, { Component } from 'react'
import MovieHeader from './MovieHeader'

 class Background extends Component {
  render() {
    return (
      <header className="head">
      <MovieHeader/>

      <div className=" movieTitle">
       <h3>Blade Runner 2049</h3>
      </div>  
      </header>
    )
  }
}

export default Background;
