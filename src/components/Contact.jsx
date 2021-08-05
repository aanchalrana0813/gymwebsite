import React from 'react';

function Contact() {
  return (
    <div id ='contact'>
      <h1>CONTACT US</h1>
      <form>
        <input type='text' placeholder='Full name' required/>
        <input type='email' placeholder='Type your E-mail' required/>
        <textarea placeholder='Write Here...' name='message'></textarea>
      </form>
      
    </div>
  )
}

export default Contact;
