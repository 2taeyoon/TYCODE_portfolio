import React from 'react'

const ProjectDtailBottom = ({projectFind}) => {
    const { detailImage, detailId, detailPassword } = projectFind.detail;
    return (
        <div className='detail_bottom_wrap'>
            <div className='detail_bottom_image' style={{ background: `url(/image/projectImage/${detailImage}.jpg) no-repeat center center / cover` }} />
            <div className='detail_bottom_text'>
                { detailId && <div>{detailId}</div> }
                { detailPassword && <div>{detailPassword}</div> }
            </div>
        </div>
    )
}

export default ProjectDtailBottom