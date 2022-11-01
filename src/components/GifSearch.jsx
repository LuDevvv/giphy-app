import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifSearchItem } from './GifSearchItem';

export const GifSearch = ({ category }) => {
    
    const { data:images , loading } = useFetchGifs( category );  

    return (
        <div className='results-search'>
            <h3 className='result-search animate__animated animate__fadeIn'>{ category }</h3>
            
            { loading && <h3 className='load-gifs animate__animated animate__pulse animate__pulse'>Loading...</h3>}
        
            <div className='card-gif animate__animated'>
                {
                    images.map( img => (
                        <GifSearchItem 
                            key={ img.id }
                            {...img} 
                        />
                    ))
                }   
            </div>
        </div>
    );
}

