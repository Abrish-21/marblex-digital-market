
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import SideGallary from './SideGallary';

export default function PositionDemo() {
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);

    return (
        <div className="card">
            <div className="">
                <button className='size-10' onClick={()=>setVisibleRight(true)}>
                    <img src="src/assets/icons/hamburger.svg" alt="" />
                </button>

                {/* <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
                <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} /> */}

            </div>
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
            <div className="flex scale-[80%]">
                <img id="logo-icon" src="src/assets/icons/logo.svg" alt="logo" />
                <h1 className="font-serif text-gray-950">Marblex</h1>
            </div>

                <p className="line-clamp-2 font-playwrite pl-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="grid grid-cols-[30fr_30fr_30fr] grid-rows-[4rem_4rem] mt-6 border-2 gap-5 border-orange-400 p-6">
                    <SideGallary img="src\assets\icons\stones\stone1.svg" />
                    <SideGallary img="src\assets\icons\stones\stone5.svg" />
                    <SideGallary img="src\assets\icons\stones\stone2.svg" />
                    <SideGallary img="src\assets\icons\stones\stone3.svg" />
                    <SideGallary img="src\assets\icons\stones\stone4.svg" />
                    <SideGallary img="src\assets\icons\stones\stone1.svg" />
              
                </div>
                <div className="justify-center ml-10 mt-4 font-playwrite text-3xl text-gray-950">
                    <p>Thank You</p>
                    <img src="src\assets\icons\brands\smile-svgrepo-com.svg" alt="" className='mt-4 animate-bounce  size-20 ml-14'/>
                </div>  </Sidebar>

            <Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                <h2>Top Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

        </div>
    )
}
        