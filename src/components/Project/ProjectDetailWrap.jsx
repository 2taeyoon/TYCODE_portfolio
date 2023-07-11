import React from 'react'
import { useParams } from 'react-router-dom';
import projectDetailJson from '../../data/project.json'
import ProjectDetailTop from './ProjectDetailTop';
import ProjectDtailMiddle from './ProjectDetailMiddle';
import ProjectDtailBottom from './ProjectDtailBottom';


const ProjectDetailWrap = () => {
    const { id } = useParams();
    const projectFind = projectDetailJson.project.find(item => item.id === id);

    return (
        <div className='detail_wrap'>
            <ProjectDetailTop projectFind={projectFind}/>
            <ProjectDtailMiddle projectFind={projectFind}/>
            <ProjectDtailBottom projectFind={projectFind}/>
        </div>
    )
}

export default ProjectDetailWrap