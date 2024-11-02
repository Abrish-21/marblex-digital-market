
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import SideGallary from './SideGallary';
import stone1 from '../assets/icons/stones/stone1.svg'
import stone2 from '../assets/icons/stones/stone2.svg'
import stone3 from '../assets/icons/stones/stone3.svg'
import stone4 from '../assets/icons/stones/stone4.svg'
import stone5 from '../assets/icons/stones/stone5.svg'
import logo from '../assets/icons/logo.svg'
import smileIcon from '../assets/icons/brands/smile-svgrepo-com.svg'
import hamburger from '../assets/icons/hamburger.svg'
import NavbarElement from './NavbarElement';

export default function PositionDemo() {
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);

    return (
        <div className="card">
            <div className="">
                <button className='size-10' onClick={()=>setVisibleRight(true)}>
                    <img src={hamburger} alt="" className='lg:size-10 size-14'/>
                </button>

                {/* <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
                <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} /> */}

            </div>
            <Sidebar className='w-40 lg:w-[30%]' visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
            <div className="hidden lg:block">
                <div className="flex scale-[80%]">
                    <img id="logo-icon" src= {logo} alt="logo" />
                    <h1 className="font-serif text-gray-950">Marblex</h1>
                </div>
                    <p className="line-clamp-2 font-playwrite pl-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="grid grid-cols-[30fr_30fr_30fr] grid-rows-[4rem_4rem] mt-6 border-2 gap-5 border-orange-400 p-6">
                        <SideGallary img={stone1} />
                        <SideGallary img={stone2}/>
                        <SideGallary img={stone3} />
                        <SideGallary img= {stone4} />
                        <SideGallary img= {stone5} />
                        <SideGallary img= {stone1} />
                
                    </div>
                    <div className="justify-center ml-10 mt-4 font-playwrite text-3xl text-gray-950">
                        <p>Thank You</p>
                        <img src= {smileIcon} alt="" className='mt-4 animate-bounce  size-20 ml-14'/>
                    </div>
            </div>

            <div className="lg:hidden">
                <NavbarElement/>
            </div>

            </Sidebar>

        </div>
    )
}
        