import React, { useState } from 'react';
import './Projects.css';
import { techProjects, miniProjects, socialProjects, projectsTopDescription, siteText } from '../data';
import { useLanguage } from '../context/LanguageContext';
import Modal from './Modal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const { language } = useLanguage();

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
                    <h2 className="section-title">{siteText.sections.projects[language]}</h2>
                    <p className="section-subtitle">{projectsTopDescription[language]}</p>
                </div>

                <div className="project-category fade-in">
                    <h3 className="category-title">{siteText.sections.techProjects[language]}</h3>
                    <div className="projects-grid">
                        {techProjects.map((project) => (
                            <div
                                key={project.id}
                                className="project-card tech-card"
                                onClick={() => openModal(project)}
                            >
                                {project.badge && (
                                    <div className="project-badge">{project.badge[language] || project.badge}</div>
                                )}
                                {project.image && (
                                    <div className="card-image-wrapper">
                                        <img src={project.image} alt={project.title[language]} className="card-image" />
                                        <div className="card-overlay">
                                            <span>{siteText.ui.viewProject[language]}</span>
                                        </div>
                                    </div>
                                )}
                                <div className="card-content">
                                    <h4>{project.title[language]}</h4>
                                    <p>{project.summary ? project.summary[language] : project.description[language]}</p>
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
                    <h3 className="category-title">{siteText.sections.miniProjects[language]}</h3>
                    <div className="projects-grid mini-grid">
                        {miniProjects.map((project) => (
                            <div key={project.id} className="project-card mini-card" onClick={() => openModal(project)}>
                                {project.badge && (
                                    <div className="project-badge">{project.badge[language] || project.badge}</div>
                                )}
                                {project.image && (
                                    <div className="card-image-wrapper">
                                        <img src={project.image} alt={project.title[language]} className="card-image" />
                                        <div className="card-overlay">
                                            <span>{siteText.ui.viewProject[language]}</span>
                                        </div>
                                    </div>
                                )}
                                <div className="card-content">
                                    <h4>{project.title[language]}</h4>
                                    <p>{project.description[language]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="project-category fade-in mt-5">
                    <h3 className="category-title">{siteText.sections.socialProjects[language]}</h3>
                    <div className="projects-grid">
                        {socialProjects.map((project) => (
                            <div key={project.id} className="project-card social-card" onClick={() => openModal(project)}>
                                {project.badge && (
                                    <div className="project-badge">{project.badge[language] || project.badge}</div>
                                )}
                                {project.image && (
                                    <div className="card-image-wrapper">
                                        <img src={project.image} alt={project.title[language]} className="card-image" />
                                        <div className="card-overlay">
                                            <span>{siteText.ui.viewProject[language]}</span>
                                        </div>
                                    </div>
                                )}
                                <div className="card-content">
                                    <h4>{project.title[language]}</h4>
                                    <p>{project.description[language]}</p>
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
