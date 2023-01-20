function Hashtag(props){
    return(
        <div className="rounded-3xl bg-whiteBone">
                <p className="m-2 text-center font-inter font-medium text-sm text-blackText">{`#${props.tag}`}</p>
        </div>
    )
}

export default Hashtag