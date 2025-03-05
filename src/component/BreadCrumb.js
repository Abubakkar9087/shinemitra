import React from 'react';
import './BreadCrumb.css'
  
  const BreadCrumb = () =>  {
	return (
	  <div className='breadcrumb-container'>
	  <p className='breadcrumb'>
		  <span className='home' onClick={() => window.location.href = "/" }>Home</span> {' - '} <span className='page-name'>{window.location.pathname.replace('/', '')}</span>
	  </p>
		  
	  </div>
	);
  }
  
  export default BreadCrumb;
  