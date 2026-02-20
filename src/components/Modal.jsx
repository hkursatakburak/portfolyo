import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, project }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    <h2>{project.title}</h2>
                    <p className="modal-tagline">{project.summary}</p>
                </div>
                <div className="modal-body">
                    {project.image && <img src={project.image} alt={project.title} className="modal-image" />}
                    <p className="modal-description">{project.description}</p>
                    {project.result && (
                        <p className="modal-result"><strong>Result:</strong> {project.result}</p>
                    )}
                    <div className="modal-technologies">
                        {project.technologies && project.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
