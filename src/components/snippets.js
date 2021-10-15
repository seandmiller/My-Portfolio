import React from 'react';



const Snippets = (props) => {
   const {learned ,time_comp, title , url, desc } = props.snippet


return  (<div className='snippet-wrapper'>
      <h3>{title}</h3>
   <div> <img src={url}/> </div>

     <h5 className='snippet-desc' >Description: {desc}</h5>
      <h5>Time Complexity: {time_comp} </h5>
      <h5>Notes: {learned} </h5>
        </div>)
}

export default Snippets 