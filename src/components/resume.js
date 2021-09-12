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
            In this project  I created an Algorithm that detected the winner and ends the game once this condition 
            has been met.
           </p>
           <li> <h4>Image Translator </h4>  </li>
           <p>Utilizing computer vision, Pytesseract and googletrans database I was able to create an application that parse's text
               off of an image and then translate that text into a different language. While working on this project, I learned how
               capture the edges of an image using OpenCV and highlight the text in order to make it easier for Pytesseract to parse the image
           </p>
         

        

        </ul>
       <ul className='resume-work'>
        <h2>Work Experience</h2>
        <li><h4>TransDev - Autonomous Vehicle Specialist </h4></li>
        <p> During this work experience I was interacting with the Waymo self autonomous vehicles,
            my responsibilities were to log data from the vehicle, correct improper behavior and to take note 
            of anything that made me feel uncomfortable inside the vehicle.

        </p>
        <li><h4>Tesla Production Associate</h4></li>
        <p> My responsibilities were to check the vehicle for paint defects and to remove them before they exit the factory.
              My other responsibilities include, wiping the vehicle before applying paint and driving the vehicle to a desired location in the factory.

        </p>
        </ul>
        
        </div>

    </div>
    <div className='LinkedIn'> <a href='https://www.linkedin.com/in/aseani-miller-17b40918b/' target='_blank'>LinkedIn <FontAwesomeIcon icon='briefcase'/></a> </div>
    </div> )
}