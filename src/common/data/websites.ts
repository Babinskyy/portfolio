import marketLight from "../images/websites/marketplace-light.png";
import marketDark from "../images/websites/marketplace-dark.png";
import marketLogo from "../images/websites/marketplacesmalllogo.png";
import marketMobileDark from "../images/websites/marketplace-mobile-dark.png"
import marketMobileLight from "../images/websites/marketplace-mobile-light.png"

import podolog from "../images/websites/podolog.png";
import podologLogo from "../images/websites/podolog-logo.png";
import podologMobile from "../images/websites/podolog-mobile.png";

import analyticsLight from "../images/websites/analytics-light.png";
import analyticsDark from "../images/websites/analytics-dark.png";
import chart from "../images/websites/pie-chart.png";
import analyticsMobileDark from "../images/websites/analytics-mobile-dark.png"
import analyticsMobileLight from "../images/websites/analytics-mobile-light.png"

import driverappLight from "../images/websites/driverapp-light.png";
import driverappDark from "../images/websites/driverapp-dark.png";
import delivery from "../images/websites/delivery.png";

export type WebsiteType = {
  id: number;
  name: string;
  url: string;
  technologies: string[];
  preview: { light: string; dark: string };
  mobile: { light: string; dark: string };
  logo: string;
  description: string;
};

const websites: WebsiteType[] = [
  {
    id: 1,
    name: "Market Place",
    url: "https://marketplace.yan.software/auth",
    technologies: ["js", "ts", "react", "postgres", "node", "express"],
    preview: { light: marketLight, dark: marketDark },
    mobile: { light: marketMobileLight, dark: marketMobileDark },
    logo: marketLogo,
    description: "description"
  },
  {
    id: 2,
    name: "Podolog Sopot",
    url: "https://podologsopot.pl/",
    technologies: ["js", "ts", "react", "postgres", "node", "express"],
    preview: { light: podolog, dark: podolog },
    mobile: { light: podologMobile, dark: podologMobile },
    logo: podologLogo,
    description: "Podologsopot.pl is a website made at the client's request. This user-friendly platform showcases the podiatrist's expertise, detailed pricing information, and the clinic's location. The site not only offers a thorough description of the podiatrist's services but also ensures easy navigation for potential patients, regardless of the device they're using."
  },
  {
    id: 3,
    name: "Analytics",
    url: "https://analytics.babinsky.pl/",
    technologies: ["js", "ts", "react", "postgres", "node", "express"],
    preview: { light: analyticsLight, dark: analyticsDark },
    mobile: { light: analyticsMobileLight, dark: analyticsMobileDark },
    logo: chart,
    description: "Analytics website was made for office workers."
  },
  {
    id: 4,
    name: "Driver App",
    url: "https://driverapp.babinsky.pl/",
    technologies: ["js", "ts", "react", "postgres", "node", "express"],
    preview: { light: driverappLight, dark: driverappDark },
    mobile: { light: driverappDark, dark: driverappLight },
    logo: delivery,
    description: "Driver App was made for drivers as an everyday in-work app. "
  },
];

export default websites;
