import SideHeadline from "../component/sideHeadline"
import Related from "./related"
import Topik from "./topik"

function Sidebar(){
    return(
        // for add sidebar to sticky sticky inset-y-0 right-0
    <div className="w-1/4 h-max flex flex-col gap-y-6 ">
        <div className="ml-6">
            <SideHeadline headline="This is A Heading Example Of the Leads Sticky"  
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
            button="Lorem ipsum dolor" />
        </div>
        <Related />
        <Topik />
    </div>
    )
}

export default Sidebar