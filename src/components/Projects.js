export default function Project() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">These are some of my projects</h2>

      <div className="projects-grid">
        {/* starting of the grid */}
        <a
          href="https://ramen-talk.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project project-tile"
        >
          <img
            className="project-image"
            src="https://res.cloudinary.com/drtgrgcsq/image/upload/v1709948972/thumbnail_rgatql.jpg"
            alt="Ramen-Time Restaurant project thumbnail"
          />
          <p className="project-title">
            <span className="code">&lt;</span>
            Ramen-Time Restaurant
            <span className="code">&#47;&gt;</span>
          </p>
          <div className="project-description">
            Designed an online ordering system for a local restaurant.
            Collaborated with team members and stakeholders, created in MERN
            Stack using JSONWebToken
          </div>
        </a>
        {/* <!--     BAM weather --> */}
        <a
          href="https://bamweather.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project project-tile"
        >
          <img
            className="project-image"
            src="https://res.cloudinary.com/drtgrgcsq/image/upload/v1709788645/screenshot-thumbnail_zgdyf0.jpg"
            alt="BAM weather project thumbnail"
          />
          <p className="project-title">
            <span className="code">&lt;</span>
            Brianna, Anna, Mishelle Weather
            <span className="code">&#47;&gt;</span>
          </p>
          <div className="project-description">
            Built a frontend weather app using React, CSS, HTML, Bootstrap,
            collaborated with team members using GitHub tools and actions.
          </div>
        </a>
        {/* <!--     MyTrip123 Travel weather --> */}
        <a
          href="https://mytrip123.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project project-tile"
        >
          <img
            className="project-image"
            src="https://res.cloudinary.com/drtgrgcsq/image/upload/v1709788999/thumbnail_mwcouk.jpg"
            alt="mytrip123 project thumbnail"
          />
          <p className="project-title">
            <span className="code">&lt;</span>
            MyTrip123 Travel & Lodging App
            <span className="code">&#47;&gt;</span>
          </p>
          <div className="project-description">
            Built a frontend traveling app using React, CSS, HTML, Bootstrap,
            fetch API, React hooks
          </div>
        </a>
        {/* <!--     qr code maker --> */}
        <a
          href="https://make-qr-code-mishelle.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project project-tile"
        >
          <img
            className="project-image"
            src="https://res.cloudinary.com/drtgrgcsq/image/upload/v1710428022/qrcode-thumbnail_psruh1.jpg"
            alt="make qr code logo"
          />
          <p className="project-title">
            <span className="code">&lt;</span>
            QR Code Maker
            <span className="code">&#47;&gt;</span>
          </p>
          <div className="project-description">
            Using React hooks and libraries, a QR code generator is created.
          </div>
        </a>
      </div>
      {/* <!-- show all --> */}
      {/* <a
        href="https://essermishelle/showAll/"
        className="btn btn-show-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        Show all<i className="fas fa-chevron-right"></i>
      </a> */}
    </section>
  );
}
