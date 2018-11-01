import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './pages/Header'
import moviesData from '../moviesData'
import MovieSection from './pages/MovieSection';


class App extends Component {
  constructor () {
    super()
    this.state = {
     
    }
  }

  

 

  
  render () {
    return (<div>
      <Header/>
      <MovieSection />
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
