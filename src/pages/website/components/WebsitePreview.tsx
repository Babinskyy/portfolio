import { WebsiteType } from "../../../common/data/websites";
import Loader from "../../../common/components/Loader";
import { useState } from "react";

type WebsitePreviewProps = {
  darkTheme: boolean;
  website: WebsiteType | undefined;
};

const WebsitePreview = (props: WebsitePreviewProps): JSX.Element => {
  const [loadedImages, setLoadedImages] = useState({ mobile: false, desktop: false });
  const imageLoaded = (image: "mobile" | "desktop") => {
    setLoadedImages((prevLoadedImages) => ({
      ...prevLoadedImages,
      [image]: true,
    }));
  };
  return (
    <div className="WebsitePreview">
      <h1>{props.website?.name}</h1>
      <div
        className="loader-container"
        style={{
          display: loadedImages.mobile && loadedImages.desktop ? "none" : "flex",
        }}
      >
        <Loader />
      </div>
      <div
        className="preview"
        style={{
          display: loadedImages.mobile && loadedImages.desktop ? "flex" : "none",
        }}
      >
        <div className="website-container">
          <a href={props.website?.url} target="_blank">
            <div className={`website-preview ${props.darkTheme ? "dark" : ""}`}>
              <img
                src={
                  props.darkTheme
                    ? props.website?.preview.dark
                    : props.website?.preview.light
                }
                alt="website-desktop-preview"
                onLoad={() => {
                  console.log("dekstop");
                  imageLoaded("desktop");
                }}
              />
            </div>
          </a>
          <a href={props.website?.url} target="_blank" className="logo-container">
            <img src={props.website?.logo} alt="logo" />
          </a>
        </div>
        <div className="mobile-container">
          <a href={props.website?.url} target="_blank">
            <div className={`mobile-preview ${props.darkTheme ? "dark" : ""} `}>
              <img
                src={
                  props.darkTheme
                    ? props.website?.mobile.dark
                    : props.website?.mobile.light
                }
                alt="website-mobile-preview"
                onLoad={() => {
                  console.log("mobile");
                  imageLoaded("mobile");
                }}
              />
            </div>
          </a>
          <a href={props.website?.url} target="_blank" className="logo-container">
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
