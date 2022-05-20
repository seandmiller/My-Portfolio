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
          snippets: [ { title: 'Digital Enigma',
                         url:   'https://spartacus-educational.com/00enigma2.jpg' ,
                         desc:'an Algorithm for scrambling text, creating a chain or a link between the encrypted text and decrypted text',
                         time_comp: 'O(n)' ,
                         learned: 'I learned how to creatively turn mechanical logic into digital logic. ',
                         output:'https://th-thumbnailer.cdn-si-edu.com/i-UnSMSAeNPiw8sBjPAphUYSFr0=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/f5/95/f59548db-c8c7-47a0-8404-9e44cd4b8db6/enigma.jpg',
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