import React from 'react';
import {Link} from 'react-router-dom';
import striptags from 'striptags';
import Truncate from 'react-truncate';



const BlogItem = props => {

const {
        id,
        title,
        content,
        blog_status,
        featured_image_url,
    
    
    } = props.data;
    
    return ( <div className="blog-container">
              <div className="content-container">
             <Link to={`/b/${id}`}>
              <h1>{title}</h1>
             </Link>
        

              <div className="container" >
                <Truncate  lines={5} ellipsis={

                  <span>
                       ...<Link to={`/b/${id}`}> Read More</Link>
                  </span>
                }>{striptags(content)} </Truncate> 
             </div>
             
        
             </div>
         </div>
        )    

  
  
  
  
  }



export default BlogItem;