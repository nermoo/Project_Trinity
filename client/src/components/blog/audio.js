import React from 'react';
import axios from 'axios';

const Audio=()=>{
    return(
        <audio controls>
          <source src='http://localhost:5000/audio/aravinda.wav' type="audio/mpeg"/>
          Your browser does not support the audio element.
        </audio>
    );
}

export default Audio;