const ContactDetail = (props) => {
    return (
        <a
          href={`http://${props.site}.com`}
          target="_blank"
          rel="noreferrer"
          className="contact-details"
        >
          {props.site.split('')[0].toUpperCase() + props.site.slice(1)}
        </a>
    )
}

export default ContactDetail