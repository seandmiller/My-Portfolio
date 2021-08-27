import React from 'react';

const BlogImage = (props) =>{

    if (!props.img) {
        return null; 

    } else {
        return (
            <div className="img-wrapper">
            <img src={props.img}/>
          </div>

        )
    }
    
  

}
export default BlogImage;