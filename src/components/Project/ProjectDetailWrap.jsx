import React from 'react'
import { useParams } from 'react-router-dom';
import projectDetailJson from '../../data/project.json'
import ProjectDetailTop from './ProjectDetailTop';
import ProjectMiddle from './ProjectMiddle';
//import aa from './image/projectImage/81675.jpg'

const ProjectDetailWrap = () => {
    const { id } = useParams();
    const projectFind = projectDetailJson.project.find(item => item.id === id);

    return (
        <div className='detail_wrap'>
            <ProjectDetailTop projectFind={projectFind}/>
            <ProjectMiddle projectFind={projectFind}/>
            <div style={{ width: '60%', paddingBottom: '30%', background: ' url(/image/projectImage/project_detail04.jpg) no-repeat center center / cover' }} />
        </div>
    )
}

export default ProjectDetailWrap