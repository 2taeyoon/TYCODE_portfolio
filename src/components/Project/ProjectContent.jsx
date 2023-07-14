import React from 'react'
import { Link } from 'react-router-dom'
import { useCursorAnimation } from '../../App'
import ProjectSkillWrap from './ProjectSkillWrap';


const ProjectContent = ({ id, title, date, type, description, image, skill }) => {
    const { animateCursor, handleCursorEnter, handleCursorLeave } = useCursorAnimation();
    const { backgroundColor, text } = type;
    return (
        <Link to={id}  className="project_link cursor_pointer" onMouseMove={animateCursor} onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave} onClick={handleCursorLeave}>
            <div className='project_content animate_cursor'>
                <div className='project_title'>{title}</div>
                <div className='project_date_type'>
                    <div className='project_date'>{date}</div>
                    <div className='project_type' style={{ background: backgroundColor }}>{text}</div>
                </div>
                <div className='project_discription'>{description}</div>
                <div className='project_image' style={{ background: `url('./image/projectImage/${image}.jpg') no-repeat center center / cover` }}></div>
                <ProjectSkillWrap skill={skill}/>
            </div>
        </Link>
    )
}

export default ProjectContent