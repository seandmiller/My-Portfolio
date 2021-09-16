import React, { Component } from 'react';
import axios from 'axios';
import GitItems from './git-items';

export default class Git extends Component {
  constructor() {
      super();
      this.state = {
          data:[],
          python:0,
          javascript:0,
          totalRepos:0
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
              javascript:response.data.filter(item => {return item.language == 'JavaScript'}).length

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
        <div className='percentage-wrapper'>  <h3>JavaScript: {(this.state.javascript / this.state.totalRepos) * 100}%</h3>           
                                              <h3>Python: {(this.state.python / this.state.totalRepos) * 100 }%  </h3>                     </div>
       <div className='git-container'>
       {this.theRepos()}
       </div>
    </div> 
 )
  }

}