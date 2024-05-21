export default function Welcome() {
  return (
    <section
      id="welcome-section"
      className="welcome-section"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <h1>Hi, I am Mishelle —</h1>
      <br />

      <img
        className="tool-image"
        src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"
        alt="React-logo"
        // style={{ width: "20px", length: "15px" }}
        style={{ width: "120px" }}
      />
      <img
        className="tool-image"
        src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png"
        alt="html-logo"
        // style={{ width: "20px", length: "15px" }}
        style={{ width: "120px" }}
      />
      <img
        className="tool-image"
        src="https://logospng.org/download/css-3/logo-css-3-1024.png"
        alt="css-logo"
        // style={{ width: "20px", length: "15px" }}
        style={{ width: "140px" }}
      />
      <img
        className="tool-image"
        src="https://logosdownload.com/logo/javascript-logo-big.png"
        alt="javascript-logo"
        // style={{ width: "20px", length: "15px" }}
        style={{ width: "110px" }}
      />
      <p>Full Stack,</p>
      <p>Front End,</p>
      <p>Back End,</p>
      <p>Database Design, </p>

      <p>Software Developer</p>
    </section>
  );
}
