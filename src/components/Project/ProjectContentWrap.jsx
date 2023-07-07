import React from 'react'
import ProjectContent from './ProjectContent';
import projectContentJson from '../../data/project.json'

const ProjectContentWrap = () => {
    return (
        <div className='project_content_wrap'>
            {projectContentJson && projectContentJson.project.map((item) => 
                <ProjectContent key={item.id} id={item.id} title={item.title} date={item.date} type={item.type} description={item.description} image={item.image} skill={item.skill} />
            )}
        </div>
    )
}

export default ProjectContentWrap