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
            Designed an online ordering system Pro Bono for a local restaurant.
            Collaborated with team members and stakeholders, Created in MERN
            Stack
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
        </a>
        {/* <!--     random quotes generator --> */}

        {/* <!--     calculator --> */}

        {/* <!--     map data --> */}

        {/* <!--     wikipedia --> */}

        {/* <!-- tribute --> */}

        {/* <!--  tic Tac Toe--> */}
      </div>
      {/* <!-- show all --> */}
      {/* <a
        href="https://codepen.io/FreeCodeCamp/"
        className="btn btn-show-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        Show all<i className="fas fa-chevron-right"></i>
      </a> */}
    </section>
  );
}
