"use client"
import React, { useState } from 'react'
import { Earth, X, MoreHorizontal,ThumbsUp, MessageCircle, ArrowDownLeft} from 'lucide-react'
export default function Post() {
    const [textEllipse, setTextEllipse] = useState(true);
    const toggleTextEllipse = () =>{
        setTextEllipse(prev=>!prev)
    }
  return (
    <div className='post-card w-full mt-6 shadow-2xl'>
        <div  className='post-card-header w-full flex flex-row relative'>
            <div className='post-card-profile h-10 w-10 my-2'>
                <img className='w-full h-full rounded-4x1  mx-2 pfp' src="/mypfp.jpg"></img>
            </div>
            <div className='post-card-details mx-4'>
                <h2 className='font-bold'>Random Name</h2>
                <p  className='font-medium'>2h  <Earth className='inline w-6 h-6 pb-1'/></p>
            </div>
            <div className='post-card-utility flex flex-row absolute right-3 top-4'>
                <MoreHorizontal/>
                <X/>
            </div>

        </div>
        <div className='post-card-body '>
            <div className={`post-card-text w-9/12 mx-2 ${textEllipse && "text-ellipse"}` }onClick={toggleTextEllipse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sed reprehenderit laborum beatae odit. Voluptatum consequuntur odit eum corrupti, assumenda porro ipsa sapiente consequatur illum id ducimus perferendis? Molestiae, consequuntur?
            Odit doloremque ratione sequi quidem nostrum! Fugit hic dignissimos, nam temporibus porro quidem impedit? Omnis, eius reiciendis expedita maiores autem voluptas vero eos distinctio nobis, unde inventore! Nihil, voluptatum eum.
            Possimus a labore omnis nemo quis aperiam error voluptas ipsa perspiciatis commodi ex totam, provident alias culpa perferendis nulla laborum non vero, vel veniam. Libero, fuga labore! Dolorum, sequi corporis.
            Quisquam impedit vero nemo hic voluptate officiis quaerat eos optio labore consequuntur repudiandae id blanditiis voluptates nam, et eveniet. Minima doloremque minus ad facere esse officiis reprehenderit laborum sed totam!
            Natus qui aperiam velit perferendis. Nesciunt, soluta dolore officiis omnis tenetur nihil dolores aspernatur suscipit possimus modi perferendis, sed enim quas, ducimus molestiae dolorum illum fugiat nostrum. Harum, ipsa non.
            Et voluptatum dolor saepe harum pariatur iste perferendis quis quod ab laudantium maxime soluta dolorem, officia perspiciatis voluptatem molestias ducimus eos odio optio! Facilis nemo illum officiis neque laudantium cupiditate!
            Excepturi adipisci natus voluptates ratione corrupti, voluptas saepe numquam unde beatae vero error sit, quaerat similique deleniti temporibus a laboriosam quo, nulla odio? Inventore nemo quos saepe deleniti, aliquid alias.
            Quod minus molestiae aliquid libero quia tenetur laudantium iste ipsam beatae, perspiciatis recusandae enim iusto magnam ut tempore fugit minima est? Autem minima quidem alias similique, culpa a officiis laborum?
            Labore quo et vel doloremque? Omnis facere error est dolor numquam quis. Nam cumque quo libero veniam tempora doloribus deleniti impedit quia, eligendi ad sint, animi sed. Recusandae, excepturi repellat.
            Reiciendis, consectetur? Quas deserunt iure, inventore ad ea aperiam repudiandae mollitia minus deleniti incidunt iste accusantium, laboriosam adipisci beatae tempore quae distinctio iusto dignissimos optio possimus veniam corrupti! Et, nesciunt.</div>
            <div className='post-card-image-container'>
                <img src="/ryou.jpg" className='w-full h-full' alt="post image"/>
            </div>

        </div>
        <div className='post-card-footer'>
            <div>React and Shits</div>
            <hr className='bg-gray-100 w-full  opacity-70'/>
            <div className="post-card-activity-container flex justify-around">
                <div className='post-card-activity'>
                   <ThumbsUp/> 
                   <p>Like</p>
                </div>
                <div className='post-card-activity'>
                   <MessageCircle className='transform-[scaleX(-1)]'/> 
                   <p>Comment</p>
                </div>
                <div className='post-card-activity'>
                   <ArrowDownLeft className='rotate-180'/> 
                   <p>share</p>
                </div>
            </div>
        </div>
    </div>
  )
}
