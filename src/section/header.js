import PageInformation from "../component/pageInformation";
import ShareButton from "../component/shareButton";
import facebook from "../aset/facebook.svg"
import twitter from "../aset/twitter.svg"
import link from "../aset/twitter.svg"
import headerPic from "../aset/bitcoinVsSaham.svg"

function header(){
    const info = [ "Home",  "Berita" , "Bitcoin","Bitcoin VS Saham Mana Yang Lebih Untung?"];
    return(
        <div className="w-full">
            <div className="justify-center hidden lg:flex">
                <PageInformation info={info} time="5"/>     
            </div>
            <div className="flex mb-10">
                <div className="absolute z-10 w-5/11 bg-gradient-to-r from-boxLinear via-secondBoxLinear/[.58] to-upperBoxLinear h-123 shadow-bigbox items-center justify-center hidden lg:flex">
                    <div className="w-80">
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
                <div className="justify-center w-full block lg:flex">
                    <div className="w-full static h-full flex flex-row-reverse items-center lg:relative lg:w-11/12 lg:h-123">
                        <img className="w-full h-auto relative z-20 lg:right-20 lg:w-1/2 lg:h-80  lg:relative" src={headerPic} alt="bitcoin vs saham"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default header;