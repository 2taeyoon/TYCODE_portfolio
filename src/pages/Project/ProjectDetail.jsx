import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import './ProjectDetail.scss'
import projectDetailJson from '../../data/project.json'
import ProjectHamBtn from '../../components/Project/ProjectHamBtn';
import { CursorAnimationContext } from '../../App'
import ProjectDetailLink from '../../components/Project/ProjectDetailLink';


const ProjectDetail = () => {
    const { id } = useParams();
    const projectFind = projectDetailJson.project.find(item => item.id === id);

    const { animateCursor, handleCursorEnter, handleCursorLeave } = useContext(CursorAnimationContext);

    console.log(projectFind)
    return (
        <div className='ProjectDetail'>
            <div className='detail_wrap'>
                <div className='detail_top_wrap'>
                    <ProjectHamBtn animateCursor={animateCursor} handleCursorEnter={handleCursorEnter} handleCursorLeave={handleCursorLeave}/>
                    <div className='detail_type_text'>{projectFind.type.text.toUpperCase()} PROJECT</div>
                    <div className='detail_title'>{projectFind.title}</div>
                    <ProjectDetailLink github={projectFind.detailGithub} demo={projectFind.detailDemo} animateCursor={animateCursor} handleCursorEnter={handleCursorEnter} handleCursorLeave={handleCursorLeave}/>
                    <div className='detail_Description'>{projectFind.detailDescription}</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail