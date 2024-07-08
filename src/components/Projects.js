export default function Project() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">These are some of my projects</h2>

      <div
        className="projects-grid"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* starting of the grid */}
        {/* Data Analytics: Bellabeat */}

        <a
          href="https://medium.com/@essermishelle/bellabeat-wellness-tracker-analysis-038c54ae6459/"
          target="_blank"
          rel="noopener noreferrer"
          className="project project-tile"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "90%", // Adjust width to control card width
            margin: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Optional: Adding some shadow for card effect
            textDecoration: "none", // Remove underline from links
          }}
        >
          <img
            className="project-image"
            src="https://res.cloudinary.com/drtgrgcsq/image/upload/v1720411241/Dashboard_ekgw8r.jpg"
            alt="Bellabeat Tableau Dashboard thumbnail"
            style={{ width: "100%", height: "auto" }} // Make image responsive
          />
          <p className="project-title">
            <span className="code">&lt;</span>
            Bellabeat Fitness Tracker Analysis
            <span className="code">&#47;&gt;</span>
          </p>
          <div className="project-description">
            As part of the Google Data Analytics Certificate, I completed a
            project on Bellabeat's fitness trackers, using tools like Google
            Cloud, SQL, R, and Tableau. This analysis revealed how Bellabeat
            devices can enhance fitness routines and empower women, sharpening
            my analytical skills and highlighting the power of data in the
            fitness industry.
          </div>
        </a>

        {/* <!--     Ramen-Talk Fullstack --> */}
        <a
          href="https://ramen-talk.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project project-tile"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "90%", // Adjust width to control card width
            margin: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Optional: Adding some shadow for card effect
            textDecoration: "none", // Remove underline from links
          }}
        >
          <img
            className="project-image"
            src="https://res.cloudinary.com/drtgrgcsq/image/upload/v1709948972/thumbnail_rgatql.jpg"
            alt="Ramen-Time Restaurant project thumbnail"
            style={{ width: "100%", height: "auto" }} // Make image responsive
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

        {/* <!--     Employee Fullstack Database --> */}
        <a
          href="https://www.loom.com/share/6f6c417c658040ab8718cf2dbe194eac?utm_medium=gif"
          target="_blank"
          rel="noopener noreferrer"
          className="project project-tile"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "90%", // Adjust width to control card width
            margin: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Optional: some shadow for card effect
            textDecoration: "none", // Remove underline from links
          }}
        >
          <img
            className="project-image"
            src="https://res.cloudinary.com/drtgrgcsq/image/upload/v1716275006/fullstackEmployees1_fjlhzt.jpg"
            alt="make qr code logo"
            style={{ width: "100%", height: "auto" }} // Make image responsive
          />
          <p className="project-title">
            <span className="code">&lt;</span>
            Employee Fullstack Database
            <span className="code">&#47;&gt;</span>
          </p>
          <div className="project-description">
            This is a fullstack employee database using React as frontend and
            MySQL as backend.
          </div>
        </a>

        {/* <!--     BAM weather --> */}
        <a
          href="https://bamweather.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project project-tile"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "90%", // Adjust width to control card width
            margin: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Optional: Adding some shadow for card effect
            textDecoration: "none", // Remove underline from links
          }}
        >
          <img
            className="project-image"
            src="https://res.cloudinary.com/drtgrgcsq/image/upload/v1709788645/screenshot-thumbnail_zgdyf0.jpg"
            alt="BAM weather project thumbnail"
            style={{ width: "100%", height: "auto" }} // Make image responsive
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
        {/* <!--     Our Recipe App --> */}
        {/* <a
          href="https://our-recipe-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project project-tile"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "90%", // Adjust width to control card width
            margin: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Optional: Adding some shadow for card effect
            textDecoration: "none", // Remove underline from links
          }}
        >
          <img
            className="project-image"
            src="https://res.cloudinary.com/drtgrgcsq/image/upload/v1709788645/screenshot-thumbnail_zgdyf0.jpg"
            alt="BAM weather project thumbnail"
            style={{ width: "100%", height: "auto" }} // Make image responsive
          />
          <p className="project-title">
            <span className="code">&lt;</span>
            Our-Recipe-App
            <span className="code">&#47;&gt;</span>
          </p>
          <div className="project-description">
            Built a full-stack app using React, CSS, HTML, PostgreSQL, packed
            with search and add to favorite(click on the heart).
          </div>
        </a> */}

        {/* <!--     MyTrip123 Travel weather --> */}
        <a
          href="https://mytrip123.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project project-tile"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "90%", // Adjust width to control card width
            margin: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Optional: Adding some shadow for card effect
            textDecoration: "none", // Remove underline from links
          }}
        >
          <img
            className="project-image"
            src="https://res.cloudinary.com/drtgrgcsq/image/upload/v1709788999/thumbnail_mwcouk.jpg"
            alt="mytrip123 project thumbnail"
            style={{ width: "100%", height: "auto" }} // Make image responsive
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
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "90%", // Adjust width to control card width
            margin: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Optional: Adding some shadow for card effect
            textDecoration: "none", // Remove underline from links
          }}
        >
          <img
            className="project-image"
            src="https://res.cloudinary.com/drtgrgcsq/image/upload/v1710428022/qrcode-thumbnail_psruh1.jpg"
            alt="make qr code logo"
            style={{ width: "100%", height: "auto" }} // Make image responsive
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
