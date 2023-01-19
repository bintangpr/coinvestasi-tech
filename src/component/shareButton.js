import React from 'react';

const ShareButton = (props) =>{
    return(
        <div className='h-9 w-22 flex items-center justify-center gap-0.5 rounded border border-blueBorder'>
            <img className='w-4 h-4' src={props.src} alt={props.alt}/>
            <p className='font-inter font-medium text-sm'>{props.text}</p>
        </div>
    )
}

export default ShareButton