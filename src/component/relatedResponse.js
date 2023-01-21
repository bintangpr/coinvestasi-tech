const RelatedResponse = (props) => {
    const date = new Date(props.date)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(date)
    const open = () => window.open(props.url)
    return(
        <button className="w-full mb-8 text-center " onClick={open}>
            <div className="w-max bg-whiteBone">
                <p className="text-left r bg-whiteGrey rounded-3xl font-inter font-medium text-xs px-2 py-1">{props.theme}</p>
            </div>
            <h2 className="font-poppins font-semibold text-sm my-2 text-left">{props.title}</h2>
            <p className="font-inter font-semibold text-xs text-greyHeadline text-left">{`${props.author} · ${formattedDate}` }</p>
        </button>
    )
}

export default RelatedResponse