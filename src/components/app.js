import React, { Component } from 'react';
import axios from 'axios';
import Git from './github';
import PortfolioDetail from './portfolio-detail';

import Port from './portfolio'
import About from './pages/about';
import Manager from './pages/manager';
import Contact from './pages/contact';
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




export default class App extends Component {
  constructor(props) {
    super(props);
    Icons();
    this.state = {
      loggedInStatus:"NOT_LOGGED_IN",
      phone:false,
      pageHalf: false
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
    
    if (window.pageYOffset + 628 >= document.body.scrollHeight) {this.setState({pageHalf:true} )} else {this.setState({pageHalf:false})}; }

componentDidMount() {
  this.checkLoginStatus();
  this.isMobile();
}

authorizedPages() {
  return [
    <Route key='manager' path='/manager' component={Manager}/>
  ]
}


  
  render() {
    
    
    
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
         
         <Route path='/contact' component={Contact}/>
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
         <Route
         exact path = '/portfolio-detail/:slug'
         component={PortfolioDetail}
         
         />

        


         <Route component={NoMatch}/>
         </Switch>
       
       
        </div>
       
      
        
        {this.state.phone && this.state.pageHalf ?
        
        <Navi  
        loggedInStatus={this.state.loggedInStatus}
        handleLogOut = {this.handleLogOut}
        isMobile     = {this.state.phone}
        />: null
       }
        </Router>
     
       
      </div>
    );
  }
}

