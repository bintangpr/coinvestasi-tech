import { article1 } from "../aset/text/article";
import Paragraph from "../component/paragraph";

function body() {
    return(
        <div className="w-full flex justify-center">
            
            <div className="w-11/12 flex gap-x-8">
                {/* ADA 2 BAGIAN RELATED DAN BODY */}   
                <div className="w-3/4">
                    <div className="ml-18">
                        {/* Create component for paragraph */}
                        <Paragraph article={article1}/>
                        <h2 className="text-2xl font-poppins font-bold mt-6 mb-2">Proses Kepemilikan</h2>
                        <div>
                            {/* Give the numbering section */}
                        </div>
                        <div className="h-123">Loren</div>
                        <div className="h-123">Loren</div>
                        <div className="h-123">Loren</div>
                        <div className="h-123">Loren</div>
                        <div className="h-123">Loren</div>
                        <div className="h-123">Loren</div>
                        <div className="h-123">Loren</div>
                    </div>
                </div>
                <div className="w-1/4 h-123 bg-sky-200 sticky">
                    Loren
                </div>
            </div>

        </div>
    )
}

export default body;