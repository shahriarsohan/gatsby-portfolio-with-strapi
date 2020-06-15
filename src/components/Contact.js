import React from "react"

export const Contact = () => {
  return (
    <section id="contact" className="contact-page">
      <article className="contact-form">
        <h3>Get In Touch</h3>
        <form
          action="https://send.pageclip.co/VuqhsFLA9r29bv10Esw1H6zUjI1DXhNn/contact"
          method="POST"
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="name"
            />
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="message"
              name="subject"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn btn">
            Send Message
          </button>
        </form>
      </article>
    </section>
  )
}
