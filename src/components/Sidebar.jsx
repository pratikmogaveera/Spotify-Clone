import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri'
import { logo, logo_mobile } from '../assets'
import { links } from "../assets/constants";
import { ListItem } from "@material-ui/core";
import { HiOutlineMenu } from "react-icons/hi";


const Sidebar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    const NavLinks = ({ handleclick }) => {
        return (
            <div className="mt-10 text-red-700">
                {links.map((link) =>
                (
                    <NavLink
                        key={link.name}
                        className='flex flex-row justify-start items-center my-8 text-md font-semibold text-gray-400 hover:text-cyan-100'
                        to={link.to}
                        onClick={() => handleclick && handleClick()}
                    >
                        <link.icon className='w-6 h-6 mr-2' />
                        {link.name}
                    </NavLink>
                ))
                }
            </div>
        )

    }
    return (
        <>
            <div className='lg:flex hidden  flex-col w-[200px] py-10 px-4 bg-[#000000] text-white'>
                <img src={logo} alt='logo' className='w-full h-14 object-contain'></img>
                <NavLinks />
            </div>

            <div className="absolute md:hidden block top-6 right-3 z-10 text-2xl">
                {mobileMenuOpen ? 
                (<RiCloseLine className='w-8 h-8 text-white mr-2' onClick={()=>setMobileMenuOpen(false)}/>) :
                (<HiOutlineMenu className='w-8 h-8 text-white mr-2' onClick={()=>setMobileMenuOpen(true)}/>)}
            </div>

            <div className={`abosulute top-0 h-screen w-2/3 bg-[#000000] backdrop-blur-lg z-10 p-6 smooth-transition ${mobileMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
                <img src={logo_mobile} alt='logo-mobile' className='w-full h-14 object-contain'></img>
                <NavLinks handleclick={() => setMobileMenuOpen(false)}/>
            </div>
        </>
    )
}

export default Sidebar;
