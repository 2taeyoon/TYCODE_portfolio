import React from 'react'

const ProjectDetailLink = ({github, demo, animateCursor, handleCursorEnter, handleCursorLeave}) => {
    return (
        <div className='detail_link_wrap'>
            <div onMouseMove={animateCursor} onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}>
                <a className='animate_cursor' href={github} target='_blank' rel='noopener noreferrer'>Github</a>
            </div>
            <div onMouseMove={animateCursor} onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}>
                <a className='animate_cursor' href={demo} target='_blank' rel='noopener noreferrer'>Demo</a>
            </div>
        </div>
    )
}

export default ProjectDetailLink