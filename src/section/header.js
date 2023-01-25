import PageInformation from "../component/pageInformation";
import ShareButton from "../component/shareButton";
import facebook from "../aset/facebook.svg"
import twitter from "../aset/twitter.svg"
import link from "../aset/link.svg"
import headerPic from "../aset/bitcoinVsSaham.svg"

function header(){
    const info = [ "Home",  "Berita" , "Bitcoin","Bitcoin VS Saham Mana Yang Lebih Untung?"];
    return(
        <div className="w-full iniheader my-6 lg:m-0">
            <div className="justify-center hidden lg:flex">
                <PageInformation info={info} time="5"/>     
            </div>
            <div className="flex flex-col-reverse lg:flex-row mb-10">
                <div className="lg:absolute lg:z-10 w-full lg:w-5/11 lg:bg-gradient-to-r lg:from-boxLinear lg:via-secondBoxLinear/[.58] lg:to-upperBoxLinear lg:h-123 shadow-bigbox items-center justify-center flex ">
                    <div className="w-11/12 lg:w-80 px-4 lg:px-0 rounded lg:rounded-none ">
                    <div className="block lg:hidden w-full ">
                        <PageInformation info={info} time="5"/> 
                    </div>
                        <div className="mb-4">
                            <p className="font-inter font-semibold text-sm text-blueText">BITCOIN</p>
                            <h1 className="my-2 font-poppins font-bold text-h1">Bitcoin VS Saham, Mana Yang Lebih Untung?</h1>
                            <p className="font-inter text-sm font-medium text-greyHeadline">User · Rabu, 19 January 2021</p>
                        </div>
                        <div className="flex gap-x-2">
                            <ShareButton src={facebook} alt="logo FB" text="Share" />
                            <ShareButton src={twitter} alt="logo TW" text="Share" />
                            <ShareButton src={link} alt="link" text="Copy" />
                        </div>
                    </div>
                </div>
                <div className="justify-center w-full block lg:flex bg-gray-9 lg:bg-white">
                    <div className="w-full static h-full flex flex-row-reverse items-center lg:relative lg:w-11/12 lg:h-123">
                        <img className="w-full h-auto  lg:z-20 lg:right-20 lg:w-1/2 lg:h-80  lg:relative" src={headerPic} alt="bitcoin vs saham"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default header;