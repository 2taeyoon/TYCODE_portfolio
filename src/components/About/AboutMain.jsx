import React, { useState } from 'react'
import AboutMainText from './AboutMainText';
import AboutKeyframe from './AboutKeyframe';
import WaterDrop from './WaterDrop';


const AboutMain = () => {

    const [showAddBubble, setShowAddBubble] = useState([]);

    const bubbleClickHandler = () => {
        const bubbleArray = Array(5).fill(true); // 5개의 요소를 가진 배열 생성
        setShowAddBubble([]);
    
        bubbleArray.map((_, index) => {
            setTimeout(() => { setShowAddBubble((bubble) => [...bubble, true]); }, index * 500);
            return null;
        });
    };
    
    return (
        <div className='main_wrap'>
            <WaterDrop/>
            { showAddBubble.map((bubble, index) => ( <AboutKeyframe key={index} showAddBubble={bubble} /> ))}
            <AboutMainText bubbleClickHandler={bubbleClickHandler}/>
        </div>
    )
}

export default AboutMain;