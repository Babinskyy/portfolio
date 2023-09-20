import { WebsiteType } from "../../../common/data/websites";

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
      <a
        href={props.website?.url}
        target="_blank"
        className={`visit ${props.darkTheme ? "dark" : ""}`}
      >
        Visit {props.website?.name}
        <img src={props.website?.logo} alt="icon" />
      </a>
    </div>
  );
};

export default WebsiteDescription;
