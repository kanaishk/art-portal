import React from 'react';
import './Gallery.css';

class Artist extends React.Component {
	render() {
    	return (
	    	<div>
	        	<img alt='Artist' src="https://ix-www.imgix.net/hp/snowshoe.jpg?q=70&w=1800&auto=compress%2Cenhance&fm=jpeg" className='img'/>
	      </div>
    	);
  	}
}

export default Artist;