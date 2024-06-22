import React from 'react';
import './Project.css';

const Projects = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'Description for project one. This project does amazing things using HTML, CSS, and JavaScript.',
            link: 'https://5-oy-imtihon-ecru.vercel.app/index.html'
        },
        {
            title: 'Project Two',
            description: 'Description for project two. This project showcases my skills in React and API integration.',
            link: 'https://imtixon-psi.vercel.app/'
        },
        // Add more projects as needed
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
