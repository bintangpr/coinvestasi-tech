import React from 'react';
import CoinvestasiLogo from '../aset/CoinvestasiLogo.svg'
import Dropdown from '../aset/chevron-down.svg'
import SearchIcon from '../aset/magnifier.svg'
import Hamburger from '../aset/hamburger.svg'

function navbar(){
    return(
        <div className="flex justify-center bg-white sticky inset-x-0 top-0 z-30 ">
            <div className="h-24 w-11/12 flex justify-between items-center" >
                {/* lOGO -> Bitcoin (DD) - Aplikasi (DD) - Blockchain - Defi (DD) - NFT (DD) - Acara -> icon search - Beli bitcoin sekarang */}
                <img src={CoinvestasiLogo} alt="Logo Coinvestasi" className='w-44'/>
                {/* option */}
                <div className='justify-start gap-6  font-poppins font-medium text-base leading-6 mx-10 h-10 hidden lg:flex'>
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
                <div className='w-62 flex items-center hidden lg:flex'>
                    <img src={SearchIcon} className='w-5 h-5 mr-4' alt='search icon' />
                    <div className='bg-yellow h-14 w-full flex items-center justify-center rounded'>
                        <p className='text-white font-inter font-medium text-base text-center px-6'>Beli Bitcoin Sekarang</p>
                    </div>
                </div>
                <button className='m-4 block lg:hidden'>
                    <img src={Hamburger} alt='hamburg icon' className='w-6 h-6'/>
                </button>
            </div>
        </div>
    );
}

export default navbar;