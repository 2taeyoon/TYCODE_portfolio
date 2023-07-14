import React from 'react'
import { useCursorAnimation } from '../../App'
import ProjectHamBtn from './ProjectHamBtn'
import ProjectDetailLink from './ProjectDetailLink'

const ProjectDetailTop = ({projectFind}) => {
    const { animateCursor, handleCursorEnter, handleCursorLeave } = useCursorAnimation();
    const { type, title, } = projectFind;
    const { detailGithub, detailDemo } = projectFind.detail;
    return (
        <div className='detail_top_wrap'>
            <ProjectHamBtn animateCursor={animateCursor} handleCursorEnter={handleCursorEnter} handleCursorLeave={handleCursorLeave} />
            <div className='detail_type_text'>{type.text.toUpperCase()} PROJECT</div>
            <div className='detail_title'>{title}</div>
            <div className='detail_link_wrap'>
                <ProjectDetailLink github={detailGithub} demo={detailDemo} animateCursor={animateCursor} handleCursorEnter={handleCursorEnter} handleCursorLeave={handleCursorLeave} />
            </div>
        </div>
    )
}

export default ProjectDetailTop