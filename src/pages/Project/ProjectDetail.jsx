import React from 'react'
import { useParams } from 'react-router-dom';
import './ProjectDetail.scss'
import projectDetailJson from '../../data/project.json'
import ProjectHamBtn from './ProjectHamBtn';


const ProjectDetail = () => {
    const { id } = useParams();
    const projectFind = projectDetailJson.project.find(item => item.id === id);

    console.log(projectFind)
    return (
        <div className='ProjectDetail'>
            <div className='detail_wrap'>
                <div className='detail_top_wrap'>
                    <ProjectHamBtn/>
                    <div className='detail_type_text'>{projectFind.type.text} project</div>
                    <div className='detail_title'>{projectFind.title}</div>
                    <div className='detail_link_wrap'>
                        <a href={projectFind.detailLink} target='_blank' rel='noopener noreferrer'>Github</a>
                        <a href={projectFind.detailLink} target='_blank' rel='noopener noreferrer'>Demo</a>
                    </div>
                    <div className='detail_Description'>detail_Description</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail