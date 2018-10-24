import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import moviesData from '../../moviesData'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
     
    }
    this.hitButton = this.hitButton.bind(this)
  }

 hitButton = async() =>{
   const query = 'Blade Runner'
  if(query){
    const search = new moviesData(query)

    await search.getResults()

    console.log(search.result)
  }
}
 
  render () {
    return (<div>
        <header className="head">
          <div className="navbar">
            <div className="compName">
              Moviizz
            </div>
            <div className="rightArea">
              <ul className="rightInfo">
                <li className="one"><a  onClick ={this.hitButton}>Movies</a></li>
                <li className="two"><a>TV Shows</a></li>
                <li className="three"><a>Login</a></li>
                <li className="four"><a>Register</a></li>
                <hr />
              </ul>
            
            </div>
          </div>
          <div className="movieTitle">
            <h3>Blade Runner 2049</h3>
            <a className="trailerBtn">Trailer</a>
          </div>
        </header>

    </div>)
  }
}

