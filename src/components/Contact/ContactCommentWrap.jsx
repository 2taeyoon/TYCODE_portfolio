import React, { useEffect, useRef, useState } from 'react'
import { handleCommentSubmit, fetchComments } from '../../api/firebase'

const ContactCommentWrap = () => {
    const [ comment, setComment ] = useState([]);
    const labelRef = useRef();

    useEffect(()=>{
        fetchComments((commentsList)=>{
            setComment(commentsList);
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
            <form className='contact_comment_form' onSubmit={ (event) => handleCommentSubmit(event, labelRef) }>
                <input id='comment_file' type='file' onChange={commentFile}/>
                <label
                    htmlFor='comment_file'
                    className='comment_file_label'
                    ref={labelRef}
                    style={{ background: `url('./image/contactImage/noProfile0.png') no-repeat center center / cover` }}>
                </label>
                <input
                    id='contact_comment'
                    type='text'
                    placeholder='댓글을 남겨주세요!'
                    onFocus={ (event) => {event.target.placeholder = ''} }
                    onBlur={ (event) => {event.target.placeholder = '댓글을 남겨주세요!'} }/>
                <button id='contact_comment_submit' type='submit'>작성</button>
            </form>
            <ul className='contact_comment_item'>
                { comment && comment.map((commentItem, index)=>
                    ( <li key={index}>
                        <div className='contact_comment_item_image' style={{ background: `${commentItem.image} no-repeat center center / cover` }}></div>
                        <div className='contact_comment_item_date'>{commentItem.dateTime}</div>
                        <div className='contact_comment_item_comment'>{commentItem.comment}</div>
                    </li> )
                )}
            </ul>
        </div>
    )
}

export default ContactCommentWrap