import React from 'react'
import './Footer.scss'

const Footer = ({location}) => {
    const footerClassName = location.pathname === '/project' || location.pathname === '/contact';

    return (
        <footer className={`footer ${footerClassName ? 'other_footer' : ''}`}>
            <div className='footer_text'>Copyright 2023 2taeyoon. All rights reserved.</div>
        </footer>
    )
}

export default Footer