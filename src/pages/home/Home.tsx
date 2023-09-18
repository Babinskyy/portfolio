import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import Greetings from "./components/Greetings";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

type HomeProps = {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = (props: HomeProps): JSX.Element => {
  return (
    <div className="Home">
      {/* <Header darkTheme={props.darkTheme} setDarkTheme={props.setDarkTheme} /> */}
      <Greetings darkTheme={props.darkTheme} />
      <Skills darkTheme={props.darkTheme} />
      <Projects darkTheme={props.darkTheme} />
      {/* <Footer darkTheme={props.darkTheme} /> */}
    </div>
  );
};

export default Home;
