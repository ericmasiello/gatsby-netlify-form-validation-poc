import React from 'react'
import PropTypes from 'prop-types'

const NetlifyForm = ({
  name,
  children,
  honeypotMessage,
  handleChange,
  ...rest
}) => {
  const honeypot = `${name}-bot-field`
  return (
    <form
      data-netlify="true"
      netlify-honeypot={honeypot}
      method="POST"
      name={name}
      {...rest}
    >
      <input type="hidden" name="form-name" value={name} />
      <span hidden>
        {/* eslint-disable jsx-a11y/label-has-associated-control */}
        <label>
          {honeypotMessage} <input name={honeypot} onChange={handleChange} />
        </label>
      </span>
      {children}
    </form>
  )
}

NetlifyForm.displayName = 'NetlifyForm'

NetlifyForm.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  honeypotMessage: PropTypes.node,
}

NetlifyForm.defaultProps = {
  honeypotMessage: `Don't fill this out if you're human:`,
}

export default NetlifyForm
