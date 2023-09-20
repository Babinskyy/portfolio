import linkedin from "../images/others/linkedin.png";
import githublogo from "../../common/images/websites/github.png";
import { Link } from "react-router-dom";
type HeaderProps = {
  darkTheme: boolean;
};

const Footer = (props: HeaderProps): JSX.Element => {
  return (
    <footer className={`footer ${props.darkTheme ? "dark" : ""}`}>
      <div className="icons-panel">
        <Link to="https://github.com/Babinskyy" target="_blank">
          <img src={githublogo} alt="" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/jan-babi%C5%84ski-880469229/"
          target="_blank"
        >
          <img src={linkedin} alt="icon" />
        </Link>
      </div>
      <p className="copyright">&copy;2023 Jan Babinski | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
