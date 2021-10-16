
import React from 'react';
import photo from '../../helper/images/myPhoto.jpg';

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
    
    Photo Credit: Lisa Keating's Studio 
    </div>
    

    <div className="text-container"
     style={{
       background: 'url(' + this.state.background + ')',
       backgroundSize:'cover'
     }}>
       <div className='text-wrapper'>
       
       <p>
         Hi my name is Aseani Miller, born in Jamaica came to America at the age of 9, my journey to becoming a software engineer was not a
         normal one. The moment I left highschool I went straight into acting, while I was acting I was keeping up with tech in my free 
         time. On one of my random reading escapades I discovered Tesla and the type of technology they were working on. At that 
         moment everything changed for me and a small passion for tech was slowly brewing till it became too hard to ignore and that's 
         how I ended up here, studied at Bottega University, currently trying to get my foot into the door in this industry.
 
      </p>
      </div>

    </div>
      







  </div> )
  } 
}