'use client'
import {useRef,useEffect} from "react"
import { X, User, Users, TriangleIcon } from "lucide-react"

interface PostUploadModalProps {
  toggleUploadModal: () => void; 
}



export default function PostUploadModal({ toggleUploadModal }: PostUploadModalProps){
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const handleClickOutside = (event:MouseEvent) =>{
      if(modalRef.current && !modalRef.current.contains(event.target as Node)){
        toggleUploadModal()
      }
    }
    document.addEventListener("mousedown",handleClickOutside)

    return () =>{
      document.removeEventListener("mousedown",handleClickOutside)  
    }
  },[])
  return(
    
      <div className='card z-100 fixed w-[42.5vw]  top-20 w- mx-auto bg-white rounded-xl shadow-xl' ref={modalRef}>
        <div className='card-header flex relative align-center justify-center px-4 border-gray-200  py-2'>
          <h2 className="font-bold text-center"> Create post</h2>
          <X onClick={toggleUploadModal} className=' bg-gray-300 rounded-3xl absolute right-2'/>
        </div>
        <div className='card-body bg-inherit px-4'>
          <div className="flex flex-rows items-center px-4">
              <User className="border-1 border-gray-300 rounded-3xl w-10 h-10 mt-2"/>
              <div className="mx-4">
                  <h3 className="font-bold">UserName Sucks</h3>
                  <button className="w-26 font-bold bg-gray-200 rounded-sm flex items-center justify-around h-6">
                  <Users fill="black" className="w-4 h-4"/>
                  Friends
                  <TriangleIcon fill="black" className="rotate-180 mt-1 w-2 h-2"/>
                  </button>
              </div>

          </div>
          <textarea rows={3}  className="my-4 outline-0 w-full resize-none" placeholder="What's On Your Mind, User?"/>
        </div>
        <div className='card-footer w-[98%] mx-auto py-2'>
          <button onClick={toggleUploadModal} className="w-full h-8 text-center text-white bg-blue-500 rounded-md">Post</button>
        </div>
      </div>
  )
}