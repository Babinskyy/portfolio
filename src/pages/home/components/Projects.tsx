import websites from "../../../common/data/websites";
import githublogo from "../../../common/images/websites/github.png";

type ProjectsProps = {
  darkTheme: boolean;
};
const Projects = (props: ProjectsProps): JSX.Element => {
  return (
    <div className="projects">
      <h3>MY PROJECTS</h3>
      {websites.map((e, i) => {
        return (
          <a href={`website/${e.id}`}>
            <button key={i} className={`${props.darkTheme && "dark"}`}>
              <span>{e.name}</span>
              <img src={e.logo} alt="" />
            </button>
          </a>
        );
      })}
      <a href="https://github.com/Babinskyy" target="blank">
        <button className={`${props.darkTheme && "dark"}`}>
          <span>Github</span>
          <img src={githublogo} alt="" />
        </button>
      </a>
    </div>
  );
};

export default Projects;
