import CoinvestasiLogo from '../aset/CoinvestasiLogo.svg'
import Dropdown from '../aset/chevron-down.svg'

function navbar(){
    return(
        <div className="flex justify-center">
            <div className="bg-sky-500 h-24 w-11/12 flex justify-between" >
                {/* lOGO -> Bitcoin (DD) - Aplikasi (DD) - Blockchain - Defi (DD) - NFT (DD) - Acara -> icon search - Beli bitcoin sekarang */}
                <img src={CoinvestasiLogo} alt="Logo Coinvestasi" className='w-44'/>
                {/* option */}
                <div className='bg-sky-200 flex justify-start gap-6  font-poppins font-medium text-base leading-6 mx-10'>
                    {/* TAMBAH ON CLICK SETIAP OPSI dan on hover setiap DD */}
                    <div className='Opsi-1 mx-2 flex' >
                        <p>Bitcoin</p>
                        <img src={Dropdown} alt="DD" className='w-5 h-5'/>
                    </div>
                    <div className='Opsi-1 mx-2 flex' >
                        <p>Bitcoin</p>
                        <img src={Dropdown} alt="DD" className='w-5 h-5'/>
                    </div>
                    <div className='Opsi-1 mx-2 flex' >
                        <p>Bitcoin</p>
                        <img src={Dropdown} alt="DD" className='w-5 h-5'/>
                    </div>
                    <div className='Opsi-1 mx-2 flex' >
                        <p>Bitcoin</p>
                        <img src={Dropdown} alt="DD" className='w-5 h-5'/>
                    </div>
                    <div className='Opsi-1 mx-2 flex' >
                        <p>Bitcoin</p>
                        <img src={Dropdown} alt="DD" className='w-5 h-5'/>
                    </div>
                </div>
                <img src={CoinvestasiLogo} alt="Logo Coinvestasi" className='w-44'/>
            </div>
        </div>
    );
}

export default navbar;