import quote from '../aset/quote.svg'
const Quotation = (props) => {
    return(
        <div className="my-4 flex">
            <div className="m-2 bg-gradient-to-b from-firstOrange to-secondOrange w-1 h-auto float-left ">
                {/* Bar oren */}
            </div>
            <div className="m-2 bg-whiteBone">
                {/* box quote */}
                <div className="m-6">
                    <img src={quote} alt="quote" className='w-12 h-12' />
                    <p className='my-4 font-inter font-quote italic'>
                        {props.quote}
                    </p>
                    <p className='font-inter font-quote italic'>{"-"+props.writer}</p>
                </div>
            </div>
        </div>
    )
}

export default Quotation