import React from 'react'
import PropTypes from 'prop-types'

const NetlifyForm = ({ name, children, handleChange, ...rest }) => {
  return (
    <form
      data-netlify="true"
      data-netlify-recaptcha="true"
      method="POST"
      name={name}
      {...rest}
    >
      <input type="hidden" name="form-name" value={name} />
      {children}
    </form>
  )
}

NetlifyForm.displayName = 'NetlifyForm'

NetlifyForm.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
}

export default NetlifyForm
