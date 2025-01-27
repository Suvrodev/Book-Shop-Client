import { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const CreateAbout = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const handleSave = () => {
    console.log("Content: ", content);
  };

  return (
    <div className="p-4">
      <div>
        <h1 className="text-xl text-white my-10 font-bold">Blog</h1>

        <div>
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1}
            onChange={(newContent) => setContent(newContent)}
            className="text-black bg-white"
            id="editor"
          />
          <button
            className="btn btn-primary text-white my-4"
            onClick={() => handleSave()}
          >
            Save Change{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAbout;
