import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



export default class GitItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            copyText:""
        }

    this.handleCopyText = this.handleCopyText.bind(this)
    }

  handleCopyText(text) {
    navigator.clipboard.writeText(text)
    this.setState({
        copyText:'Success'
    })
    
    
  }  
    
    render() {
    const {
        name,
        language,
        clone_url  
    } = this.props.data;
 

    return (
        <div className='git-wrapper' onMouseLeave={() => {this.setState({copyText:""})}} >
        <a href={'https://github.com/seandmiller/' + name} > 
        <h1> {name} <i className="fab fa-github-square "></i>  </h1>

        <h3> Language : {` <${language}/>`}</h3>

        
        
          </a>
          
       
        
          <div className='clone-url' onClick={() => this.handleCopyText(clone_url)}>  { this.state.copyText === 'Success' ?
           <h2> Copied <FontAwesomeIcon icon='clipboard-check'/> </h2> :
            <h2> Clone URL <FontAwesomeIcon icon='clipboard' /> </h2> }  </div>
        </div>
    )
} }

