import linkedin from "../images/others/linkedin.png";

type HeaderProps = {
  darkTheme: boolean;
};

const Footer = (props: HeaderProps): JSX.Element => {
  return (
    <footer className={`footer ${props.darkTheme && "dark"}`}>
      <a href="https://www.linkedin.com/in/jan-babi%C5%84ski-880469229/" target="blank">
        <img src={linkedin} alt="linkedin-icon" />
      </a>

      {/* <p>
        Contact me via{" "}
        <a
          href="mailto:jan@babinsky.pl"
          className={`${props.darkTheme && "dark"}`}
        >
          jan@babinsky.pl
        </a>
      </p> */}
    </footer>
  );
};

export default Footer;
