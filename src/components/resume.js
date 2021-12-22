import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';





export default function() {
   

    return ( <div>
    <div className='resume-wrapper' style={{
        background:'url(' + 'https://media.istockphoto.com/photos/blue-abstract-texture-background-pattern-design-template-with-picture-id649683354?k=20&m=649683354&s=612x612&w=0&h=3oeToJneeKW1Ie5_BWI4-f-NhcA45hzAhIFlc3XDFZ0=' +')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
        
    }}>
        <div className='resume-header'> <h1>Aseani Miller</h1> 
        <a href="./Sean's_Resume.pdf" download="Aseani's Resume.pdf">
            Full Resume <FontAwesomeIcon icon='download'/> </a>  </div>
        <div className='resume-cont'>
        
        <ul  className='resume-projects'>
          <h2>Projects</h2>  
          <li> <h4>Connect four Algorithm </h4></li>
           <p>Created a Connect four game using Tkinter library for the GUI. 
            In this project I created an Algorithm that detected the winner and ends the game once this condition 
            has been met.
           </p>
           <li> <h4>Digital Enigma </h4>  </li>
           <p>With Fastapi and just regular Python, I was able to create a digital version of the Enigma Machine. A WW2 weapon used to cipher and decipher messages
                all without an Encryption and Decryption mode. In This project I learned how to post an API to the public and link my Python code with JavaScript code, here is a link 
                <a href='https://enigmasean.netlify.app/'>Link to Project</a>
           </p>
         

        

        </ul>
       <ul className='resume-work'>
        <h2>Work Experience</h2>
        <li><h4>TransDev - Autonomous Vehicle Specialist </h4></li>
        <p> During this work experience I was interacting with the Waymo self autonomous vehicles,
            my responsibilities were to log data from the vehicle, correct improper behavior and to take note 
            of anything that made me feel uncomfortable while inside the vehicle.

        </p>
        <li><h4>Tesla Production Associate</h4></li>
        <p> My responsibilities were to check the vehicle for paint defects and to remove the defects before the vehicle exit the factory.
              My other responsibilities include, wiping the vehicle before applying paint and driving the vehicle to a desired location in the factory.

        </p>
        </ul>
        
        </div>

    </div>
    <div className='LinkedIn'> <a href='https://www.linkedin.com/in/aseani-miller-17b40918b/' target='_blank'>LinkedIn <FontAwesomeIcon icon='briefcase'/></a> </div>
    </div> )
}