import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './pages/Header'
import moviesData from '../moviesData'


class App extends Component {
  constructor () {
    super()
    this.state = {
     
    }
  }

  componentDidMount = async() =>{
    const search = new moviesData()

    await search.discoverMovies()

    console.log(search.result)
  }

 




  
  render () {
    return (<div>
      <Header/>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
