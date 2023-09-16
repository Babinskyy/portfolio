import marketLight from "../images/websites/marketplace-light.png";
import marketDark from "../images/websites/marketplace-dark.png";
import marketLogo from "../images/websites/marketplacesmalllogo.png";

import podolog from "../images/websites/podolog.png";
import podologLogo from "../images/websites/podolog-logo.png";

import analyticsLight from "../images/websites/analytics-light.png";
import analyticsDark from "../images/websites/analytics-dark.png";
import chart from "../images/websites/pie-chart.png";

import driverappLight from "../images/websites/driverapp-light.png";
import driverappDark from "../images/websites/driverapp-dark.png";
import delivery from "../images/websites/delivery.png"

type Website = {
  name: string;
  url: string;
  technologies: string[];
  preview: { light: string; dark: string };
  logo: string;
  color: string;
};

const websites: Website[] = [
  {
    name: "Market Place",
    url: "https://marketplace.yan.software/auth",
    technologies: ["js", "ts", "react", "postgres", "node", "express"],
    preview: { light: marketLight, dark: marketDark },
    logo: marketLogo,
    color: "#3586ff",
  },
  {
    name: "Podolog Sopot",
    url: "https://podologsopot.pl/",
    technologies: ["js", "ts", "react", "postgres", "node", "express"],
    preview: { light: podolog, dark: podolog },
    logo: podologLogo,
    color: "transparent",
  },
  {
    name: "Analytics",
    url: "https://analytics.babinsky.pl/",
    technologies: ["js", "ts", "react", "postgres", "node", "express"],
    preview: { light: analyticsLight, dark: analyticsDark },
    logo: chart,
    color: "transparent",
  },
  {
    name: "Driver App",
    url: "https://driverapp.babinsky.pl/",
    technologies: ["js", "ts", "react", "postgres", "node", "express"],
    preview: { light: driverappLight, dark: driverappDark },
    logo: delivery,
    color: "transparent",
  },
];

export default websites;
