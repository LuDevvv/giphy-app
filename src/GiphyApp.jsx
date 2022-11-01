import React from 'react';
import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import { LogoComp } from './components/Logo';
import  { GifSearch }  from './components/GifSearch';
import { GifSearchItem } from './components/GifSearchItem';


const GiphyApp = () => {
    
    const [categories , setCategories] = useState(['']);

    return(
        <div className='ct-all'>
            <LogoComp />
            <AddCategory setCategories={ setCategories } />
            <GifSearchItem/>
            <ol className='allItems'>   
                { 
                    categories.map(category => (    
                        <GifSearch 
                            key={ category }
                            category={ category } 
                        /> 
                    ))
                }   
            </ol>
        </div>
    );
}

export default GiphyApp;