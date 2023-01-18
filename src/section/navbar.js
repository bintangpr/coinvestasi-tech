import CoinvestasiLogo from '../aset/CoinvestasiLogo.svg'
import Dropdown from '../aset/chevron-down.svg'
import SearchIcon from '../aset/magnifier.svg'

function navbar(){
    return(
        <div className="flex justify-center">
            <div className="h-24 w-11/12 flex justify-between items-center" >
                {/* lOGO -> Bitcoin (DD) - Aplikasi (DD) - Blockchain - Defi (DD) - NFT (DD) - Acara -> icon search - Beli bitcoin sekarang */}
                <img src={CoinvestasiLogo} alt="Logo Coinvestasi" className='w-44'/>
                {/* option */}
                <div className='flex justify-start gap-6  font-poppins font-medium text-base leading-6 mx-10 h-10'>
                    {/* TAMBAH ON CLICK SETIAP OPSI dan on hover setiap DD */}
                    <div className='Opsi-1 mx-2 flex items-center' >
                        <p>Bitcoin</p>
                        <img src={Dropdown} alt="DD" className='w-5 h-5'/>
                    </div>
                    <div className='Opsi-1 mx-2 flex items-center' >
                        <p>Aplikasi</p>
                        <img src={Dropdown} alt="DD" className='w-5 h-5'/>
                    </div>
                    <div className='Opsi-1 mx-2 flex items-center' >
                        <p>Blockchain</p>
                    </div>
                    <div className='Opsi-1 mx-2 flex items-center' >
                        <p>Defi</p>
                        <img src={Dropdown} alt="DD" className='w-5 h-5'/>
                    </div>
                    <div className='Opsi-1 mx-2 flex items-center' >
                        <p>NFT</p>
                        <img src={Dropdown} alt="DD" className='w-5 h-5'/>
                    </div>
                    <div className='Opsi-1 mx-2 flex items-center' >
                        <p>Acara</p>
                    </div>
                </div>
                <div className='w-62 flex items-center'>
                    <img src={SearchIcon} className='w-5 h-5 mr-4' alt='search icon' />
                    <div className='bg-yellow h-14 w-full flex items-center justify-center rounded'>
                        <p className='text-white font-inter font-medium text-base text-center'>Beli Bitcoin Sekarang</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default navbar;