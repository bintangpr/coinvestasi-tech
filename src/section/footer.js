import PhotoProfile from "../aset/PhotoProfile.svg"
import Linkedin from "../aset/Linkedin.svg"
import GrayTwitter from "../aset/GrayTwitter.svg"
import Email from '../aset/Email.svg'
function Footer(){
    return(
        <div className="w-full bg-boxLinear h-auto p-14 my-10 ">
            <div className="w-full flex ">
                <img src={PhotoProfile} alt="profile" className="rounded-full w-16 h-16 mr-4 floater-left" />
                <div className="">
                    <p className="font-inter font-medium italic text-base text-greyHeadline"><span className="font-bold text-base text-blackText">Tentang penulis — User:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="mt-2 flex gap-x-3">
                        <button>
                            <img src={Linkedin} alt="Linkedin" className="w-6 h-6" />
                        </button>
                        <button>
                            <img src={GrayTwitter} alt="Linkedin" className="w-6 h-6" />
                        </button>  
                        <button>
                            <img src={Email} alt="Linkedin" className="w-6 h-6" />
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;