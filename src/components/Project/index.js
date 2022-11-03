import React from "react";
import './index.css';

const Project = (props) => {
    return (
        <>
            <div className="project">
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
            </div>
        </>
    );
}
export default Project;