import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import WebsitePreview from "./components/WebsitePreview";
import { useParams } from "react-router";
import websites from "../../common/data/websites";
import { Link } from "react-router-dom";
import { WebsiteType } from "../../common/data/websites";
import React, { useEffect, useState } from "react";
import WebsiteDescription from "./components/WebsiteDescription";

type WebsiteProps = {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const Website = (props: WebsiteProps): JSX.Element => {
  const [website, setWebsite] = useState<WebsiteType>();
  const { id } = useParams();

  useEffect(() => {
    setWebsite(websites.find((website) => website.id == Number(id)));
  });
  return (
    <div className="Website">
      {/* <Header darkTheme={props.darkTheme} setDarkTheme={props.setDarkTheme} /> */}
      <div className="website-content">
      <WebsitePreview darkTheme={props.darkTheme} website={website}/>
      <WebsiteDescription website={website} darkTheme={props.darkTheme}/>
      </div>
      {/* <Footer darkTheme={props.darkTheme} /> */}
    </div>
  );
};

export default Website;
