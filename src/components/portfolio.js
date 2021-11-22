import React, {PureComponent} from 'react';
import Item from './item';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default class Port extends PureComponent {
    constructor() {
        super();
        this.state = { 
        
           data: [],  
        }   
     }
        getPortItems() {
          axios
          .get('https://aseani.devcamp.space/portfolio/portfolio_items')
          .then(response => {
                this.setState({
                  data: response.data.portfolio_items,
                
                })
          })
            .catch(error => {
              console.log(error)
            }); 
          }  
  componentWillMount() {
    this.getPortItems();
  
  }
  

        itemsList() {
   
            return this.state.data.map(el => {
               
               return <Item  key={el.id} item={el}  />
             }); }
  

    render()  {
      
      
   
    return (
        <div className='homepage-wrapper'>
        

        
            <div className='portfolio-items-wrapper'>
            {this.itemsList()} 
           </div>  

        
      <div className='language-library-wrapper'>
          <div>  
         <p  className="para-wrapper"> 
          Python is an incredible language, most of my experience in programing comes from here
          as a matter of fact 80% of my programing is in Python, currently up to one years in programming with this language.</p>
          </div>
          <div> 
         <p className='para-wrapper'>
           JavaScript is where I built most of my foundations in programming, this language reminds me alot of c++ and for the most part I feel very capable in 
                                     programming in this language as I typically use it to traverse the dom or mess around with webpages via the dev tool.  </p>
          </div>
        
         <div className='para-wrapper-framework' >  
         <ul> As of current these are the Technologies that I know
           <li>tkinter - Python</li>
           <li>FastAPI - Python</li>
           <li> OpenCV - Python (beginner)</li>
           <li> React - JavaScript</li>
           <a href='https://github.com/seandmiller'> <h3> GitHub <i className="fab fa-github-square "></i> </h3>   </a>
         </ul>
        
         
         </div> 
      
          </div>
      

     </div>    )

    }

}