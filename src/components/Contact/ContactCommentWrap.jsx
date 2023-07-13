import React, { useEffect, useState } from 'react'
import { handleCommentSubmit, fetchComments } from '../../api/firebase'

const ContactCommentWrap = () => {
    const [ comment, setComment ] = useState([]);

    useEffect(()=>{
        fetchComments((commentsList)=>{
            setComment(commentsList);
            //console.log('comment',comment)
        });
    },[]);
    
    return (
        <div className='contact_comment_wrap'>
            <form onSubmit={handleCommentSubmit}>
                <input id='comment_file' type='file'/>
                <label htmlFor='comment_file' className='comment_file_label'>파일라벨</label>
                <input id='contact_comment' type='text'/>
                <button id='contact_comment_submit' type='submit'>작성</button>
            </form>
            <ul>
                { comment && comment.map((commentItem, index)=>
                    ( <li key={index}>
                        <div>{commentItem.dateTime}</div>
                        <div>{commentItem.comment}</div>
                    </li> )
                )}
            </ul>
        </div>
    )
}

export default ContactCommentWrap