import React, { useContext } from 'react'
import { CursorAnimationContext } from '../../App'


const AboutMainText = ({bubbleClickHandler}) => {

    const { animateCursor, handleCursorEnter, handleCursorLeave } = useContext(CursorAnimationContext);

    return (
        <div className='main_text'>
            <div className='main_text_first'>안녕하세요.</div>
            <div className='main_text_second_wrap'>
                <div className='main_text_second cursor_pointer' onMouseMove={animateCursor} onClick={ () => { handleCursorEnter(); bubbleClickHandler(); } } onMouseLeave={ handleCursorLeave}>
                    <span className='animate_cursor'>프론트엔드 개발자</span>
                </div>
                <div>를 꿈꾸는</div>
            </div>
            <div className='main_text_third'>이태윤입니다.</div>
        </div>
    )
}

export default AboutMainText