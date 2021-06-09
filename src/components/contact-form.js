import React from "react"
import * as styles from "../pages/contact.module.scss"

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <form
        className={styles.contactForm}
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xeqpddeo"
        method="POST"
      >
        <h2 className={styles.section__title}>Leave us a message</h2>

        <input
          className={styles.input__text}
          name="fname"
          id="fname"
          type="text"
          placeholder="First Name"
        />

        <input
          className={styles.input__text}
          name="lname"
          id="lname"
          type="text"
          placeholder="Last Name"
        />

        <input
          className={styles.input__text}
          name="Email"
          id="email"
          type="email"
          placeholder="Email"
        />

        <textarea
          className={styles.input__textarea}
          rows="5"
          name="message"
          id="message"
          type="message"
          placeholder="Message"
        />

        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button className={styles.submit__btn}>Send Message</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
