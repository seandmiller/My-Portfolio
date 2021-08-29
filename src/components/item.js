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
  const {name, description,id, img,thumb_image_url, logo_url } = this.props.item
  
  
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
     <div className='img-logo-wrapper'>
       <img src =  {logo_url} />
     </div>
     <div className="subtitle">{description}</div>


     </div>
      <div className='text-name'>
      <h1>{name} </h1>
      </div>
      
     


     
     
     



       </div>
     </Link>
    )
} }