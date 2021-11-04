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
          snippets: [ { title: 'Connect four Algorithm',
                         url:   'https://i.imgur.com/gvrj0Hz.png' ,
                         desc:'an Algorithm for detecting the winner with a psuedo brute force attack we first check if the (index + 3  == chip) if thats not true then we do not go any further',
                         time_comp: 'O(n^2) as we have one loop nested inside another.' ,
                         learned: 'Previous Algorithm I used to solve this problem was devastingly bad lol, I believe it was O(n^4) ',
                         output:'https://i.imgur.com/06Xkcgm.png',
                         id:0

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
    
      {return <Snippets snippet={item} key={item.id}/>});
        return code_snippets; 
  }

  render() {
    
  
 return (
     <div className='git'>
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