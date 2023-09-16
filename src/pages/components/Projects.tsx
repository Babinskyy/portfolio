import websites from "../../common/data/websites";
import mockup from "../../common/images/others/mockup-removebg.png"

type ProjectsProps = {
  darkTheme: boolean;
};
const Projects = (props: ProjectsProps): JSX.Element => {
  return (
    <div className="portfolio">
      <h3>MY PROJECTS</h3>
      {websites.map((e, i) => {
        return (
          <div className="website-container">
            <a href={e.url} target="blank">
              <div className={`website-preview ${props.darkTheme && "dark"}`}>
                <img
                  src={props.darkTheme ? e.preview.dark : e.preview.light}
                  alt=""
                />
              </div>
            </a>
            <a href={e.url} target="_blank" className="logo-container">
              <img src={e.logo} alt="logo" />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
