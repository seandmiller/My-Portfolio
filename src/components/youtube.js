import React from 'react'; 
import axios from 'axios';


const YouTube = (props) => {
  axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet')
        .then(response => console.log(response))
        .catch(error => console.log(error))

  return (
      <div> Coming soon! </div>
  )



}
export default YouTube;