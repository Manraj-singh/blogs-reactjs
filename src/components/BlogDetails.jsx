import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataFromLocalStorage } from "../utils";

function BlogDetails() {
  const [blog, setBlog] = useState({});

  const { blogId } = useParams();

  useEffect(() => {
    let data = getDataFromLocalStorage("blogData");
    data = data.find((blog) => blog.id == blogId);
    const parser = new DOMParser();
    const contentText = parser.parseFromString(data, "text/html");
    console.log(contentText);
    setBlog(data);
  }, [blogId]);
  return (
    <div className="blog-detail">
      <h1>{blog?.title}</h1>
      <h3>{blog?.description}</h3>
      <BlogContent content={blog.content} />
    </div>
  );
}

const BlogContent = ({ content }) => {
  const processedContent = { __html: content };

  return <div dangerouslySetInnerHTML={processedContent} />;
};
export default BlogDetails;
