import React, { useContext, useState, useEffect } from 'react'
import { CursorAnimationContext } from '../../../App'
import './Header.scss'
import HeaderLogo from './HeaderLogo'
import HeaderList from './HeaderList'
import HamBtn from './HamBtn'
import HeaderHamList from './HeaderHamList'
//import WaterDrop from '../../About/WaterDrop'


const Header = ({location}) => {

    const { animateCursor, handleCursorEnter, handleCursorLeave } = useContext(CursorAnimationContext);

    const [scrollY, setScrollY] = useState(0);
    const [hamBtn, setHamBtn] = useState(false);

    const hamBtnHandler = () => {
        setHamBtn(!hamBtn);
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const locationClassName = location.pathname === '/project' || location.pathname === '/contact' ? 'other_pages' : '';

    return (
        <>
            <header className={`header ${scrollY !== 0 ? 'active' : ''} ${hamBtn ? 'on' : ''} ${locationClassName}`}>
                { !hamBtn && <HeaderLogo animateCursor={animateCursor} handleCursorEnter={handleCursorEnter} handleCursorLeave={handleCursorLeave} /> }
                <ul className='header_nav'>
                    { !hamBtn && <HeaderList animateCursor={animateCursor} handleCursorEnter={handleCursorEnter} handleCursorLeave={handleCursorLeave} /> }
                </ul>
                <HamBtn animateCursor={animateCursor} handleCursorEnter={handleCursorEnter} handleCursorLeave={handleCursorLeave} hamBtnHandler={hamBtnHandler} hamBtn={hamBtn} />
                <div className={`ham_wrap ${hamBtn ? 'active' : ''}`}>
                    <ul className='ham_menu'>
                        <HeaderHamList hamBtnHandler={hamBtnHandler} animateCursor={animateCursor} handleCursorEnter={handleCursorEnter} handleCursorLeave={handleCursorLeave}/>
                    </ul>
                    {/* <WaterDrop/> */}
                </div>
            </header>
        </>
    )
}

export default Header