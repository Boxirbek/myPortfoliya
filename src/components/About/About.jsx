import React from 'react';
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import './About.css'; // CSS faylni import qilamiz

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <p>Hello, I am a junior developer with a passion for coding and problem-solving. I enjoy learning new technologies and applying them in my projects.</p>
            <div className='aboutMe'>
                <div className='information'><TiHtml5 /></div>
                <div className='information'><FaCss3Alt /></div>
                <div className='information'><IoLogoJavascript /></div>
                <div className='information'><FaReact /></div>
                <div className='information'><FaGithub /></div>
                <div className='information'><SiVite /></div>
            </div>
        </section>
    );
}

export default About;
