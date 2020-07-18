import React from 'react';
import smallLogo from './images/arepa.min.svg'


export default function Subscribe() {
    return (
    <div className='Subscribe'>
        <img src={smallLogo} className="App-logo" alt="logo" />
        <p className='Heading'>The Weekly Arepa</p>
        <p className='getIt'>Get it fresh in your inbox every friday</p>
        <input type="text" name="firstname" id="firstname" placeholder='First Name'/>
        <input type="text" name="lastname" id="lastname" placeholder='Last Name'/>
        <input type="email" name="email" id="email" placeholder='Email'/>
        <input type="submit"/>
    </div>
    );
}


