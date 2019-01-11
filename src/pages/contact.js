import React from 'react'
import { Link } from 'gatsby'
import { Formik } from 'formik'
import Recaptcha from 'react-recaptcha'

import Layout from '../components/layout'
import SEO from '../components/seo'
import NetlifyFormComposer from '../components/NetlifyFormComposer'
import NetlifyForm from '../components/NetlifyForm'

const config = {
  initialValues: {
    name: '',
    company: '',
    phone: '',
    fax: '',
    email: '',
    comments: '',
  },
  // validationSchema: Yup.object().shape({
  //   name: Yup.string().required('Enter your name'),
  //   email: Yup.string()
  //     .email()
  //     .required('Enter a valid email address'),
  //   phone: Yup.string()
  //     .phone()
  //     .required('Enter your phone number'),
  //   fax: Yup.string().phone(),
  //   comments: Yup.string().required('Enter your comment'),
  // }),
}

class ContactPage extends React.Component {
  state = {
    recaptchaValue: null,
  }
  handleSetThankYouFocus = () => {
    console.log('Thanks it worked!')
  }
  handleSetErrorFocus = () => {
    console.error('Ah dang it did not work!')
  }

  handleVerifyRecaptcha = recaptchaValue => {
    this.setState({ recaptchaValue })
  }
  handleLoadRecaptcha = (...args) => {
    console.log(args)
  }
  render() {
    return (
      <Layout>
        <SEO title="Contact Page" />
        <NetlifyFormComposer
          formName="Contact"
          onSubmitSuccess={this.handleSetThankYouFocus}
          onSubmitError={this.handleSetErrorFocus}
          recaptchaValue={this.state.recaptchaValue}
        >
          {netlifyState => (
            <Formik {...config} onSubmit={netlifyState.handleSubmit}>
              {props => {
                const {
                  values,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                } = props
                return (
                  <NetlifyForm
                    name="Contact"
                    onSubmit={handleSubmit}
                    handleChange={handleChange}
                  >
                    <div>
                      <label htmlFor="name">Name</label>
                      <input
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="name"
                        id="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company">Company</label>
                      <input
                        value={values.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="company"
                        id="company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="phone"
                        id="phone"
                      />
                    </div>
                    <div>
                      <label htmlFor="fax">Fax</label>
                      <input
                        type="phone"
                        value={values.fax}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="fax"
                        id="fax"
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="email"
                        id="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="comments">Comments</label>
                      <textarea
                        value={values.comments}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="comments"
                        id="comments"
                      />
                    </div>
                    <Recaptcha
                      sitekey="6LfbTIcUAAAAAJJpctmlKvrPyj7zECaOv2LzLZvH"
                      render="explicit"
                      verifyCallback={this.handleVerifyRecaptcha}
                      onloadCallback={this.handleLoadRecaptcha}
                    />
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </NetlifyForm>
                )
              }}
            </Formik>
          )}
        </NetlifyFormComposer>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default ContactPage
