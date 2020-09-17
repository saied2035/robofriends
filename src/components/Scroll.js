import React from 'react';

const Scroll = (props) => {
		   	return(
		   	<div style={{overflowY:'auto', height:'75vh'}} className="dib pa2">
	          {props.children}
          </div>
          );
          
		
} 
export default Scroll;