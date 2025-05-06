'use client'
import React, {useState} from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Search, Home, Bell, Video, User, Store, Users, MessageCircle, Settings } from 'lucide-react';

const navbarItemsData = [
  { icon: Home, url: "/" },
  { icon: Bell, url: "/notifications" },
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
    <li onClick={onClick} className={`navbar-item ${Active && "navbar-active"}`}><Link className='w-full h-full' href={url} >
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
    <nav className="navbar">
        <div className="logo-container h-10/12 flex  rounded-2xl mx-6">
          <Image className='mr-3' src="/facebook-logo.png" width="50" height="50" alt="facebook logo"/>
          <div className='input-container flex flex-row items-center justify-start bg-gray-200 mr-4  w-56 rounded-full'>
            <Search className='absolute m-2'/>
            <input className='border-0 w-/12 h-10/12 ml-8 rounded-full focus:outline-0 pl-2 caret-transparent' type='text' placeholder="search facebook"></input>

          </div>
        </div>
        <ul className="navbar-items-container w-4/12 mr-6/12 ml-[10%]">
          {navbarItemsData.map((item, index) => (
            <NavbarItem
              key={index}
              item={{ icon: <item.icon />, url: item.url }}
              Active={activeIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
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
