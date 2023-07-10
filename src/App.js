import React, { useState, createContext, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from './components/Common/Header/Header';
import './App.css';
import './pages/Keyframe.scss'
import './pages/Include.scss'
import Footer from './components/Common/Footer/Footer';


export const CursorAnimationContext = createContext();

const App = () => {

    const [ cursorPosition, setCursorPosition ] = useState({ x: 0, y: 0 });
    const [ cursorHovered, setCursorHovered ] = useState(false);
    const [ windowWidth, setWindowWidth ] = useState(false);
    
    useEffect(()=>{
        const handleResize = () => {
            if(window.innerWidth <= 768){
                setWindowWidth(false);
            } else {
                setWindowWidth(true);
            }
        }
        handleResize();

        window.addEventListener('resize', handleResize);

        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    },[windowWidth])

    const handleMouseMove = (event) => {
        if (!windowWidth) return;
        const { clientX: x, clientY: y } = event;
        setCursorPosition({ x, y });
    };

    const animateCursor = (event) => {
        if (!windowWidth) return;
        const animateCursor = event.currentTarget.querySelector('.animate_cursor');
        const { offsetX: x, offsetY: y } = event.nativeEvent;
        const { offsetWidth: width, offsetHeight: height } = event.currentTarget;

        const move = 7;
        const xMove = (x / width) * (move * 2) - move;
        const yMove = (y / height) * (move * 2) - move;

        animateCursor.style.transform = `translate(${xMove}px, ${yMove}px)`;
    };

    const handleCursorEnter = () => {
        if (!windowWidth) return;
        setCursorHovered(true);
    };

    const handleCursorLeave = (event) => {
        if (!windowWidth) return;
        const animateCursor = event.currentTarget.querySelector('.animate_cursor');
        animateCursor.style.transform = 'translate(0, 0)';
        setCursorHovered(false);
    };
    
    const cursorValue = { cursorHovered, animateCursor, handleCursorEnter, handleCursorLeave }

    const location = useLocation();
    const showHeader = location.pathname === '/' || location.pathname === '/project' || location.pathname === '/contact';
    const showFooter = location.pathname === '/' || location.pathname === '/project' || location.pathname === '/contact';

    return (
        <CursorAnimationContext.Provider value={cursorValue}>
            <div className={`App ${!windowWidth ? 'default_cursor' : ''}`} onMouseMove={ handleMouseMove }>
                { showHeader && <Header location={location}/> }
                <Outlet/>
                { windowWidth && <div className={`cursor ${cursorHovered ? 'cursor_scale' : ''}`} style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>}
                { showFooter && <Footer location={location}/> }
            </div>
        </CursorAnimationContext.Provider>
    );
}


export default App