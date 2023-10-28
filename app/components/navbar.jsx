"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Menuoverlay from './menuoverlay';
import { motion } from 'framer-motion';
function Navbar() {
    const [activew,setActivew] = useState(false);

  return (
    <nav className="fixed block top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
        <div className="flex flex-wrap justify-between items-center mx-auto">
            <motion.div initial={{opacity : 0, scale:0.5}} animate = {{opacity : 1,scale:1}} transition={{duration:0.5}} class="py-5 font-bold text-3xl">
                <Link href={"/"}>
                    <span className="text-purple-500 pl-10">Port</span>folio
                </Link>
            </motion.div>
            <div >
                <div className='block md:hidden'>
                    {!activew?
                    <button onClick={()=>setActivew(true)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg></button>
                    :
                    <button onClick={()=>setActivew(false)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  </button>}
                </div>
            </div>
            <motion.div initial={{ opacity : 0, scale:0.5 }}
  animate={{ opacity : 1,scale:1 }} transition = {{duration:0.5}}>
                <ul className="hidden lg:flex items-center space-x-6 pr-10">
                    {/* <li><Link href={"#home"} class="hover:text-color-secondary ease-in duration-200">Home</Link></li> */}
                    <li><Link href="/components/about" className="hover:text-color-secondary ease-in duration-200">About me</Link></li>
                    <li><Link href="/components/project" className="hover:text-color-secondary ease-in duration-200">Projects</Link></li>
                    
                </ul>
            </motion.div>
            </div>
            {activew?<Menuoverlay/>: null}
        </nav>
  )
}

export default Navbar
