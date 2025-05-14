import {useState} from 'react'
import { MessageCircle } from "lucide-react"

//modal
import PostCommentModal from '../Modals/PostCommentModal';


interface CommentProps {
    postLiked : boolean;
    handleThumbsUp : ()=>void;
  }

export default function PostComment({postLiked,handleThumbsUp}:CommentProps) {
    const [modal,setModal] = useState(false);
    const toggleModal = () =>{
        const overlay = document.getElementById("overlay");
        if(!modal){
            overlay?.classList.remove("hidden")
        }else{
            overlay?.classList.add("hidden")
        }
        setModal(prev => !prev)
    }
    return (
        <>
        <div className='post-card-activity' onClick={toggleModal}>
            <MessageCircle/>
            <p>Comment</p>
        </div>
            {modal && <PostCommentModal postLiked={postLiked} handleThumbsUp={handleThumbsUp} onClose={toggleModal}/>}
        </>
    )
}
