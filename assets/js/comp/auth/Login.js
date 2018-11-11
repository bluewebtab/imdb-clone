import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TextFieldGroup from '../common/TextFieldGroup'; 
import { Link } from 'react-router-dom'


 export default class Login extends Component {
  constructor(){
    super();
    this.state = {
     
      email: '',
      password: '',
     
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    const user = {
     
      email: this.state.email,
      password: this.state.password,
      

    }
    console.log(user)
  }

  render() {
    return (
        <div className="row">
          <div className="left-split col-xs-6">

          </div>
          <div className="right-split col-xs-6">
          <div className="loginForm">
          
          <div className="row center-xs">
            <div className="display-3">
            <Link to="/" className="display-4 ">Movizz</Link>

              <h1 className="display-5">Sign in to your account</h1>
              
              <form onSubmit={this.onSubmit}>
                <div className="all-forms">
                
                <div className="form-group start-xs">
                  <h1 className="display-6">Email</h1>
                  <input 
                  type="email"
                  className="form-control" 
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                   />
                </div>
                <div className="form-group start-xs">
                  <h1 className="display-6">Password</h1>
                  <input
                   type="password"
                   className="form-control form-control-lg"
                   value={this.state.password}
                   onChange={this.onChange}
                   name="password" />
                </div>
                
                <input 
                type="submit"
                className="btn btn-block" />
                </div>
              </form>
            </div>
          </div>
        
      </div>
                 
                  
      
          </div>

        </div>
       
      
    )
  }
}


