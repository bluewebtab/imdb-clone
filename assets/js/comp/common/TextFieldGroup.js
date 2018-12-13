import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';


const TextFieldGroup = ({
  name, 
  placeholder,
  value,
  label,
  
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group start-xs">
        <input 
        type={type}
        className={classnames('form-control', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        />
        {info && <small className="form-text ">{info}</small>}
        {error && (<div className="invalid-feedback">{error}</div>)}

  </div>
  )
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string

}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;