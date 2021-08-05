import React from 'react';
import FeatureBox from './FeatureBox';
import fimage1 from '../Images/1.png';
import fimage2 from '../Images/2.png';
import fimage3 from '../Images/3.png';
import fimage4 from '../Images/4.png';

function Features() {
  return (
    <div id= 'features'>
      <h1>FEATURES</h1>
      <div className='a-container'>
        <FeatureBox image={fimage1} title="Weightlifting"/>
        <FeatureBox image={fimage2} title="training"/>
        <FeatureBox image={fimage3} title="powerlifting"/>
        <FeatureBox image={fimage4} title="lifting"/>
      </div>
    </div>
  )
}

export default Features;
