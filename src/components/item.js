import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';


export default class Item extends PureComponent {
  constructor (props) {
   super(props);
   this.state = {
     ItemClass: "",
     image:0,
     phone:false
         };
         this.isMobile = this.isMobile.bind(this)
         this.isMobile()

  }
  
  isMobile() {
    if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      this.setState({
        phone:true
      })
      
    } else{
      this.setState({
        phone:false
      })
    }
  }

 
componentDidMount() {
  setTimeout(() =>  {this.setState({image:100})}, 1000)
}

handleMouseEnter() {
  if (this.state.phone == false) {

  this.setState({ItemClass: "image-blur"});
  }
};

handleMouseLeave() {
   this.setState({ItemClass: ""});

};


  render () {
  const {name, description,id, thumb_image_url, } = this.props.item
  
  
  return (
 
    
    <div className="item-wrapper" 
      onMouseEnter={() => this.handleMouseEnter()}

      onMouseLeave={() => this.handleMouseLeave()}
     
    >
      
     
     <div 
     className={'item-img ' + this.state.ItemClass}
     style={{
     backgroundImage: "url(" + thumb_image_url + ")",
     opacity: this.state.image
     

     }}
     />
     <div className='img-text-wrapper'>
     
     <div className="subtitle">{description}</div>


     </div>
      <div className='text-name'>
      <h3>   {name === 'JavaScript' ? <div className='javascript-icon'>{name} <FontAwesomeIcon icon='atom' spin={true}/>  </div>:null} 
                 {name==='Python' ? <div className='python-icon'>{name} <i className="fab fa-python"></i> </div> :null}
                 {name === 'Frameworks' ? <div className='framework-icon'>{name} <FontAwesomeIcon icon='book'/> </div> : null }

       </h3>
      </div>
      
     


     
     
     



       </div>
     
    )
} }