import React from 'react';
import ArrowRight from '../aset/arrow-drop-right.svg'
import timer from '../aset/timer.svg'

const PageInformation = (props) => {
    const showPage = props.info.map((item, index) => {
        return <span key={index} className={ index === props.info.length -1 ? "text-greyText flex mr-2" : "text-bluePage flex"} >{index === 0 ? "" : <img src={ArrowRight} className='w-6 h-6 mr-2' alt='right arrow' />} {item}</span>;
      });

   
    return(
        <div className='w-11/12 flex justify-between h-11 my-6'>
            <div className='flex font-inter text-sm font-medium'>
                {showPage}
            </div>
            <div className='p-3 bg-whiteGrey rounded-timer flex gap-0.5'>
                <img className='w-5 h-5' src={timer} alt='Timer' />
                <p className='font-inter text-sm font-medium'>{props.time + " min read"}</p>
            </div>
        </div>
    )
}

export default PageInformation