import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {withRouter} from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navi = (props) => {

  const handleSignOut = () => {
    axios.delete("https://api.devcamp.space/logout", {withCredentials:true}).then(response => {
      if (response.status === 200) {
        props.history.push('/');

        props.handleLogOut();
        return response.data
      }
    }).catch(error =>{
      console.log(error)
    })
      
  }
 
 
  const dynamicLink = (route,text) => {
   return (
    <div className='nav-link'>
    <NavLink to={route} activeClassName='nav-link-active' >{text}  </NavLink>
  </div>
     
   )
 }



    


    return (
  <div className='nav-wrapper'> 
     <div className='left-side'>
     <div className='nav-link'>
       <NavLink exact to='/' >Home </NavLink>
     </div>

     <div className='nav-link'>
       <NavLink to='/about' activeClassName='nav-link-active'>My Bio</NavLink>
     </div>
     <div className='nav-link'>
       <NavLink to='/contact'activeClassName='nav-link-active' >Contact  </NavLink>

     </div>
     <div className='nav-link' >
       <NavLink to='/projects' activeClassName='nav-link-active' >GitHub</NavLink>
     </div>
     
    <div>
      {dynamicLink('/resume', "Resume")}
    </div>

     {props.loggedInStatus ==='LOGGIN_SUCCESS' ?  dynamicLink('/manager','Portfolio Manager') : null}
     
     
    
     </div>
     <div className='right-side'>
           {props.isMobile ? null : <div>Aseani Miller </div>}
        {props.loggedInStatus === 'LOGGIN_SUCCESS' ? <a onClick={handleSignOut}> <FontAwesomeIcon icon="sign-out-alt"/></a> : null }

     </div>


  </div>
    )


    }

export default withRouter(Navi);