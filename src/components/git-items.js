import React from 'react';



const GitItems = (props) => {
    const {
        name,
        language  
    } = props.data;
 

    return (
        <div className='git-wrapper' >
        <a href={'https://github.com/seandmiller/' + name} > 
        <h1> {name} <i className="fab fa-github-square "></i>  </h1>

        <h3> Language : {` <${language}/>`}</h3>

        
          </a>
        </div>
    )
}

export default GitItems;