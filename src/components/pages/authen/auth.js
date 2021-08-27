import React, {Component} from 'react';
import Img from '../../../../static/assets/images/login.png';
import Login from './login';

export default class extends Component {
    constructor(props) {
        super(props);


        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
        this.handleUnSuccessfulAuth = this.handleUnSuccessfulAuth.bind(this)


    }
    
    handleSuccessfulAuth() {
        this.props.handleSuccessFullLogin();
        this.props.history.push("/")
    }
    handleUnSuccessfulAuth() {
        this.props.handleUnSuccessFullLogin();
        
    }
   

    render()  {

        return (<div className='page-auth-wrapper'>
               <div className='left-side-auth'  
               style={{
                   backgroundImage:`url(${Img})`,
                   
               }}
               />
               
               
            
             <div className='right-side-auth'>
                 <Login
                 handleSuccessfulAuth={this.handleSuccessfulAuth}
                 handleUnSuccessfulAuth={this.handleUnSuccessfulAuth}
                 />
             </div>

              </div>)
    }
}