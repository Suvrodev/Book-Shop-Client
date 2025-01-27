import Banner from "../SharedPage/Banner/Banner";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>
      <div className="max-w-7xl mx-auto">
        <Banner />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
