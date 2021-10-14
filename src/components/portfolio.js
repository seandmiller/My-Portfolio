import React, {PureComponent} from 'react';
import Item from './item';
import axios from 'axios';



export default class Port extends PureComponent {
    constructor() {
        super();
        this.state = { 
          Loading:false,
          language: true,
          libraries:true,
           data: [],
            
        }
    
        this.handleFilter = this.handleFilter.bind(this)
      
        
       
     }


     handleFilter(category) {
      if (category === 'Clear') {
        this.getPortItems()
      }
      
      const filter = this.state.data.filter(
         item => {
           return item.category === category
         }
       )
       this.setState({
         data: filter
          
       })

     }
     
   
  
        getPortItems(filter = null) {
          axios
          .get('https://aseani.devcamp.space/portfolio/portfolio_items')
          
          .then(response => {
              if (filter)  {
                this.setState({
                  data: response.data.portfolio_items.filter(item => {
                    return item.category === filter
                  }),
                  language:true,
                  libraries:true
                })
              } else {
           this.setState({data: response.data.portfolio_items})
                    }
            if (filter==='Language') {
              this.setState({
                libraries:false
              })
            } else if (filter==='Libraries/modules') {
              this.setState({
                language:false
              })
            } else {
              this.setState({
                language:true,
                libraries:true
              })
            }       
    
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
             })
        
           }
  
    
          




    render() 
    
    
    
    {
      
      
    if (this.state.Loading) {  
      return (
          <div>
            Wait one moment.....
          </div>
        )
      }

    return (
        <div className='homepage-wrapper'>
        

        <div className='btn'>
         <button onClick={() => {this.getPortItems('Language')}}> Language </button>
         <button onClick={() => {this.getPortItems('Libraries/modules')}}> Libraries </button>
         <button onClick={() => {this.getPortItems()}}> All </button>
         
        </div>
        
            <div className='portfolio-items-wrapper'>
            {this.itemsList()} 
           </div>  

        
      <div className='language-library-wrapper'>
         {this.state.language ?  <div>  
         <p  className="para-wrapper"> 
          Python is an incredible language, most of my experience in programing comes from here
          as a matter of fact the API I built for my portfolio was entirely in Python utilizing the 
          FastAPI module, currently up to two years in programming with this language.</p>
          </div> : null         }
         {this.state.language ? <div> 
         <p className='para-wrapper'>JavaScript is where I built most of my foundations in programming, this language reminds me alot of c++ and for the most part I feel very capable in 
                                     programming in this language as I typically use it to traverse the dom or mess around with webpages via the dev tool.  </p>
          </div> : null}
        {this.state.libraries ? 
         <div className='para-wrapper-framework' >  
         <ul> As of current these are the Technologies that I know
           <li>tkinter - Python</li>
           <li>FastAPI - Python</li>
           <li> OpenCV - Python (beginner)</li>
           <li> React - JavaScript</li>
           <a href='https://github.com/seandmiller'> <h3> GitHub <i className="fab fa-github-square "></i> </h3>   </a>
         </ul>
        
         
         </div> :
         null}
          </div>
      

     </div>
    
    )



    }

}