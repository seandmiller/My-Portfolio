import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const ManagerSideBar = (props) => {
      const ListofData = props.data.map(item => {
          return (
          <div key={item.id} className="thumb_item">
             
             <div className="thumb_item_wrapper">
               <img src={item.thumb_image_url}/>
             </div>
             
              <div  className="text-wrapper" > 
                
                
                 <h3>{item.name}</h3>
                
                <div className="actions">
                 <a className="icon" onClick={()=> {props.handleDelete(item)}}> <FontAwesomeIcon icon="trash" /></a>
                 <a className="icon" onClick={()=> {props.handleEdit(item)}}> <FontAwesomeIcon icon="edit" /></a>

                </div>
            </div>
          <div className="description" >
              <p>{item.description}</p>
          </div>
          
          
          </div> )
      })

    return <div className='manager-sideBar'>
        {ListofData}
        
    </div>

}

export default ManagerSideBar;