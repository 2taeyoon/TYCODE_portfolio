import React, { useState, useEffect } from 'react'
import { useCursorAnimation } from '../../App'


const Satellites = () => {
    
    const { animateCursor, handleCursorEnter, handleCursorLeave } = useCursorAnimation();
    const [ satelliteTops, setSatelliteTops ] = useState([]);
    const [ translateZ, setTranslateZ ] = useState('320');
    
    useEffect(() => {
        const generateRandomTops = () => {
            const minTop = -5;
            const maxTop = 5;
            const tops = Array.from({ length: 16 }, () => {
                const randomMultiplier = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
                return randomMultiplier * 10;
            });
            setSatelliteTops(tops);

            const handleResize = () => {
                const { innerWidth } = window;

                if (innerWidth > 1024) {
                    setTranslateZ(320);
                } else if (innerWidth > 768) {
                    setTranslateZ(250);
                } else if (innerWidth > 480) {
                    setTranslateZ(200);
                } else if (innerWidth > 360) {
                    setTranslateZ(150);
                }
            };

            window.addEventListener('resize', handleResize); // 윈도우 사이즈 변경 이벤트에 대한 핸들러 등록

            return () => {
                window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 핸들러 제거
            };
        };

        generateRandomTops();
    }, []);

    const getSatelliteContent = (index) => {
        if (index === 0 || index === 8) {
            return 'HTML';
        } else if (index === 1 || index === 9) {
            return 'CSS';
        } else if (index === 2 || index === 10) {
            return 'JavaScript';
        } else if (index === 3 || index === 11) {
            return 'Git';
        } else if (index === 4 || index === 12) {
            return 'jQuery';
        } else if (index === 5 || index === 13) {
            return 'Sass';
        } else if (index === 6 || index === 14) {
            return 'React';
        } else if (index === 7 || index === 15) {
            return 'Vue';
        }
    };

    return (
        <div className='satellites_wrap'>
            <div className='satellites'>
                {satelliteTops.map((top, index) => (
                    <div
                        key={index}
                        className='satellite'
                        style={{ top: `${top}px`, transform: `rotateY(${index * 22.5}deg) translateZ(${translateZ}px)` }}
                    >
                        <span className='cursor_pointer' onMouseMove={animateCursor} onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}>
                            <span className='animate_cursor'>
                                { getSatelliteContent(index) }
                            </span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Satellites