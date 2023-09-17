import { WebsiteType } from "../../../common/data/websites";

type WebsiteDescriptionProps = {
  darkTheme: boolean;
  website: WebsiteType | undefined;
};
const WebsiteDescription = (props: WebsiteDescriptionProps): JSX.Element => {
  return (
    <div className="WebsiteDescription">
      <p className="description">{props.website?.description}</p>
      <a href={props.website?.url}>
        <button className="visit">Visit {props.website?.name}</button>
      </a>
    </div>
  );
};

export default WebsiteDescription;
