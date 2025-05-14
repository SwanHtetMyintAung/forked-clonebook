import {useState,useRef,useEffect} from 'react'
import {ThumbsUp} from 'lucide-react'

interface CommentProps {
  onClose : ()=>void;
  postLiked : boolean;
  handleThumbsUp : ()=>void;
}

export default function PostCommentModal({onClose,postLiked,handleThumbsUp}:CommentProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const handleClickOutside = (event:MouseEvent) =>{
      if(modalRef.current && !modalRef.current.contains(event.target as Node)){
        onClose()
      }
    }
    document.addEventListener("mousedown",handleClickOutside)

    return () =>{
      document.removeEventListener("mousedown",handleClickOutside)  
    }
  },[])
  return (
    <div ref={modalRef} className=' fixed h-[80vh] w-[42.5vw] top-20 z-100 mx-auto bg-white shadow-lg' >
      <div className='flex border-b border-gray-300'>
        <p className='mx-auto my-2'>Comments</p>
          <ThumbsUp className="m-2" fill={postLiked ? "rgb(8, 102, 255)" : "transparent"} stroke={postLiked ? "none" : "currentColor"} onClick={handleThumbsUp}/>
      </div>
      <div>
        <Comment/>
      </div>
    </div>
  )
}

function Comment(){
  const [textEllipse, setTextEllipse] = useState(true);
      const toggleTextEllipse = () =>{
          setTextEllipse(prev=>!prev)
      }
  return(
    <div className='rounded-xl shadow-md mx-4 mt-2 bg-gray-200'>
      <div className='flex p-4 items-center'>
        <img className='w-8 h-8 rounded-4xl border-1' src="/mypfp.jpg" alt="user"/>
        <p className='font-bold ml-2'>User Name</p>
      </div>
      <p className={`w-full px-3 ${textEllipse && "comment-text-ellipse"}`} 
      onClick={toggleTextEllipse}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia a aspernatur quasi fuga voluptates odit ut blanditiis maiores aliquid commodi similique asperiores corporis saepe quis, distinctio suscipit sequi facere!
        Fugit, neque esse exercitationem quas unde eos alias minus quos suscipit delectus obcaecati fuga asperiores magnam ad perferendis. Iure illo veniam itaque quod commodi placeat, error quia ea earum pariatur!
      </p>
      
    </div>
  )
}