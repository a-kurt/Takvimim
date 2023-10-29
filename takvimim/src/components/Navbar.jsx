import React, {useState} from 'react'
import {CgProfile} from 'react-icons/cg'
import {IoMdSettings} from 'react-icons/io'
import {AiOutlineLink} from 'react-icons/ai'
import {FaSignOutAlt} from 'react-icons/fa'
import {BiSolidChevronDown, BiSolidChevronUp} from 'react-icons/bi'

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center max-w-[1920px] text-[#252b42] h-24 px-4'>
        <h1 className='text-blue-500 font-bold text-3xl mx-auto w-full md:text-5xl'>TAKVİMİM</h1>
        <ul className='flex items-center'>
            <li className='p-4 hidden md:inline'>Ana Sayfa</li>
            <li onClick={handleNav} className={`p-4 flex items-center ${!nav ? 'text-blue-500' : ''}`}>Hesap{!nav ? <BiSolidChevronDown size={26} /> : <BiSolidChevronUp size={26} />}<CgProfile className={`ml-5 ${!nav ? 'text-blue-500' : ''}`} size={48} /></li>            
        </ul>
        <div className={!nav ? 'fixed right-0 top-4 w-48  shadow-md -z-10 ' : 'fixed top-[-100%]'}>
            <ul className='pt-20'>
                <a id='home' href='#' className='md:hidden'><li className='p-4 flex items-center hover:bg-gray-100'>Ana Sayfa</li></a>
                <a id='settings' href='#'><li className='p-4 flex items-center hover:bg-gray-100'>Ayarlar <IoMdSettings size={26} className='ml-2' /></li></a>
                <a id='share-link' href='#'><li className='p-4 flex items-center hover:bg-gray-100'>Takvim Paylaş <AiOutlineLink size={26} className='ml-2' /></li></a>
                <a id='sign-out' href='#'><li className='p-4 flex items-center hover:bg-gray-100'>Çıkış Yap <FaSignOutAlt size={26} className='ml-2' /></li></a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

// max-w-[1240px] containerin max width ayarlıyor