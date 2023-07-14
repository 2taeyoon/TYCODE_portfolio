import React, { useEffect, useRef, useState } from 'react'
import { fetchComments } from '../../api/firebase'
import ContactCommentForm from './ContactCommentForm';
import ContactCommentItem from './ContactCommentItem';


const ContactCommentWrap = () => {
    const [ comment, setComment ] = useState([]);
    const labelRef = useRef();
    const contactCommentItemRef = useRef();

    useEffect(()=>{
        fetchComments((commentsList)=>{
            setComment(commentsList);
            contactCommentItemRef.current.scrollTop = 0;
        });
    },[]);

    const commentFile = (event) => {
        const file = event.target.files[0]; // 내가 선택한 첫번째 파일을 객체 형태로 가져옴
        const fileReader = new FileReader(); // 파일 리더기 객체 생성
        fileReader.onload = (load) => { // 파일 리더기가 로드되었을 때 실행되는 함수
            const imageUrl = load.target.result; // 로드된 파일의 Url
            labelRef.current.style.background = `url(${imageUrl}) no-repeat center center / cover`;
        };
        fileReader.readAsDataURL(file); // 내가 선택한 첫번째 파일의 객체의 Url을 문자열로 읽어라
    }


    return (
        <div className='contact_comment_wrap'>
            <ContactCommentForm commentFile={commentFile} labelRef={labelRef}/>
            <ul className='contact_comment_item' ref={contactCommentItemRef}>
                { comment && comment.map((commentItem, index)=>
                    ( <ContactCommentItem key={index} commentItem={commentItem}/> )
                )}
            </ul>
        </div>
    )
}

export default ContactCommentWrap