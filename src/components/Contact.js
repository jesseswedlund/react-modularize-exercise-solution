import ContactDetail from "./ContactDetail"

const details = ["facebook", "github", "twitter"]

const Contact = () => {
    return (
      <div id="contact" className="contact">
        <div className="header">
          <h1>Let's work together...</h1>
          <p>How do you take your coffee?</p>
        </div>
        {details.map((siteName) => < ContactDetail site={siteName}/>)}
        <a href="mailto:" className="contact-details">Send Email</a>
        <a href="tel:" className="contact-details">Call Me</a>
      </div>
    )
}

export default Contact