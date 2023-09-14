import pic from "../images/papugapic2.png"

const Content = (): JSX.Element => {
  return (
    <div className="content">
      <div className="image-container">
        <img src={pic} alt="" />
      </div>
    </div>
  );
};

export default Content;
