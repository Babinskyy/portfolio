import Greetings from "./components/Greetings";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

type HomeProps = {
  darkTheme: boolean;
};

const Home = (props: HomeProps): JSX.Element => {
  return (
    <div className="Home">
      <Greetings darkTheme={props.darkTheme} />
      <Skills />
      <Projects darkTheme={props.darkTheme}/>
    </div>
  );
};

export default Home;
