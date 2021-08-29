import React, { Component } from 'react';
import axios from 'axios';
import GitItems from './git-items';

export default class Git extends Component {
  constructor() {
      super();
      this.state = {
          data:[]
      }

      this.getItems = this.getItems.bind(this)
 
     

  }
  getItems() {
      axios.get('https://api.github.com/users/seandmiller/repos')
      .then(response => {
          for (let i = 0; i < response.data.length; i++) {
          this.setState({
              data:this.state.data.concat(response.data[i])
          })

        }
        
        
      })
      .catch(error => console.log(error))
  }
componentDidMount() {
    this.getItems()
}




  render() {
    
    const theRepos = this.state.data.map(item =>
       {   return  <GitItems key={item.id} data={item} />    } 
       )
 return (
     <div>
       <h1 className='main-git'>GitHub Projects</h1>
       <div className='git-container'>
       {theRepos}
       </div>
    </div> 
 )
  }

}