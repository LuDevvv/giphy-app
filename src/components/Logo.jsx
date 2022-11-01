import React from 'react';
import Logo from '../assets/giphy-logo.svg';

export const LogoComp = () => {
    return(
        <div className='flex-logo'>
            <img src={ Logo } className='logo'/>
            <h2 className="title">GIPHYAPP</h2>
        </div>
    );
}

