import marketLight from "../images/websites/marketplace-light.png";
import marketDark from "../images/websites/marketplace-dark.png";
import marketLogo from "../images/websites/marketplacesmalllogo.png";
import marketMobileDark from "../images/websites/marketplace-mobile-dark.png";
import marketMobileLight from "../images/websites/marketplace-mobile-light.png";

import podolog from "../images/websites/podolog.png";
import podologLogo from "../images/websites/podolog-logo.png";
import podologMobile from "../images/websites/podolog-mobile.png";

import analyticsLight from "../images/websites/analytics-light.png";
import analyticsDark from "../images/websites/analytics-dark.png";
import chart from "../images/websites/pie-chart.png";
import analyticsMobileDark from "../images/websites/analytics-mobile-dark.png";
import analyticsMobileLight from "../images/websites/analytics-mobile-light.png";

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
  importantMessage: string;
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
    importantMessage: "Login: janek Password: 123",
    description:
      "The marketplace project I developed draws inspiration from Poland's popular marketplace service, olx.pl. Website allows users to add, delete, and edit their offers, providing a dynamic and user-friendly experience. With essential functionalities like user login, logout, theme change, category filters, and a search bar, the platform allows users to easily search and manage their offers. Demonstrating my proficiency in programming, I used technologies such as React, along with React Hook Form, for the front-end. On the backend, Node.js powers the server, while PostgreSQL serves as the database. Hosting on Heroku ensures reliable server performance, while Netlify serves as the home for the frontend. Images are stored securely on Azure Storage Cloud.",
  },
  {
    id: 2,
    name: "Podolog Sopot",
    url: "https://podologsopot.pl/",
    technologies: ["js", "ts", "react", "postgres", "node", "express"],
    preview: { light: podolog, dark: podolog },
    mobile: { light: podologMobile, dark: podologMobile },
    logo: podologLogo,
    importantMessage: "",
    description:
      "Podologsopot.pl is a website made at the client's request. This user-friendly platform showcases the podiatrist's expertise, detailed pricing information, and the clinic's location. The site not only offers a thorough description of the podiatrist's services but also ensures easy navigation for potential patients, regardless of the device they're using.",
  },
  {
    id: 3,
    name: "Analytics",
    url: "https://analytics.babinsky.pl/",
    technologies: ["js", "ts", "react", "postgres", "node", "express"],
    preview: { light: analyticsLight, dark: analyticsDark },
    mobile: { light: analyticsMobileLight, dark: analyticsMobileDark },
    logo: chart,
    importantMessage: "",
    description:
      "Analytics platform is a product designed for office workers. It helped them manage information about drivers and routes all in one place. My job was to listen to what the clients needed and make sure those needs were part of the product. I also focused on making the screens and buttons easy for people to use. One of the cool things about this product is that it showed important data in graphs and bars, which made it easy for users to understand how their company was doing. This project shows my commitment to making products that meet customer needs and are easy to use, while also being visually appealing and helpful for businesses.",
  },
  {
    id: 4,
    name: "Driver App",
    url: "https://driverapp.babinsky.pl/",
    technologies: ["js", "ts", "react", "postgres", "node", "express"],
    preview: { light: driverappLight, dark: driverappDark },
    mobile: { light: driverappDark, dark: driverappLight },
    logo: delivery,
    importantMessage: "",
    description:
      "Driver app is a mobile app customized for drivers of a box catering company, designed to be their trusty companion on the job. This everyday work app streamlined their delivery tasks by providing a user-friendly interface where they could access a list of delivery addresses, complete with essential information like phone numbers and client-provided descriptions. The app also allowed them to document their work by taking pictures of delivered packages. Drivers could efficiently manage their daily packing tasks, report difficulties via an interactive form, and access notes and any assigned penalties from the office. Additionally, the app provided a transparent view of their earnings, with detailed calculations covering deliveries made throughout the month, as well as any deductions or bonuses. Ensuring ease of use in all conditions, this app was designed to simplify the lives of driverss",
  },
];

export default websites;
