import React from 'react'

const ProjectDetailLink = ({ github, demo, animateCursor, handleCursorEnter, handleCursorLeave }) => {
    return (
            [github, demo].map((item, index) => (
                <a key={index} className='detail_link_item cursor_pointer' href={item} target='_blank' rel='noopener noreferrer' onMouseMove={animateCursor} onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}>
                    <div className='animate_cursor'>{ index === 0 ? 'Github' : 'Demo' }</div>
                </a>
            ))
    )
}

export default ProjectDetailLink