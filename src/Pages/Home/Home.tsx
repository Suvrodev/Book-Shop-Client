import { useTitle } from "../../component/hook/useTitle";
import NewBanner from "../SharedPage/NewBanner/NewBanner";
import HomeBook from "./HomeBook/HomeBook";
import ImageGallery from "./ImageGallery/ImageGallery";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <div className="">
        {/* <Banner /> */}
        <NewBanner />
        <ImageGallery />
        <HomeBook />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
