import { convertToRaw } from 'draft-js';
import React from 'react';

//react redux router
export default function() {
  return (<div className="about-container">


    
  <div className="img-container"
  style={{
    background: 'url('  + 'https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/2ea22e06-984f-405a-89d7-3a14a1d73765-bWFpbi1uLW4tMC0wLTAtNjQwLTk2NA%3D%3D.jpg' + ')',
    backgroundSize:'cover',
    backgroundPosition:'center'
  }}
  >
    
    Photo Credit: Lisa Keating's Studio 
    </div>
    

    <div className="text-container">
       <div className='text-wrapper'>
       
       <p>
         Born in Jamaica came to America at the age of 9, my journey to becoming a software engineer was not a
         normal one. The moment I left highschool I went straight into acting, while I was acting I was keeping up with tech in my free 
         time. On one of my random reading escapades I discovered Tesla and the type of technology they were working on. At that 
         moment everything changed for me and a small passion for tech was slowly brewing till it became too hard to ignore and that's 
         how I ended up here, hoping I can contribute little that I have to humanity.
 
      </p>
      </div>

    </div>
      







  </div> )
}