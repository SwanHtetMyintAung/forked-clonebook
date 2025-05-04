'use client'
import React from 'react';
import { User, Users, Clock11Icon, Bookmark, Video, CreditCard, Calendar, MoveDownIcon, MoveUpIcon} from 'lucide-react';
import Link from 'next/link'



export default function SidebarItems(){
    const [hidden,setHidden] = React.useState(true);
    function toggleHidden():void{
        setHidden(prev => !prev)
    }
    return(
        <ul className="sidebar-items-container mt-4">
                <li className="sidebar-item">
                <Link className="sidebar-link" href="/"><User/><p>Dummy</p></Link>
                </li>
                <li className="sidebar-item">
                <Link className="sidebar-link" href="/"><Users/><p>Friends</p></Link>
                </li>
                <li className="sidebar-item">
                <Link className="sidebar-link" href="/"><Clock11Icon/><p>Memories</p></Link>
                </li>
                <li className="sidebar-item">
                <Link className="sidebar-link" href="/"><Bookmark/><p>Saved</p></Link>
                </li>
                <li className="sidebar-item">
                <Link className="sidebar-link" href="/"><Users/><p>Groups</p></Link>
                </li>
                <li className="sidebar-item">
                <Link className="sidebar-link" href="/"><Video/><p>Video</p></Link>
                </li>
                <li className="sidebar-item">
                <Link className="sidebar-link" href="/"><CreditCard/><p>Feeds</p></Link>
                </li>
                <li className="sidebar-item">
                <Link className="sidebar-link" href="/"><Calendar/><p>Events</p></Link>
                </li>
                {!hidden && (
                    <>
                    <li className="sidebar-item">
                    <Link className="sidebar-link" href="/"><User/><p>Dummy</p></Link>
                    </li>
                    <li className="sidebar-item">
                    <Link className="sidebar-link" href="/"><Users/><p>Friends</p></Link>
                    </li>
                    <li className="sidebar-item">
                    <Link className="sidebar-link" href="/"><Clock11Icon/><p>Memories</p></Link>
                    </li>
                    <li className="sidebar-item">
                    <Link className="sidebar-link" href="/"><Bookmark/><p>Saved</p></Link>
                    </li>
                    <li className="sidebar-item">
                    <Link className="sidebar-link" href="/"><Users/><p>Groups</p></Link>
                    </li>
                    <li className="sidebar-item">
                    <Link className="sidebar-link" href="/"><Video/><p>Video</p></Link>
                    </li>
                    <li className="sidebar-item">
                    <Link className="sidebar-link" href="/"><CreditCard/><p>Feeds</p></Link>
                    </li>
                    <li className="sidebar-item">
                    <Link className="sidebar-link" href="/"><Calendar/><p>Events</p></Link>
                    </li>
                    </>
                )}
                <li className="sidebar-item">
                <Link className="sidebar-link" href="#" onClick={toggleHidden}>{
                    hidden ? (<><MoveDownIcon/><p>See More</p></>) : (<><MoveUpIcon/><p>See Less</p></>)
                }</Link>
                </li>
                <hr className='w-full mx-auto h-[2px] border-0 bg-gray-400'></hr>
            </ul>
    )
}