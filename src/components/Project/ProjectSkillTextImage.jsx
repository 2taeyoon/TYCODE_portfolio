import React from 'react'

const ProjectSkillTextImage = ({skillIcons}) => {
    const { backgroundColor, icon, text } = skillIcons;
    return (
        <div className='project_skill_bg' style={{ background: backgroundColor }}>
            <div className='project_skill_image' style={{ background: `url('./image/projectIcon/${icon}.svg') no-repeat center center / cover` }}></div>
            <div className='project_skill_name'>{text}</div>
        </div>
    )
}

export default ProjectSkillTextImage