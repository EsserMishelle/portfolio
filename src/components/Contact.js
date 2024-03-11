export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <h2>Let's work together...</h2>
        <p>How do you take your coffee?</p>
      </div>
      <div className="contact-links">
        {/* GitHub contact */}
        <a
          id="profile-link"
          href="https://github.com/EsserMishelle"
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-details"
        >
          <img
            src="https://res.cloudinary.com/drtgrgcsq/image/upload/v1710115322/icons/github-cat_u6ery8.gif"
            className="github-contact-details"
            alt="GitHub"
          />
          GitHub
        </a>

        {/* LinkedIn contact */}
        <a
          id="profile-link"
          href="https://www.linkedin.com/in/essermishelle"
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-details"
        >
          <img
            src="https://res.cloudinary.com/drtgrgcsq/image/upload/v1710111814/icons/372102050_LINKEDIN_ICON_TRANSPARENT_400_bydrlq.gif"
            alt="LinkedIn"
            className="linkedIn-contact-details"
          />
          LinkedIn
        </a>

        {/* Email contact */}
        <a
          id="profile-link"
          href="mailto:EsserMishelle@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-details"
        >
          <img
            src="https://res.cloudinary.com/drtgrgcsq/image/upload/v1710116466/email-giphy_othvxd.gif"
            className="email-contact-details"
            alt="Email"
          />
          Email
        </a>

        {/* Phone number contact */}
        <a href="tel:555-555-5555" className="btn contact-details">
          <img
            src="https://res.cloudinary.com/dxh60x8dq/image/upload/v1709282323/Ramen%20Time%20Images/contact-us-icon-black-2_g4wfyk.png"
            className="phone-contact-details"
            alt="Phone"
            style={{ height: "30px", marginRight: "30px", marginTop: "7px" }}
          />
          Phone
        </a>
      </div>
    </section>
  );
}
