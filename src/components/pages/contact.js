import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function() {
    return ( <div className='contact-container'>
         <div className='left-column'
         style={{
             background: 'url(' + 'https://images.assetsdelivery.com/compings_v2/yupiramos/yupiramos1606/yupiramos160613301.jpg' + ')',
             backgroundSize: 'cover',
             backgroundPosition:'center',
             filter:'brightness(50%)'

         }}
         >
          
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