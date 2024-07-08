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
          style={{ width: "125px", height: "125px", margin: "3px" }}
        />
        <img
          className="tool-image"
          src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png"
          alt="html-logo"
          style={{ width: "123px", height: "130px", margin: "5px" }}
        />
        <img
          className="tool-image"
          // src="https://logospng.org/download/css-3/logo-css-3-1024.png"
          src="https://logos-download.com/wp-content/uploads/2024/01/CSS3_Logo.png"
          alt="css-logo"
          style={{
            width: "112px",
            height: "132px",
            margin: "7px",
            marginLeft: "6px",
          }}
        />
        <img
          className="tool-image"
          src="https://logosdownload.com/logo/javascript-logo-big.png"
          alt="javascript-logo"
          style={{
            width: "113px",
            height: "130px",
            margin: "8px",
          }}
        />
        <img
          className="tool-image"
          //src="https://www.wizcase.com/wp-content/uploads/2021/12/Tableau-logo.jpg"
          src="https://cdn.zerosuniverse.com/wp-content/uploads/2023/04/Tableau-2048x1152.jpg"
          alt="Tableau-logo"
          style={{ width: "125px", height: "130px", margin: "7px" }}
        />
        <img
          className="tool-image"
          src="https://veramasa.com/assets/img/technology/illu-r-language.png"
          alt="R-logo"
          style={{ width: "135px", height: "150px", margin: "5px" }}
        />
      </div>

      <div style={{ textAlign: "center", fontSize: "25px", weight: "bolder" }}>
        <p>Front End,</p>
        <p>Back End,</p>
        <p>Full Stack,</p>
        <p>Data Analytics,</p>
        <p>Software Developer</p>
      </div>
    </section>
  );
}
