import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class Item extends Component {
  constructor (props) {
   super(props);
   this.state = {
     ItemClass: ""
         };
  }
  
handleMouseEnter() {
  this.setState({ItemClass: "image-blur"});
};

handleMouseLeave() {
   this.setState({ItemClass: ""});

};

  render () {
  const {name, description,id, thumb_image_url, } = this.props.item
  
  
  return (
    <Link to={`/portfolio-detail/${id}`}>
    
    <div className="item-wrapper" 
      onMouseEnter={() => this.handleMouseEnter()}

      onMouseLeave={() => this.handleMouseLeave()}
     
    >
      
     
     <div 
     className={'item-img ' + this.state.ItemClass}
     style={{
     backgroundImage: "url(" + thumb_image_url + ")"

     }}
     />
     <div className='img-text-wrapper'>
     
     <div className="subtitle">{description}</div>


     </div>
      <div className='text-name'>
      <h3>{name} {name === 'JavaScript' ? <div className='javascript-icon'> <FontAwesomeIcon icon='atom' spin={true}/>  </div>:null} 
                 {name==='Python' ? <div className='python-icon'> <i className="fab fa-python"></i> </div> :null}
                 {name === 'Frameworks' ? <div className='framework-icon'> <FontAwesomeIcon icon='book'/> </div> : null }

       </h3>
      </div>
      
     


     
     
     



       </div>
     </Link>
    )
} }