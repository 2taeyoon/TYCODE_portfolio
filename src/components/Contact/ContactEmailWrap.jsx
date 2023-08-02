import React from 'react'
import { useCursorAnimation } from '../../App';

const ContactEmailWrap = ({title, email, link}) => {
    const { animateCursor, handleCursorEnter, handleCursorLeave } = useCursorAnimation();

    return (
        <a href={link} target='_blank' rel='noopener noreferrer' className='cursor_pointer' onMouseMove={animateCursor} onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}>
            <div className='animate_cursor'>
                <div className='contact_email_title'>{title}</div>
                <div className='contact_email'>{email}</div>
            </div>
        </a>
    )
}

export default ContactEmailWrap