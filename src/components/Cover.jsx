import React from "react";
import PropTypes from 'prop-types';
import './cover.css';

function Cover({title, backgroundImage }) {
    return (
        <div className="cover" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <h1>{title}</h1>
        </div>
    );
};

Cover.propTypes = {
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired
};

export default Cover;