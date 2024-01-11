import marketLight from "../images/websites/marketplace-light-mockup.png";
import marketDark from "../images/websites/marketplace-dark-mockup.png";
import marketLogo from "../images/websites/marketplacesmalllogo.png";
import marketMobileDark from "../images/websites/marketplace-dark-mobile-mockup.png";
import marketMobileLight from "../images/websites/marketplace-mobile-light-mockup.png";

import podolog from "../images/websites/podolog-mockup.png";
import podologLogo from "../images/websites/podolog-logo.png";
import podologMobile from "../images/websites/podolog-mobile-mockup.png";

import analyticsLight from "../images/websites/analytics-light-mockup.png";
import analyticsDark from "../images/websites/analytics-dark-mockup.png";
import chart from "../images/websites/pie-chart.png";
import analyticsMobileDark from "../images/websites/analytics-mobile-dark-mockup.png";
import analyticsMobileLight from "../images/websites/analytics-mobile-light-mockup.png";

import driverappLight from "../images/websites/driverapp-light-mockup.png";
import driverappDark from "../images/websites/driverapp-dark-mockup.png";
import delivery from "../images/websites/delivery.png";

import chessApp from "../images/websites/chessapp-mockup.png";
import chessAppMobile from "../images/websites/chessapp-mobile-mockup.png";
import pawn from "../images/websites/pawn.png";

import instagramDarkLaptop from "../images/websites/instagram-dark-laptop.png";
import instagramLightLaptop from "../images/websites/instagram-light-laptop.png";
import instagramDarkMobile from "../images/websites/instagram-dark-mobile.png";
import instagramLightMobile from "../images/websites/instagram-light-mobile.png";
import instagramLogo from "../images/websites/instagramlogo.png";

