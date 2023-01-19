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
            <div className="flex justify-center">
                <PageInformation info={info} time="5"/>     
            </div>
            <div className="flex mb-10">
                <div className="absolute z-10 w-5/11 bg-gradient-to-r from-boxLinear/0 via-secondBoxLinear/[.58] to-upperBoxLinear h-123 shadow-bigbox flex items-center justify-center">
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
                <div className="flex justify-center w-full">
                    <div className="w-11/12 relative h-123 flex flex-row-reverse">
                        <img className="w-1/2 relative z-20 " src={headerPic} alt="bitcoin vs saham"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default header;