import pic from "../../../common/images/others/papugapic2.png";

type GreetingsProps = {
    darkTheme: boolean;
}

const Greetings = (props:GreetingsProps):JSX.Element => {
    return ( <div className="greetings-container">
    <div className={`image-container ${props.darkTheme ? "dark" : ""}`}>
      <img src={pic} alt="" />
    </div>
    <h1 className="greetings">Hello, I'm Jan.</h1>
    {/* <div className="filler"></div> */}
  </div>)
}

export default Greetings;