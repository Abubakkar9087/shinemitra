import React from 'react';
import './Blog.css'
import Navbar from './Navbar';
import Footer from './Footer';
import BreadCrumb from './BreadCrumb';
  
  const Blog = () =>  {
	return (
	  <>
      <Navbar />
      <BreadCrumb />
      <div className='blog-container'>

      </div>


      <Footer />
	  </>
	);
  }
  
  export default Blog;
  