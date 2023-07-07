import React, { useState, useEffect, /*useMemo*/ } from 'react';

const WaterDrop = () => {
    const [dropPosition, setDropPosition] = useState([]);
    
    const getRandomPosition = () => {
        const x = Math.floor(Math.random() * 1920);
        const y = Math.floor(Math.random() * 3300);
        const size = Math.floor(Math.random() * 3) + 3;
        return { left: x, top: y, width: size, height: size };
    };

    useEffect(() => {
        const positions = [...Array(( (200) ))].map(() => getRandomPosition());
        setDropPosition(positions);
    }, []);
    
    // const memoizedDropPosition = useMemo(() => {
    //     return [...Array(200)].map(() => getRandomPosition());
    // }, []);

    // useEffect(() => {
    //     setDropPosition(memoizedDropPosition);
    // }, [memoizedDropPosition]);

    return (
        <div className="water_drops_container">
            {dropPosition.map((position) => (
                <div
                    className="water_drop"
                    id={`${position.left}-${position.top}-${position.width}-${position.height}`}
                    key={`${position.left}-${position.top}-${position.width}-${position.height}`}
                    style={{ ...position }}
                ></div>
            ))}
        </div>
    );
};

export default WaterDrop;