import React, {Component} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "userName":"",
            "pwd": "",
            errorText:""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange =this.handleChange.bind(this);
    }

    handleSubmit(event) {
        axios.post("https://api.devcamp.space/sessions",
                       {client: { 
                           "email": this.state.userName,
                            "password":this.state.pwd}
                        
                        
                        },
                          {
                              withCredentials:true
                          }


        ).then(response => {
            if (response.data.status === 'created') {
                this.setState({
                    errorText:""
                }) 
                this.props.handleSuccessfulAuth();
            
            } 
            else {
                this.setState({errorText:"Incorrect password"})
                this.props.handleUnSuccessfulAuth();
                
            }
            console.log(response)
        }).catch(error => {
            this.setState({errorText:"An error has occured" })
            this.props.handleUnSuccessfulAuth();
        })
        event.preventDefault()
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText:""  
        })
    }
    render()  
           {
               return (
                   <div className='form-wrapper'>
                       <h1>Welcome Back Mr Miller.</h1>
                       <h5>{this.state.errorText}</h5>

                       <form onSubmit={this.handleSubmit}>
                          <div className='form-group'> 
                          <FontAwesomeIcon icon='envelope'/>
                           <input type='email'
                                  name="userName"
                                  placeholder="Input userName"
                                  value={this.state.userName}
                                  onChange={this.handleChange}/> 
                           </div>
                          <div className='form-group'>
                              <FontAwesomeIcon icon='lock'/>
                           <input type='password'
                                  name="pwd"
                                  placeholder="Enter Password"
                                  value={this.state.pwd}
                                  onChange={this.handleChange}/>

                           </div>
                           
                               <button type="submit" >Login</button>
                               
                               
                       </form>
                   </div>
               )
           }
}