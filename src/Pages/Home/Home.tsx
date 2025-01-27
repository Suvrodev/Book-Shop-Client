import Banner from "../SharedPage/Banner/Banner";
import ImageGallery from "./ImageGallery/ImageGallery";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <div className="">
        <Banner />
        <ImageGallery />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
