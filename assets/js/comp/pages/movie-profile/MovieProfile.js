import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import MovieBackground from './MovieBackground'

class MovieProfile extends Component {
  

  render() {
    // const {user} = this.props.auth;
    // const {profile, loading} = this.props.profile;

   

    return (
      <div className="profilePage">
       <header className="profile-head">
       <MovieBackground />
       </header>
       <section>
       
       </section>
        
        
      </div>
    )
  }
}

MovieProfile.propTypes = {
  
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});



export default connect(mapStateToProps)(MovieProfile);