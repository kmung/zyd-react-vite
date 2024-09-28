import React from 'react';
import PropTypes from 'prop-types';
import './VideoBox.css';

const VideoBox = ({ src, title }) => {
    return (
        <div className="video-box">
            <div className="video-container">
                <iframe
                    src={src}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                ></iframe>
            </div>
            {title && <h2 className="video-title">{title}</h2>}
        </div>
    );
};

VideoBox.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string,
};

export default VideoBox;