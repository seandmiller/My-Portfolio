import React from 'react';



const Snippets = (props) => {
   const {title , url, desc } = props.snippet


return  (<div className='snippet-wrapper'>
      <h4>{title}</h4>
   <div> <img src={url}/> </div>

     <h4 className='snippet-desc' >Description: {desc}</h4>
        </div>)
}

export default Snippets 