import React from 'react'; 

function FeatureBox(props) {
  return (
    <div className='a-box'>
      <div class='a-b-img'>
        <img src={props.img} alt=''/>
      </div>
      <div className='a-b-text'>
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, est?</p>
      </div>
    </div>
  )
}

export default FeatureBox;
