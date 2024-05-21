export default function Welcome() {
  return (
    <section
      id="welcome-section"
      className="welcome-section"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <br />
      <h1>Hi, I am Mishelle —</h1>

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <img
          className="tool-image"
          src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"
          alt="React-logo"
          style={{ width: "120px", height: "125px", margin: "5px" }}
        />
        <img
          className="tool-image"
          src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png"
          alt="html-logo"
          style={{ width: "120px", height: "130px", margin: "5px" }}
        />
        <img
          className="tool-image"
          // src="https://logospng.org/download/css-3/logo-css-3-1024.png"
          src="https://logos-download.com/wp-content/uploads/2024/01/CSS3_Logo.png"
          alt="css-logo"
          style={{ width: "120px", height: "130px", margin: "5px" }}
        />
        <img
          className="tool-image"
          src="https://logosdownload.com/logo/javascript-logo-big.png"
          alt="javascript-logo"
          style={{ width: "110px", height: "130px", margin: "5px" }}
        />
      </div>

      <div style={{ textAlign: "center", fontSize: "25px", weight: "bolder" }}>
        <p>Full Stack,</p>
        <p>Front End,</p>
        <p>Back End,</p>
        <p>Database Design,</p>
        <p>Software Developer</p>
      </div>
    </section>
  );
}
