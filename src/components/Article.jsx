import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Article = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKENDSERVER}/blog/blogList`,{
        withCredentials:true
      });
      setBlogs(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
        <Navbar/>
      <div className="min-h-screen  bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mt-20 mx-auto">
        <h1 className="text-4xl font-extrabold text-primary text-center mb-10">
          Explore Our Blogs
        </h1>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative pb-48 overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover transform hover:scale-105 transition-transform duration-300"
                    src={blog.image}
                    alt={blog.title}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                  <p className="text-gray-600 text-sm flex-grow">
                    {blog.description.length > 100
                      ? `${blog.description.substring(0, 100)}...`
                      : blog.description}
                  </p>
                  <button
                    onClick={() => window.location.href = `/blog/${blog.description}`}
                    className="mt-4 bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-contactSecondry transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>

  );
};

export default Article;

