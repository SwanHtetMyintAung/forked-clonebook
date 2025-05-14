'use client'
import React, { useState } from 'react'
import { User, Video, Image, Smile } from 'lucide-react'
import Link from 'next/link'

//modals
import  PostUploadModal  from './Modals/PostUploadModal'


export default function StatusBox() {
  const [showUploadModal,setShowUploadModal] = useState(false)
  const ToggleUploadModal = () =>{
    const overlay = document.getElementById("overlay");
    if(!showUploadModal){
      overlay?.classList.remove("hidden")
    }else{
      overlay?.classList.add("hidden")
    }
    setShowUploadModal(prev => !prev)
  }



  return (
    <>
    <div className='status-box w-full shadow-md mt-8 rounded-2xl '>
      <div className='first-section p-1 flex flex-row items-center'>
        
          {/* <User className='w-8 h-8 rounded-4xl border-1 mx-3'/> */}
        <img className='w-10 h-10 rounded-4x1 border-1 mx-2 pfp' src="/mypfp.jpg"></img>
        <button onClick={ToggleUploadModal} className='bg-gray-100 rounded-3xl w-full text-start px-4 h-8'>What's on your mind , User? </button>
      </div>
        <hr className='w-11/12 mx-auto text-gray-300'></hr>
      <div className='second-section flex flex-row justify-center'>
        <div className="status-activity">
          <img width="24" height="24" src="/fb-video-icon.png"></img><p>Live Video</p>
        </div>
        <div className="status-activity">
        <img width="24" height="24" src="/fb-image-icon.png"></img><p>Photo/video</p>
        </div>
        <div className="status-activity">
        <img width="24" height="24" src="/fb-smile-icon.png"/><p>Feeling/activity</p>
        </div>
      </div>
    </div>
      {showUploadModal && <PostUploadModal toggleUploadModal={ToggleUploadModal}/>}
    </>
  )
}


export function PfIcon() {
  return (
    <>
      {/* <a aria-label="Soe Thi Ha's Timeline" class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1q0g3np x87ps6o x1lku1pv x1a2a7pz x78zum5 x1emribx" href="https://www.facebook.com/profile.php?id=100077793423530" role="link" tabindex="0"><div class="html-div xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd"><div class="x1rg5ohu x1n2onr6 x3ajldb x1ja2u2z"><svg aria-hidden="true" class="x3ajldb" data-visualcompletion="ignore-dynamic" role="none" style="height: 40px; width: 40px;"><mask id="«r26o»"><circle cx="20" cy="20" fill="white" r="20"></circle></mask><g mask="url(#«r26o»)"><image x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xlink:href="https://scontent.xx.fbcdn.net/v/t39.30808-1/494725964_703116392291469_4066282531775240103_n.jpg?stp=c769.0.1080.1080a_cp0_dst-jpg_s40x40_tt6&amp;_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=e99d92&amp;_nc_ohc=0SKCRVx0fQwQ7kNvwFhHokx&amp;_nc_oc=AdkZR0yIZUUr1RomBqWcpt_XJbdc_zFSWNsttojxIi5vqkgE5AWlzgLS5T8RsLMSbFU&amp;_nc_zt=24&amp;_nc_ht=scontent.xx&amp;_nc_gid=oSfmVVlUxvOoWQ2lRJzw1Q&amp;oh=00_AfKiq23Uxts4sj9wawZjqyseZMdDbWdMGtBkEVtiegBjrg&amp;oe=6822544C" style="height: 40px; width: 40px;"></image><circle class="xbh8q5q x1pwv2dq xvlca1e" cx="20" cy="20" r="20"></circle></g></svg></div></div><div class="x1ey2m1c xds687c x17qophe xg01cxk x47corl x10l6tqk x13vifvy x1ebt8du x19991ni x1dhq9h xzolkzo x12go9s9 x1rnf11y xprq8jg" role="none" data-visualcompletion="ignore" style="inset: 0px;"></div></a> */}
    </>
  )
}