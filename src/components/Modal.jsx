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
                    {project.gallery && (
                        <div className="modal-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', marginBottom: '20px' }}>
                            {project.gallery.map((img, i) => (
                                <img key={i} src={img} alt={`${project.title} gallery ${i}`} style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
                            ))}
                        </div>
                    )}
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
