import React from 'react'


const Hambtn = ({ animateCursor, handleCursorEnter, handleCursorLeave, hamBtnHandler, hamBtn }) => {
    return (
        <>
            <div className='ham_btn_wrap cursor_pointer' onMouseMove={animateCursor} onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave} onClick={hamBtnHandler}>
                <div className={`ham_btn header_nav_a animate_cursor ${ hamBtn ? 'active' : '' }`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    )
}

export default Hambtn