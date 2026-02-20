import React, { useState } from 'react';
import './Projects.css';
import { techProjects, miniProjects, socialProjects, projectsTopDescription } from '../data';
import Modal from './Modal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">{projectsTopDescription}</p>
                </div>

                <div className="project-category fade-in">
                    <h3 className="category-title">Technical Projects</h3>
                    <div className="projects-grid">
                        {techProjects.map((project) => (
                            <div
                                key={project.id}
                                className="project-card tech-card"
                                onClick={() => openModal(project)}
                            >
                                {project.image && (
                                    <div className="card-image-wrapper">
                                        <img src={project.image} alt={project.title} className="card-image" />
                                        <div className="card-overlay">
                                            <span>View Project</span>
                                        </div>
                                    </div>
                                )}
                                <div className="card-content">
                                    <h4>{project.title}</h4>
                                    <p>{project.summary}</p>
                                    <div className="card-tags">
                                        {project.technologies?.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="mini-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="project-category fade-in mt-5">
                    <h3 className="category-title">Mini / Experimental Projects</h3>
                    <div className="projects-grid mini-grid">
                        {miniProjects.map((project) => (
                            <div key={project.id} className="project-card mini-card">
                                <div className="card-content">
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="project-category fade-in mt-5">
                    <h3 className="category-title">Social & Leadership Projects</h3>
                    <div className="projects-grid">
                        {socialProjects.map((project) => (
                            <div key={project.id} className="project-card social-card">
                                {project.image && (
                                    <div className="card-image-wrapper">
                                        <img src={project.image} alt={project.title} className="card-image" />
                                    </div>
                                )}
                                <div className="card-content">
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedProject && (
                <Modal
                    show={!!selectedProject}
                    project={selectedProject}
                    onClose={closeModal}
                />
            )}
        </section>
    );
};

export default Projects;
