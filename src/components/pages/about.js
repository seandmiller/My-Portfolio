
import React from 'react';
import photo from '../../helper/images/myPhoto.webp';

//react redux router
export default class About extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      background:''
    }

    this.isMobile = this.isMobile.bind(this)
  }
  isMobile() {
    if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      this.setState({
        background:'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=20&m=1138395421&s=612x612&w=0&h=FPYxPgxJBNucc79Z3fxAehsW6gvjw5jP17CJMsBRjGM='
      })
      
    } else{
      this.setState({
        background:''
      })
    }
  }
componentDidMount() {
  this.isMobile();
}

  render() {

    

  
  return (<div className="about-container">


    
  <div className="img-container"
  style={{
    background: `url(${photo})`,
    backgroundSize:'cover',
    backgroundPosition:'top'
  }}
  >
    
   
    </div>
    

    <div className="text-container"
     style={{
       background: 'url(' + this.state.background + ')',
       backgroundSize:'cover'
     }}>
       <div className='text-wrapper'>
       
       <p>
       Aseani Miller discovered software development at the age of 16. Shortly after, he took a brief detour when he embraced his creative ability to pursue the dramatic arts as an undergrad. At the time, he did not know that his creative mind would be one of his greatest assets in engineering. He soon realized that art compliments science, and the greatest engineers are the ones who find creative solutions to complex problems.

Investing is one of Aseani’s favorite hobbies. He became adept to the standards and best practices of the investment world, which eventually led him to owning Tesla shares. He was immediately drawn to Tesla’s bold mission and groundbreaking technological accomplishments. Aseani’s natural thirst for mastering new frontiers combined with an admiration of Tesla birthed a burning desire to be an active participant in the creation of tomorrow’s technology.

Aseani is currently mastering Python and JavaScript at Bottega University. When he is not in school or self-teaching to boost his coding prowess, he fills his downtime with hiking, swimming, and editing anime music videos.
 
      </p>
      </div>

    </div>
      







  </div> )
  } 
}