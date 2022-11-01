import React from 'react';

export const GifSearchItem = ({ title , url }) => {
    
    return (
        <div className="ct-card animate__animated animate__fadeIn">
            <img className='card-gif-img' src={ url } alt={ title } />
            <h5 className='card-gif-title'>{ title }</h5>
        </div>
    )
}
