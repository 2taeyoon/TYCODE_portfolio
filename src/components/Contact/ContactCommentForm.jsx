import React, { useEffect, useState } from 'react'
import ContactCommentSubmit from './ContactCommentSubmit'
import { handleCommentSubmit } from '../../api/firebase'
import { useCursorAnimation } from '../../App';


const ContactCommentForm = ({ commentFile, labelRef }) => {
    const { animateNoneCursorEnter, animateNoneCursorLeave } = useCursorAnimation();
    const [ ramdomImage, setRamdomImage ] = useState(0);

    useEffect(()=>{
        setRamdomImage(Math.floor(Math.random() * 8) +1);
    },[])

    return (
        <form className='contact_comment_form' onSubmit={(event) => handleCommentSubmit(event, labelRef)}>
            <div className='contact_comment_input_wrap'>
                <input id='comment_file' type='file' onChange={commentFile} />
                <label
                    htmlFor='comment_file'
                    className='comment_file_label cursor_pointer'
                    ref={labelRef}
                    style={{ background: `url('./image/contactImage/noProfile${ramdomImage}.png') no-repeat center center / cover` }}
                    onMouseEnter={animateNoneCursorEnter} onMouseLeave={animateNoneCursorLeave}>
                </label>
                <input
                    id='contact_comment'
                    className='cursor_text cursor_pointer'
                    type='text'
                    placeholder='포트폴리오에 관련된 댓글을 남겨주세요!'
                    onFocus={(event) => { event.target.placeholder = '' }}
                    onBlur={(event) => { event.target.placeholder = '포트폴리오에 관련된 댓글을 남겨주세요!' }}
                    onMouseEnter={animateNoneCursorEnter} onMouseLeave={animateNoneCursorLeave}/>
            </div>
            <ContactCommentSubmit animateNoneCursorEnter={animateNoneCursorEnter} animateNoneCursorLeave={animateNoneCursorLeave}/>
        </form>
    )
}

export default ContactCommentForm