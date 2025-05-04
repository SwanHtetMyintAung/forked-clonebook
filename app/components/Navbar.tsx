import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Search, Home, Bell, Video, User, Store, Users, MessageCircle, Settings } from 'lucide-react';
export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo-container h-10/12 flex  rounded-2xl mx-6">
          <Image className='mr-3' src="/facebook-logo.png" width="50" height="50" alt="facebook logo"/>
          <div className='input-container flex flex-row items-center justify-start bg-gray-200 mr-4  w-56 rounded-full'>
            <Search className='absolute m-2'/>
            <input className='border-0 w-/12 h-10/12 ml-8 rounded-full focus:outline-0 pl-2 caret-transparent' type='text' placeholder="search facebook"></input>

          </div>
        </div>
        <ul className="navbar-items-container w-4/12 mr-6/12 ml-[10%]">
          <li className="navbar-item navbar-active"><Link href="/"><Home/></Link><hr className='navbar-hr'/></li>
          <li className="navbar-item"><Link href="/"><Bell/></Link><hr className='navbar-hr'/></li>
          <li className="navbar-item"><Link href="/"><Video/></Link><hr className='navbar-hr'/></li>
          <li className="navbar-item"><Link href="/"><Users/></Link><hr className='navbar-hr'/></li>
        </ul>
        <ul className="navbar-items-container absolute right-0 w-2/12 mr-4 ">
          <li className="navbar-item"><button><Store/></button></li>
          <li className="navbar-item"><button><MessageCircle/></button></li>
          <li className="navbar-item"><button><Settings/></button></li>
          <li className="navbar-item"><button><User/></button></li>
        </ul>
      </nav>
  )
}
