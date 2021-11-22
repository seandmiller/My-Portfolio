import React, { Component } from 'react';
import axios from 'axios';
import Git from './github';
import Port from './portfolio'
import About from './pages/about';
import Navi from './navigation-containter';
import NoMatch from './pages/no-match';
import Auth from './pages/authen/auth';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import Icons from '../helper/icons';
import Resume from './resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





export default class App extends Component {
  constructor(props) {
    super(props);
    Icons();
    this.state = {
      loggedInStatus:"NOT_LOGGED_IN",
      phone:false,
      pageHalf: false,
      isLoading: true
    }
    

    this.handleSuccessFullLogin = this.handleSuccessFullLogin.bind(this)
 
    this.handleUnSuccessFullLogin = this.handleUnSuccessFullLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this)
    this.isMobile = this.isMobile.bind(this);
    
    this.getTop  = this.getTop.bind(this)
    document.addEventListener('scroll', this.getTop)
  }

handleSuccessFullLogin() {
  this.setState({
    loggedInStatus: "LOGGIN_SUCCESS"
  })
}
  handleUnSuccessFullLogin() {
  this.setState({
    loggedInStatus: "NOT_LOGGED_IN"
   })
 }
 handleLogOut() {
  this.setState({
    loggedInStatus: "NOT_LOGGED_IN"
  })
   }



checkLoginStatus() {
  return axios.get("https://api.devcamp.space/logged_in", {
    withCredentials: true}).then(response => {
      const loggedIn = response.data.logged_in;
      const loggedStatus = this.state.loggedInStatus;
      if (loggedIn && loggedStatus === 'LOGGIN_SUCCESS') {
        return response.data;
      } else if (loggedIn && loggedStatus === 'NOT_LOGGED_IN') {
        this.setState({
          loggedInStatus: 'LOGGIN_SUCCESS'
        })
      } else {
        this.setState({
          loggedInStatus:'NOT_LOGGED_IN'
        })
      }
    }).catch(error => {
      console.log("an error has occured", error)
    }) 

}

isMobile() {
  if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    this.setState({
      phone:true
    })
    
  } else{
    this.setState({
      phone:false
    })
  }
}

getTop(e) {
    
    if (window.pageYOffset + 626 >= document.body.scrollHeight - 250) {this.setState({pageHalf:true} )} else {this.setState({pageHalf:false})}; }

componentDidMount() {
  this.checkLoginStatus();
  this.isMobile();
  setTimeout(function() {this.setState({isLoading:false}) }.bind(this), 1000)
  
}


  
  render() {
    if (this.state.isLoading) {  
      return ( <div className='intro-wrapper'>
          <div className='introduction' style={{background : 'url(' + 'https://media.istockphoto.com/photos/blue-abstract-texture-background-pattern-design-template-with-picture-id649683354?k=20&m=649683354&s=612x612&w=0&h=3oeToJneeKW1Ie5_BWI4-f-NhcA45hzAhIFlc3XDFZ0=' + ')'}}>
              
               <h1>Aseani Miller</h1>
          </div>
          </div>
        )
      }

    
    
    return (
      <div className='container'>
        
        <Router>
        <div>
        {this.state.phone ?   <div className='mobileName'><h1>Aseani Miller</h1> </div>: 
        
        <Navi  
        loggedInStatus={this.state.loggedInStatus}
        handleLogOut = {this.handleLogOut}
        isMobile     = {this.state.phone}
        />

        }
       

       <Switch >
         <Route exact path='/' component={Port}/> 
         
         
         <Route exact path='/about' component={About}/> 
         <Route path="/blog" 
          render={props => (
          <Blog
           {...props}
           loggedInStatus={this.state.loggedInStatus}    
           />
          )}

         
         />
         <Route path='/projects' component={Git}/>
         <Route path='/resume' component={Resume}/>
         
        
         {this.state.loggedInStatus==='LOGGIN_SUCCESS' ? this.authorizedPages():null }
         <Route path='/auth'
                render={props=> (
                  <Auth 
                  {...props}
                  handleSuccessFullLogin = {this.handleSuccessFullLogin}  
                  handleUnSuccessFullLogin = {this.handleUnSuccessFullLogin}  
                  />
                )}
         />
         

        


         <Route component={NoMatch}/>
         </Switch>
       
       
        </div>
       
      
        
        { this.state.phone && this.state.pageHalf ?
        
        <Navi  
        loggedInStatus={this.state.loggedInStatus}
        handleLogOut = {this.handleLogOut}
        isMobile     = {this.state.phone}
        />  : null }
       
        </Router>
     
       
      </div>
    );
  }
}

