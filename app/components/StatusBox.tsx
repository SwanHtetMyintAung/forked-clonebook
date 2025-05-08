'use client'
import React, { useState } from 'react'
import { User, Video, Image, Smile } from 'lucide-react'
import Link from 'next/link'

//modals
import  PostUploadModal  from './Modals/PostUploadModal'


export default function StatusBox() {
  const [showUploadModal,setShowUploadModal] = useState(false)
  const ToggleUploadModal = () =>{
    console.log("click")
    setShowUploadModal(prev => !prev)
  }




  return (
    <>
    <div className='status-box w-full shadow-md mt-8 rounded-2xl'>
      <div className='first-section p-4 flex flex-row items-center'>
        <Link href="#">
          <User className='w-8 h-8 rounded-4xl border-1 mx-3'/>
        </Link>
        <button onClick={ToggleUploadModal} className='bg-gray-100 rounded-3xl w-full text-start px-4 h-8'>What's on your mind , User? </button>
      </div>
        <hr className='w-11/12 mx-auto text-gray-300'></hr>
      <div className='second-section flex flex-row justify-center'>
        <div className="status-activity">
          <Video/> <p>Live Video</p>
        </div>
        <div className="status-activity">
          <Image/><p>Photo/video</p>
        </div>
        <div className="status-activity">
          <Smile/><p>Feeling/activity</p>
        </div>
      </div>
    </div>
      {showUploadModal && <PostUploadModal toggleUploadModal={ToggleUploadModal}/>}
    </>
  )
}
