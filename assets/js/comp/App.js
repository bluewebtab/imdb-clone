import React, { Component} from 'react'
import {BrowserRouter , Route} from 'react-router-dom' 
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import store from './store';
// import Header from './pages/Header'
import moviesData from '../moviesData'
import Register from './auth/Register'
import Login from './auth/Login'
import MovieSection from './pages/MovieSection';




class App extends Component {
  constructor () {
    super()
    this.state = {
     
    }
  }

  

 

  
  render () {
    return (
      <Provider store={store}>
          <BrowserRouter>
              <div>
              
                  <Route exact path='/' component = {MovieSection} />
                  <Route exact path= '/register' component={Register} />
                  <Route exact path='/login' component={Login} />

              </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
