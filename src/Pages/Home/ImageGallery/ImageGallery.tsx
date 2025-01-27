import LoadingPage from "../../../component/LoadingPage/LoadingPage";
import { useGetBookImagesQuery } from "../../../Redux/api/features/Book/bookManagementApi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./ImageGallery.css";
const ImageGallery = () => {
  const { data, isLoading } = useGetBookImagesQuery(undefined);
  const bookImages = data?.data;
  console.log("Image: ", bookImages);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <h1>Image Gallery</h1>
      <div>
        {/* <div className="" data-aos="flip-right" data-aos-duration="3000">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="50px">
              {bookImages.map(
                (image: { _id: string; imageUrl: string }, idx: number) => (
                  <img
                    key={idx}
                    src={image.imageUrl}
                    style={{
                      width: "100%", // Default for mobile (100% width)
                      height:
                        window.innerWidth >= 750
                          ? `${
                              Math.floor(Math.random() * (350 - 300 + 1)) + 300
                            }px` // Random height between 300px and 350px for larger screens
                          : "auto", // Height will be auto on mobile to maintain aspect ratio
                      maxWidth:
                        window.innerWidth >= 750
                          ? `${
                              Math.floor(Math.random() * (450 - 250 + 1)) + 320
                            }px` // Random width between 250px and 450px for larger screens
                          : "100%", // 100% width for mobile
                      display: "block",
                      borderRadius: "12px",
                    }}
                    alt=""
                  />
                )
              )}
            </Masonry>
          </ResponsiveMasonry>
        </div> */}

        <div className="" data-aos="flip-right" data-aos-duration="3000">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="50px">
              {bookImages.map(
                (image: { _id: string; imageUrl: string }, i: number) => (
                  <img
                    key={i}
                    src={image.imageUrl}
                    className="p-4"
                    style={{
                      width: "100%",
                      display: "block",
                      borderRadius: "12px",
                      height:
                        window.innerWidth >= 750
                          ? `${
                              Math.floor(Math.random() * (350 - 300 + 1)) + 300
                            }px` // Random height between 300px and 350px for larger screens
                          : "auto",
                    }}
                    alt=""
                  />
                )
              )}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
