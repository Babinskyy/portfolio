import websites from "../../../common/data/websites";
import { Link } from "react-router-dom";

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
            <button key={i} className={`${props.darkTheme && "dark"}`}><span>{e.name}</span><img src={e.logo} alt=""/></button>
          </a>
        );
      })}
    </div>
  );
};

export default Projects;
