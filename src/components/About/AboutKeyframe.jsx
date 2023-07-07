import React from 'react'

const AboutKeyframe = ({showAddBubble}) => {
    return (
        <div className='about_keyframe'>
            {showAddBubble && <div className='circle_rotate'></div>}
            {showAddBubble && <div className='circle_rotate_w'></div>}
        </div>
    )
}

export default AboutKeyframe