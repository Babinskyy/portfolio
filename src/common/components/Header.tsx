import pcicon from "../images/others/pcicon.png"

type HeaderProps = {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = (props: HeaderProps): JSX.Element => {
  const handleModeChange = async () => {
    const newTheme = !props.darkTheme;
    props.setDarkTheme(newTheme);
    localStorage.setItem("themePreference", newTheme ? "dark" : "light");
    console.log(newTheme);
  };
  return (
    <header className={`header ${props.darkTheme && "dark"}`}>
      <div className="header-container">
        <div className="logo-container">
        <img src={pcicon} alt="icon" className="icon"/>
        <div className="logo">Yan Software</div>
        </div>
        <div className="toggle-switch">
          <label className={`${props.darkTheme && "dark"}`}>
            <input
              type="checkbox"
              onChange={handleModeChange}
              checked={!props.darkTheme}
            />
            <span className="slider-toggle"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
