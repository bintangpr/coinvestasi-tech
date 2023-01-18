import PageInformation from "../component/pageInformation";

function header(){
    const info = [ "Home",  "Berita" , "Bitcoin","Bitcoin VS Saham Mana Yang Lebih Untung?"];
    return(
        <div className="w-full">
            <div className="flex justify-center">
                <PageInformation info={info} time="5"/>     
            </div>
            <div className="flex ">
                <div className="w-5/11 bg-gradient-to-r from-boxLinear/0 to-boxLinear/58 to-upperBoxLinear h-123"></div>
            </div>
           
        </div>
    );
}

export default header;