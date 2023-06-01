import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Navbar, BlogDetails, CreateBlog } from "./components";

export default function App() {
  return (
    <div className="container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogDetails />} />
        <Route path="/create-blog" element={<CreateBlog />} />
      </Routes>
    </div>
  );
}
