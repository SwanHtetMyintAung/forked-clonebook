'use client'
import React, {useState} from 'react'
import Image from "next/image";
import Link from 'next/link';

import { Search, Home, Bell, Video, User, Store, Users, MessageCircle, Settings } from 'lucide-react';

const navbarItemsData = [
  { icon: HomeIcon, url: "/" },
  { icon: VideoIcon, url: "/watch " },
  { icon: Video, url: "/watch" },
  { icon: Users, url: "/friends" },
];
interface Props {
  item: { icon: React.ReactElement; url: string };
  Active?: boolean;
  onClick?: () => void; // Add onClick prop
}

const NavbarItem: React.FC<Props> = ({item: { icon, url }, Active=false, onClick})=>{
  return(
    <li onClick={onClick} className={`navbar-item ${Active && "navbar-active"}`} >
      <Link className='w-full h-full' href={url} >
      {icon }</Link>
      <hr className='navbar-hr'/>
    </li>
  )
}

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); 
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return ( 
    <nav className="navbar fixed top-0">
        <div className="hidden md:flex logo-container h-10/12   rounded-2xl mx-6">
          {/* <Image className='mr-3' src="/facebook-logo.png" width="50" height="50" alt="facebook logo"/> */}
          <Image className='mr-3' src="/2023_Facebook_icon.svg" width="50" height="50" alt="facebook logo"/>
          <div className='input-container flex flex-row items-center justify-start bg-gray-200 mr-4  w-56 rounded-full'>
            <Search className='absolute m-2'/>
            <input className='border-0 w-/12 h-10/12 ml-8 rounded-full focus:outline-0 pl-2 caret-transparent' type='text' placeholder="search facebook"></input>
          </div>
        </div>
        <ul className="flex navbar-items-container w-4/12 mr-6/12 ml-20">
          {navbarItemsData.map((item, index) => (
            <NavbarItem
              key={index}
              item={{ icon: <item.icon />, url: item.url }}
              Active={activeIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </ul>
        <ul className="hidden md:flex navbar-items-container absolute right-0 w-2/12 mr-4 mt-2">
          <li className="navbar-item"><button><Store/></button></li>
          <li className="navbar-item"><button><MessageCircle/></button></li>
          <li className="navbar-item"><button><Settings/></button></li>
          <li className="navbar-item"><button><User/></button></li>
        </ul>
      </nav>
  )
}

export function HomeIcon() {
  return(
    <>
      <svg viewBox="0 0 24 24" width="24" height="24" fill="transparent" stroke="currentColor" strokeWidth="2px" className="pxfx01vb px1lliihq px1tzjh5l px1k90msu px2h7rmj px1qfuztq hico" ><path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"></path></svg>
    </>
  )
}

export function VideoIcon() {
  return(
    <>
      <svg viewBox="0 0 24 24" width="24" height="24" fill="transparent"  stroke="currentColor"  className="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"><path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"></path><path d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"></path></svg>
    </>
  )
}
