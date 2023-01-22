import React from 'react';
import ArrowRight from '../aset/arrow-drop-right.svg'
import timer from '../aset/timer.svg'

const PageInformation = (props) => {
    const showPage = props.info.map((item, index) => {
        return <div key={index} className={ index === props.info.length -1 ? "text-greyText flex w-32 xs:w-40 sm:w-auto" : "text-bluePage flex"} >
            <div className={index === 0 ? "" :'w-6 h-6'}>
                {index === 0 ? "" : <img src={ArrowRight} className='w-6 h-6 sm:mr-2' alt='right arrow' />}
            </div> 
            <p className={index === props.info.length -1 ? "truncate text-ellipsis w-1/2 sm:w-auto" : ""}>{item}</p> 
            </div>;
      });

   
    return(
        <div className='w-11/12 flex justify-between flex-col lg:flex-row h-11 my-6 h-fit lg:h-auto'>
            <div className='flex justify-left font-inter text-xs sm:text-sm font-medium w-full'>
                {showPage}
            </div>
            <div className='w-fit md:w-38 lg:w-40 p-3 bg-whiteGrey rounded-timer flex gap-0.5'>
                <img className='w-5 h-5' src={timer} alt='Timer' />
                <div className='w-full'>
                    <p className='font-inter text-sm font-medium'>{props.time + " min read"}</p>
                </div>
                
            </div>
        </div>
    )
}

export default PageInformation