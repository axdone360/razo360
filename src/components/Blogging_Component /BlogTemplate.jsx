import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

const BlogDetail = () => {
  const { description } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogDetail();
  }, [description]);

  const fetchBlogDetail = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_BACKENDSERVER}/blog/post/${description}`,{withCredentials:true});
      setBlog(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching blog details:", error);
      setError("Failed to load blog post. Please try again later.");
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-xl">No blog post found.</p>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white mt-28 rounded-xl shadow-md overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-64 object-cover"
          />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>
          <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </div>
<Footer/>
          </>
  );
};

export default BlogDetail;

