import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';


const TextAreaFieldGroup = ({
  name, 
  placeholder,
  value,
  
  error,
  info,
  
  onChange
}) => {
  return (
    <div className="form-group start-xs">
        <textarea
        className={classnames('form-control', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        
        />
        {info && <small className="form-text ">{info}</small>}
        {error && (<div className="invalid-feedback">{error}</div>)}

  </div>
  )
}

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  

}



export default TextAreaFieldGroup;