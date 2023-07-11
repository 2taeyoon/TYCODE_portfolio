import React from 'react'
import ProjectSkillTextImage from './ProjectSkillTextImage'

const ProjectDtailMiddle = ({ projectFind }) => {
    return (
        <div className='detail_middle_wrap'>
            <div className='detail_Description'>{projectFind.detail.detailDescription}</div>
            <div className='project_skill_wrap'>
                {projectFind.skill.map((skillStack) =>
                    Object.keys(skillStack).map((item) => (
                        <div className='project_skill' key={item}>
                            {skillStack[item].map((skillIcons) => (
                                <ProjectSkillTextImage key={skillIcons.icon} skillIcons={skillIcons} projectFind={projectFind} />
                            ))}
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default ProjectDtailMiddle