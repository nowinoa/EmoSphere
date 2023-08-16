import React from 'react';
import banner from '../assets/pexels-pavel-danilyuk-8638612.jpg'
import Login from '../components/Login';
import '../styles/login.css';


const Landing = () => {
    return (
        <div className='login'>
            <div className='left-side'>
                <img src={banner} className='img'/>
            </div>
            <div className='right-side'>
                <Login />
            </div>
        </div>
    );
}

export default Landing;
