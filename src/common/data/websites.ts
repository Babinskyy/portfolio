import marketLight from "../images/websites/marketplace-light.png";
import marketDark from "../images/websites/marketplace-dark.png";
import marketLogo from "../images/websites/marketplacesmalllogo.png";
import marketMobileDark from "../images/websites/marketplace-mobile-dark1.png";
import marketMobileLight from "../images/websites/marketplace-mobile-light1.png";

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

import chessApp from "../images/websites/chessapp.png";
import chessAppMobile from "../images/websites/chessapp-mobile.png";
import pawn from "../images/websites/pawn.png";

export type WebsiteType = {
  id: number;
  name: string;
  url: string;
  github: string;
  server?: string;
  stack: string[];
  preview: { light: string; dark: string };
  mobile: { light: string; dark: string };
  logo: string;
  importantMessage: string;
  overview: string;
  experience: string;
};

const websites: WebsiteType[] = [
  {
    id: 1,
    name: "Market Place",
    url: "https://marketplace.yan.software",
    github: "https://github.com/Babinskyy/marketplace",
    server: "https://github.com/Babinskyy/marketplace-server",
    stack: [
      "TypeScript",
      "React",
      "Redux",
      "PostgreSQL",
      "Node",
      "Express",
      "Azure",
      "Heroku",
      "Netlify",
      "HTML",
      "CSS",
      "Sass",
      "Material UI",
      "PassportJS",
      "JSON Web Token",
    ],
    preview: { light: marketLight, dark: marketDark },
    mobile: { light: marketMobileLight, dark: marketMobileDark },
    logo: marketLogo,
    importantMessage: `login: janek, password: 123`,
    overview:
      "The marketplace project I developed draws inspiration from popular marketplace services. Website allows users to add, delete, and edit their offers, providing a dynamic and user-friendly experience. With essential functionalities like user login, logout, theme change, category filters, and a search bar, the platform allows users to easily search and manage their offers.",
    experience:
      "While developing this application, I had the opportunity to expand my programming skills. I utilized technologies like React for front-end development and Node.js for the backend. PostgreSQL served as the database, not only storing data but also deepened my understanding of SQL. Netlify hosted the frontend, and hosting the backend application on Heroku improved my skills in server management. Storing images on Azure Storage Cloud deepened my knowledge of cloud-based solutions. Additionally, I gained hands-on experience in user authentication using PassportJS and JSON Web Token.  Furthermore, this project allowed me to explore Redux for efficient state management, eliminating the complexities of prop drilling. Overall, this project enabled me to showcase my skills and continually learn and apply new technologies to create a fully functional application. MarketPlace application was developed by me entirely from scratch.",
  },
  {
    id: 2,
    name: "Podolog Sopot",
    url: "https://podologsopot.pl/",
    github: "https://github.com/Babinskyy/podolog",
    stack: ["JavaScript", "React", "Netlify", "HTML", "CSS"],
    preview: { light: podolog, dark: podolog },
    mobile: { light: podologMobile, dark: podologMobile },
    logo: podologLogo,
    importantMessage: "",
    overview:
      "Podologsopot.pl is a website made at the client's request. This user-friendly platform showcases the podiatrist's expertise, detailed pricing information, and the clinic's location. Template was bought on themeforest.net and then customized to client's needs. The site not only offers a precise description of the podiatrist's services but also ensures easy navigation for potential patients, regardless of the device they're using.",
    experience:
      "While working on Podologsopot.pl, I gained hands-on experience in website development and customization. This project allowed me to improve my skills in Vanilla JavaScript, creating user-friendly interfaces and presenting information in a clear and organized manner. Additionally, I learned the importance of effective communication with clients to understand their specific needs.",
  },
  {
    id: 3,
    name: "Analytics",
    url: "https://analytics.babinsky.pl/",
    github: "https://github.com/Babinskyy/BroccoliBoss",
    stack: [
      "TypeScript",
      "React",
      "Ionic",
      "HTML",
      "CSS",
      "Sass",
      "Material UI",
      "Chart JS",
    ],
    preview: { light: analyticsLight, dark: analyticsDark },
    mobile: { light: analyticsMobileLight, dark: analyticsMobileDark },
    logo: chart,
    importantMessage: "",
    overview:
      "Analytics platform is a product designed for office workers. It helped them manage information about drivers and routes all in one place. My responsibility was to listen to client's requirements and make sure those needs were part of the product. I also focused on creating user-friendly screens and buttons. The platform presents crucial data through graphs and bars, which make it easy for users to understand how their company is doing. ",
    experience:
      "As a part of a team, I worked on the front-end development of this application. This experience broadened my knowledge of creating intuitive user interfaces and apply client requirements into design process. I also learned how to present information in a simple and understandable way. Additionally, I gained insights into making products that meet customer needs and are easy to use. This project strengthened my dedication to creating solutions that look good, work well, and help businesses.",
  },
  {
    id: 4,
    name: "Driver App",
    url: "https://driverapp.babinsky.pl/",
    github: "https://github.com/Babinskyy/DriverMobileApp",
    stack: ["TypeScript", "React", "Ionic", "HTML", "CSS", "Sass"],
    preview: { light: driverappLight, dark: driverappDark },
    mobile: { light: driverappDark, dark: driverappLight },
    logo: delivery,
    importantMessage: "Please open this app in mobile view mode!",
    overview:
      "The Driver app is a mobile tool made for box catering company drivers, to simplify their daily tasks. This user-friendly app provides delivery addresses with description and allows delivery documentation. Users can report work difficulties via an interactive form. The app also offers a transparent earnings view. It aims to improve driver effectiveness and simplify their work lives.",
    experience:
      "As a part of a team, I worked on the front-end of this app, using the Ionic framework. This experience provided practical insights into creating user-friendly mobile interfaces, integrating features, and contributing to professional projects. I also gained experience in deploying the app to mobile devices using Android Studio, furthering my technical and professional growth.",
  },
  {
    id: 5,
    name: "Chess App",
    url: "https://chess.babinsky.pl/",
    github: "https://github.com/Babinskyy/chessopeningsapp",
    stack: ["TypeScript", "React", "Ionic", "HTML", "CSS", "Sass", "Netlify"],
    preview: { light: chessApp, dark: chessApp },
    mobile: { light: chessAppMobile, dark: chessAppMobile },
    logo: pawn,
    importantMessage: "",
    overview:
      "The Chess Openings App was my graduation project, focusing on improving chess opening knowledge. This React-based app aimed to help chess enthusiasts improve their opening repertoire. It featured a searchable database of chess openings, allowing users to study and practice various openings on a virtual chessboard.",
    experience:
      "Developing the Chess Openings App provided me with valuable experience in React and frontend development. I learned how to create a responsive interface and implement features like the searchable opening database and interactive chessboard. This project highlighted my ability to apply theoretical knowledge to practical applications and create a functional tool for fellow chess fans.",
  },
];

export default websites;
