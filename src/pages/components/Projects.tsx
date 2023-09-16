import websites from "../../common/data/websites";

type ProjectsProps = {
  darkTheme: boolean;
};
const Projects = (props: ProjectsProps): JSX.Element => {
  return (
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
  );
};

export default Projects;
