import React, { Component } from 'react';
import axios from 'axios';
import GitItems from './git-items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Snippets from './snippets';


export default class Git extends Component {
  constructor() {
      super();
      this.state = {
          data:[],
          python:0,
          javascript:0,
          totalRepos:0,
          isLoading: true,
          snippets: [
                      {
                       title:'Using Recursion to transform integers into binary',
                       url: 'https://media-exp1.licdn.com/dms/image/C5622AQEVy37SokS-Eg/feedshare-shrink_800/0/1633274135894?e=1637193600&v=beta&t=BEvrVWoTcHkIw7oQG9vxuB4wfavPOHpKGjT7f_8-aCw',
                       desc:'In the above code we are utilizing Recursion to transform a list of integers into its binary counter part, as you can see we first check the type of datastructure it is first before we decide to convert it enabling us to be able transform multidimensional lists as well '
                       },
                       {title: 'Using a HashMap im showing all available hours of a schedule',
                       url:  'https://i.imgur.com/zZqKzF8.png',
                       desc: 'In this problem given it takes 1 hour and 30 minutes to complete a task (which can be changed) and when the task is supposed to be finished, im able to set the time when the task is should be started and removing the  start time and the end time from the schedule because you will no longer be available. Set schedule starts from 8am to 7pm'

                       } 
                
                       
                           ]
      }

      this.getItems = this.getItems.bind(this);
      
      this.theRepos = this.theRepos.bind(this);
      this.the_snippets = this.the_snippets.bind(this);
      
      
 
     

  }
  getItems() {
      axios.get('https://api.github.com/users/seandmiller/repos')
      .then(response => {

          this.setState({
              data:response.data,
              totalRepos: response.data.length,
              python:response.data.filter(item => {return item.language == 'Python'}).length,
              javascript:response.data.filter(item => {return item.language == 'JavaScript'}).length,
              isLoading: false

          })
        
        
        
        
        
        
      })
      .catch(error => console.log(error))
  }
componentDidMount() {
    this.getItems();
    

}


 theRepos()  {
   const Repository = this.state.data.map(item =>
               
  {return  <GitItems key={item.id} data={item}   />    } 
);    return Repository}

  the_snippets() {
    const code_snippets = this.state.snippets.map(item => 
    
      {return <Snippets snippet={item}/>});
        return code_snippets; 
  }

  render() {
    
  
 return (
     <div>
       <h1 className='main-git'>GitHub Projects</h1>
         {this.state.isLoading ? <div className='loading'> <FontAwesomeIcon icon='spinner' spin={true}  />  </div> :
        <div className='percentage-wrapper'>  <h3>JavaScript: {Math.round((this.state.javascript / this.state.totalRepos) * 100) }%</h3>           
                                              <h3>Python: { Math.round((this.state.python / this.state.totalRepos) * 100) }%  </h3>                    
                                                </div> }
      
      {this.state.isLoading ?  null :
      <div className='gitPage'>
         <div className='git-container'>
          {this.theRepos()} 
                            
           </div>
       <div className='snippets'> 
         <h1>My Code Snippets</h1>
         
        {this.the_snippets()}
        
         
         </div>
      </div> }
    </div> 
 )
  }

}