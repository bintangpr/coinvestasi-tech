import SideHeadline from "../component/sideHeadline"
import Related from "./related"

function Sidebar(){
    return(
    <div className="w-1/4 h-123 sticky inset-y-0 right-0 flex flex-col gap-y-6">
        <div className="ml-6">
            <SideHeadline headline="This is A Heading Example Of the Leads Sticky"  
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
            button="Lorem ipsum dolor" />
        </div>
        <Related />
        <div className="ml-6">
            <SideHeadline headline="This is A Heading Example Of the Leads Sticky"  
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
            button="Lorem ipsum dolor" />
        </div>
    </div>
    )
}

export default Sidebar