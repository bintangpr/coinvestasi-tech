import React from 'react';
import ArrowRight from '../aset/arrow-drop-right.svg'
import timer from '../aset/timer.svg'

const PageInformation = (props) => {
    return(
        <div className='w-11/12 flex justify-between flex-col lg:flex-row h-11 my-6 h-fit lg:h-auto'>
            <div className='inline-flex justify-left font-inter text-xs sm:text-sm font-medium'>
                {props.info.map((page, index) => {
                    return (
                    <React.Fragment key={index}>
                        <span className={index === props.info.length -1 ? "text-greyText truncate text-ellipsis" : "text-bluePage"}>{page}</span>
                        {index !== props.info.length - 1 && <img src={ArrowRight} alt="arrow" className="w-6 h-6" />}
                    </React.Fragment>
                    );
                })}
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