import airobot from "../images/websites/artificial-intelligence.png";
import ailaptop from "../images/websites/ai-laptop.png";
import aiphone from "../images/websites/ai-phone.png";

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
      "React",
      "TypeScript",
      "Redux",
      "Sass",
      "Material UI",
      "Node",
      "Express",
      "PostgreSQL",
      "Azure",
      "Heroku",
      "Netlify",
      "PassportJS",
      "JSON Web Token",
      "Google API",
    ],
    preview: { light: marketLight, dark: marketDark },
    mobile: { light: marketMobileLight, dark: marketMobileDark },
    logo: marketLogo,
    importantMessage: `login: janek, password: 123`,
    overview:
      "The Market Place project I developed draws inspiration from popular market place services. Website allows users to add, delete and edit their offers, providing a dynamic and user-friendly experience. With essential functionalities like user login, logout, theme change, category filters, and a search bar, the platform allows users to easily search and manage their offers.",
    experience:
      "While developing this application, I had the opportunity to expand my programming skills. I utilized technologies like React for front-end development and Node.js for the backend. PostgreSQL served as the database, not only storing data but also deepened my understanding of SQL. Netlify hosted the frontend, and hosting the backend application on Heroku improved my skills in server management. Storing images on Azure Storage Cloud deepened my knowledge of cloud-based solutions. Additionally, I gained hands-on experience in user authentication using PassportJS and JSON Web Token.  Furthermore, this project allowed me to explore Redux for efficient state management, eliminating the complexities of prop drilling. Overall, this project enabled me to showcase my skills and continually learn and apply new technologies to create a fully functional application. Market Place application was developed by me entirely from scratch.",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://instagramclone.yan.software",
    github: "https://github.com/Babinskyy/instagram",
    stack: [
      "Vue",
      "TypeScript",
      "Pinia",
      "Ant Design",
      "Supabase",
      "Netlify",
      "composition API",
    ],
    preview: { light: instagramLightLaptop, dark: instagramDarkLaptop },
    mobile: { light: instagramLightMobile, dark: instagramDarkMobile },
    logo: instagramLogo,
    importantMessage: `email: lebron@james.com, password: 123456`,
    overview:
      "Instagram Clone Project is a web application that mirrors the popular social platform - Instagram. Using Vue 3, TypeScript, Ant Design components and Supabase for the backend, I aimed to master Vue while creating a feature-rich CRUD app. This Instagram-inspired project includes post uploads, follows, likes, posts edit and deletion and more. Feel free to register or take a quick tour of my Instagram clone using the provided credentials of Lebron James account!",
    experience:
      "Working on the Instagram Clone provided hands-on experience in web development. I enhanced my proficiency in Vue 3, TypeScript, and Ant Design for frontend development. The use of Supabase for the backend and Pinia for state management ensured robust data handling. This project began as a learning opportunity, but I extended it by adding functionalities like post likes, editable posts and post deletion, showcasing my coding and problem-solving skills in a real-world context.",
  },
  {
    id: 3,
    name: "AI Assistant",
    url: "https://aiassistant.yan.software/",
    github: "https://github.com/Babinskyy/AI-frontend",
    server: "https://github.com/Babinskyy/AI-backend",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Socket.IO",
      "Node",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Scss",
      "Bcrypt",
      "JWT",
      "Azure",
      "Netlify",
    ],
    preview: { light: ailaptop, dark: ailaptop },
    mobile: { light: aiphone, dark: aiphone },
    logo: airobot,
    importantMessage: "email: john@email.com, password: 123456",
    overview:
      "The AI Assistant is a Chat Bot project that reflects my keen interest in AI technology. Motivated by a desire to explore the OpenAI API, I utilized a tech stack featuring React, TypeScript, Vite, Socket.IO, Node.js, Express, and MongoDB. This web application not only represents my personal exploration of the capabilities of AI but also serves a practical purpose—I am now equipped to create chatbots for clients' websites, efficiently responding to customer inquiries and streamlining operational processes. Feel free to create a new account or use the credentials provided in the 'Important' section above.",
    experience:
      "Leveraging technologies such as React, TypeScript, Vite, Socket.IO, Node.js, and the OpenAI API, I cultivated a deep understanding of GPT-3.5-Turbo's and GPT-4's capabilities. The implementation of websockets for real-time communication not only allowed the chatbot to respond instantly but also honed my skills in this crucial aspect of modern web applications. Through this project, I not only explored my passion for AI but also gained hands-on experience in deploying secure and scalable solutions using WebSockets, MongoDB, Bcrypt, JWT, and platforms like Azure and Netlify.",
  },
  {
    id: 4,
    name: "Podolog Sopot",
    url: "https://podologsopot.pl/",
    github: "https://github.com/Babinskyy/podolog",
    stack: ["React", "JavaScript", "Netlify", "HTML", "CSS"],
    preview: { light: podolog, dark: podolog },
    mobile: { light: podologMobile, dark: podologMobile },
    logo: podologLogo,
    importantMessage: "",
    overview:
      "Podolog Sopot is a website made at the client's request. This user friendly platform showcases the podiatrist's expertise, detailed pricing information, and the clinic's location. Template was bought on themeforest.net and then customized to client's needs. The site not only offers a precise description of the podiatrist's services but also ensures easy navigation for potential patients, regardless of the device they're using.",
    experience:
      "While working on Podolog Sopot website, I gained hands-on experience in website development and customization. This project allowed me to improve my skills in Vanilla JavaScript, creating user-friendly interfaces and presenting information in a clear and organized manner. Additionally, I learned the importance of effective communication with clients to understand their specific needs.",
  },
  {
    id: 5,
    name: "Analytics",
    url: "https://analytics.babinsky.pl/",
    github: "https://github.com/Babinskyy/BroccoliBoss",
    stack: ["React", "TypeScript", "Ionic", "Sass", "Material UI", "Chart JS"],
    preview: { light: analyticsLight, dark: analyticsDark },
    mobile: { light: analyticsMobileLight, dark: analyticsMobileDark },
    logo: chart,
    importantMessage: "",
    overview:
      "The Analytics platform is a product designed for office workers. It helped them manage information about drivers and routes all in one place. My responsibility was to listen to client's requirements and make sure those needs were part of the product. I also focused on creating user-friendly screens and buttons. The platform presents crucial data through graphs and bars, which make it easy for users to understand how their company is doing. ",
    experience:
      "As a part of a team, I worked on the front-end development of this application. This experience broadened my knowledge of creating intuitive user interfaces and apply client requirements into design process. I also learned how to present information in a simple and understandable way. Additionally, I gained insights into making products that meet customer needs and are easy to use. This project strengthened my dedication to creating solutions that look good, work well, and help businesses.",
  },
  {
    id: 6,
    name: "Driver App",
    url: "https://driverapp.babinsky.pl/",
    github: "https://github.com/Babinskyy/DriverMobileApp",
    stack: ["React", "TypeScript", "Ionic", "Sass"],
    preview: { light: driverappLight, dark: driverappLight },
    mobile: { light: driverappDark, dark: driverappDark },
    logo: delivery,
    importantMessage: "Please open this app in mobile view mode!",
    overview:
      "The Driver app is a mobile tool made for box catering company drivers, to simplify their daily tasks. This user-friendly app provides delivery addresses with specific descriptions and all the necessary information needed for a courier's everyday work. Users can report work difficulties via an interactive form. The app also offers a transparent earnings view. It aims to improve driver effectiveness and simplify their work lives.",
    experience:
      "As a part of a team, I worked on the front-end of this app, using the Ionic framework. This experience provided practical insights into creating user-friendly mobile interfaces, integrating features, and contributing to professional projects. I also gained experience in deploying the app to mobile devices using Android Studio, furthering my technical and professional growth.",
  },
  {
    id: 7,
    name: "Chess App",
    url: "https://chess.babinsky.pl/",
    github: "https://github.com/Babinskyy/chessopeningsapp",
    stack: ["React", "TypeScript", "Ionic", "Sass", "Netlify"],
    preview: { light: chessApp, dark: chessApp },
    mobile: { light: chessAppMobile, dark: chessAppMobile },
    logo: pawn,
    importantMessage: "",
    overview:
      "The Chess Openings App was my graduation project, focusing on improving chess openings knowledge. This React-based app aimed to help chess enthusiasts improve their opening repertoire. It featured a searchable list of chess openings, allowing users to study and practice various openings on a virtual chessboard.",
    experience:
      "Developing the Chess Openings App introduced me to React and the frontend world. I learned how to create a responsive interface and implement features like the searchable opening list and interactive chessboard. This project highlighted my ability to apply theoretical knowledge to practical applications and create a functional tool for fellow chess fans.",
  },
];

export default websites;
