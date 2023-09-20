type HeaderProps = {
  darkTheme: boolean;
};

const Footer = (props: HeaderProps): JSX.Element => {
  return (
    <footer className={`footer ${props.darkTheme ? "dark" : ""}`}>
      <p className="copyright">&copy;2023 Jan Babinski | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
