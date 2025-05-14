"use client"
import React,{useState} from 'react'
import {ThumbsUp} from 'lucide-react'

interface Props{
  postLiked : boolean;
  handleThumbsUp : ()=> void
}

export default function PostReact({postLiked,handleThumbsUp}:Props) {
  


  return (
    <div className='post-card-activity' onClick={handleThumbsUp}>
        <ThumbsUp fill={postLiked ? "rgb(8, 102, 255)" : "transparent"} stroke={postLiked ? "none" : "currentColor"}/>
        <p>Like</p>
    </div>
  )
}
