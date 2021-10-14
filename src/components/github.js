import React, { Component } from 'react';
import axios from 'axios';
import GitItems from './git-items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import YouTube from './youtube';

export default class Git extends Component {
  constructor() {
      super();
      this.state = {
          data:[],
          python:0,
          javascript:0,
          totalRepos:0,
          isLoading: true
      }

      this.getItems = this.getItems.bind(this);
      
      this.theRepos = this.theRepos.bind(this);
      
      
 
     

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
       <div> 
         
         <h1>YouTube Videos </h1>
         <YouTube/>
         
         </div>
      </div> }
    </div> 
 )
  }

}