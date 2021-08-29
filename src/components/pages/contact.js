import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function() {
    return ( <div className='contact-container'>
         <div className='left-column'
         style={{
             background: 'url(' + 'https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/ac9f8d29-2f4e-4e66-ab96-92a56d13ec1a-bWFpbi1uLW4tMC0wLTAtNjQwLTk2NA%3D%3D.jpg' + ')',
             backgroundSize: 'cover',
             backgroundPosition:'center'

         }}
         >
          Photo Credit: Lisa Keating's Studio 
         </div>
         <div className='right-column' >
            <div className='contact-info' >
                <div><FontAwesomeIcon icon='envelope' /> milleraseani@gmail.com</div>
                <div><FontAwesomeIcon icon='phone'/>  (510) - 355 - 5688</div>
                <div> <FontAwesomeIcon icon='map-marked-alt'/>  Oakland CA</div>
                

            </div>
         </div>
        
    </div>)
}