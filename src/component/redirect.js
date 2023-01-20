const Redirect = (props) =>{
    const open = () => window.open(props.url)
    return(
        <button className="w-full my-4 flex border border-boxLinear justify-between hover:pointer-events-auto" onClick={open}>
            <div className="m-6 ">
                <p className="font-inter font-semibold text-base text-blueRedirect">{props.title}</p>
                <p className="mt-2 font-inter font-medium text-xs text-left">{props.showUrl}</p>
            </div>
            <img src={props.img} alt={props.alt} className="float-right h-24 w-42"/>
        </button>
    )
}

export default Redirect