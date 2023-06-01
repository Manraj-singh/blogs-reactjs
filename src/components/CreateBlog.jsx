import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { showNotification, storeDataInLocalStorage } from "../utils";
import "../styles/createBlog.css";

const CreateBlog = () => {
  //states for storing data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  //Function to hande submit
  function handleSubmit(e) {
    e.preventDefault();
    //parsing the editor data into text to apply non empty validation
    const parser = new DOMParser();
    const contentText = parser.parseFromString(content, "text/html")
      .documentElement.textContent;

    //validate if all input fileds are filled
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      contentText.trim() === ""
    ) {
      showNotification("warning", "please fill all the fields");
      return;
    }

    const randomId = Math.floor(Math.random() * 900) + 100;
    const blogdata = { id: randomId, title, description, content };
    //Store the data in local storage
    storeDataInLocalStorage("blogData", blogdata);

    // reset form input fields
    setTitle("");
    setDescription("");
    setContent("");
    //show success notification
    showNotification("success", "Blog Created Successfully");
  }

  return (
    <div className="create-post">
      <h1>Create Blog</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="content">Content:</label>
          <ReactQuill
            id="content"
            value={content}
            onChange={(value) => setContent(value)}
            placeholder="write your Blog content here..."
          />
        </div>

        <button className="create-post-btn">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
