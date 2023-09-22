import { WebsiteType } from "../../../common/data/websites";

type WebsitePreviewProps = {
  darkTheme: boolean;
  website: WebsiteType | undefined;
};

const WebsitePreview = (props: WebsitePreviewProps): JSX.Element => {
  return (
    <div className="WebsitePreview">
      <h1>{props.website?.name}</h1>
      <div className="preview">
        <div className="website-container">
          <a href={props.website?.url} target="_blank">
            <div className={`website-preview ${props.darkTheme ? "dark" : ""} ${
                props.website?.id === 4 ? "mobile" : ""
              }`}>
              <img
                src={
                  props.darkTheme
                    ? props.website?.preview.dark
                    : props.website?.preview.light
                }
                alt=""
              />
            </div>
          </a>
          <a
            href={props.website?.url}
            target="_blank"
            className="logo-container"
          >
            <img src={props.website?.logo} alt="logo" />
          </a>
        </div>
        <div className="mobile-container">
          <a href={props.website?.url} target="_blank">
            <div
              className={`mobile-preview ${props.darkTheme ? "dark" : ""} `}
            >
              <img
                src={
                  props.darkTheme
                    ? props.website?.mobile.dark
                    : props.website?.mobile.light
                }
                alt=""
              />
            </div>
          </a>
          <a
            href={props.website?.url}
            target="_blank"
            className="logo-container"
          >
            <img src={props.website?.logo} alt="logo" />
          </a>
        </div>
      </div>
      <ul className="skill-list">
        {props.website?.stack.map((skill) => {
          return (
            <li key={skill} className={`${props.darkTheme ? "dark" : ""}`}>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WebsitePreview;
