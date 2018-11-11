import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {registerUser} from '../actions/authActions'

class Register extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2

    };

    this.props.registerUser(newUser)

    // axios.post('/api/users/register', newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({errors: err.response.data}))
  }
  

  render() {

    const {errors} = this.state;

    const {user} = this.props.auth;

    return (
      <div className="row">
          <div className="left-split col-xs-6">

          </div>
          <div className="right-split col-xs-6">
            <div className="registerForm">
          
            <div className="row center-xs">
              <div className="display-3">
              <Link to="/" className="display-4 ">Movizz</Link>

                <h1 className="display-5">Create account</h1>
                
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="all-forms">
                  <div className="form-group start-xs">
                    <h1 className="display-6 ">Name</h1>
                    <input
                     type="text"
                     className={classnames('form-control', {
                       'is-invalid': errors.name
                     })}
                     name="name"
                     value={this.state.name}
                     onChange={this.onChange}
                      />
                      {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                  </div>
                  <div className="form-group start-xs">
                    <h1 className="display-6">Email</h1>
                    <input 
                    type="email"
                    className={classnames('form-control', {
                      'is-invalid': errors.email
                    })}
                    
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                     />
                     {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}

                  </div>
                  <div className="form-group start-xs">
                    <h1 className="display-6">Password</h1>
                    <input
                     type="password"
                     className={classnames('form-control', {
                      'is-invalid': errors.email
                    })}
                     value={this.state.password}
                     onChange={this.onChange}
                     name="password"
                      />
                      {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}

                  </div>
                  <div className="form-group start-xs">
                    <h1 className="display-6">Confirm password</h1>
                    <input 
                    type="password"
                    className={classnames('form-control', {
                      'is-invalid': errors.password2
                    })}
                    value={this.state.password2}
                    onChange={this.onChange}
                    name="password2" />
                    {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}

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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {registerUser})(Register);
