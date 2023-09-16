type HeaderProps = {
  darkTheme: boolean;
};

const Footer = (props: HeaderProps): JSX.Element => {
  return <footer className={`footer ${props.darkTheme && "dark"}`}></footer>;
};

export default Footer;
