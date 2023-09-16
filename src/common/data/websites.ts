import marketLight from "../images/websites/marketplace-light.png";
import marketDark from "../images/websites/marketplace-dark.png";
import marketLogoLight from "../images/websites/marketplacelogo4.png";
import marketLogoDark from "../images/websites/marketplacelogo3.png";

import podolog from "../images/websites/podolog.png";
import podologLogo from "../images/websites/podolog-logo.png"

import analyticsLight from "../images/websites/analytics-light.png"
import analyticsDark from "../images/websites/analytics-dark.png"
import chart from "../images/websites/pie-chart.png"

import driverappLight from "../images/websites/driverapp-light.png"
import driverappDark from "../images/websites/driverapp-dark.png"

type Website = {
  name: string;
  url: string;
  technologies: string[];
  preview: { light: string; dark: string };
  logo: {light: string, dark: string};
  width: string;
    color: string;
};

const websites: Website[] = [
  {
    name: "Market Place",
    url: "https://marketplace.babinsky.pl/",
    technologies: ["js", "ts", "react", "postgres", "node", "express"],
    preview: { light: marketLight, dark: marketDark },
    logo: {light: marketLogoLight, dark: marketLogoDark},
    width: "250px",
    color: "#3586ff",
  },
  {
    name: "Podolog Sopot",
    url: "https://podologsopot.pl/",
    technologies: ["js", "ts", "react", "postgres", "node", "express"],
    preview: { light: podolog, dark: podolog },
    logo: {light: podologLogo, dark: podologLogo},
    width: "100px",
    color: "transparent",
  },
  {
    name: "Analytics",
    url: "https://analytics.babinsky.pl/",
    technologies: ["js", "ts", "react", "postgres", "node", "express"],
    preview: { light: analyticsLight, dark: analyticsDark },
    logo: {light: chart, dark: chart},
    width: "100px",
    color: "transparent",
  },
  {
    name: "Driver App",
    url: "https://driverapp.babinsky.pl/",
    technologies: ["js", "ts", "react", "postgres", "node", "express"],
    preview: { light: driverappLight, dark: driverappDark },
    logo: {light: chart, dark: chart},
    width: "100px",
    color: "transparent",
  },
];

export default websites;
