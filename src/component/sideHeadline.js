const SideHeadline = (props) => {
    return(
        <div className="w-full bg-boxLinear">
            <div className="p-6 w-fit">
                <div className="font-inter mb-4 ">
                    <h2 className="font-bold text-base mb-1">{props.headline}</h2>
                    <p className="font-medium text-sm text-greyHeadline">{props.text}</p>
                </div>
                
                    <button className="w-full py-4 px-10.5 text-center bg-blue-600 text-white">
                        {props.button}
                    </button>
            
            </div>
        </div>
    )
}

export default SideHeadline