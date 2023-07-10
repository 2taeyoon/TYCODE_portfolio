import React from 'react'
import { Link } from 'react-router-dom'

const ProjectHamBtn = ({animateCursor, handleCursorEnter, handleCursorLeave}) => {
    return (
        <Link to='/project' className='detail_ham_btn' onMouseMove={animateCursor} onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}>
            <div className='cursor_pointer'>
                <div className='animate_cursor'>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </Link>
    )
}

export default ProjectHamBtn