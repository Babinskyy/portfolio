import { WebsiteType } from "../../../common/data/websites";
import github from "../../../common/images/websites/github.png";

type WebsiteDescriptionProps = {
  darkTheme: boolean;
  website: WebsiteType | undefined;
};
const WebsiteDescription = (props: WebsiteDescriptionProps): JSX.Element => {
  return (
    <div className="WebsiteDescription">
      {props.website?.importantMessage && (
        <p className="important">{props.website?.importantMessage}</p>
      )}

      <p className="description">{props.website?.description}</p>
      <div className="buttons-panel">
        <a
          href={props.website?.url}
          target="_blank"
          className={`visit ${props.darkTheme ? "dark" : ""}`}
        >
          Visit {props.website?.name}
          <img src={props.website?.logo} alt="icon" />
        </a>
        <a
          href={props.website?.github}
          target="_blank"
          className={`visit ${props.darkTheme ? "dark" : ""}`}
        >
          Visit on GitHub
          <img src={github} alt="icon" />
        </a>
        {props.website?.server && (
          <a
            href={props.website?.server}
            target="_blank"
            className={`visit ${props.darkTheme ? "dark" : ""}`}
          >
            Server-side code
            <img src={github} alt="icon" />
          </a>
        )}
      </div>
    </div>
  );
};

export default WebsiteDescription;
