import React from 'react'
import ProjectSkillTextImage from './ProjectSkillTextImage'

const ProjectSkillWrap = ({ skill }) => {
    return (
        <div className='project_skill_wrap'>
            {skill.map((skillStack) =>
                Object.keys(skillStack).map((item) => (
                    <div className='project_skill' key={item}>
                        {skillStack[item].map((skillIcons) => (
                            <ProjectSkillTextImage key={skillIcons.icon} skillIcons={skillIcons}/>
                        ))}
                    </div>
                ))
            )}
        </div>
    )
}

export default ProjectSkillWrap

