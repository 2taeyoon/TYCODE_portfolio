import React from 'react'
import { Link } from 'react-router-dom'

const HeaderHamList = ({hamBtnHandler, animateCursor, handleCursorEnter, handleCursorLeave}) => {
    return (
        ['ABOUT', 'PROJECT', 'CONTACT'].map((text, index) => (
            <li key={index}>
                <Link to={index === 0 ? '/' : (index === 1 ? '/project' : '/contact')} className='header_ham_list cursor_pointer' onClick={hamBtnHandler} onMouseMove={animateCursor} onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}>
                    <span className='animate_cursor'>{text}</span>
                </Link>
            </li>
        ))
)
}

export default HeaderHamList