import websites from "../../../common/data/websites";

type ProjectsProps = {
  darkTheme: boolean;
};
const Projects = (props: ProjectsProps): JSX.Element => {
  return (
    <div className="projects">
      <h3>MY PROJECTS</h3>
      {websites.map((e, i) => {
        return (
          <a
            href={`website/${e.id}`}
            className={`${props.darkTheme && "dark"}`}
          >
            <span>{e.name}</span>
            <img src={e.logo} alt="" />
          </a>
        );
      })}
    </div>
  );
};

export default Projects;
