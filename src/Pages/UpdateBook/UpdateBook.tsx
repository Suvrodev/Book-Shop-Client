import { Button, Modal } from "antd";
import "./UpdateBook.css";
import UpdateIcon from "@mui/icons-material/Update";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { sonarId } from "../../utils/Fucntion/sonarId";
import { toast } from "sonner";
import { useAddBookMutation } from "../../Redux/api/features/Book/bookManagementApi";
import { useAppSelector } from "../../Redux/hooks";
import axios from "axios";
import { bookCategories } from "../../utils/Array/BookCategory";
import bookImage from "../../assets/Images/bookk.jpg";
import { TBook } from "../../utils/Types/GlobalType";
const apiKey = "41f7b4c771a4156d5e8f59d93a4886f2";
const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${apiKey}`;

interface Iprops {
  bookInfo: TBook;
}

const UpdateBook = ({ bookInfo }: Iprops) => {
  console.log("Book Info: ", bookInfo);

  const {
    imageUrl,
    title,
    author,
    brand,
    model,
    price,
    category: bCategory,
    description,
    quantity,
  } = bookInfo;

  const [isModalOpen, setIsModalOpen] = useState(false);

  //   Modal Default Class start
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //   Modal Default Class end

  const [addBook] = useAddBookMutation();
  const imageRef = useRef<HTMLInputElement | null>(null);
  const { user } = useAppSelector((state) => state.auth);
  //   console.log("User in Add Book: ", user);
  const [category, setCategory] = useState(bCategory);
  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const data = e.target.value;
    setCategory(data);
    // console.log("Data: ", data);
  };

  //in Stock
  const [inStock, setInStock] = useState(false);

  const uploadImage = () => {
    console.log("Upload Image");
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  const [previewImage, setPreviewImage] = useState<string | null>(imageUrl);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("File selected: ", file); // Debugging
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    } else {
      setPreviewImage(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const Form = event.target as HTMLFormElement;
    const title = Form.titlee.value;
    const author = Form.author.value;
    const brand = Form.brand.value;
    const model = Form.model.value;
    const price = parseFloat(Form.price.value);
    const description = Form.description.value;
    const quantity = Form.quantity.value;
    const fileInput = Form.image.files[0];
    if (quantity > 0) {
      setInStock(true);
    } else {
      setInStock(false);
    }
    if (!category) {
      toast.error("Category field is empty", { id: sonarId });
    }

    // if (!fileInput) {
    //   toast.error("Please select an image", { id: sonarId });
    //   return;
    // }
    // console.log("File input: ", fileInput);

    // Create FormData and append the file
    const formData = new FormData();
    formData.append("image", fileInput);

    try {
      toast.loading("Updating Book", { id: sonarId });
      // Upload the image using Axios
      const response = await axios.post(imageHostingUrl, formData);

      if (response.data.success) {
        const imageUrl = response.data.data.display_url; // Get the image URL
        // console.log("Image uploaded successfully:", imageUrl);
        // toast.success("Image Upload successfully", { id: sonarId });

        ///Send Data in Back end
        const formData = {
          title,
          author,
          brand,
          model,
          price,
          imageUrl,
          category,
          description,
          quantity,
          inStock,
          refUser: user?.id,
        };
        console.log("Form Data: ", formData);
        // toast.loading("Inserting Book", { id: sonarId });
        // const res = await addBook(formData).unwrap();
        // console.log("Res: ", res);
        // if (res?.success) {
        //   toast.success(res?.message, { id: sonarId });
        // }
      } else {
        console.error("Image upload failed:", response.data);
        toast.error("Something error in uploading Image", { id: sonarId });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="">
      <div onClick={showModal}>
        <UpdateIcon />
      </div>
      <Modal
        title="Update Book"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="form-container">
          <h2 className="form-title">Update Book</h2>
          {/* Show the selected image */}
          <div className="image-preview mb-4 flex justify-center">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Preview"
                className="w-48 h-48 object-cover rounded-lg shadow"
                onClick={() => uploadImage()}
              />
            ) : (
              <div className="flex flex-col items-center">
                <img
                  src={bookImage}
                  alt=""
                  className="w-48 h-48 object-cover rounded-lg shadow"
                  onClick={() => uploadImage()}
                />
                <p className="text-gray-500 text-center">
                  No image selected. Press on Image to Select Image
                </p>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="form">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-4">
              {/* Title Author */}
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  name="titlee"
                  defaultValue={title}
                  className="text-white"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  name="author"
                  defaultValue={author}
                  className="text-white"
                  required
                />
              </div>
            </div>
            {/* Brand Model */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-4">
              <div className="form-group">
                <label htmlFor="title">Brand:</label>
                <input
                  type="text"
                  name="brand"
                  defaultValue={brand}
                  className="text-white"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="author">Model:</label>
                <input
                  type="text"
                  name="model"
                  defaultValue={model}
                  className="text-white"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-4">
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  required
                  className="removeDefaultIcon text-white"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select
                  name="category"
                  value={category}
                  onChange={handleCategory}
                  className="text-white"
                  required
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  {bookCategories.map((data, idx) => (
                    <option key={idx} value={data}>
                      {data}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group hidden">
              <label htmlFor="quantity">Image:</label>
              <input
                ref={imageRef}
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                name="description"
                rows={4}
                defaultValue={description}
                className="text-white"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                className="removeDefaultIcon text-white"
                required
              />
            </div>

            <button type="submit" className="form-submit">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateBook;
