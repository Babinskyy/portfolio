import linkedin from "../images/others/linkedin.png";
import githublogo from "../../common/images/websites/github.png";
type HeaderProps = {
  darkTheme: boolean;
};

const Footer = (props: HeaderProps): JSX.Element => {
  return (
    <footer className={`footer ${props.darkTheme ? "dark" : ""}`}>
      {/* <a href="https://www.linkedin.com/in/jan-babi%C5%84ski-880469229/" target="_blank">
        <img src={linkedin} alt="linkedin-icon" />
      </a> */}
      <a
        href="https://github.com/Babinskyy"
        target="_blank"
        className={`${props.darkTheme ? "dark" : ""}`}
      >
        <span>Github</span>
        <img src={githublogo} alt="" />
      </a>
      <a
        href="https://www.linkedin.com/in/jan-babi%C5%84ski-880469229/"
        target="_blank"
        className={`${props.darkTheme ? "dark" : ""}`}
      >
        <span>LinkedIn</span>
        <img src={linkedin} alt="" />
      </a>

      {/* <p>
        Contact me via{" "}
        <a
          href="mailto:jan@babinsky.pl"
          className={`${props.darkTheme ? "dark" : ""}`}
        >
          jan@babinsky.pl
        </a>
      </p> */}
    </footer>
  );
};

export default Footer;
