import Banner1 from "../../../assets/Banner/Banner_1.jpg";
import Banner2 from "../../../assets/Banner/Banner_2.jpg";
import Banner3 from "../../../assets/Banner/Banner_3.jpg";
import Banner4 from "../../../assets/Banner/Banner_4.jpg";
const NewBanner = () => {
  return (
    <div className="carousel w-full h-[450px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={Banner1} className="w-full rounded-xl" />
        <div className="bg-gradient-to-r rounded-xl from-[#4b85bc] to-[rgba(21,21,21,0)] absolute h-full flex transform items-center left-0 top-0">
          <div className="text-white space-y-7 w-full md:w-1/2 pl-12">
            <h2 className="text-lg md:text-6xl font-bold">
              Discover the World Through Books
            </h2>
            <p>
              Dive into stories that transport you across time, space, and
              imagination. Let every page ignite your curiosity.
            </p>
            <div>
              <button className="btn btn-primary mr-5">
                Explore Bestsellers
              </button>
              <button className="btn btn-outline btn-secondary">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={Banner2} className="w-full rounded-xl" />
        <div className="bg-gradient-to-r rounded-xl from-[#6bc268] to-[rgba(21,21,21,0)] absolute h-full flex transform items-center left-0 top-0">
          <div className="text-white space-y-7 w-full md:w-1/2 pl-12">
            <h2 className="text-lg md:text-6xl font-bold">
              Open the Door to Knowledge
            </h2>
            <p>
              From academic guides to self-help, find books that enrich your
              mind and expand your horizons.
            </p>
            <div>
              <button className="btn btn-primary mr-5">
                Browse Collections
              </button>
              <button className="btn btn-outline btn-secondary">
                Explore New Arrivals
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={Banner3} className="w-full rounded-xl" />
        <div className="bg-gradient-to-r rounded-xl from-[#57b6d9] to-[rgba(21,21,21,0)] absolute h-full flex transform items-center left-0 top-0">
          <div className="text-white space-y-7 w-full md:w-1/2 pl-12">
            <h2 className="text-lg md:text-6xl font-bold">
              Adventure Awaits Within the Pages
            </h2>
            <p>
              From thrilling mysteries to epic fantasies, lose yourself in
              stories that captivate your heart.
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover Fiction</button>
              <button className="btn btn-outline btn-secondary">
                Latest Releases
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={Banner4} className="w-full rounded-xl" />
        <div className="bg-gradient-to-r rounded-xl from-[#a357ad] to-[rgba(21,21,21,0)] absolute h-full flex transform items-center left-0 top-0">
          <div className="text-white space-y-7 w-full md:w-1/2 pl-12">
            <h2 className="text-lg md:text-6xl font-bold">
              Your Next Favorite Book is Here
            </h2>
            <p>
              Explore our handpicked collection of timeless classics and modern
              masterpieces for every reader.
            </p>
            <div>
              <button className="btn btn-primary mr-5">Shop Classics</button>
              <button className="btn btn-outline btn-secondary">
                Browse All Books
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewBanner;
