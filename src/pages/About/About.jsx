import React from 'react';
import './About.scss';
import AboutMain from '../../components/About/AboutMain';
import AboutOverView from '../../components/About/AboutOverView';
import AboutSkill from '../../components/About/AboutSkill';

const About = () => {
    return (
        <div className='About'>
            <AboutMain/>
            <AboutOverView/>
            <AboutSkill/>
        </div>
    )
}

export default About