import pic from "../../../common/images/others/papugapic2.png";
type GreetingsProps = {
  darkTheme: boolean;
};

const Greetings = (props: GreetingsProps): JSX.Element => {
  return (
    <div className="greetings-container">
      <div className={`image-container ${props.darkTheme ? "dark" : ""}`}>
        <img src={pic} alt="" />
      </div>
      <div className="introduction">
        <h1 className="greetings">Hello, I'm Jan.</h1>
        <p className="description">
          As a full-stack Javascript developer, I'm deeply passionate about
          programming and have a desire to learn new technologies.
          <br />
          <br />
          When I'm not immersed in code, you'll find me enjoying my love for
          chess or absorbed in the fascinating world of books.
        </p>
      </div>
    </div>
  );
};

export default Greetings;
