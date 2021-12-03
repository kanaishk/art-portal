import React from 'react';
import './Gallery.css';

class Gallery extends React.Component {
	render() {
    	return (
	    	<div>
	        	<img alt='Gallery' src="https://ix-www.imgix.net/hp/snowshoe.jpg?q=70&w=1800&auto=compress%2Cenhance&fm=jpeg" className='img'/>
	      </div>
    	);
  	}
}

export default Gallery;