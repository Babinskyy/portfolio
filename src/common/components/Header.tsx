import pcicon from "../images/others/pcicon.png";
import { Link } from "react-router-dom";

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
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: `${props.darkTheme ? "#dfdfdf" : "#2b2b2b"}`,
          }}
        >
          <div className="logo-container">
            <img src={pcicon} alt="icon" className="icon" />
            <div className="logo">Yan Software</div>
          </div>
        </Link>
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
