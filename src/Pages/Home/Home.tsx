import { useTitle } from "../../component/hook/useTitle";
import Banner from "../SharedPage/Banner/Banner";
import HomeBook from "./HomeBook/HomeBook";
import ImageGallery from "./ImageGallery/ImageGallery";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <div className="">
        <Banner />
        <ImageGallery />
        <HomeBook />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
