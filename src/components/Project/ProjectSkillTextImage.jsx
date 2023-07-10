import React from 'react'

const ProjectSkillTextImage = ({skillIcons, projectFind}) => {
    const { backgroundColor, icon, text } = skillIcons;
    return (
        <div className='project_skill_bg' style={{ padding: `${projectFind ? '7px 15px' : '3px'}`, background: !projectFind && backgroundColor }}>
            { !projectFind && <div className='project_skill_image' style={{ background: `url('./image/projectIcon/${icon}.svg') no-repeat center center / cover` }}></div> }
            <div className='project_skill_name' style={{ paddingLeft: `${!projectFind && '10px'}` }}>{text}</div>
        </div>
    )
}

export default ProjectSkillTextImage