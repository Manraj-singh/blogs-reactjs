import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { getDataFromLocalStorage } from "../utils";
function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const data = getDataFromLocalStorage("blogData");
    data ? setBlogs(data) : setBlogs([]);
  }, []);
  return (
    <div className="home">
      <h1>Mini Blog</h1>
      <div id="blog-by"> by :Manraj</div>
      {blogs.length == 0 && <h2>no blogs to show currently</h2>}
      {blogs.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/blog/${post.id}`}>
            <h3>{post.title}</h3>
            <small>{post.description}</small>
          </Link>

          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
