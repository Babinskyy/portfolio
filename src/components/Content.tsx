import websites from "../data/websites";

import pic from "../images/others/papugapic2.png";

type ContentProps = {
  darkTheme: boolean;
};

const Content = (props: ContentProps): JSX.Element => {
  return (
    <div className="content">
      <div className="greetings-container">
        <div className={`image-container ${props.darkTheme && "dark"}`}>
          <img src={pic} alt="" />
        </div>
        <h1 className="greetings">Hello, I'm Jan.</h1>
        <div className="filler"></div>
      </div>

      <hr />
      <div className="skills-paragraph">
        <h3>MY SKILLS</h3>
        <div className="skills-container">
          <div className="skill js"></div>
          <div className="skill ts"></div>
          <div className="skill react"></div>
          <div className="skill mongo"></div>
          <div className="skill postgres"></div>
          <div className="skill node"></div>
          <div className="skill express"></div>
          <div className="skill ionic"></div>
        </div>
      </div>
      <hr />
      <div className="portfolio">
        {websites.map((e, i) => {
          return (
            <div className="website-container">
              <div className={`website-preview ${props.darkTheme && "dark"}`}>
                <img
                  src={props.darkTheme ? e.preview.dark : e.preview.light}
                  alt=""
                />
              </div>
              <a
                href={e.url}
                target="_blank"
                style={{ backgroundColor: e.color }}
              >
                <img
                  src={props.darkTheme ? e.logo.dark : e.logo.light}
                  alt=""
                  style={{ width: e.width }}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
