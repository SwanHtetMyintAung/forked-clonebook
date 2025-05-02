import React from 'react'
import Image from "next/image";
import { Search, Home, Bell, Video, User, Store, Users, MessageCircle, Settings } from 'lucide-react';
export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo-container h-10/12 flex border-0 rounded-2xl mx-6">
          <Image className='mr-3' src="/facebook-logo.png" width="50" height="50" alt="facebook logo"/>
          <div className='input-container flex flex-row items-center justify-start bg-gray-200 mr-4  w-80 rounded-full'>
            <Search className='absolute m-2'/>
            <input className='border-0 w-10/12 h-10/12 ml-8 rounded-full focus:outline-0 pl-2 caret-transparent' type='text' placeholder="search facebook"></input>

          </div>
        </div>
        <ul className="navbar-items-container mr-20 ml-8">
          <li className="navbar-item"><Home/></li>
          <li className="navbar-item"><Bell/></li>
          <li className="navbar-item"><Video/></li>
          <li className="navbar-item"><Users/></li>
        </ul>
        <ul className="navbar-items-container absolute right-0 ">
          <li className="navbar-item"><Store/></li>
          <li className="navbar-item"><MessageCircle/></li>
          <li className="navbar-item"><Settings/></li>
          <li className="navbar-item"><User/></li>
        </ul>
      </nav>
  )
}
